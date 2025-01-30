import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-3xl mb-8 text-gray-800">Places to Visit</h2>
      <div className="space-y-12">
        {trip.tripData?.itinerary.map((item, index) => (
          <div key={index} className="relative">
            {index !== 0 && (
              <div className="absolute -top-6 left-0 w-full border-t border-gray-200" />
            )}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
              <h2 className="font-semibold text-2xl text-blue-600 mb-6 flex items-center gap-3">
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-lg">
                  Day {item.day}
                </span>
                {item.theme}
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {item.plan.map((place, index) => (
                  <div key={index} className="bg-gray-50/50 rounded-xl p-4 hover:bg-gray-50/80 transition-colors">
                    <h2 className="font-medium text-sm text-orange-600 mb-3 bg-orange-50 inline-block px-3 py-1 rounded-full">
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
