import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BeakerIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  TicketIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  DocumentTextIcon,
  GiftIcon,
  Bars2Icon,
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  WalletIcon,
  MapIcon,
  BanknotesIcon,
  BellIcon,
  ShoppingCartIcon,
  PlusIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

interface LayoutProps {
  children: React.ReactNode;
}

interface SidebarItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

// todo: look for all the types and put them in a type of folder.

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarItems: SidebarItem[] = [
    { name: "Activities", icon: SparklesIcon, path: "/activities" },
    { name: "Hotels", icon: BuildingOffice2Icon, path: "/hotels" },
    { name: "Flights", icon: TicketIcon, path: "/flights" },
    { name: "Study", icon: AcademicCapIcon, path: "/study" },
    { name: "Visa", icon: DocumentTextIcon, path: "/visa" },
    { name: "Immigration", icon: GlobeAltIcon, path: "/immigration" },
    { name: "Medical", icon: BeakerIcon, path: "/medical" },
    { name: "Vacation Packages", icon: GiftIcon, path: "/packages" },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://placehold.co/40x40"
                alt="Travel App Logo"
                className="w-10 h-10 rounded-full"
              />
            </Link>

            <div className="relative ml-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-[300px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
          </div>
          <nav className="flex items-center space-x-6 mx-6">
        <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <HomeIcon className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/dashboard" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <ChartBarIcon className="w-5 h-5" />
          <span className="text-xs">Dashboard</span>
        </Link>
        <Link to="/wallet" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <WalletIcon className="w-5 h-5" />
          <span className="text-xs">Wallet</span>
        </Link>
        <Link to="/plan-trip" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <MapIcon className="w-5 h-5" />
          <span className="text-xs">Plan a trip</span>
        </Link>
        <Link to="/commission" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
          <BanknotesIcon className="w-5 h-5" />
          <span className="text-xs">Commission for life</span>
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Subscribe
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <BellIcon className="w-6 h-6" />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
        <button className="text-gray-600 hover:text-blue-600">
          <PlusIcon className="w-6 h-6" />
        </button>
        <button className="flex items-center space-x-2">
          <img
            src="https://placehold.co/40x40"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDownIcon className="w-4 h-4 text-gray-600" />
        </button>
      </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/itineraries" className="hover:text-blue-500">
              My Itineraries
            </Link>
            <Link to="/auth" className="hover:text-blue-500">
              Login/Register
            </Link>
          </div>
        </motion.nav>
      )}
      <div className="flex flex-col min-h-screen bg-[#F0F2F5]">
        <main className="flex flex-1 container mx-auto px-4 py-4 overflow-hidden">
          <div className="w-64 bg-white shadow-md h-[calc(96vh-5rem)] overflow-y-auto px-4 py-6 sticky top-0 rounded-md">
            <nav className="space-y-4">
              {sidebarItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              {/* You can add content here later */}
            </div>
          </div>

          <div className="flex-1 ml-8 overflow-y-auto h-[calc(100vh-8rem)] bg-white rounded-md">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
