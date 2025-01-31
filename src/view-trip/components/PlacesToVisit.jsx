import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div className="mt-4 sm:mt-6 md:mt-8">
      <h2 className="font-bold text-2xl sm:text-3xl mb-4 sm:mb-6 md:mb-8 text-gray-800 px-4 sm:px-0">
        Places to Visit
      </h2>
      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {trip.tripData?.itinerary.map((item, index) => (
          <div key={index} className="relative">
            {index !== 0 && (
              <div className="absolute -top-3 sm:-top-4 md:-top-6 left-0 w-full border-t border-gray-200" />
            )}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all mx-4 sm:mx-0">
              <h2 className="font-semibold text-xl sm:text-2xl text-blue-600 mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="bg-blue-100 text-blue-600 px-3 sm:px-4 py-1 rounded-full text-base sm:text-lg w-fit">
                  Day {item.day}
                </span>
                <span className="line-clamp-1">{item.theme}</span>
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {item.plan.map((place, index) => (
                  <div key={index} className="bg-gray-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-gray-50/80 transition-colors">
                    <h2 className="font-medium text-xs sm:text-sm text-orange-600 mb-2 sm:mb-3 bg-orange-50 inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {place.time}
                    </h2>
                    <PlaceCardItem place={place} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
