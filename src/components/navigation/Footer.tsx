import React from 'react';
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { PiWhatsappLogo } from 'react-icons/pi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <PalmTree size={24} className="text-primary" /> */}
              <img src="/favicon.png" alt="Logo" className="w-12 h-12" />
              <span className="text-lg font-bold">Lanka.icu</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Experience the beauty and culture of Sri Lanka with our expertly guided tours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/packages" className="text-neutral-400 hover:text-primary transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link href="/destinations" className="text-neutral-400 hover:text-primary transition-colors">Destinations</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-neutral-400 hover:text-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-neutral-400">Dodangoda, Kalutara,<br /> Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />

                {/* Phone call link */}
                <a href="tel:+94779359593" className="text-neutral-400 hover:underline">
                  +94 77 93 59 593
                </a>
              </li>
              <li className='flex gap-1.5'>
                <PiWhatsappLogo size={24} className="text-primary flex-shrink-0"/>
                {/* WhatsApp link */}
                <a
                  href="https://wa.me/94776069593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:underline"
                >
                       +94 77 606 9593
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-neutral-400">lanka.icu@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-neutral-400 mb-4">Subscribe to our newsletter for travel updates and special offers.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} Lanka.icu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;