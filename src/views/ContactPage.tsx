"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PiWhatsappLogo } from 'react-icons/pi';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    package: '',
    travelDate: '',
    travelers: '2'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_3gxsjpi';
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_qxrh5m8';
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'ut0JmWaSHfKGXlMG8';

    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    setFormError('');
    
    try {
      // Initialize EmailJS (you can also do this in useEffect or at component mount)
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
        package: formData.package || 'Not specified',
        travel_date: formData.travelDate || 'Not specified',
        travelers: formData.travelers,
        to_name: 'Lanka.icu Team', // Your name/company name
      };
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log('Email sent successfully:', result);
      
      // Show success message
      setFormSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        package: '',
        travelDate: '',
        travelers: '2'
      });
      
      // Scroll to top of page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: 'url(/dance.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl">
            Get in touch with our travel experts to plan your perfect Sri Lankan adventure
          </p>
        </div>
      </section>

      {/* Success Message */}
      {formSubmitted && (
        <div className="container mt-8">
          <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-lg">
            <p>Thank you for contacting us! Your message has been sent successfully. Our team will get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Our Office</h3>
                      <p className="text-neutral-600">Dodangoda, Kalutara, Sri Lanka</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Phone size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a href="tel:+94779359593" className="text-neutral-600 hover:underline">
                  +94 77 93 59 593
                </a>
                      
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PiWhatsappLogo size={24} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">whatsapp</h3>
                      <a
                  href="https://wa.me/94776069593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:underline"
                >
                       +94 77 606 9593
                </a>
                      
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Mail size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a
                        href="mailto:lanka.icu@gmail.com"
                        className="text-neutral-600 hover:underline"
                      >
                        lanka.icu@gmail.com
                      </a>
                    </div>
                  </li>

                  
                  <li className="flex items-start">
                    <Clock size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-neutral-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-neutral-600">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
                <p className="mb-4">For urgent assistance during your tour in Sri Lanka:</p>
                <p className="font-bold">+94 77 93 59 593</p>
                <p className="text-sm text-white/80 mt-2">Available 24/7 for existing customers</p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formError && (
                <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-lg mb-6">
                  <p>{formError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="package" className="block text-sm font-medium text-neutral-700 mb-1">
                    Interested Package
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a package</option>
                    <option value="Essential Sri Lanka">Essential Sri Lanka (7 Days)</option>
                    <option value="Sri Lanka Grand Tour">Sri Lanka Grand Tour (14 Days)</option>
                    <option value="Ultimate Sri Lanka Explorer">Ultimate Sri Lanka Explorer (21 Days)</option>
                    <option value="Custom Tour">I&apos;m interested in a custom tour</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="travelDate" className="block text-sm font-medium text-neutral-700 mb-1">
                      Estimated Travel Date
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="travelers" className="block text-sm font-medium text-neutral-700 mb-1">
                      Number of Travelers
                    </label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      disabled={isSubmitting}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-6">5-6 People</option>
                      <option value="7+">7+ People</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell us about your travel preferences, questions, or special requirements"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`btn btn-primary flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Find Us</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Visit our office in Colombo to meet our team and discuss your travel plans in person
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.55805254926!2d79.84378233476561!3d6.9221225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259251b57a431%3A0x8f44e176b21beea9!2sColombo%2003%2C%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1650295856547!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lanka.icu Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our tours and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">What&apos;s the best time to visit Sri Lanka?</h3>
              <p className="text-neutral-600">
                Sri Lanka has two monsoon seasons affecting different parts of the island. Generally, December to March is ideal for the west and south coasts, while April to September is best for the east coast. However, Sri Lanka can be visited year-round by planning your itinerary around the monsoons.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">Do I need a visa to visit Sri Lanka?</h3>
              <p className="text-neutral-600">
                Most nationalities need a visa to visit Sri Lanka. Visitors can obtain an Electronic Travel Authorization (ETA) online before arrival, which is valid for 30 days. We can provide guidance on the visa application process as part of our service.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">What is the booking and payment process?</h3>
              <p className="text-neutral-600">
                To secure your booking, we require a 20% deposit. The remaining balance is due 45 days prior to your arrival date. We accept payment via credit card, bank transfer, or PayPal. For last-minute bookings made within 45 days of arrival, full payment is required at the time of booking.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">Can you arrange custom tours?</h3>
              <p className="text-neutral-600">
                Absolutely! We specialize in creating customized itineraries tailored to your interests, timeframe, and budget. Let us know your preferences, and our travel experts will design a personalized Sri Lankan experience just for you.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3">Is Sri Lanka safe for travelers?</h3>
              <p className="text-neutral-600">
                Sri Lanka is generally a safe destination for travelers. As with any destination, it&apos;s advisable to take normal precautions. Our guides are knowledgeable about local conditions and will ensure your safety throughout your journey.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">What type of accommodation do you offer?</h3>
              <p className="text-neutral-600">
                We offer a range of accommodations from boutique hotels to luxury resorts, depending on your package and preferences. All properties are carefully selected for their quality, service, location, and character to enhance your Sri Lankan experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
