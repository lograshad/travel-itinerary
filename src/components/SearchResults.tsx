import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { searchFlights, searchHotels, searchActivities } from "../utils/api";
import useItinerary from "../hooks/useItinerary";
import MapView from "./MapView";
import Layout from "./Layout";

// todo: add toasts for success and error messages
import {
  ACTIVITY_SEARCH_QUERY_KEY,
  FLIGHT_SEARCH_QUERY_KEY,
  HOTEL_SEARCH_QUERY_KEY,
} from "@/constants";

const ITEMS_PER_PAGE = 10;

interface BaseSearchResult {
  id: string;
  name: string;
  description: string;
  photoUri?: string;
  image_url?: string;
}

interface FlightSearchResult extends BaseSearchResult {
  name: string;
  cityName: string;
  countryName: string;
}

interface HotelSearchResult extends BaseSearchResult {
  region: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface ActivitySearchResult extends BaseSearchResult {
  products: {
    title: string;
    cityName: string;
  }[];
}

type SearchResult =
  | FlightSearchResult
  | HotelSearchResult
  | ActivitySearchResult;

const SearchResults: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const location = useLocation();
  const searchParams = location.state as any;
  const { addToItinerary } = useItinerary();

  const { data, isLoading, error } = useQuery<{ data: SearchResult[] | ActivitySearchResult }>({
    queryKey: [
      type,
      ...(type === "flights"
        ? [FLIGHT_SEARCH_QUERY_KEY]
        : type === "hotels"
        ? [HOTEL_SEARCH_QUERY_KEY]
        : type === "activities"
        ? [ACTIVITY_SEARCH_QUERY_KEY]
        : []),
    ],
    queryFn: () => {
      switch (type) {
        case "flights":
          return searchFlights({ query: searchParams.origin });
        case "hotels":
          return searchHotels({ query: searchParams.origin });
        case "activities":
          return searchActivities({
            query: searchParams.origin,
            languagecode: "en-us",
          });
        default:
          throw new Error("Invalid search type");
      }
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{(error as Error).message}</p>
        </motion.div>
      </div>
    );
  }

  const getImageUrl = (type: string | undefined, item: any) => {
    const defaultImage = "https://placehold.co/200x200";

    if (!type) return defaultImage;

    switch (type) {
      case "flights":
        return item.photoUri || defaultImage;
      case "hotels":
        return item.image_url || defaultImage;
      case "attractions":
        return defaultImage;
      default:
        return defaultImage;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Search Results for {type}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {type === "activities" 
          ? (data?.data as ActivitySearchResult)?.products?.map((product, index) => (
              <motion.div
                key={`${product.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={getImageUrl(type, product)}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/200x200";
                    }}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">{product.cityName}</p>
                <button 
                  // onClick={() => addToItinerary({ ...product, id: `${product.title}-${index}` })}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Add to Itinerary
                </button>
              </motion.div>
            ))
          : (data?.data as SearchResult[])?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={getImageUrl(type, item)}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/200x200";
                    }}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-2">
                  {"cityName" in item ? item.cityName : ''}
                </p>
                <div className="flex items-center mb-2">
                  {"countryName" in item ? item.countryName : ""}
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                  Add to Itinerary
                </button>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default SearchResults;
