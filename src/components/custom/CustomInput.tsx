import React, { useState } from 'react';
import OpenEye from '../../assets/icons/Inputeye.svg'
import CloseEye from '../../assets/icons/Inputclosedeye.svg'


interface InputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string | null;
}

const CustomInput: React.FC<InputProps> = ({ label, type, id, value, onChange, placeholder, error }) => {
  const [showPassword, setshowPassword] = useState(true);

  const changeVisibiltyPassword = () => {
    setshowPassword(!showPassword);
  };



  return (
    <div className="flex flex-col mb-4 relative">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={!showPassword ? 'text' : type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'
          }`}
      />
      {type === 'password' && <div className="absolute inset-y-0 right-0 flex items-center pr-4 top-7">
        <img onClick={changeVisibiltyPassword} src={showPassword ? CloseEye : OpenEye} alt="icon" className="w-4 h-3.5 cursor-pointer" />
      </div>}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
