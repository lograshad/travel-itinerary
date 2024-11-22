import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@radix-ui/react-icons";
import useItinerary from "../hooks/useItinerary";
import Card from "./Card";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/solid";

interface ItinerarySectionProps {
  title: string;
  icon: string;
}

// Define interfaces for different item types
interface BaseItem {
  id: string;
  type: "flight" | "hotel" | "activity";
  title: string;
  price: number;
  image?: string;
}

interface FlightItem extends BaseItem {
  type: "flight";
  origin: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
}

interface HotelItem extends BaseItem {
  type: "hotel";
  address: string;
  checkIn: string;
  checkOut: string;
}

interface ActivityItem extends BaseItem {
  type: "activity";
  duration: string;
  location: string;
}

type ItineraryType = FlightItem | HotelItem | ActivityItem;

const ItinerarySection: React.FC<ItinerarySectionProps> = ({ title, icon }) => {
  const { itinerary, removeFromItinerary } = useItinerary();
  const items = itinerary.filter(
    (item) => item.type.toLowerCase() === title.toLowerCase()
  );


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <span className="mr-2">{icon}</span>
          {title}
        </h2>
      </div>
      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No {title.toLowerCase()} added yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start justify-between border-b pb-4"
            >
              {item.type === "flight" && (
                <Card
                  title="American Airlines"
                  subtitle="AA-829 | First Class"
                  image="https://example.com/flight.jpg"
                  facilities={[
                    {
                      icon: <MapPinIcon className="h-4 w-4" />,
                      name: "Baggage: 20kg",
                    },
                    {
                      icon: <MapPinIcon className="h-4 w-4" />,
                      name: "In-flight meal",
                    },
                  ]}
                  price="₦123,450.00"
                  detailsUrl="/flight-details"
                  editUrl="/edit-flight"
                  type="flight"
                  additionalInfo={
                    <div className="text-sm">
                      <p>08:35 - 09:55</p>
                      <p>Duration: 1h 45m</p>
                    </div>
                  }
                  onClose={() => console.log("Flight Card Closed")}
                />
              )}
              {item.type === "hotel" && (
                <Card
                  title="Riviera Resort, Lekki"
                  subtitle="18, Kenneth Agbakuru Street, Lekki Phase 1"
                  image="https://example.com/hotel.jpg"
                  facilities={[
                    { icon: <MapPinIcon className="h-4 w-4" />, name: "Pool" },
                    { icon: <MapPinIcon className="h-4 w-4" />, name: "Bar" },
                  ]}
                  price="₦123,450.00"
                  detailsUrl="/hotel-details"
                  editUrl="/edit-hotel"
                  type="hotel"
                  additionalInfo={
                    <div className="text-sm">
                      <p>Check-In: 20-04-2024</p>
                      <p>Check-Out: 29-04-2024</p>
                    </div>
                  }
                  onClose={() => console.log("Hotel Card Closed")}
                />
              )}
              {item.type === "activity" && (
                <Card
                  title="The Museum of Modern Art"
                  subtitle="Works from Van Gogh to Warhol & beyond"
                  image="https://example.com/activity.jpg"
                  facilities={[
                    {
                      icon: <StarIcon className="h-4 w-4" />,
                      name: "4.5 (436)",
                    },
                    {
                      icon: <CalendarIcon className="h-4 w-4" />,
                      name: "1 Hour",
                    },
                  ]}
                  price="₦123,450.00"
                  detailsUrl="/activity-details"
                  editUrl="/edit-activity"
                  type="activity"
                  additionalInfo={
                    <div className="text-sm">
                      <p>
                        What's Included: Admission to the Empire State Building
                      </p>
                    </div>
                  }
                  onClose={() => console.log("Activity Card Closed")}
                />
              )}
              {/* <button
                onClick={() => removeFromItinerary.mutate(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button> */}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ItinerarySection;
