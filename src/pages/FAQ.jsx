import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is The Wander Trail?",
      answer: "The Wander Trail is a smart, free travel planning platform that uses AI to help you plan, organize, and enjoy personalized trips effortlessly. From destination recommendations to budgeting and real-time itinerary updates, we make travel planning simple and enjoyable."
    },
    {
      question: "How does the AI-powered planning work?",
      answer: "Our AI analyzes your preferences, budget, group size, and interests to provide customized recommendations for destinations, activities, accommodations, and more. It also adapts to real-time changes, like weather or delays, to ensure a smooth trip."
    },
    {
      question: "Can I use The Wander Trail to plan group trips?",
      answer: "Absolutely! Our platform includes collaborative tools that let multiple users plan together in real-time. You can share itineraries, vote on activities, and manage group expenses all in one place."
    },
    {
      question: "Is The Wander Trail really free to use?",
      answer: "Yes, The Wander Trail is completely free to use. All the features, including AI-powered planning, real-time updates, group collaboration, and more, come at no cost to you."
    },
    {
      question: "How do I book accommodations and activities?",
      answer: "You can book directly through The Wander Trail platform. We integrate with trusted booking platforms to offer the best options based on your preferences."
    },
    {
      question: "Does The Wander Trail support international travel?",
      answer: "Yes, we provide travel planning and recommendations for destinations worldwide, including local insights, transportation options, and cultural tips."
    },
    {
      question: "Can I adjust my itinerary during the trip?",
      answer: "Of course! Our AI-powered system lets you modify your plans in real-time. Whether it's a sudden weather change or a new activity you want to add, The Wander Trail has you covered."
    },
    {
      question: "How does the budget and expense tracker work?",
      answer: "Our budget tool helps you set spending limits, track expenses during the trip, and split costs with group members. It's designed to keep your finances stress-free."
    },
    {
      question: "Is my personal data secure on The Wander Trail?",
      answer: "We prioritize your privacy and use industry-standard encryption to keep your data safe. We never share your information with third parties without your consent."
    },
    {
      question: "What makes The Wander Trail different from other travel apps?",
      answer: "Our platform combines AI-powered personalization, real-time collaboration, and dynamic itinerary adjustments, all in one place. We go beyond basic planning to create a truly seamless and enjoyable travel experience."
    },
    {
      question: "How do I get started?",
      answer: "Sign up on our platform, input your travel preferences, and let The Wander Trail guide you from planning to adventure!"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4"
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-violet-800 to-indigo-700 bg-clip-text text-transparent"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h1>
        
        <motion.p 
          className="text-center text-slate-600 mb-12 max-w-2xl mx-auto"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Get answers to common questions about The Wander Trail's features and services
        </motion.p>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-800 text-lg">{faq.question}</span>
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-violet-600"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    className="px-6 pb-5"
                  >
                    <motion.p 
                      className="text-slate-600"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
