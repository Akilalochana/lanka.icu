import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contactMail, validateContact } from '../src/lib/contact-message';
const input = {name:'Guest',email:'guest@example.com',message:'Hello\nI would like a tour.',phone:'123',subject:'Tour',package:'Custom',travelDate:'2026-12-01',travelers:'2'};
test('formats all contact details with fixed sender and recipient and visitor reply-to', () => {
  const mail = contactMail(validateContact({...input,to:'attacker@example.com'}),'owner@gmail.com','owner@gmail.com');
  assert.equal(mail.to,'owner@gmail.com'); assert.equal(mail.from.address,'owner@gmail.com');
  assert.equal(mail.replyTo.address,input.email);
  for(const value of Object.values(input)) assert.ok(mail.text.includes(value) || mail.subject.includes(value));
});
test('rejects malformed fields, header injection and oversized messages', () => {
  for(const value of [null, [], {}, {...input,email:'bad'}, {...input,name:'test\r\nBcc: other@example.com'}, {...input,subject:'test\nBcc: bad'}, {...input,message:'a'.repeat(5001)}]) assert.throws(() => validateContact(value));
});
