import React from 'react';
import { FaRoute, FaUsers, FaCog, FaPlane, FaWallet } from 'react-icons/fa';

const About = () => {
  const features = [
    { title: 'AI-Powered Planning', desc: 'Get tailored recommendations based on your preferences, budget, and interests.', icon: <FaRoute className="text-3xl text-violet-600" /> },
    { title: 'Collaborative Itineraries', desc: 'Plan trips with friends or family in real-time, making group travel effortless.', icon: <FaUsers className="text-3xl text-violet-600" /> },
    { title: 'Dynamic Adjustments', desc: 'Our AI adapts to changing circumstances, offering real-time itinerary updates.', icon: <FaCog className="text-3xl text-violet-600" /> },
    { title: 'Integrated Bookings', desc: 'Book accommodations, activities, and transportation directly through our platform.', icon: <FaPlane className="text-3xl text-violet-600" /> },
    { title: 'Budget Management', desc: 'Stay on top of your travel expenses with tools to track and split costs.', icon: <FaWallet className="text-3xl text-violet-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-violet-800 to-indigo-700 bg-clip-text text-transparent animate-fade-in">
          About The Wander Trail
        </h1>
        
        <div className="space-y-16">
          {/* Welcome Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border border-violet-100">
            <p className="text-slate-600 text-lg leading-relaxed">
              Welcome to The Wander Trail, your ultimate travel companion! We're here to redefine how you explore 
              the world by combining the power of AI with the spirit of adventure. Whether you're planning a solo 
              escape, a family getaway, or a group trip with friends, we make every step of your journey seamless, 
              exciting, and personalized.
            </p>
          </div>

          {/* Image Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-violet-800 mb-4">Who We Are</h2>
              <p className="text-slate-600">
                We're a passionate team of travelers, technologists, and dreamers dedicated to creating meaningful 
                travel experiences. Our mission is simple: to help you plan trips that are as unique as your wanderlust.
              </p>
            </div>
            <div className="h-72 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81" 
                alt="Team exploring"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* What We Offer */}
          <div className="bg-gradient-to-br from-violet-900 to-indigo-900 rounded-2xl p-8 shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-violet-100">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us with Stats */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-violet-800 mb-4">Why Choose Us?</h2>
              <p className="text-slate-600">
                We know travel is more than just visiting places—it's about creating stories, embracing cultures, 
                and discovering yourself. With The Wander Trail, you're not just a traveler; you're a trailblazer. 
                Let us handle the logistics while you focus on making memories.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '10K+', label: 'Happy Travelers' },
                { number: '50+', label: 'Countries' },
                { number: '98%', label: 'Satisfaction Rate' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center hover:bg-violet-50 transition-colors duration-300">
                  <div className="text-3xl font-bold text-violet-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Us */}
          <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-2xl p-8 shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-violet-800 mb-4">Join Us on the Trail</h2>
            <p className="text-slate-600 mb-6">
              Whether you're a seasoned adventurer or planning your first trip, The Wander Trail is here to guide 
              you every step of the way. Start your journey today and let the world be your playground.
            </p>
            <p className="text-violet-800 font-medium">Happy wandering,<br />The Wander Trail Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
