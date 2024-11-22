import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholderText: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ selected, onChange, placeholderText }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      placeholderText={placeholderText}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default CustomDatePicker;

