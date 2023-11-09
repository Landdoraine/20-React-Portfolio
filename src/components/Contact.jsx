import React, { useState } from 'react';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormData);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.values(newErrors).every((error) => error === '')) {
      console.log('Form submitted successfully:', formData);
    } else {
      setFormErrors(newErrors);
    }
  };

  const validateForm = ({ name, email, message }) => {
    const newErrors = {
      name: name === '' ? 'Name is required' : '',
      email: isValidEmail(email) ? '' : 'Invalid email address',
      message: message === '' ? 'Message is required' : '',
    };
    return newErrors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
        {Object.keys(initialFormData).map((field) => (
          <div className="form-group mb-3" key={field}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            {field === 'message' ? (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="form-control"
              ></textarea>
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="form-control"
              />
            )}
            <span className="error">{formErrors[field]}</span>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
