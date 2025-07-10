import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://www.eminentresearch.co/Home/contact',
        data
      );
      console.log('Response:', response.data);
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      {/* Contact Info */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <div style={{ padding: 20, border: '1px solid #eee', borderRadius: 10 }}>
            <i className="fa fa-phone fa-2x mb-2 d-block"></i>
            <h4 style={{ margin: '10px 0' }}>Phone Number</h4>
            <p>83700-39800</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div style={{ padding: 20, border: '1px solid #eee', borderRadius: 10 }}>
            <i className="fa fa-envelope fa-2x mb-2 d-block"></i>
            <h4 style={{ margin: '10px 0' }}>Email Support</h4>
            <p>info@eminentresearch.co</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div style={{ padding: 20, border: '1px solid #eee', borderRadius: 10 }}>
            <i className="fa fa-map-marker fa-2x mb-2 d-block"></i>
            <h4 style={{ margin: '10px 0' }}>Location</h4>
            <p style={{ fontSize: '14px' }}>
              D.S Researech Investment Advisors, 10/4-6,II Floor,Kalidas Marg,Maxi Road,Freeganj,Ujjain (M.P), Ujjain (MP) 456001
            </p>
            <div className="mt-3">
              <a href="#" className="me-3 text-dark">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="text-center mb-4">
            <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: 0 }}>Contact Us</p>
            <h2 style={{ fontWeight: '600' }}>Keep in touch</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="col-md-12 mb-3">
                <input
                  type="text"
                  placeholder="Subject"
                  className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
              </div>

              <div className="col-md-12 mb-3">
                <textarea
                  placeholder="How can I help you?"
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
              </div>

              {/* Captcha */}
              <div className="col-md-4 mb-3 text-center">
                <img
                  src="captcha/1750950720.8461.jpg"
                  alt="Captcha"
                  style={{ width: 150, height: 30, border: '1px solid #ccc' }}
                />
              </div>
              <div className="col-md-8 mb-3">
                <input
                  type="text"
                  placeholder="Captcha code"
                  className={`form-control ${errors.cicaptcha ? 'is-invalid' : ''}`}
                  {...register('cicaptcha', { required: 'Captcha is required' })}
                />
                {errors.cicaptcha && <div className="invalid-feedback">{errors.cicaptcha.message}</div>}
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary px-5" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>

              {isSubmitSuccessful && (
                <div className="col-12 mt-3">
                  <div className="alert alert-success text-center">
                    Your message has been sent successfully!
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-5">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45446938823!2d75.72376397472755!3d22.72391173166939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1521104631397"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
