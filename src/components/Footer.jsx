import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Dumbbell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">FitZone</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your body, transform your life. Join our community of fitness enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-white">Classes</Link></li>
              <li><Link to="/trainers" className="text-gray-400 hover:text-white">Trainers</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-white">Membership</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 6:00 AM - 10:00 PM</li>
              <li>Saturday: 7:00 AM - 8:00 PM</li>
              <li>Sunday: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                123 Fitness Street, Gym City
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +1 234 567 8900
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                info@fitzone.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FitZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;