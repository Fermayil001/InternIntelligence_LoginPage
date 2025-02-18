import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      disabled={disabled}
      className={`mt-4 p-3 w-full rounded-md text-white font-semibold ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
