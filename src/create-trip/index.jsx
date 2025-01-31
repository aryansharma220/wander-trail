import React, { useEffect } from "react";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AIModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CreateTrip = () => {
  const [place, setplace] = useState();
  const [formData, setformData] = useState([]);
  const [openDialog, setopenDialog] = useState(false);

  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setopenDialog(true);
      return;
    }

    const requiredFields = ["location", "noOfDays", "budget", "traveler"];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      toast(`Please fill out: ${missingFields.join(", ")}`);
      return;
    }

    if (formData.noOfDays > 5) {
      toast("Number of days should be less than or equal to 5.");
      return;
    }

    // console.log(formData);
    // toast("Trip successfully generated!");

    setloading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    // console.log(result?.response?.text());

    setloading(false);
    SaveAiTrip(result?.response?.text());
  };

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        // console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setopenDialog(false);
        onGenerateTrip();
      });
  };

  const SaveAiTrip = async (TripData) => {
    setloading(true);

    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setloading(false);
    navigate("/view-trip/" + docId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-8 sm:py-12 md:py-16 max-w-8xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Plan Your Dream Journey ⛺🌴
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            Let us help you create the perfect itinerary for your next adventure.
            Just tell us your preferences, and we'll handle the rest.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col gap-6 sm:gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Destination Details
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <label className="text-lg font-medium text-gray-700 mb-3 block">
                  What is your destination of choice?
                </label>
                <Input
                  placeholder="Enter your destination"
                  type="text"
                  value={formData.location || ""}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <label className="text-lg font-medium text-gray-700 mb-3 block">
                  How many days is your trip?
                </label>
                <Input
                  placeholder="Ex. 3"
                  type="number"
                  onChange={(e) => handleInputChange("noOfDays", e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Budget Selection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SelectBudgetOptions.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={index}
                  onClick={() => handleInputChange("budget", item.title)}
                  className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                    formData?.budget === item.title
                      ? "border-blue-500 bg-blue-50/50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">{item.title}</h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Travel Companions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SelectTravelesList.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={index}
                  onClick={() => handleInputChange("traveler", item.people)}
                  className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                    formData?.traveler === item.people
                      ? "border-blue-500 bg-blue-50/50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">{item.title}</h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-8 sm:my-12 flex justify-center"
        >
          <Button
            disabled={loading}
            onClick={onGenerateTrip}
            className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
            ) : (
              "Generate Your Perfect Trip ✈️"
            )}
          </Button>
        </motion.div>

        <Dialog open={openDialog}>
          <DialogContent className="sm:max-w-md rounded-2xl bg-white/90 backdrop-blur-sm mx-4">
            <DialogHeader className="space-y-4 sm:space-y-6 text-center p-4 sm:p-6">
              <img className="w-32 sm:w-48 mx-auto" src="src/assets/logo.png" alt="" />
              <div>
                <h2 className="font-bold text-xl sm:text-2xl text-gray-800">Sign In With Google</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2">Sign in securely with Google authentication</p>
              </div>
              <Button
                disabled={loading}
                onClick={login}
                className="w-full py-4 sm:py-6 text-base sm:text-lg flex gap-3 sm:gap-4 items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                <FcGoogle className="h-5 w-5 sm:h-6 sm:w-6" /> Sign in With Google
              </Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default CreateTrip;
