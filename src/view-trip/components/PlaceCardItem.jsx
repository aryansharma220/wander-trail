import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaTicketAlt, FaStar } from "react-icons/fa";

const PlaceCardItem = ({ place }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`}
        target="_blank"
      >
        <div className="glass-effect rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="font-bold text-lg text-gray-800 hover:text-blue-600 transition-colors">{place.placeName}</h2>
              <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                <FaStar className="text-yellow-500" />
                {place.rating}
              </span>
            </div>
            
            <motion.div
              className={`text-sm text-gray-600 overflow-hidden ${isExpanded ? '' : 'line-clamp-2'}`}
              animate={{ height: isExpanded ? 'auto' : '3em' }}
            >
              {place.placeDetails}
            </motion.div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50/80 p-2 rounded-lg backdrop-blur-sm">
                <FaClock className="text-blue-500" />
                {place.travelTime}
              </div>
              <div className="flex items-center gap-2 text-green-600 bg-green-50/80 p-2 rounded-lg backdrop-blur-sm">
                <FaTicketAlt className="text-green-500" />
                {place.ticketPricing}
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              className="text-blue-500 text-sm hover:text-blue-700 hover:underline font-medium"
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
