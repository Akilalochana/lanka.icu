"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Check,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { Package } from "../types";

const PackageDetailPage = ({ packageData }: { packageData: Package }) => {
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({ 1: true });

  const toggleDay = (day: number) => {
    setOpenDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${packageData.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container h-full flex flex-col justify-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {packageData.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{packageData.duration} Days</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>Best Time: Nov - Apr</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <span>Multiple Destinations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-12">
        <div className="container">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg -mt-20 mb-12 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                <p className="text-neutral-700 mb-6">
                  {packageData.description}
                </p>

                <h3 className="text-xl font-bold mb-3">Tour Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {packageData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        size={18}
                        className="text-success mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-neutral-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-primary">
                    LKR {packageData.price}
                  </span>
                  <span className="text-neutral-600 ml-1">/km</span>
                </div>
                <p className="text-sm text-neutral-600 text-center mb-6">
                  Based on double occupancy. Single supplement applies.
                </p>
                <Link href="/contact" className="btn btn-primary w-full mb-4">
                  Book This Tour
                </Link>
                <Link href="/contact" className="btn btn-outline w-full">
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-12 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Detailed Itinerary</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Your day-by-day adventure through Sri Lanka&apos;s most beautiful
              destinations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {packageData.itinerary.map((day, index) => (
              <motion.div
                key={day.day}
                className={`border-b border-neutral-200 ${
                  index === packageData.itinerary.length - 1 ? "border-b-0" : ""
                }`}
                initial={false}
                animate={{ height: openDays[day.day] ? "auto" : "auto" }}
              >
                <button
                  className={`w-full px-6 py-4 flex justify-between items-center text-left ${
                    openDays[day.day]
                      ? "bg-primary text-white"
                      : "bg-white text-neutral-800 hover:bg-neutral-50"
                  }`}
                  onClick={() => toggleDay(day.day)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                        openDays[day.day]
                          ? "bg-white text-primary"
                          : "bg-primary text-white"
                      }`}
                    >
                      {day.day}
                    </div>
                    <span className="font-bold">{day.title}</span>
                  </div>
                  {openDays[day.day] ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {openDays[day.day] && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-neutral-700 mb-4">{day.description}</p>
                    <div>
                      <h4 className="font-bold text-sm uppercase text-neutral-500 mb-2">
                        Today&apos;s Activities:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-neutral-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {packageData.includes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check
                      size={18}
                      className="text-success mr-3 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">What&apos;s Not Included</h2>
              <ul className="space-y-3">
                {packageData.excludes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X
                      size={18}
                      className="text-error mr-3 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Book this tour now or contact us with any questions you might have.
            Our travel experts are ready to help you plan your perfect Sri
            Lankan journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-neutral-100"
            >
              Book This Tour
            </Link>
            <Link
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packageData.id !== "1" && (
              <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <Link href="/packages/1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Essential Sri Lanka"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                      7 Days
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Essential Sri Lanka
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    Discover the highlights of Sri Lanka on this week-long tour
                    that takes you from ancient cities to stunning beaches.
                  </p>
                  <Link
                    href="/packages/1"
                    className="text-primary font-medium flex items-center"
                  >
                    View Details <ChevronDown size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            )}

            {packageData.id !== "2" && (
              <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <Link href="/packages/2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/5364949/pexels-photo-5364949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Sri Lanka Grand Tour"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                      14 Days
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Sri Lanka Grand Tour
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    Experience the full beauty and diversity of Sri Lanka on
                    this comprehensive two-week tour.
                  </p>
                  <Link
                    href="/packages/2"
                    className="text-primary font-medium flex items-center"
                  >
                    View Details <ChevronDown size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            )}

            {packageData.id !== "3" && (
              <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <Link href="/packages/3">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Ultimate Sri Lanka Explorer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                      21 Days
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Ultimate Sri Lanka Explorer
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    The most comprehensive tour of Sri Lanka, allowing you to
                    truly immerse yourself in the culture, landscapes, and
                    wildlife.
                  </p>
                  <Link
                    href="/packages/3"
                    className="text-primary font-medium flex items-center"
                  >
                    View Details <ChevronDown size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetailPage;
