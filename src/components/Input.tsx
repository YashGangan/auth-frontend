import { FC } from 'react';
import { useField } from 'formik';

interface InputProps {
  label: string; 
  name: string;
  type?: string; 
  placeholder?: string; 
  className?: string;
}

const Input: FC<InputProps> = ({ label, name, type = 'text', placeholder, className }) => {
  const [field, meta] = useField(name); 

  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={name} className="block text-sm mb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...field} 
        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        aria-invalid={!!meta.error && meta.touched} 
      />
      {meta.touched && meta.error && (
        <div className="text-xs text-red-600 mt-2" role="alert">
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default Input;
