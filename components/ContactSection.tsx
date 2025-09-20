import React, { useState } from 'react';
import { InputField, SelectField, TextAreaField } from './ContactFormFields';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    department: 'General Inquiry',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.';
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      department: 'General Inquiry',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-ig-dark-2 relative z-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 -mb-40 lg:-mb-52">
        <div
          className="bg-ig-off-white text-ig-text-dark p-8 sm:p-12 md:p-16 lg:p-20 relative shadow-2xl"
          style={{
            transform: 'translateY(calc(-1 * min(20vw, 150px)))',
            marginBottom: 'calc(-1 * min(20vw, 150px))'
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6vh] text-ig-text-dark leading-tight mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6 text-ig-text-dark/80">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                  <p className="leading-relaxed">
                    iGravity Holdings<br />
                    Zurich, Switzerland<br />
                    impact@igravity.com
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                  <p className="leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM CET<br />
                    Weekend: By appointment
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              {isSubmitted ? (
                <div className="flex items-center justify-center h-full bg-gray-50 p-8 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-ig-text-dark mb-2">Thank you!</h3>
                    <p className="text-ig-text-dark/70 mb-6">
                      Your message has been sent successfully. We will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="text-ig-accent-teal hover:text-ig-accent-orange transition-colors duration-300 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      label="First Name" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      error={errors.firstName} 
                    />
                    <InputField 
                      label="Last Name" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      error={errors.lastName} 
                    />
                  </div>
                  
                  <InputField 
                    label="Company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    error={errors.company} 
                  />
                  
                  <InputField 
                    label="Email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    error={errors.email} 
                    type="email" 
                  />
                  
                  <SelectField 
                    label="Department" 
                    name="department" 
                    value={formData.department} 
                    onChange={handleChange} 
                    error={errors.department} 
                  />
                  
                  <TextAreaField 
                    label="Your message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    error={errors.message} 
                  />
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-center py-4 px-6 bg-ig-text-dark text-ig-off-white font-medium text-sm border-2 border-ig-accent-teal hover:bg-ig-accent-teal hover:text-ig-text-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
