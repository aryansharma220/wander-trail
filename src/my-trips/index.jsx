import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import UserTripCard from "@/my-trips/components/UserTripCard";

const MyTrips = () => {
  const navigate = useNavigate(); // Corrected to useNavigate
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    const fetchUserTrips = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        navigate("/");
        return;
      }

      try {
        const q = query(
          collection(db, "AITrips"),
          where("userEmail", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        setUserTrips([])
        const trips = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserTrips(trips);
      } catch (error) {
        console.error("Error fetching user trips:", error);
      }
    };

    fetchUserTrips();
  }, []); // Added dependency

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 mt-6 md:mt-10">
      <h2 className="font-bold text-2xl md:text-3xl mb-4 md:mb-6">My Trips</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
      {userTrips.length > 0 ? (
          userTrips.map((trip) => (
            <UserTripCard key={trip.id} trip={trip} />
          ))
        ) : (
          [1,2,3,4,5,6].map((item, index)=>(
            <div key={index} className="h-[180px] sm:h-[200px] md:h-[220px] w-full bg-slate-200 animate-pulse rounded-xl">
            </div>
          ))
      )}
      </div>
    </div>
  );
};

export default MyTrips;
