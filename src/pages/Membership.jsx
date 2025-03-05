import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: ''
  });

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '29.99',
      duration: 'month',
      features: [
        'Access to gym facilities',
        'Basic equipment usage',
        'Locker room access',
        '2 group classes per week',
        'Fitness assessment'
      ],
      notIncluded: [
        'Personal training sessions',
        'Nutrition consultation',
        'Premium classes',
        '24/7 access'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '59.99',
      duration: 'month',
      features: [
        'Access to gym facilities',
        'Full equipment usage',
        'Locker room access',
        'Unlimited group classes',
        'Fitness assessment',
        '1 personal training session/month',
        'Nutrition consultation'
      ],
      notIncluded: [
        '24/7 access',
        'Premium classes'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      price: '99.99',
      duration: 'month',
      features: [
        'Access to gym facilities',
        'Full equipment usage',
        'Locker room access',
        'Unlimited group classes',
        'Fitness assessment',
        '4 personal training sessions/month',
        'Nutrition consultation',
        'Premium classes',
        '24/7 access',
        'Guest passes (2 per month)'
      ],
      notIncluded: []
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    setFormData({
      ...formData,
      plan: planId
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      plan: selectedPlan
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MEMBERSHIP PLANS</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">Choose the membership plan that fits your lifestyle and fitness goals.</p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-lg overflow-hidden shadow-lg border-2 transition-all duration-300 ${
                  selectedPlan === plan.id ? 'border-red-500 transform scale-105' : 'border-transparent'
                }`}
              >
                <div className="p-6 bg-gray-900 text-white text-center">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <div className="flex justify-center items-baseline my-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-300 ml-1">/{plan.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="text-lg font-semibold mb-4">Not Included:</h4>
                      <ul className="mb-6 space-y-2">
                        {plan.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X size={18} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  <button 
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-3 px-6 rounded-full font-bold transition duration-300 ${
                      selectedPlan === plan.id 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-200 text-gray-800 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">JOIN NOW</h2>
              <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">Selected Plan</label>
                  <div className="px-4 py-2 border rounded-lg bg-gray-50">
                    {selectedPlan ? plans.find(p => p.id === selectedPlan).name : 'No plan selected'}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={!selectedPlan}
                  className={`w-full py-3 px-6 rounded-full font-bold transition duration-300 ${
                    selectedPlan 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Can I cancel my membership at any time?</h3>
                <p className="text-gray-700">
                  Yes, you can cancel your membership at any time. We require a 30-day notice for cancellations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Are there any joining fees?</h3>
                <p className="text-gray-700">
                  There is a one-time joining fee of $49 for all new members, which covers your initial fitness assessment and setup.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Can I freeze my membership?</h3>
                <p className="text-gray-700">
                  Yes, you can freeze your membership for up to 3 months per year due to medical reasons or extended travel.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer family discounts?</h3>
                <p className="text-gray-700">
                  Yes, we offer a 10% discount on additional family memberships when two or more family members join.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">What happens if I miss a payment?</h3>
                <p className="text-gray-700">
                  If you miss a payment, we'll attempt to process it again within 5 days. If unsuccessful, your membership may be temporarily suspended until payment is received.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;