import React from 'react';
import { Clock, Users } from 'lucide-react';

const Classes = () => {
  const classesData = [
    {
      id: 1,
      title: 'Strength Training',
      description: 'Build muscle and increase your strength with our comprehensive strength training program.',
      image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '60 min',
      level: 'All Levels',
      trainer: 'John Smith'
    },
    {
      id: 2,
      title: 'HIIT',
      description: 'High-Intensity Interval Training to maximize calorie burn and improve cardiovascular fitness.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '45 min',
      level: 'Intermediate',
      trainer: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Yoga',
      description: 'Improve flexibility, balance, and mental wellbeing with our yoga classes.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '60 min',
      level: 'All Levels',
      trainer: 'Emma Davis'
    },
    {
      id: 4,
      title: 'Spinning',
      description: 'High-energy indoor cycling workouts set to motivating music.',
      image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
      duration: '45 min',
      level: 'All Levels',
      trainer: 'Mike Wilson'
    },
    {
      id: 5,
      title: 'Boxing',
      description: 'Learn boxing techniques while getting a full-body workout.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '60 min',
      level: 'Beginner to Intermediate',
      trainer: 'Alex Thompson'
    },
    {
      id: 6,
      title: 'Pilates',
      description: 'Focus on core strength, posture, and controlled movements.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '50 min',
      level: 'All Levels',
      trainer: 'Lisa Brown'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR CLASSES</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">Discover our wide range of fitness classes designed to help you achieve your goals, whatever they may be.</p>
        </div>
      </section>

      {/* Classes List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classesData.map((classItem) => (
              <div key={classItem.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={classItem.image} 
                  alt={classItem.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{classItem.title}</h3>
                  <p className="text-gray-700 mb-4">{classItem.description}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock size={18} className="mr-2" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Users size={18} className="mr-2" />
                    <span>{classItem.level}</span>
                  </div>
                  <div className="text-gray-600 mb-4">
                    <span className="font-semibold">Trainer:</span> {classItem.trainer}
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">CLASS SCHEDULE</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Plan your week with our comprehensive class schedule. All classes are included with your membership.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-4 px-6 text-left">Time</th>
                    <th className="py-4 px-6 text-left">Monday</th>
                    <th className="py-4 px-6 text-left">Tuesday</th>
                    <th className="py-4 px-6 text-left">Wednesday</th>
                    <th className="py-4 px-6 text-left">Thursday</th>
                    <th className="py-4 px-6 text-left">Friday</th>
                    <th className="py-4 px-6 text-left">Saturday</th>
                    <th className="py-4 px-6 text-left">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">06:00 - 07:00</td>
                    <td className="py-4 px-6">HIIT</td>
                    <td className="py-4 px-6">Spinning</td>
                    <td className="py-4 px-6">HIIT</td>
                    <td className="py-4 px-6">Spinning</td>
                    <td className="py-4 px-6">HIIT</td>
                    <td className="py-4 px-6">-</td>
                    <td className="py-4 px-6">-</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-semibold">09:00 - 10:00</td>
                    <td className="py-4 px-6">Yoga</td>
                    <td className="py-4 px-6">Pilates</td>
                    <td className="py-4 px-6">Yoga</td>
                    <td className="py-4 px-6">Pilates</td>
                    <td className="py-4 px-6">Yoga</td>
                    <td className="py-4 px-6">Yoga</td>
                    <td className="py-4 px-6">Yoga</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">12:00 - 13:00</td>
                    <td className="py-4 px-6">Strength</td>
                    <td className="py-4 px-6">Boxing</td>
                    <td className="py-4 px-6">Strength</td>
                    <td className="py-4 px-6">Boxing</td>
                    <td className="py-4 px-6">Strength</td>
                    <td className="py-4 px-6">-</td>
                    <td className="py-4 px-6">-</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-4 px-6 font-semibold">17:00 - 18:00</td>
                    <td className="py-4 px-6">Boxing</td>
                    <td className="py-4 px-6">HIIT</td>
                    <td className="py-4 px-6">Boxing</td>
                    <td className="py-4 px-6">HIIT</td>
                    <td className="py-4 px-6">Boxing</td>
                    <td className="py-4 px-6">HIIT</td>
                    <td className="py-4 px-6">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">18:30 - 19:30</td>
                    <td className="py-4 px-6">Spinning</td>
                    <td className="py-4 px-6">Strength</td>
                    <td className="py-4 px-6">Spinning</td>
                    <td className="py-4 px-6">Strength</td>
                    <td className="py-4 px-6">Spinning</td>
                    <td className="py-4 px-6">-</td>
                    <td className="py-4 px-6">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;