import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaTicketAlt, FaStar } from "react-icons/fa";

const PlaceCardItem = ({ place }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`}
        target="_blank"
      >
        <div className="glass-effect rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all border border-white/20">
          <div className="space-y-2 xs:space-y-3 sm:space-y-4">
            <div className="flex justify-between items-start gap-2">
              <h2 className="font-bold text-base xs:text-lg text-gray-800 hover:text-blue-600 transition-colors line-clamp-2">
                {place.placeName}
              </h2>
              <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs xs:text-sm font-medium whitespace-nowrap">
                <FaStar className="text-yellow-500 text-xs xs:text-sm" />
                {place.rating}
              </span>
            </div>
            
            <motion.div
              className={`text-xs xs:text-sm text-gray-600 overflow-hidden ${isExpanded ? '' : 'line-clamp-2'}`}
              animate={{ height: isExpanded ? 'auto' : '2.5em' }}
            >
              {place.placeDetails}
            </motion.div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 text-xs xs:text-sm">
              <div className="flex items-center gap-1.5 xs:gap-2 text-blue-600 bg-blue-50/80 p-1.5 xs:p-2 rounded-lg backdrop-blur-sm">
                <FaClock className="text-blue-500 text-xs xs:text-sm" />
                <span className="truncate">{place.travelTime}</span>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 text-green-600 bg-green-50/80 p-1.5 xs:p-2 rounded-lg backdrop-blur-sm">
                <FaTicketAlt className="text-green-500 text-xs xs:text-sm" />
                <span className="truncate">{place.ticketPricing}</span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              className="text-xs xs:text-sm text-blue-500 hover:text-blue-700 hover:underline font-medium"
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PlaceCardItem;
