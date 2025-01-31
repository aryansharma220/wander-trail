import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaDollarSign, FaStar, FaInfoCircle } from "react-icons/fa";

const HotelCardItem = ({ hotel, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-gradient-to-br from-white to-gray-50/50 cursor-pointer rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl border border-gray-200/60 relative overflow-hidden transition-all duration-300 min-h-[180px] xs:min-h-[200px] w-full flex flex-col group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex flex-col gap-3 xs:gap-4 h-full relative z-10">
          <div className="space-y-3 xs:space-y-4">
            <h2 className="font-bold text-base xs:text-lg sm:text-xl text-gray-800 leading-tight line-clamp-2">
              {hotel.HotelName}
            </h2>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 xs:px-4 py-1 xs:py-1.5 rounded-lg text-xs xs:text-sm font-semibold shadow-sm w-fit">
              {hotel.Price}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors duration-200 bg-white/50 backdrop-blur-sm rounded-lg px-2 xs:px-3 py-1.5 xs:py-2">
            <FaMapMarkerAlt className="text-blue-500 flex-shrink-0 text-xs xs:text-sm" />
            <span className="text-xs xs:text-sm font-medium line-clamp-1">{hotel.HotelAddress}</span>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-1.5 xs:gap-2 bg-yellow-50 px-2 xs:px-3 py-1 xs:py-1.5 rounded-lg border border-yellow-100/50">
              <FaStar className="text-yellow-500 text-xs xs:text-sm" />
              <span className="font-semibold text-gray-700 text-xs xs:text-sm">{hotel.rating}</span>
            </div>
            
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-500 hover:text-blue-600 flex items-center gap-1.5 xs:gap-2 font-medium transition-colors duration-200 px-2 xs:px-3 py-1 xs:py-1.5 rounded-lg hover:bg-blue-50/80 backdrop-blur-sm text-xs xs:text-sm"
            >
              <FaInfoCircle className="text-xs xs:text-sm" />
              {showDetails ? 'Less info' : 'More info'}
            </button>
          </div>

          <motion.div
            initial={false}
            animate={{ 
              height: showDetails ? 'auto' : 0,
              opacity: showDetails ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 xs:pt-3 border-t border-gray-200/60">
              <p className="text-xs xs:text-sm text-gray-600 leading-relaxed line-clamp-3 bg-white/50 rounded-lg p-2 xs:p-3">
                {hotel.description}
              </p>
              <Link
                to={`https://www.google.com/maps/search/?api=1&query=${hotel.HotelAddress}`}
                target="_blank"
                className="inline-flex items-center mt-2 xs:mt-3 text-xs xs:text-sm text-blue-500 hover:text-blue-600 font-medium hover:underline gap-1 transition-colors duration-200 bg-blue-50/50 px-2 xs:px-3 py-1 xs:py-1.5 rounded-lg"
              >
                View on map
                <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HotelCardItem;
