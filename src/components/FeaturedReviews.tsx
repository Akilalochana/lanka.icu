"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import type { PublicReview } from "../lib/review-validation";
export default function FeaturedReviews() {
  const [reviews, setReviews] = useState<PublicReview[]>([]);
  const [status, setStatus] = useState("Loading testimonials...");
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/reviews", { signal: controller.signal, cache: "no-store" })
      .then(response => { if (!response.ok) throw new Error(); return response.json(); })
      .then((data: PublicReview[]) => { setReviews(data.slice(0, 3)); setStatus(data.length ? "" : "Be the first to share your experience."); })
      .catch(() => { if (!controller.signal.aborted) setStatus("Reviews are temporarily unavailable."); });
    return () => controller.abort();
  }, []);
  return <>{status && <p className="text-center text-neutral-600" role="status">{status}</p>}<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{reviews.map(review => <article key={review.id} className="bg-white p-6 rounded-lg shadow-card"><div className="flex mb-4" aria-label={`${review.rating} out of 5 stars`}>{[1,2,3,4,5].map(n => <Star key={n} size={18} className={n <= review.rating ? "text-warning fill-warning" : "text-neutral-300"} />)}</div><p className="text-neutral-700 mb-4 italic">{review.comment.length > 150 ? review.comment.slice(0,150) + "…" : review.comment}</p><p className="font-bold">{review.name}</p><p className="text-sm text-neutral-500">{review.location}</p></article>)}</div></>;
}
