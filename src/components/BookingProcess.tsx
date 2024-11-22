import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BookingStep {
  title: string;
  component: React.ReactNode;
}

interface BookingProcessProps {
  steps: BookingStep[];
  onComplete: () => void;
}

const BookingProcess: React.FC<BookingProcessProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 ${
                  index < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">{steps[currentStep].title}</h2>
        {steps[currentStep].component}
      </motion.div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default BookingProcess;

