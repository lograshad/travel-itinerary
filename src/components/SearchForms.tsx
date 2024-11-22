import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomDatePicker from './DatePicker';

const SearchForms: React.FC = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState<'flights' | 'hotels' | 'activities'>('flights');
  const [searchParams, setSearchParams] = useState({
    origin: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search/${searchType}`, { state: searchParams });
  };

  // todo: add validation for the form fields
  // todo: color config

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <div className="flex space-x-4 mb-4">
        {['flights', 'hotels', 'activities'].map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg ${
              searchType === type ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSearchType(type as 'flights' | 'hotels' | 'activities')}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name="origin"
            placeholder={searchType === 'flights' ? 'Enter flight location' : 'Enter flight destination'}
            value={searchParams.origin}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Search
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SearchForms;

