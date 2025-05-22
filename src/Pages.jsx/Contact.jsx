import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const phoneRegex = /^[0-9]{10}$/;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    let error = '';
    if (name === 'email') {
      if (!value.trim()) {
        error = 'Please enter your email address.';
      } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) {
        error = 'Please enter a valid Gmail address.';
      }
    } else if (name === 'phone') {
      if (!value.trim()) {
        error = 'Please enter your phone number.';
      } else if (!/^[0-9]{10}$/.test(value)) {
        error = 'Phone number must be exactly 10 digits.';
      }
    } else if (!value.trim()) {
      error = `Please enter your ${name}.`;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid Gmail address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const existingData = JSON.parse(localStorage.getItem('contactFormData')) || [];
      existingData.push(formData);
      localStorage.setItem('contactFormData', JSON.stringify(existingData));
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
      alert('Message sent successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (<div className="d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="container p-4  shadow contact-container " style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4"><i className="bi bi-person-rolodex me-3"></i>
          Contact <span className="text-primary">Me</span>
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
          </div>

          <div className="mb-3">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <input
              type="tel"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
          </div>

          <div className="mb-3">
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <div className="text-center">
            <button className="btn contactbtn px-5 fs-5 border-none" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
