import React from 'react'
import { motion } from 'framer-motion'
import ItineraryHeader from "./ItineraryHeader"
import ItinerarySection from './ItinerarySection'
import SearchForms from './SearchForms'

const ItineraryDashboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6"
    >
      <ItineraryHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 mb-8"
      >
        <SearchForms />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <ItinerarySection title="Flights" icon="✈️" />
        <ItinerarySection title="Hotels" icon="🏨" />
        <ItinerarySection title="Activities" icon="🎭" />
      </motion.div>
    </motion.div>
  )
}

export default ItineraryDashboard

