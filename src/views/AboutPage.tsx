"use client";

import React, { useEffect } from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import { motion } from "framer-motion";
import { User, Award, Clock, Heart, Users, MapPin } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutPage: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3, // Show 3 images at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 images on medium screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 image on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);

  // Array of image URLs for the gallery
  const galleryImages = [
    "/gallery.jpg",
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
    "/gallery9.jpg",
    "/gallery10.jpg",
    "/gallery11.jpg",
    "/gallery12.jpg",
    "/gallery13.jpg",
    "/gallery14.jpg",
    "/gallery15.jpg",
    "/gallery16.jpg",
    "/gallery17.jpg",
    "/gallery18.jpg",
    "/gallery19.jpg",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/perahara.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Lanka.icu
          </h1>
          <p className="text-lg max-w-2xl">
            We&apos;re passionate about showcasing the true beauty of Sri Lanka
            through authentic travel experiences
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                Lanka.icu was founded in 2015 by a team of passionate
                Sri Lankan travel enthusiasts who wanted to share the authentic
                beauty of their homeland with the world. What began as a small
                operation has now grown into one of Sri Lanka&apos;s most trusted
                travel companies.
              </p>
              <p className="text-neutral-700 mb-4">
                Our founder,  Prasad Kumara, grew up exploring the hidden corners
                of Sri Lanka and developed a deep connection with its diverse
                landscapes, rich culture, and warm-hearted people. After
                spending several years working in international tourism, he
                returned to Sri Lanka with a vision to create immersive travel
                experiences that would showcase the country&apos;s true essence
                beyond the typical tourist path.
              </p>
              <p className="text-neutral-700">
                Today, our team of experienced guides and travel specialists
                work together to craft journeys that balance must-see
                attractions with off-the-beaten-path discoveries, creating
                memories that last a lifetime for our clients.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Founder of Lanka.icu"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="https://images.pexels.com/photos/7161187/pexels-photo-7161187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Sri Lankan Tea Plantations"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To create authentic, sustainable travel experiences that showcase
            Sri Lanka&apos;s natural beauty and cultural heritage while supporting
            local communities and preserving the environment for future
            generations.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore the beauty of Sri Lanka through our curated gallery of
              experiences.
            </p>
          </div>
          <Slider {...settings}>
            {galleryImages.map((image, index) => (
              <div key={index}
                  className="px-1"  >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-lg "
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Lanka.icu
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional travel experiences that
              go beyond the ordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-neutral-600">
                Our guides are born and raised in Sri Lanka with intimate
                knowledge of the culture, history, and hidden gems that most
                tourists never see.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Award-Winning Service</h3>
              <p className="text-neutral-600">
                Recognized for excellence by TripAdvisor and multiple travel
                publications, we pride ourselves on exceptional customer service
                from start to finish.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Perfectly Paced Itineraries
              </h3>
              <p className="text-neutral-600">
                Our tours balance sightseeing with relaxation, giving you time
                to truly experience each destination rather than rushing from
                place to place.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsible Tourism</h3>
              <p className="text-neutral-600">
                We&apos;re committed to sustainable practices that respect Sri
                Lanka&apos;s environment and support local communities through
                ethical partnerships.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Small Group Sizes</h3>
              <p className="text-neutral-600">
                We limit our groups to ensure personalized attention, authentic
                local interactions, and a more intimate experience of Sri Lanka.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unique Experiences</h3>
              <p className="text-neutral-600">
                Our itineraries include exclusive activities like private
                cooking classes with local families, special access to cultural
                sites, and authentic village experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our passionate team of travel experts is dedicated to creating
              unforgettable Sri Lankan experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=" Prasad Kumara"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Prasad Kumara</h3>
                <p className="text-primary font-medium mb-3">Founder & CEO</p>
                <p className="text-neutral-600 text-sm">
                  With over 15 years in tourism, Prasad&apos;s love for Sri Lanka&apos;s
                  culture and landscapes inspired him to create Ceylon
                  Adventures.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/8133263/pexels-photo-8133263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Priya Jayawardena"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Priya Jayawardena</h3>
                <p className="text-primary font-medium mb-3">
                  Head of Operations
                </p>
                <p className="text-neutral-600 text-sm">
                  Priya ensures that every aspect of your journey is flawlessly
                  executed, from accommodations to transportation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Chaminda Fernando"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Chaminda Fernando</h3>
                <p className="text-primary font-medium mb-3">Lead Guide</p>
                <p className="text-neutral-600 text-sm">
                  A historian and naturalist, Chaminda brings Sri Lanka&apos;s
                  culture and wildlife to life with his engaging storytelling.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img
                src="https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Amali De Silva"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Amali De Silva</h3>
                <p className="text-primary font-medium mb-3">
                  Travel Consultant
                </p>
                <p className="text-neutral-600 text-sm">
                  With meticulous attention to detail, Amali designs
                  personalized itineraries that match each traveler&apos;s interests
                  and preferences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Sri Lankan Adventure Today
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let our expert team help you plan the perfect trip to explore Sri
            Lanka&apos;s wonders
          </p>
          <a
            href="/contact"
            className="btn bg-white text-secondary hover:bg-neutral-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
