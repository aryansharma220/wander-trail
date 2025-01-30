import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const InfoSection = ({ trip }) => {
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

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Hero Image Section */}
      {locationImage && (
        <div className="relative h-64 w-full">
          <img
            src={locationImage}
            alt={trip?.userSelection?.location}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoading(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-2">
              {trip?.userSelection?.location}
            </h1>
          </div>
        </div>
      )}

      {/* Info Content */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            {!locationImage && (
              <h2 className="font-bold text-3xl text-gray-800">
                {trip?.userSelection?.location}
              </h2>
            )}
            <div className="flex flex-wrap gap-3">
              <h2 className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                📆 {trip.userSelection?.noOfDays} Days
              </h2>
              <h2 className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                💰 {trip.userSelection?.budget} Budget
              </h2>
              <h2 className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                🥂 {trip.userSelection?.traveler} Travelers
              </h2>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center">
            <IoIosSend className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
