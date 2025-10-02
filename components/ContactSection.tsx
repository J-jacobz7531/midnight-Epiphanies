import React, { useState } from 'react';

const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
}> = ({ label, name, value, onChange, error, type = 'text', required = true }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-brand-dark-tertiary">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`mt-1 block w-full px-3 py-2 bg-transparent border-b ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-0 focus:border-brand-dark-secondary transition-colors`}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

const SelectField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}> = ({ label, name, value, onChange, error }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-dark-tertiary">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full pl-3 pr-10 py-2 bg-transparent border-b ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-0 focus:border-brand-dark-secondary transition-colors`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        <option>General Inquiry</option>
        <option>Investments</option>
        <option>Advisory</option>
      </select>
      {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
);


const TextAreaField: React.FC<{
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
  }> = ({ label, name, value, onChange, error }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-brand-dark-tertiary">
            {label}
        </label>
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows={4}
            className={`mt-1 block w-full px-3 py-2 bg-transparent border-b ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-0 focus:border-brand-dark-secondary transition-colors`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
        />
        {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
);


const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    company: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required.';
    if (!formData.secondName.trim()) newErrors.secondName = 'Second Name is required.';
    if (!formData.company.trim()) newErrors.company = 'Company is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-ig-dark text-ig-off-white pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-2">Get in Touch</h2>
            <p className="text-gray-300 font-light mb-6">Ready to make an impact? We'd love to hear from you.</p>
            
            <div className="text-gray-300 font-light leading-relaxed mb-6">
              <p>For inquiries, collaborations, or more information, reach out to us:</p>
              <a href="mailto:info@ophelholdings.org" className="text-ig-accent-teal hover:text-white underline">info@ophelholdings.org</a>
              <p className="mt-2 text-sm">Brisbane | Kampala | Luanda</p>
            </div>
            
            <div>
              <a href="https://ch.linkedin.com/company/ophelholdings" target="_blank" rel="noopener noreferrer" className="text-ig-accent-teal hover:text-white underline font-medium">LinkedIn</a>
            </div>
          </div>

          <div className="md:col-span-8">
            {isSubmitted ? (
              <div className="flex items-center justify-center h-full bg-gray-800 p-8 rounded-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-ig-off-white">Thank you!</h3>
                  <p className="mt-2 text-gray-300">Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                <InputField label="Second Name" name="secondName" value={formData.secondName} onChange={handleChange} error={errors.secondName} />
                <InputField label="Company" name="company" value={formData.company} onChange={handleChange} error={errors.company} />
                <InputField label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} type="email" />
                <TextAreaField label="Your message" name="message" value={formData.message} onChange={handleChange} error={errors.message} />
                
                <div>
                  <button
                    type="submit"
                    className="w-full text-center py-3 px-6 bg-ig-accent-teal text-ig-dark font-medium text-sm hover:bg-white hover:text-ig-dark transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
