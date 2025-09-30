import React from 'react';

export const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
}> = ({ label, name, value, onChange, error, type = 'text', required = true }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  
  return (
    <div className="form-field-container relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1 transition-colors duration-200">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`mt-1 block w-full px-3 py-3 bg-transparent border-b-2 ${error ? 'border-red-500' : isFocused ? 'border-ig-accent-teal' : 'border-gray-500'} focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out placeholder-gray-400 text-ig-off-white form-field`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-500 animate-pulse flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export const SelectField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}> = ({ label, name, value, onChange, error }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  
  return (
    <div className="form-field-container relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1 transition-colors duration-200">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full pl-3 pr-10 py-3 bg-gray-900 border-b-2 ${error ? 'border-red-500' : isFocused ? 'border-ig-accent-teal' : 'border-gray-500'} focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out text-ig-off-white appearance-none cursor-pointer form-field`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          <option value="" disabled className="bg-gray-900 text-gray-400">Select an option</option>
          <option value="General Inquiry" className="bg-gray-900 text-ig-off-white">General Inquiry</option>
          <option value="Investments" className="bg-gray-900 text-ig-off-white">Investments</option>
          <option value="Advisory" className="bg-gray-900 text-ig-off-white">Advisory</option>
          <option value="Partnership" className="bg-gray-900 text-ig-off-white">Partnership</option>
          <option value="Media" className="bg-gray-900 text-ig-off-white">Media</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-500 animate-pulse flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export const TextAreaField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}> = ({ label, name, value, onChange, error }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  
  return (
    <div className="form-field-container relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1 transition-colors duration-200">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className={`mt-1 block w-full px-3 py-3 bg-transparent border-b-2 ${error ? 'border-red-500' : isFocused ? 'border-ig-accent-teal' : 'border-gray-500'} focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out resize-none placeholder-gray-400 text-ig-off-white form-field`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-red-500 animate-pulse flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};
