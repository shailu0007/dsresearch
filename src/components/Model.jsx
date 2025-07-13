import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Model = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            mobile: ''
        }
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage('');
        setSubmitError('');

        try {
            // Replace with your actual API endpoint
            const response = await axios.post('/api/index.php?action=submitExpertForm', {
                name: data.name,
                mobile: data.mobile,
                timestamp: new Date().toISOString()
            });
console.log(response);
            setSubmitMessage('Thank you! We will contact you soon.');
            reset(); // Reset form after successful submission

            // Optional: Close modal after successful submission
            // You can add modal close logic here if needed

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError(
                error.response?.data?.message ||
                'Something went wrong. Please try again.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div
                className="modal fade bs-example-modal-lg"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
                id="onload"
            >
                <div className="modal-dialog">
                    <div className="modal-content freebg">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title text-center"> GET EXPERT ADVICE NOW !</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className={`form-control fr-form ${errors.name ? 'is-invalid' : ''}`}
                                                    placeholder="Your Name"
                                                    {...register('name', {
                                                        required: 'Name is required',
                                                        minLength: {
                                                            value: 2,
                                                            message: 'Name must be at least 2 characters'
                                                        },
                                                        pattern: {
                                                            value: /^[A-Za-z\s]+$/,
                                                            message: 'Name should only contain letters and spaces'
                                                        }
                                                    })}
                                                />
                                                {errors.name && (
                                                    <div className="text-danger small mt-1">
                                                        {errors.name.message}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    className={`form-control fr-form ${errors.mobile ? 'is-invalid' : ''}`}
                                                    placeholder="Mobile"
                                                    maxLength={10}
                                                    {...register('mobile', {
                                                        required: 'Mobile number is required',
                                                        pattern: {
                                                            value: /^[6-9]\d{9}$/,
                                                            message: 'Enter a valid 10-digit mobile number'
                                                        }
                                                    })}
                                                />
                                                {errors.mobile && (
                                                    <div className="text-danger small mt-1">
                                                        {errors.mobile.message}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Success Message */}
                                            {submitMessage && (
                                                <div className="alert alert-success">
                                                    {submitMessage}
                                                </div>
                                            )}

                                            {/* Error Message */}
                                            {submitError && (
                                                <div className="alert alert-danger">
                                                    {submitError}
                                                </div>
                                            )}

                                            <div className="clearfix"></div>
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-8">
                                                <button
                                                    type="submit"
                                                    className="btn btn-default btn-block"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <p className="lead">D.S Researech  </p>
                                    <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                                        <li>
                                            Want to learn how to manage the trading risks and benefits effectively? Want to know how to invest and trade in the Indian financial market? Then come to D.S Researech Investment Researcher.
                                        </li>
                                        <li>
                                            <Link to={"/about"}><u>Learn more</u></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="note">
                                <b>Kindly Note:</b>{" "}
                                <span>
                                    If any DND Customer Fill our Form then D.S Researech is authorised to Call and Messages Him/Her
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model