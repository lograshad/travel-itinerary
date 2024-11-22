import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, WalletIcon } from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white w-64 min-h-screen p-4">
      <div className="flex items-center mb-8">
        <span className="text-2xl font-bold">Go</span>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <ChartBarIcon className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/wallet" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <WalletIcon className="w-5 h-5" />
              <span>Wallet</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

