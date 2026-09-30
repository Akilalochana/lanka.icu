export interface ReviewInput {
  name: string;
  email: string;
  location: string;
  package: string;
  rating: number;
  comment: string;
}
export type PublicReview = Omit<ReviewInput, "email"> & { id: string; date: string };

export function validateReview(value: unknown): ReviewInput {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Please provide a review object.");
  const body = value as Record<string, unknown>;
  function field(key: string, max: number, required = false) {
    const raw = body[key];
    if (raw === undefined && !required) return "";
    if (typeof raw !== "string") throw new Error(`Invalid ${key}.`);
    const text = raw.trim();
    if ((required && !text) || text.length > max) throw new Error(`${key} must contain ${required ? '1' : '0'} to ${max} characters.`);
    return text;
  }
  const name = field("name", 100, true);
  const email = field("email", 254, true).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Please enter a valid email address.");
  if (typeof body.rating !== "number" || !Number.isInteger(body.rating) || body.rating < 1 || body.rating > 5) throw new Error("Rating must be an integer from 1 to 5.");
  return { name, email, location: field("location", 150), package: field("package", 150), rating: body.rating, comment: field("comment", 5000, true) };
}
