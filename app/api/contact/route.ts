import nodemailer from 'nodemailer';
import { contactMail, validateContact } from '@/src/lib/contact-message';
export const runtime = 'nodejs';
export const maxDuration = 60;

export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/json')) return Response.json({error:'Expected JSON.'},{status:415});
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return Response.json({error:'Invalid request origin.'},{status:403});
  let contact;
  try {
    const reader = request.body?.getReader();
    const chunks: Uint8Array[] = []; let size = 0;
    if (reader) while (true) {
      const {done,value} = await reader.read(); if(done) break;
      size += value.byteLength;
      if(size > 32768) { await reader.cancel(); return Response.json({error:'Message is too large.'},{status:413}); }
      chunks.push(value);
    }
    contact = validateContact(JSON.parse(Buffer.concat(chunks).toString('utf8')));
  } catch(error) {
    return Response.json({error:error instanceof SyntaxError ? 'Invalid JSON.' : error instanceof Error ? error.message : 'Invalid contact details.'},{status:400});
  }
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD?.replace(/\s/g,'');
  const recipient = process.env.CONTACT_TO_EMAIL?.trim() || 'lanka.icu@gmail.com';
  if (!user || !pass) {
    console.error('Contact SMTP is not configured. Set SMTP_USER and SMTP_PASSWORD.');
    return Response.json({error:process.env.NODE_ENV === 'development' ? 'Email is not configured yet. Add the Gmail App Password to SMTP_PASSWORD in .env.local and restart the server.' : 'Email is temporarily unavailable. Please contact us by phone or WhatsApp.'},{status:503});
  }
  const transport = nodemailer.createTransport({
    host:'smtp.gmail.com',port:465,secure:true,auth:{user,pass},
    connectionTimeout:10000,greetingTimeout:10000,socketTimeout:20000,
  });
  try {
    const result = await transport.sendMail(contactMail(contact,user,recipient));
    if (!result.accepted.length || result.rejected.length) throw new Error('Recipient rejected');
    return Response.json({success:true});
  } catch(error) {
    const code = error && typeof error === 'object' && 'code' in error ? String(error.code) : 'SEND_FAILED';
    console.error(`Contact SMTP failed: ${/^[A-Z_]+$/.test(code) ? code : 'SEND_FAILED'}`);
    const diagnostic = code === 'EAUTH' ? 'Gmail authentication failed. Check SMTP_USER and the Gmail App Password in SMTP_PASSWORD.' : 'Email could not be sent. Please try again later or contact us by phone or WhatsApp.';
    return Response.json({error:process.env.NODE_ENV === 'development' ? diagnostic : 'Email could not be sent. Please try again later or contact us by phone or WhatsApp.'},{status:502});
  } finally { transport.close(); }
}
