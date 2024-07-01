import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  placeHolder : string
  icon?: IconDefinition;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, id, icon ,  placeHolder }) => {
  return (
    <div className="mb-4 relative">
      <label className="block text-body mb-2" htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 pl-10"
          type={type}
          id={id}
          name={id}

          placeholder={placeHolder}
          required
        />
        {icon && <FontAwesomeIcon icon={icon} className="absolute top-2 inset-y-0 left-3 h-5 w-5 text-gray-400" />}
      </div>
    </div>
  );
};

export default FormInput;
