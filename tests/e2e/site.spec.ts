import { test, expect } from "@playwright/test";
test("all routes render and invalid detail URLs return 404", async ({ page, request }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  for (const route of ["/", "/packages", "/packages/1", "/packages/5", "/destinations", "/about", "/contact", "/testimonials", "/blog", "/blog/jungle-wildlife-safari"]) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
  }
  for (const route of ["/packages/missing", "/blog/missing", "/missing"]) expect((await request.get(route)).status()).toBe(404);
  expect(errors).toEqual([]);
});
test("blog filtering, itinerary accordion and mobile navigation", async ({ page }) => {
  await page.goto("/blog", { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Temple", exact: true }).click();
  await expect(page.getByRole("link", { name: "Read More", exact: true })).toHaveCount(2);
  await page.goto("/packages/1", { waitUntil: "domcontentloaded" });
  const day = page.getByRole("button").filter({hasText: "Dambulla"});
  await day.click();
  await expect(page.getByText("Dambulla Cave Temple visit", {exact:true})).toBeVisible();
  await page.setViewportSize({width:390,height:844});
  await page.getByRole("button", {name:"Toggle Menu"}).click();
  await page.getByRole("navigation", {name:"Mobile navigation"}).getByRole("link", {name:"Book Now"}).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("navigation", {name:"Mobile navigation"})).toHaveCount(0);
});
test("reviews render and submit with pending, success and error states (mock API)", async ({page}) => {
  const reviews = [{id:"test-id",name:"Test Traveler",location:"Colombo",package:"",rating:5,comment:"A wonderful trip",date:"2026-01-01T00:00:00Z"}];
  await page.route("**/api/reviews", async route => {
    if (route.request().method() === "POST") {
      const body = route.request().postDataJSON();
      expect(body.email).toBe("traveler@example.com");
      expect(body.date).toBeUndefined();
      await route.fulfill({status:201,json:reviews[0]});
    } else await route.fulfill({json:reviews});
  });
  await page.goto("/testimonials", { waitUntil: "domcontentloaded" });
  await expect(page.getByText("Test Traveler", {exact:true})).toBeVisible();
  await page.getByLabel("Your Name", {exact:false}).fill("New Traveler");
  await page.getByLabel("Email Address", {exact:false}).fill("traveler@example.com");
  await page.getByLabel("Your Experience", {exact:false}).fill("An excellent tour");
  await page.getByRole("button", {name:"Submit Your Testimonial"}).click();
  await expect(page.getByText(/published successfully/)).toBeVisible();
  await page.unroute("**/api/reviews");
  await page.route("**/api/reviews", route => route.fulfill({status:503,json:{error:"Temporarily unavailable"}}));
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.getByText("Failed to load testimonials. Please try again later.")).toBeVisible();
});
test("review API rejects invalid data before attempting database access", async ({request}) => {
  expect((await request.post("/api/reviews",{data:{name:"",rating:8}})).status()).toBe(400);
  expect((await request.post("/api/reviews",{data:"{",headers:{"Content-Type":"application/json"}})).status()).toBe(400);
  expect((await request.post("/api/reviews",{data:"hello",headers:{"Content-Type":"text/plain"}})).status()).toBe(415);
  expect((await request.post("/api/reviews",{data:{comment:"a".repeat(33000)}})).status()).toBe(413);
});
