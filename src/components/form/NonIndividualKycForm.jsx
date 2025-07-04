// NonIndividualKycForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function NonIndividualKycForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const formData = new FormData();

        // Append all form data
        for (const key in data) {
            if (data[key] instanceof FileList) {
                if (data[key].length > 0) {
                    formData.append(key, data[key][0]);
                }
            } else {
                formData.append(key, data[key]);
            }
        }

        // Add the hidden input value specific to non-individual
        formData.append('indv', 'NonIndividual');

        console.log("Non-Individual Form Data to be sent:", Object.fromEntries(formData.entries()));

        try {
            const response = await axios.post('https://www.eminentresearch.co/Webcontroller/kyc', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Non-Individual Form submission successful:', response.data);
            alert('Non-Individual KYC Form Submitted Successfully!');
            reset(); // Reset the form after successful submission
        } catch (error) {
            console.error('Error submitting non-individual form:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                alert(`Non-Individual form submission failed: ${error.response.data.message || 'Server error'}`);
            } else if (error.request) {
                console.error('Error request:', error.request);
                alert('Non-Individual form submission failed: No response from server. Check your network connection.');
            } else {
                console.error('Error message:', error.message);
                alert(`Non-Individual form submission failed: ${error.message}`);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h3 className="indi">FOR NON INDIVIDUAL</h3>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" role="form">
                <input type="hidden" value="NonIndividual" {...register("indv")} className="form-control" />

                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="companyName">Company/Entity Name&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="Company/Entity Name"
                            id="companyName"
                            className="form-control"
                            {...register("companyName", { required: "Company/Entity Name is required" })}
                        />
                        {errors.companyName && <span className="text-danger">{errors.companyName.message}</span>}
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="registrationNo">Registration Number&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="Registration Number"
                            id="registrationNo"
                            className="form-control"
                            {...register("registrationNo", { required: "Registration Number is required" })}
                        />
                        {errors.registrationNo && <span className="text-danger">{errors.registrationNo.message}</span>}
                    </div>

                    <div className="form-group col-md-12">
                        <label htmlFor="registeredAddress">Registered Address&nbsp;:</label>
                        <textarea
                            placeholder="Registered Address"
                            rows="3"
                            id="registeredAddress"
                            className="form-control"
                            {...register("registeredAddress", { required: "Registered Address is required" })}
                        ></textarea>
                        {errors.registeredAddress && <span className="text-danger">{errors.registeredAddress.message}</span>}
                    </div>

                    <div className="form-group col-md-12">
                        <label htmlFor="non_signature">Upload Authorized Signatory Signature&nbsp;:(Only jpg,png,jpeg Format File)<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="file"
                            id="non_signature"
                            className="form-control"
                            {...register("non_signature", { required: "Signature upload is required" })}
                            accept=".jpg,.png,.jpeg"
                        />
                        {errors.non_signature && <span className="text-danger">{errors.non_signature.message}</span>}
                    </div>

                    <div className="form-group col-md-12">
                        <label htmlFor="non_document">Upload Entity Documents&nbsp;:(Only xlsx,xls,pdf,docx,doc Format File)<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="file"
                            id="non_document"
                            className="form-control"
                            {...register("non_document", { required: "Document upload is required" })}
                            accept=".xlsx,.xls,.pdf,.docx,.doc"
                        />
                        {errors.non_document && <span className="text-danger">{errors.non_document.message}</span>}
                    </div>

                    <div className="form-group col-md-12">
                        <label htmlFor="non_kyccaptcha">Confirmation Code *&nbsp;:</label>
                        <div>
                            <img id="non_image" src="Webcontroller/kyccaptcha/84137.png" alt="Captcha" />
                            <input
                                name="non_captcha"
                                className="form-control"
                                placeholder="Please Enter Captcha"
                                type="text"
                                id="non_kyccaptcha"
                                style={{ width: '251px', marginTop: '10px' }}
                                {...register("non_captcha", { required: "Captcha is required" })}
                            />
                        </div>
                        {errors.non_captcha && <span className="text-danger">{errors.non_captcha.message}</span>}
                    </div>

                    <div className="col-sm-12">
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    {...register("non_agree", { required: "You must agree to terms and conditions" })}
                                />I agree to all <span style={{ color: '#000' }}><a href="http://192.168.0.157/myresearchworld/index.php/home/TermConditions" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions.</a></span>&nbsp;
                            </label>
                            {errors.non_agree && <span className="text-danger">{errors.non_agree.message}</span>}
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <button 
                            id="savekyc_non" 
                            className="btn01 ml15" 
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Non-Individual Form'}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default NonIndividualKycForm;