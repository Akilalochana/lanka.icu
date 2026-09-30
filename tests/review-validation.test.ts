import { test } from "node:test";
import assert from "node:assert/strict";
import { validateReview } from "../src/lib/review-validation";
const valid = { name: " Alice ", email: "ALICE@example.com ", rating: 5, comment: " Great tour! " };
test("normalizes input, defaults optional fields, and ignores client IDs/dates", () => {
  assert.deepEqual(validateReview({ ...valid, id: "forged", date: "2000-01-01" }), { name: "Alice", email: "alice@example.com", rating: 5, comment: "Great tour!", location: "", package: "" });
});
test("rejects malformed objects and missing required fields", () => {
  for (const input of [null, [], "review", {}, {...valid,name:"   "}, {...valid,comment:""}, {...valid,email:"invalid"}]) assert.throws(() => validateReview(input));
});
test("rejects fractional, out-of-range and non-numeric ratings", () => {
  for (const rating of [0, 6, 2.5, "5", null, NaN]) assert.throws(() => validateReview({...valid,rating}));
});
test("enforces all field limits and types", () => {
  for (const [key, max] of Object.entries({name:100,email:254,location:150,package:150,comment:5000})) {
    assert.throws(() => validateReview({...valid,[key]:"a".repeat(max+1)}));
    assert.throws(() => validateReview({...valid,[key]:{}}));
  }
});
