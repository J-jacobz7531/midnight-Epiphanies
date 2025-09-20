import React from 'react';

export const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
}> = ({ label, name, value, onChange, error, type = 'text', required = true }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-ig-text-dark">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`mt-1 block w-full px-3 py-2 bg-transparent border-b ${
        error ? 'border-red-500' : 'border-gray-300'
      } focus:outline-none focus:ring-0 focus:border-ig-accent-teal transition-colors`}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

export const SelectField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}> = ({ label, name, value, onChange, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-ig-text-dark">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`mt-1 block w-full pl-3 pr-10 py-2 bg-transparent border-b ${
        error ? 'border-red-500' : 'border-gray-300'
      } focus:outline-none focus:ring-0 focus:border-ig-accent-teal transition-colors`}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    >
      <option>General Inquiry</option>
      <option>Investments</option>
      <option>Advisory</option>
      <option>Partnership</option>
      <option>Media</option>
    </select>
    {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

export const TextAreaField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}> = ({ label, name, value, onChange, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-ig-text-dark">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      className={`mt-1 block w-full px-3 py-2 bg-transparent border-b ${
        error ? 'border-red-500' : 'border-gray-300'
      } focus:outline-none focus:ring-0 focus:border-ig-accent-teal transition-colors resize-none`}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);
