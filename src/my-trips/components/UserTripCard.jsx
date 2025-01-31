import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const UserTripCard = ({ trip }) => {
  const [locationImage, setLocationImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (trip?.userSelection?.location) {
      fetchLocationImage();
    }
  }, [trip?.userSelection?.location]);

  const fetchLocationImage = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${trip.userSelection.location}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setLocationImage(data.results[0].urls.regular);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    } finally {
      setImageLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'Planned': 'bg-blue-500',
      'Ongoing': 'bg-green-500',
      'Completed': 'bg-purple-500',
      'Cancelled': 'bg-red-500'
    };
    return colors[status] || 'bg-gray-500';
  };


  return (
    <Link to={'/view-trip/'+trip?.id} className="block w-full">
      <div className="border rounded-lg xs:rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer bg-gradient-to-br from-white to-gray-50 group overflow-hidden">
        {/* Image Section */}
        {locationImage && (
          <div className="relative h-32 xs:h-40 sm:h-48 w-full overflow-hidden">
            <img
              src={locationImage}
              alt={trip?.userSelection?.location}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onLoad={() => setImageLoading(false)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <span className={`${getStatusColor(trip?.status)} absolute top-1 xs:top-2 sm:top-3 right-1 xs:right-2 sm:right-3 px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-white text-[10px] xs:text-xs font-medium`}>
              {trip?.status || 'Planned'}
            </span>
          </div>
        )}

        <div className="p-2 xs:p-3 sm:p-5 space-y-2 xs:space-y-3 sm:space-y-4">
          {/* Header Section */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold text-base xs:text-lg sm:text-xl text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                {trip?.userSelection?.location || "Unknown Location"}
              </h2>
              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500">
                Created on {formatDate(trip?.createdAt || new Date())}
              </p>
            </div>
            {!locationImage && (
              <span className={`${getStatusColor(trip?.status)} px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-white text-[10px] xs:text-xs font-medium`}>
                {trip?.status || 'Planned'}
              </span>
            )}
          </div>

          {/* Trip Details Section */}
          <div className="space-y-1 xs:space-y-2 border-t border-gray-100 pt-1.5 xs:pt-2 sm:pt-3">
            <div className="grid grid-cols-2 gap-1 xs:gap-2 sm:gap-3">
              <div className="flex items-center space-x-1 xs:space-x-2">
                <span role="img" aria-label="calendar" className="text-sm xs:text-base sm:text-lg">📅</span>
                <span className="text-[10px] xs:text-sm sm:text-base text-gray-600">{trip?.userSelection?.noOfDays || 0} Days</span>
              </div>

              <div className="flex items-center space-x-1 xs:space-x-2">
                <span role="img" aria-label="money" className="text-sm xs:text-base sm:text-lg">💰</span>
                <span className="text-[10px] xs:text-sm sm:text-base text-gray-600 truncate">{trip?.userSelection?.budget || "Not set"}</span>
              </div>

            </div>
          </div>

          {/* Action Hint */}
          <div className="text-right">
            <span className="text-blue-500 text-[10px] xs:text-xs sm:text-sm group-hover:translate-x-1 transition-transform inline-block">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserTripCard;
