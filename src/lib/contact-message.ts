export function validateContact(value: unknown) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid contact details.');
  const input = value as Record<string, unknown>;
  function field(key: string, max: number, required = false) {
    const raw = input[key] ?? '';
    if (typeof raw !== 'string') throw new Error(`Invalid ${key}.`);
    const text = raw.trim();
    if ((required && !text) || text.length > max || (key !== 'message' && /[\r\n]/.test(text))) throw new Error(`Please enter a valid ${key} (maximum ${max} characters).`);
    return text;
  }
  const email = field('email', 254, true);
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) throw new Error('Please enter a valid email address.');
  return { name: field('name',100,true), email, phone:field('phone',40), subject:field('subject',150), message:field('message',5000,true), package:field('package',150), travelDate:field('travelDate',30), travelers:field('travelers',30) };
}

export function contactMail(contact: ReturnType<typeof validateContact>, sender: string, recipient: string) {
  return {
    from: { name:'Travel with Prasad Website', address:sender },
    to: recipient,
    replyTo: { name:contact.name, address:contact.email },
    subject: `Website enquiry: ${contact.subject || 'New travel enquiry'}`,
    text: [
      'New enquiry from the Travel with Prasad contact form', '',
      `Name: ${contact.name}`, `Email: ${contact.email}`, `Phone: ${contact.phone || 'Not provided'}`,
      `Package: ${contact.package || 'Not specified'}`, `Travel date: ${contact.travelDate || 'Not specified'}`,
      `Travelers: ${contact.travelers || 'Not specified'}`, '', 'Message:', contact.message,
    ].join('\n'),
    disableFileAccess:true,
    disableUrlAccess:true,
  };
}
