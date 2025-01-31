import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Layers - Keep the new background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"></div>
      <div className="absolute inset-0 bg-[url('/mountains.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content Container - Adding a white backdrop for better readability */}
      <div className="relative z-10">
        {/* Main Hero Section */}
        <div className="relative flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-56 gap-6 md:gap-9 pt-12 md:pt-20 pb-12 md:pb-16 backdrop-blur-sm">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-[60px] text-center mb mt-8 md:mt-16 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 pb-4 block mb-4 animate-fade-in">
              Discover Your Next Adventure with AI:
            </span>
            <span className="bg-gradient-to-r  from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Personalized Itineraries at Your Fingertips
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 text-center max-w-2xl animate-fade-in-delay px-4">
            Your personal trip planner and travel curator, create custom
            itineraries tailored to your interests and budget.
          </p>

          <Link to="/create-trip">
            <Button className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base">
              Get Started, It's Free
            </Button>
          </Link>
        </div>

        {/* Features Section with restored styling */}
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature Cards with original styling */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-violet-100 shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-xl mb-3 text-violet-800">AI-Powered Planning</h3>
              <p className="text-slate-600">Smart algorithms create personalized itineraries based on your preferences</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-violet-100 shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-xl mb-3 text-violet-800">Smart Recommendations</h3>
              <p className="text-slate-600">Get curated suggestions for attractions, restaurants, and activities</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-violet-100 shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-3 text-violet-800">Real-time Updates</h3>
              <p className="text-slate-600">Stay informed with live updates and travel notifications</p>
            </div>
          </div>

          {/* Stats Section with restored styling */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 my-12 md:my-20">
            {/* Stats cards with original styling */}
            <div className="text-center p-4 md:p-6 bg-gradient-to-br from-white/90 to-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">10k+</div>
              <div className="text-slate-700 font-medium text-sm md:text-base">Happy Travelers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/90 to-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">50+</div>
              <div className="text-slate-700 font-medium">Countries</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white/90 to-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-slate-700 font-medium">Support</div>
            </div>
          </div>

          {/* How it Works Section with restored styling */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-violet-800 to-indigo-700 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 relative">
              {/* Timeline items with original styling */}
              <div className="flex-1 relative z-10 bg-gradient-to-br from-white/90 to-white/50 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-violet-100">
                <div className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-violet-800">1. Share Preferences</div>
                <p className="text-slate-600 text-sm md:text-base">Tell us about your travel style and interests</p>
              </div>
              <div className="flex-1 relative z-10 bg-gradient-to-br from-white/90 to-white/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-violet-100">
                <div className="text-xl font-bold mb-3 text-violet-800">2. Get Recommendations</div>
                <p className="text-slate-600">AI generates your perfect itinerary</p>
              </div>
              <div className="flex-1 relative z-10 bg-gradient-to-br from-white/90 to-white/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-violet-100">
                <div className="text-xl font-bold mb-3 text-violet-800">3. Start Exploring</div>
                <p className="text-slate-600">Begin your adventure with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
