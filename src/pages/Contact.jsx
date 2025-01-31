import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Invalid email format";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setStatus({ submitting: false, submitted: false, error });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Here you would typically make an API call to your backend
      // For demonstration, we'll use setTimeout to simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

      // Show success message for 3 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 3000);

    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-20 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-violet-800 to-indigo-700 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-center text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Have questions about your next adventure? We're here to help make your travel dreams come true.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Left Column - Contact Info & Image */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-violet-800 mb-4 md:mb-6">Contact Information</h2>
              <div className="space-y-3 md:space-y-4 text-slate-600 text-sm sm:text-base">
                <p className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center">📧</span>
                  aryansharma220318@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center">📱</span>
                  +91 9971934266
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center">📍</span>
                  New Delhi, India
                </p>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 md:mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-violet-800 mb-3 md:mb-4">Follow Us</h3>
                <div className="flex gap-3 md:gap-4">
                  <a href="#" className="text-slate-600 hover:text-violet-600 transition-colors"><FaFacebook size={24} /></a>
                  <a href="#" className="text-slate-600 hover:text-violet-600 transition-colors"><FaTwitter size={24} /></a>
                  <a href="#" className="text-slate-600 hover:text-violet-600 transition-colors"><FaInstagram size={24} /></a>
                  <a href="#" className="text-slate-600 hover:text-violet-600 transition-colors"><FaLinkedin size={24} /></a>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <img
              src="https://images.unsplash.com/photo-1486299267070-83823f5448dd"
              alt="Travel"
              className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover"
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-violet-800 mb-4 md:mb-6">Send us a Message</h2>
            
            {status.submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                Message sent successfully!
              </div>
            )}
            
            {status.error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {status.error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-violet-100 focus:outline-none focus:border-violet-300 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-violet-100 focus:outline-none focus:border-violet-300 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-violet-100 focus:outline-none focus:border-violet-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-violet-100 focus:outline-none focus:border-violet-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-violet-100 focus:outline-none focus:border-violet-300 text-sm sm:text-base"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status.submitting}
                className={`w-full py-2.5 sm:py-3 bg-violet-600 text-white rounded-lg transition-all transform hover:scale-[1.02] duration-300 text-sm sm:text-base
                  ${status.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-violet-700'}`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
