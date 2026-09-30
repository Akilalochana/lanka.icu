"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import { packages } from '../data/packages';
import { destinations } from '../data/destinations';
import FeaturedReviews from '../components/FeaturedReviews';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "/airline.webp",
    "/elephant.avif",
    "/stanislav-rozhkov-WTFiv8DOsyQ-unsplash1.svg",
    "/stefano-alemani-f9KQYJR7fXk-unsplash1.svg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  
    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);

  const featuredPackages = packages.slice(0, 3);
  const featuredDestinations = destinations.slice(0, 3);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
        
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the Magic of Sri Lanka
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience breathtaking landscapes, ancient culture, and unforgettable adventures with our expertly crafted tours.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/packages" className="btn btn-primary">
              Explore Tour Packages
            </Link>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-neutral-100">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tour Packages</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Choose from our carefully crafted itineraries designed to showcase the best of Sri Lanka in 7, 14, or 21 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                    {pkg.duration} Days
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">LKR {pkg.price}</span>
                    <Link 
                      href={`/packages/${pkg.id}`} 
                      className="text-primary font-medium flex items-center"
                    >
                      View Details <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/packages" className="btn btn-outline">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Lanka.icu</h2>
            <p className="max-w-2xl mx-auto">
              We&apos;re passionate about creating authentic travel experiences that showcase the true beauty of Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                  <line x1="9" x2="9" y1="3" y2="18" />
                  <line x1="15" x2="15" y1="6" y2="21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-white/80">
                Our guides are locals with deep knowledge of Sri Lankan culture, history, and hidden gems.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up">
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Service</h3>
              <p className="text-white/80">
                Handpicked accommodations, comfortable transport, and 24/7 customer support.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Experiences</h3>
              <p className="text-white/80">
                Connect with local communities and discover the real Sri Lanka beyond tourist spots.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Travel</h3>
              <p className="text-white/80">
                We&apos;re committed to responsible tourism practices that respect nature and support local communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Destinations</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore Sri Lanka&apos;s most breathtaking locations, from ancient cities to pristine beaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                className="group relative h-80 overflow-hidden rounded-lg shadow-card"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {destination.description.substring(0, 100)}...
                  </p>
                  <Link 
                    href="/destinations" 
                    className="text-white font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/destinations" className="btn btn-outline">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Read authentic reviews from travelers who have experienced the magic of Sri Lanka with us.
            </p>
          </div>

          <FeaturedReviews />

          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn btn-outline">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Blog Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Stories</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover insights, tips and experiences from our travels across Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="relative h-72 rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/yala.jpg" 
                alt="Jungle Adventures" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/80 text-white mb-3 inline-block">
                  Jungle
                </span>
                <h3 className="text-xl font-bold mb-2">Wildlife Encounters</h3>
                <Link href="/blog" className="text-white/90 hover:text-white">Explore jungle stories</Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-72 rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="/gallery3.jpg" 
                alt="Ancient Temples" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/80 text-white mb-3 inline-block">
                  Temple
                </span>
                <h3 className="text-xl font-bold mb-2">Sacred Heritage</h3>
                <Link href="/blog" className="text-white/90 hover:text-white">Discover temple stories</Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-72 rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src="/gallery10.jpg" 
                alt="Cascading Waterfalls" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/80 text-white mb-3 inline-block">
                  Waterfall
                </span>
                <h3 className="text-xl font-bold mb-2">Natural Wonders</h3>
                <Link href="/blog" className="text-white/90 hover:text-white">Read waterfall stories</Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/blog" className="btn btn-primary">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Sri Lankan Adventure?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to start planning your dream trip to Sri Lanka. Our travel experts are ready to help you create the perfect itinerary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/packages" className="btn bg-white text-secondary hover:bg-neutral-100">
              Browse Tour Packages
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;