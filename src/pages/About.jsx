import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ABOUT US</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">Learn about our mission, our team, and why we're passionate about helping you achieve your fitness goals.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">OUR STORY</h2>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-gray-700 mb-6">
                Founded in 2010, FitZone began with a simple mission: to create a fitness community where everyone feels welcome and empowered to transform their lives through exercise and healthy habits.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a small gym with just a few pieces of equipment has grown into a comprehensive fitness center with state-of-the-art facilities, expert trainers, and a thriving community of members who support and inspire each other.
              </p>
              <p className="text-gray-700">
                Today, we continue to expand our offerings while staying true to our core values of inclusivity, excellence, and passion for fitness. We believe that everyone deserves access to high-quality fitness resources and the support they need to achieve their goals.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" 
                alt="Our Gym" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At FitZone, our mission is to inspire and empower individuals to transform their lives through fitness, providing the tools, knowledge, and support they need to achieve their personal health and wellness goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-red-500 mb-4">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">COMMUNITY</h3>
              <p className="text-gray-700">
                We foster a supportive community where members encourage each other and build lasting relationships based on shared goals and experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-red-500 mb-4">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">EXCELLENCE</h3>
              <p className="text-gray-700">
                We are committed to excellence in everything we do, from our facilities and equipment to our training programs and customer service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-red-500 mb-4">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4">INNOVATION</h3>
              <p className="text-gray-700">
                We continuously evolve and innovate to provide our members with the most effective and enjoyable fitness experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">OUR FACILITIES</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We pride ourselves on offering top-notch facilities designed to enhance your workout experience and help you achieve your fitness goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 text-red-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">State-of-the-Art Equipment</h3>
                <p className="text-gray-700">
                  Our gym features the latest cardio machines, strength training equipment, and functional training tools to support a variety of workout styles.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-red-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Spacious Workout Areas</h3>
                <p className="text-gray-700">
                  Enjoy plenty of space to move freely during your workouts, with dedicated areas for different types of exercises.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-red-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Group Fitness Studios</h3>
                <p className="text-gray-700">
                  Our purpose-built studios provide the perfect environment for our diverse range of group fitness classes.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-red-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Locker Rooms & Showers</h3>
                <p className="text-gray-700">
                  Clean and comfortable locker rooms with showers, allowing you to freshen up after your workout.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-red-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Nutrition Bar</h3>
                <p className="text-gray-700">
                  Refuel with healthy snacks and protein shakes from our nutrition bar, designed to support your fitness journey.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-red-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personal Training Spaces</h3>
                <p className="text-gray-700">
                  Dedicated areas for one-on-one training sessions with our expert personal trainers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">OUR GALLERY</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Take a visual tour of our facilities and get a glimpse of the FitZone experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Gym Equipment" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Weight Training" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Cardio Area" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Yoga Class" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;