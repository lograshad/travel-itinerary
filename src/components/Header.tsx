import React from 'react'
import { MagnifyingGlassIcon, BellIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 -ml-8" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Subscribe
        </button>
        <BellIcon className="w-6 h-6 text-gray-500" />
        <ShoppingCartIcon className="w-6 h-6 text-gray-500" />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  )
}

export default Header
