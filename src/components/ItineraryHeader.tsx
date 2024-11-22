import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const ItineraryHeader: React.FC = () => {
  const items = [
    {
      id: "1",
      name: "Activities",
      desc: "Build, personalize, and optimize your itineraries with our trip planner.",
    },
    {
      id: "2",
      name: "Hotels",
      desc: "Build, personalize, and optimize your itineraries with our trip planner.",
    },
    {
      id: "3",
      name: "Flights",
      desc: "Build, personalize, and optimize your itineraries with our trip planner.",
    },
  ];
  return (
    <div className="">
      <div className="relative w-full h-[200px] mb-4">
        <img
          src="./banner.png"
          alt="Itinerary Cover"
          className="w-full h-full rounded-t-lg"
        />
        <button
          className="absolute top-4 left-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          onClick={() => window.history.back()}
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-700" />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <p className="text-gray-600">21 March 2024 - 21 April 2024</p>
        <h1 className="text-2xl font-bold mb-2">Bahamas Family Trip</h1>
        <p className="text-gray-600">
          New York, United States of America | Solo Trip
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="flex items-center space-x-2 mt-4"
      > 
        {items.map((item, index) => (
          <div key={item.id} className={`px-2 py-2 w-1/5 rounded-md ${index === 0 ? "bg-[#000031] text-white" : index === 1 ? "bg-[#E7F0FF] text-black" : "bg-[#0D6EFD] text-white"}`}>
            <div className="text-base font-semibold">{item.name}</div>
            <p className="text-xs mt-2">{item.desc}</p>
            <Link to="/" className={`text-sm font-medium block mt-2 text-center w-full py-2 rounded-md
              ${index === 0 ? "bg-[#0D6EFD] text-white" : index === 1 ? "bg-[#0D6EFD] text-white" : "bg-white text-[#0D6EFD]"} `}>{`Add ${item.name}`}</Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ItineraryHeader;
