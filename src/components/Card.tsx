import React from "react";
import { XMarkIcon, MapPinIcon, StarIcon, CalendarIcon } from "@heroicons/react/24/outline";

type Facility = {
  icon: React.ReactNode;
  name: string;
};

type CardProps = {
  title: string;
  subtitle: string;
  image: string;
  facilities: Facility[];
  price: string;
  detailsUrl: string;
  editUrl: string;
  type: "hotel" | "activity" | "flight";
  additionalInfo?: React.ReactNode;
  onClose?: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  facilities,
  price,
  detailsUrl,
  editUrl,
  type,
  additionalInfo,
  onClose,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-4 border rounded-lg shadow-md bg-white">
      {/* Image */}
      <div className="w-full md:w-1/4">
        <img src={image} alt={title} className="rounded-lg object-cover w-full h-full" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
            {onClose && (
              <button onClick={onClose} className="text-red-500">
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Facilities */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-1">
                {facility.icon}
                <span>{facility.name}</span>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          {additionalInfo && <div className="mt-4">{additionalInfo}</div>}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-4">
          <a href={detailsUrl} className="text-blue-500 hover:underline text-sm">
            {type === "hotel" ? "Hotel details" : type === "activity" ? "Activity details" : "Flight details"}
          </a>
          <a href={editUrl} className="text-blue-500 hover:underline text-sm">
            Edit details
          </a>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col justify-between items-end p-4">
        <div className="text-right">
          <p className="text-xl font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
