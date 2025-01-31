import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
// import Footer from "../components/Footer";

const Viewtrip = () => {
  const { tripId } = useParams();

  const [trip, settrip] = useState([]);

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  /*
    Used to get trip information from firebase
    */

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document:", docSnap.data());
      settrip(docSnap.data());
    } else {
      // console.log("No Such Document");
      toast("No Trip Found");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-10">
        <InfoSection trip={trip} />
        <div className="grid gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
          <Hotels trip={trip}/>
          <PlacesToVisit trip={trip}/>
        </div>
      </div>
    </div>
  );
};

export default Viewtrip;
