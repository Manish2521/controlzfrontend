import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Trainers = () => {
  const trainersData = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Strength & Conditioning Coach',
      bio: 'With over 10 years of experience, John specializes in strength training and helping clients build muscle and increase their overall strength.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'HIIT & Cardio Specialist',
      bio: 'Sarah is passionate about high-intensity workouts and helping clients achieve their weight loss and cardiovascular fitness goals.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Yoga & Pilates Instructor',
      bio: 'Emma specializes in yoga and pilates, focusing on improving flexibility, core strength, and mental wellbeing through mindful movement.',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Mike Wilson',
      role: 'Boxing Coach',
      bio: 'Former professional boxer Mike now shares his expertise with clients, teaching proper technique while delivering an intense full-body workout.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 5,
      name: 'Lisa Brown',
      role: 'Nutrition Specialist',
      bio: 'Lisa helps clients optimize their nutrition to support their fitness goals, offering personalized meal plans and nutritional guidance.',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 6,
      name: 'Alex Thompson',
      role: 'Personal Trainer',
      bio: 'Alex specializes in creating customized workout plans tailored to individual needs and goals, with a focus on functional fitness.',
      image: 'https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR TRAINERS</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">Meet our team of expert trainers dedicated to helping you achieve your fitness goals.</p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainersData.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{trainer.role}</p>
                  <p className="text-gray-700 mb-6">{trainer.bio}</p>
                  <div className="flex space-x-4">
                    <a href={trainer.social.facebook} className="text-gray-600 hover:text-red-600 transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href={trainer.social.instagram} className="text-gray-600 hover:text-red-600 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href={trainer.social.twitter} className="text-gray-600 hover:text-red-600 transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Join Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">JOIN OUR TEAM</h2>
                <div className="w-20 h-1 bg-red-500 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Are you passionate about fitness and helping others achieve their goals? We're always looking for talented trainers to join our team.
                </p>
                <p className="text-gray-700 mb-6">
                  As a trainer at FitZone, you'll have access to state-of-the-art facilities, ongoing professional development, and the opportunity to build a rewarding career doing what you love.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;