import { test, expect } from '@playwright/test';
test('select, remove, submit and view travel memories', async ({page}) => {
  const photo = {id:'photo-test',url:'/new_logo.jpg'};
  const review = {id:'review-test',name:'Photo Traveler',location:'Colombo',package:'',rating:5,comment:'A lovely memory',date:'2026-10-14T00:00:00Z',photos:[photo]};
  let saved = false;
  await page.route('**/api/reviews', async route => {
    if(route.request().method() === 'POST') {
      expect(route.request().headers()['content-type']).toContain('multipart/form-data');
      expect(route.request().postDataBuffer()?.toString()).toContain('name="photos"');
      saved = true; await route.fulfill({status:201,json:review});
    } else await route.fulfill({json:saved ? [review] : []});
  });
  await page.goto('/testimonials',{waitUntil:'domcontentloaded'});
  const input = page.getByLabel('Choose travel photos', {exact:true});
  await input.setInputFiles('public/new_logo.jpg');
  await expect(page.getByAltText('Selected travel photo 1')).toBeVisible();
  await page.getByRole('button',{name:'Remove photo 1'}).click();
  await expect(page.getByAltText('Selected travel photo 1')).toHaveCount(0);
  await input.setInputFiles('public/new_logo.jpg');
  await expect(page.getByAltText('Selected travel photo 1')).toBeVisible();
  await page.getByLabel('Your Name', {exact:false}).fill('Photo Traveler');
  await page.getByLabel('Email Address', {exact:false}).fill('photo@example.com');
  await page.getByLabel('Your Experience', {exact:false}).fill('A lovely memory');
  await page.getByRole('button',{name:'Submit Your Testimonial'}).click();
  await expect(page.getByText(/published successfully/)).toBeVisible();
  await page.getByRole('button',{name:'View travel photo 1 by Photo Traveler'}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.setViewportSize({width:390,height:844});
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
