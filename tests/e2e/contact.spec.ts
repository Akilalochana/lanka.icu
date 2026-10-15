import {test,expect} from '@playwright/test';
test('contact form uses the server API and retains details on failure',async({page})=>{
  let fail=true;
  await page.route('**/api/contact',async route=>{
    expect(route.request().postDataJSON().email).toBe('visitor@example.com');
    await route.fulfill({status:fail?502:200,json:fail?{error:'Email is temporarily unavailable.'}:{success:true}});
  });
  await page.goto('/contact',{waitUntil:'domcontentloaded'});
  await page.getByLabel('Your Name',{exact:false}).fill('Visitor');
  await page.getByLabel('Email Address',{exact:false}).fill('visitor@example.com');
  await page.getByLabel('Your Message',{exact:false}).fill('Please send tour details.');
  await page.getByRole('button',{name:'Send Message'}).click();
  await expect(page.getByText('Email is temporarily unavailable.')).toBeVisible();
  await expect(page.getByLabel('Your Message',{exact:false})).toHaveValue('Please send tour details.');
  fail=false;
  await page.getByRole('button',{name:'Send Message'}).click();
  await expect(page.getByText(/Your message has been sent successfully/)).toBeVisible();
  await expect(page.getByLabel('Your Message',{exact:false})).toHaveValue('');
});
