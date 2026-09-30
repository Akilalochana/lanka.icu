"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { PublicReview } from "../lib/review-validation";

export interface TestimonialFormData {
  name: string;
  email: string;
  location: string;
  package?: string;
  rating: number;
  comment: string;
}

const TestimonialsPage: React.FC = () => {
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: "",
    email: "",
    location: "",
    rating: 5,
    comment: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [testimonials, setTestimonials] = useState<PublicReview[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingError, setLoadingError] = useState<string>("");

    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);

  // Fetch testimonials from API
  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/reviews", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTestimonials(data);
      setLoadingError("");
    } catch (error: unknown) {
      setLoadingError("Failed to load testimonials. Please try again later.");
      console.error("Fetch testimonials error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/reviews", { cache: "no-store", signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error("Failed to load reviews"); return response.json(); })
      .then((data: PublicReview[]) => { setTestimonials(data); setLoading(false); })
      .catch(() => { if (!controller.signal.aborted) { setLoadingError("Failed to load testimonials. Please try again later."); setLoading(false); } });
    return () => controller.abort();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.comment) {
      setFormError("Please fill in all required fields");
      return;
    }

    setFormError("");
    setFormSubmitted(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to submit testimonial");
      }

      // After submit, reset form and fetch updated testimonials
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        location: "",
        rating: 5,
        comment: "",
      });

      await fetchTestimonials();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error: unknown) {
      setFormError(error instanceof Error ? error.message : "Failed to submit testimonial. Please try again.");
      console.error("Submit testimonial error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/welcometolanka.JPG)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Traveler Testimonials
          </h1>
          <p className="text-lg max-w-2xl">
            Read what our customers have to say about their Sri Lankan
            adventures
          </p>
        </div>
      </section>

      {/* Success Message */}
      {formSubmitted && (
        <div className="container mt-8">
          <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-lg">
            <p>
              Thank you for sharing your experience! Your testimonial has been
              published successfully.
            </p>
          </div>
        </div>
      )}

      {/* Loading and error for testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Authentic reviews from guests who have experienced our Sri Lankan
              tours
            </p>
          </div>

          {loading && (
            <p className="text-center text-neutral-500">
              Loading testimonials...
            </p>
          )}
          {loadingError && (
            <p className="text-center text-error">{loadingError}</p>
          )}

          {!loading && !loadingError && testimonials.length === 0 && (
            <p className="text-center text-neutral-500">
              No testimonials yet. Be the first to share your experience.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonial.rating
                          ? "text-warning fill-warning"
                          : "text-neutral-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-neutral-500">
                      {new Date(testimonial.date).toLocaleDateString("en-GB", { timeZone: "UTC" })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Testimonial Form */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-neutral-600">
                We would love to hear about your journey with Lanka.icu!
                Your feedback helps us improve and inspires other travelers.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
            >
              {formError && (
                <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-lg mb-6">
                  <p>{formError}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    maxLength={100}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    maxLength={254}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Country/City
                  </label>
                  <input
                    type="text"
                    id="location"
                    maxLength={150}
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="package"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Tour Package (if applicable)
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a package</option>
                    <option value="Essential Sri Lanka">
                      Essential Sri Lanka (7 Days)
                    </option>
                    <option value="Sri Lanka Grand Tour">
                      Sri Lanka Grand Tour (14 Days)
                    </option>
                    <option value="Ultimate Sri Lanka Explorer">
                      Ultimate Sri Lanka Explorer (21 Days)
                    </option>
                    <option value="Custom Tour">Custom Tour</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Rating *
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        aria-label={`${rating} stars`}
                        checked={formData.rating === rating}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Star
                        size={24}
                        className={`cursor-pointer ${
                          formData.rating >= rating
                            ? "text-warning fill-warning"
                            : "text-neutral-300"
                        }`}
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Your Experience *
                </label>
                <textarea
                  id="comment"
                  maxLength={5000}
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary px-8">
                  {isSubmitting ? "Submitting..." : "Submit Your Testimonial"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
