import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Model = () => {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/expert-form', data);
      alert('Form submitted successfully!');
      reset();
      setShow(false);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please try again.');
    }
  };

  if (!show) return null;

  const inputStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    placeholderColor: 'white',
  };

  return (
    <div
      className="modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1050,
        overflowY: 'auto',
      }}
    >
      <div className="modal-dialog modal-lg" style={{ marginTop: '100px' }}>
        <div className="modal-content" style={{ backgroundColor: '#222', color: 'white', padding: '20px' }}>
          <div className="modal-header border-0">
            <h4 className="modal-title text-center w-100">GET EXPERT ADVICE NOW!</h4>
            <button
              type="button"
              className="close text-white"
              onClick={() => setShow(false)}
              style={{ fontSize: '28px', fontWeight: 'bold' }}
            >
              &times;
            </button>
          </div>

          <div className="modal-body">
            <div className="row">
              {/* Left: Form */}
              <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="name" style={{ color: 'white' }}>Your Name</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      style={inputStyle}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile" style={{ color: 'white' }}>Mobile Number</label>
                    <input
                      id="mobile"
                      type="text"
                      className="form-control"
                      placeholder="Enter your 10-digit mobile"
                      maxLength={10}
                      style={inputStyle}
                      {...register('mobile', {
                        required: 'Mobile is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Mobile must be 10 digits',
                        },
                      })}
                    />
                    {errors.mobile && <small className="text-danger">{errors.mobile.message}</small>}
                  </div>

                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                  </div>
                </form>
              </div>

              {/* Right: Info */}
              <div className="col-md-6">
                <p className="lead text-white">Eminent Research</p>
                <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                  <li>
                    Want to learn how to manage trading risks and benefits effectively? Want to know how to invest and trade in the Indian financial market? Then come to Eminent Research Investment Advisors.
                  </li>
                  <li>
                    <a href="/Home/about.html" className="text-info"><u>Learn more</u></a>
                  </li>
                </ul>
              </div>
            </div>

            <p className="note mt-4 text-white">
              <strong>Kindly Note:</strong>{' '}
              <span>
                If any DND customer fills our form, Eminent Research is authorized to call and message him/her.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
