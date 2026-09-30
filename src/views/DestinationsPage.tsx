"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';

const DestinationsPage: React.FC = () => {
    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.04f1119508e7790917a555247b7775df?rik=puxtkmyf7rkVhw&riu=http%3a%2f%2fwww.discoverlankatours.com%2fimages%2fslider%2fimg1.jpg&ehk=XzQY1uPWL2mq9x28YSswICdvb%2fPW5s4WNOoAx6IhLNc%3d&risl=&pid=ImgRaw&r=0)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Sri Lanka</h1>
          <p className="text-lg max-w-2xl">
            Discover the most breathtaking destinations across the Pearl of the Indian Ocean
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Top Destinations</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              From ancient cities to pristine beaches, misty mountains to wildlife sanctuaries, 
              Sri Lanka offers diverse experiences for every traveler.
            </p>
          </div>

          {destinations.map((destination, index) => (
            <motion.div 
              key={destination.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:w-1/2">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{destination.name}</h3>
                <p className="text-neutral-700 mb-6">{destination.description}</p>
                <div>
                  <h4 className="font-bold mb-3">Top Activities:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {destination.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sri Lanka Map</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Sri Lanka may be small in size, but it&apos;s incredibly diverse. Explore our destination map to plan your perfect itinerary.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2025532.2046942834!2d78.4159830372293!3d7.876031736414384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1650287621169!5m2!1sen!2sus" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Lanka Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sri Lanka Travel Tips</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Make the most of your Sri Lankan adventure with these helpful travel tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">Best Time to Visit</h3>
              <p className="text-neutral-700">
                Sri Lanka has two monsoon seasons affecting different parts of the island. The best time to visit the west and south coasts is from December to March, while the east coast is best from April to September.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">Local Customs & Etiquette</h3>
              <p className="text-neutral-700">
                When visiting temples, dress modestly covering shoulders and knees. Remove shoes and hats before entering religious sites. Use your right hand for giving and receiving items as the left hand is considered unclean.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">Getting Around</h3>
              <p className="text-neutral-700">
                Tuk-tuks are convenient for short distances. For longer journeys, trains offer scenic routes, particularly through the hill country. Our tour packages include comfortable private transportation throughout your journey.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3">What to Pack</h3>
              <p className="text-neutral-700">
                Light, breathable clothing for the tropical climate. Bring modest attire for temple visits, sunscreen, insect repellent, a hat, and comfortable walking shoes. A light rain jacket is useful during monsoon seasons.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">Food & Drink</h3>
              <p className="text-neutral-700">
                Sri Lankan cuisine is deliciously spicy. Try local specialties like hoppers, kottu roti, and various curries. Drink bottled water, and don&apos;t miss trying Ceylon tea and king coconut water for refreshment.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-3">Wildlife Viewing</h3>
              <p className="text-neutral-700">
                For the best wildlife experiences, visit national parks early morning or late afternoon. Maintain a safe distance from animals and follow ranger instructions. Bring binoculars for the best viewing experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;