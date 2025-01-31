import React, { useState } from "react";
import HotelCardItem from "./HotelCardItem";
import { motion } from "framer-motion";

const Hotels = ({ trip }) => {
  const [sortBy, setSortBy] = useState('rating');
  const [sortDirection, setSortDirection] = useState('desc');

  const parsePriceToNumber = (priceString) => {
    if (!priceString) return 0;
    // Convert price string to number, remove '$' and any other non-numeric characters except decimal point
    const numericValue = priceString.toString().replace(/[^\d.]/g, '');
    return parseFloat(numericValue) || 0;
  };

  const getSortedHotels = () => {
    if (!trip?.tripData?.hotels) return [];
    
    return [...trip.tripData.hotels].sort((a, b) => {
      const multiplier = sortDirection === 'asc' ? 1 : -1;
      
      switch (sortBy) {
        case 'rating':
          return multiplier * (b.rating - a.rating);
        case 'price':
          const priceA = parsePriceToNumber(a.price || a.Price);  // Check both price and Price
          const priceB = parsePriceToNumber(b.price || b.Price);
          return multiplier * (priceA - priceB);
        case 'name':
          return multiplier * (a.HotelName || '').localeCompare(b.HotelName || '');
        default:
          return 0;
      }
    });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === sortBy) {
      // Toggle direction if same sort option is selected
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(value);
      setSortDirection('desc'); // Reset direction for new sort option
    }
  };

  const sortedHotels = getSortedHotels();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <h2 className="font-bold text-2xl sm:text-3xl text-gray-800 tracking-tight">
              Hotel Recommendations
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">Find your perfect stay</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <select 
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm text-sm sm:text-base text-gray-700 font-medium hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              onChange={handleSortChange}
              value={sortBy}
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
            </select>
            <button
              onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="p-2 sm:p-2.5 rounded-lg border border-gray-200 bg-white/80 hover:border-gray-300 transition-all duration-200"
            >
              {sortDirection === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {sortedHotels.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <HotelCardItem hotel={hotel} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Hotels;
