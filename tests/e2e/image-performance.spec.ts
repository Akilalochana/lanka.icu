import {test,expect} from '@playwright/test';
test('home uses one responsive hero initially and lazy card images',async({page,request})=>{
  await page.setViewportSize({width:390,height:844});
  const images:string[]=[];
  page.on('request',request=>{if(request.resourceType()==='image') images.push(request.url());});
  await page.goto('/',{waitUntil:'domcontentloaded'});
  const hero=page.locator('main section').first().locator('img');
  await expect(hero).toHaveCount(1);
  await expect(hero).toHaveAttribute('fetchpriority','high');
  await expect(hero).toHaveAttribute('srcset',/640w/);
  await expect.poll(()=>hero.evaluate(img=>(img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  expect(images.some(url=>url.includes('unsplash1.svg'))).toBe(false);
  const card=page.locator('main section').nth(1).locator('img').first();
  await expect(card).toHaveAttribute('loading','lazy');
  const src=await hero.getAttribute('src');
  const response=await request.get(src!);
  expect(response.headers()['cache-control']).toContain('immutable');
  await page.screenshot({path:'test-results/home-mobile-optimized.png'});
});
