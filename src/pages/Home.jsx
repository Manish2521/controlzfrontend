import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[80vh] h-screen flex items-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">BUILD YOUR BODY <br /><span className="text-red-500">TRANSFORM YOUR LIFE</span></h1>
          <p className="text-xl mb-8 max-w-2xl">Join FitZone today and start your journey to a healthier, stronger you with our state-of-the-art facilities and expert trainers.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/membership" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center">
              Join Now <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/about" className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full border-2 border-white transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">WHY CHOOSE US</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">MODERN EQUIPMENT</h3>
              <p className="text-gray-600">Our gym is equipped with the latest fitness technology to help you achieve your goals efficiently.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">EXPERT TRAINERS</h3>
              <p className="text-gray-600">Our certified trainers are dedicated to helping you reach your fitness goals with personalized plans.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">DIVERSE CLASSES</h3>
              <p className="text-gray-600">From yoga to HIIT, we offer a wide range of classes to keep your workouts exciting and effective.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">OUR CLASSES</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our wide range of fitness classes designed to help you achieve your goals, whatever they may be.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Strength Training" 
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Strength Training</h3>
                <p className="text-gray-200 mb-4">Build muscle and increase your strength</p>
                <Link to="/classes" className="text-red-500 font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Cardio" 
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Cardio</h3>
                <p className="text-gray-200 mb-4">Improve your endurance and burn calories</p>
                <Link to="/classes" className="text-red-500 font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Yoga" 
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Yoga</h3>
                <p className="text-gray-200 mb-4">Enhance flexibility and mental wellbeing</p>
                <Link to="/classes" className="text-red-500 font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/classes" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center">
              View All Classes <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="pb-20">
      <section 
        className="py-20 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">READY TO START YOUR JOURNEY?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join FitZone today and transform your body with our expert trainers and state-of-the-art facilities.</p>
          <Link to="/membership" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center">
            Become a Member <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;
