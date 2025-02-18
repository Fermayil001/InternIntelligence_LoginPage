import React from 'react';
import { LineWave, ThreeDots } from 'react-loader-spinner';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    isCreate?: boolean;
    disabled?: boolean;
    type?: 'submit' | 'button' | 'reset';
    isLoading?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, disabled = false, type, isCreate, isLoading }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className=
            {`mt-4 p-3 ${isCreate ? 'w-[50%]' : 'w-full'} rounded-md flex justify-center items-center relative text-white font-semibold 
                ${!isCreate  // isCreate is true change button bg color
                    ? `${disabled
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`
                    : 'bg-green-500 hover:bg-green-600'
                }`}
        >
            {isLoading
                ? (
                    <ThreeDots
                        visible={true}
                        height="25"
                        width="40"
                        color="white"
                        radius="1"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                )
                : label}
        </button>
    );
};

export default CustomButton;
