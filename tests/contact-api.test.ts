import {test} from 'node:test';
import assert from 'node:assert/strict';
import nodemailer from 'nodemailer';
import {POST} from '../app/api/contact/route';
test('contact API validates, handles missing config and only succeeds after SMTP acceptance', async () => {
  const oldUser=process.env.SMTP_USER,oldPass=process.env.SMTP_PASSWORD;
  const original=nodemailer.createTransport;
  const payload={name:'Test',email:'visitor@example.com',message:'Tour enquiry'};
  const request=(data:unknown)=>new Request('http://localhost/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  try {
    delete process.env.SMTP_PASSWORD;
    assert.equal((await POST(request({}))).status,400);
    assert.equal((await POST(request(payload))).status,503);
    process.env.SMTP_USER='owner@gmail.com';process.env.SMTP_PASSWORD='test-only-not-a-password';
    let sent=false,closed=false;
    nodemailer.createTransport=(() => ({sendMail:async()=>{sent=true;return {accepted:['owner@gmail.com'],rejected:[]};},close:()=>{closed=true;}})) as unknown as typeof original;
    assert.equal((await POST(request(payload))).status,200);assert.ok(sent && closed);
    nodemailer.createTransport=(() => ({sendMail:async()=>{throw Object.assign(new Error('private server details'),{code:'EAUTH'});},close:()=>{}})) as unknown as typeof original;
    const failed=await POST(request(payload));assert.equal(failed.status,502);assert.ok(!(await failed.text()).includes('private server details'));
  } finally {
    nodemailer.createTransport=original;
    if(oldUser===undefined)delete process.env.SMTP_USER;else process.env.SMTP_USER=oldUser;
    if(oldPass===undefined)delete process.env.SMTP_PASSWORD;else process.env.SMTP_PASSWORD=oldPass;
  }
});
