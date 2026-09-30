"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { packages } from "../data/packages";
import { Package } from "../types";

const PackagesPage: React.FC = () => {
  const filteredPackages: Package[] = packages;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      {/* Hero Section */}
      <section
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/tain.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Packages</h1>
          <p className="text-lg max-w-2xl">
            Discover our carefully crafted itineraries designed to showcase the
            best of Sri Lanka
          </p>
        </div>
      </section>

      {/* Packages List */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                    {pkg.duration} Days
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-primary text-sm font-bold py-1 px-3 rounded-full">
                    LKR {pkg.price}
                    <span className="text-neutral-600 ml-1">/km</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {pkg.description}
                  </p>

                  <h4 className="font-semibold text-sm text-neutral-800 mb-2">
                    Highlights:
                  </h4>
                  <ul className="text-sm text-neutral-600 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <li className="text-primary text-sm">
                        + {pkg.highlights.length - 3} more highlights
                      </li>
                    )}
                  </ul>

                  <Link
                    href={`/packages/${pkg.id}`}
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    View Full Itinerary{" "}
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No packages found</h3>
              <p className="text-neutral-600">
                Please check back later for new packages.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            We can create a custom itinerary tailored to your preferences,
            timeframe, and interests. Contact our travel experts for a
            personalized Sri Lanka experience.
          </p>
          <Link
            href="/contact"
            className="btn bg-white text-primary hover:bg-neutral-100"
          >
            Request Custom Tour
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
