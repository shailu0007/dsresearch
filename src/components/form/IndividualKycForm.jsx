import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const IndividualKycForm = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const correspondenceAddress = watch('address');
    const correspondenceCity = watch('t_city');
    const correspondencePin = watch('t_pin');
    const correspondenceState = watch('t_state');
    const correspondenceCountry = watch('t_country');

    const onSubmit = async (data) => {
        const formData = new FormData();

        // Append all form data
        for (const key in data) {
            if (data[key] instanceof FileList) {
                // Handle file inputs
                if (data[key].length > 0) {
                    formData.append(key, data[key][0]);
                }
            } else {
                formData.append(key, data[key]);
            }
        }

        // Add the hidden input value
        formData.append('indv', 'Individual');

        console.log("Form Data to be sent:", Object.fromEntries(formData.entries())); // For debugging, see what's in formData

        try {
            // Replace with your actual API endpoint
            const response = await axios.post('/api/index.php?action=kycform', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important for file uploads
                },
            });
            console.log('Form submission successful:', response.data);
            alert('KYC Form Submitted Successfully!');
            // You might want to reset the form here
            // reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                alert(`Form submission failed: ${error.response.data.message || 'Server error'}`);
            } else if (error.request) {
                console.error('Error request:', error.request);
                alert('Form submission failed: No response from server. Check your network connection.');
            } else {
                console.error('Error message:', error.message);
                alert(`Form submission failed: ${error.message}`);
            }
        }
    };

    const FillBilling = (event) => {
        if (event.target.checked) {
            setValue('address2', correspondenceAddress);
            setValue('c_city', correspondenceCity);
            setValue('c_pincode', correspondencePin);
            setValue('c_state', correspondenceState);
            setValue('c_country', correspondenceCountry);
        } else {
            setValue('address2', '');
            setValue('c_city', '');
            setValue('c_pincode', '');
            setValue('c_state', '');
            setValue('c_country', '');
        }
    };

    return (
        <div id="Section1" className="tab-pane fade active in" role="tabpanel">
            <h3 className="indi">FOR INDIVIDUAL</h3>

            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" role="form">
                {/* Note: `input type="hidden"` can be directly handled by `react-hook-form`'s `setValue` or simply included in the data submitted. Here, I'm keeping it as a regular input for clarity of `register`. */}
                <input type="hidden" value="Individual" {...register("indv")} className="form-control" />

                <div className="form-group col-md-6">
                    <label htmlFor="kycname">Name&nbsp;:</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        id="kycname"
                        title="Only Alphabets"
                        className="form-control"
                        {...register("fname", { required: "Name is required", pattern: { value: /^[A-Za-z\s]+$/, message: "Only alphabets allowed" } })}
                    />
                    {errors.fname && <span className="text-danger">{errors.fname.message}</span>}
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="kycfather">Father/Spouse Name&nbsp;:</label>
                    <input
                        type="text"
                        placeholder="Father Name"
                        id="kycfather"
                        title="Please insert Only Character"
                        className="form-control"
                        {...register("father_name", { pattern: { value: /^[A-Za-z\s]+$/, message: "Only characters allowed" } })}
                    />
                </div>

                <div className="form-group col-md-6">
                    <label>Gender&nbsp;:</label>
                    <label className="radio-inline">
                        <input type="radio" value="Male" id="gender1" defaultChecked {...register("gender")} />Male
                    </label>
                    <label className="radio-inline">
                        <input type="radio" value="Female" id="gender2" {...register("gender")} />Female {/* Changed id to be unique */}
                    </label>
                </div>

                <div className="form-group col-md-6">
                    <label>Marital Status&nbsp;:</label>
                    <label className="radio-inline">
                        <input type="radio" value="Single" id="marital1" defaultChecked {...register("marital")} /> Single
                    </label>
                    <label className="radio-inline">
                        <input type="radio" value="Married" id="marital2" {...register("marital")} /> Married {/* Changed id to be unique */}
                    </label>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="kycbday">Birthday&nbsp;:</label>
                    <input
                        type="date" // Changed to type "date" for better UX
                        placeholder="Birthday"
                        id="kycbday"
                        className="form-control"
                        {...register("bday")}
                    />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="nationality1">Nationality&nbsp;:</label>
                    <input
                        type="text"
                        placeholder="Nationality"
                        id="nationality1"
                        className="form-control"
                        {...register("nationality")}
                    />
                </div>

                <div className="form-group col-md-12">
                    <label>Status&nbsp;:</label>
                    <label className="checkbox-inline">
                        <input type="radio" value="Resident Individual" id="status1" defaultChecked {...register("resident_status")} /> Resident Individual
                    </label>
                    <label className="checkbox-inline">
                        <input type="radio" value="Non Resident" id="status2" {...register("resident_status")} /> Non Resident {/* Changed id to be unique */}
                    </label>
                    <label className="checkbox-inline">
                        <input type="radio" value="Foreign National" id="status3" {...register("resident_status")} />Foreign National {/* Changed id to be unique */}
                    </label>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="kycpancard">PAN No.&nbsp;:</label>
                    <input
                        type="text"
                        placeholder="PAN Card No."
                        id="kycpancard"
                        className="form-control"
                        {...register("pancard", { required: "PAN number is required" })}
                    />
                    {errors.pancard && <span className="text-danger">{errors.pancard.message}</span>}
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="uid1">Unique Identification Number (UID)/ Aadhaar, if any&nbsp;:</label>
                    <input
                        type="text"
                        placeholder="UID"
                        id="uid1"
                        className="form-control"
                        {...register("uid")}
                    />
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="add_proof1">Specify the proof of Identity submitted&nbsp;:</label>
                        <textarea
                            id="add_proof1"
                            rows="3"
                            className="form-control"
                            {...register("add_proof")}
                        ></textarea>
                    </div>

                    <h3 className="moreh3">Address Detail</h3>
                    <div className="form-group">
                        <label htmlFor="t_add1">Address for correspondence&nbsp;:</label>
                        <textarea
                            placeholder=""
                            rows="3"
                            id="t_add1"
                            className="form-control"
                            {...register("address", { required: "Correspondence address is required" })}
                        ></textarea>
                        {errors.address && <span className="text-danger">{errors.address.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="t_city1">City/town/village&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="City/town/village"
                            id="t_city1"
                            className="form-control"
                            title="Enter valid City Name"
                            {...register("t_city", { required: "City is required", pattern: { value: /^[a-zA-Z\s]+$/, message: "Enter valid City Name" } })}
                        />
                        {errors.t_city && <span className="text-danger">{errors.t_city.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="t_pin1">Pin Code&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="Pin-Code"
                            id="t_pin1"
                            className="form-control"
                            title="Enter valid pin no"
                            {...register("t_pin", { required: "Pin code is required", pattern: { value: /^[0-9]{6}$/, message: "Enter valid 6-digit pin no" } })}
                        />
                        {errors.t_pin && <span className="text-danger">{errors.t_pin.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="t_state12">State&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="State"
                            id="t_state12"
                            className="form-control"
                            title="Enter valid State Name"
                            {...register("t_state", { required: "State is required", pattern: { value: /^[a-zA-Z\s]+$/, message: "Enter valid State Name" } })}
                        />
                        {errors.t_state && <span className="text-danger">{errors.t_state.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="t_country12">Country&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="Country"
                            id="t_country12"
                            className="form-control"
                            title="Enter valid State Name"
                            {...register("t_country", { required: "Country is required", pattern: { value: /^[a-zA-Z\s]+$/, message: "Enter valid Country Name" } })}
                        />
                        {errors.t_country && <span className="text-danger">{errors.t_country.message}</span>}
                    </div>

                    <h3 className="moreh3">Contact Details</h3>
                    <div className="form-group">
                        <label htmlFor="cont1">Tel.(Off.)&nbsp;:</label>
                        <input
                            type="text"
                            maxLength="10"
                            placeholder="Office Contact"
                            id="cont1"
                            className="form-control"
                            title="Enter Only Numeric Value"
                            {...register("tel_off", { pattern: { value: /^[0-9]+$/, message: "Only numeric values allowed" } })}
                        />
                        {errors.tel_off && <span className="text-danger">{errors.tel_off.message}</span>}

                        <label htmlFor="cont2">Tel.(Res.)&nbsp;:</label>
                        <input
                            type="text"
                            maxLength="10"
                            placeholder="Residential Contact"
                            id="cont2"
                            className="form-control"
                            title="Enter Only Numeric Value"
                            {...register("tel_res", { pattern: { value: /^[0-9]+$/, message: "Only numeric values allowed" } })}
                        />
                        {errors.tel_res && <span className="text-danger">{errors.tel_res.message}</span>}

                        <label htmlFor="cont3">Mobile No&nbsp;:</label>
                        <input
                            type="text"
                            maxLength="10"
                            placeholder="Personal Contact"
                            id="cont3"
                            className="form-control"
                            title="Enter Only Numeric Value"
                            {...register("mobile1", { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit mobile number" } })}
                        />
                        {errors.mobile1 && <span className="text-danger">{errors.mobile1.message}</span>}

                        <label htmlFor="faxno4">Fax No.&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="Fax Contact"
                            id="faxno4"
                            className="form-control"
                            title="Enter Only Numeric Value"
                            {...register("fax", { pattern: { value: /^[0-9]+$/, message: "Only numeric values allowed" } })}
                        />
                        {errors.fax && <span className="text-danger">{errors.fax.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="kycemail">Email address&nbsp;:</label>
                        <input
                            type="email"
                            placeholder="Email "
                            id="kycemail"
                            className="form-control"
                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="add_prf12">Specify the proof of address submitted for correspondence address&nbsp;:</label>
                        <textarea
                            placeholder=""
                            rows="3"
                            className="form-control"
                            {...register("add_prf12")}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label className="checkbox-inline">
                            <input
                                type="checkbox"
                                name="billingtoo"
                                onChange={FillBilling} // Use onChange for React
                            /> Same as above
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address2">Address for correspondence&nbsp;:</label>
                        <textarea
                            placeholder=""
                            rows="3"
                            id="address2"
                            className="form-control"
                            {...register("address2")}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="c_city">City/town/village&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="City"
                            id="c_city"
                            className="form-control"
                            title="ENter Valid Entry"
                            {...register("c_city", { pattern: { value: /^[a-zA-Z\s]+$/, message: "Enter valid City Name" } })}
                        />
                        {errors.c_city && <span className="text-danger">{errors.c_city.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="c_pin">Pin Code&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="Pin Code"
                            id="c_pin"
                            className="form-control"
                            {...register("c_pincode", { pattern: { value: /^[0-9]{6}$/, message: "Enter valid 6-digit pin no" } })}
                        />
                        {errors.c_pincode && <span className="text-danger">{errors.c_pincode.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="c_state">State&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="State"
                            id="c_state"
                            className="form-control"
                            title="Enter valid Entry"
                            {...register("c_state", { pattern: { value: /^[a-zA-Z\s]+$/, message: "Enter valid State Name" } })}
                        />
                        {errors.c_state && <span className="text-danger">{errors.c_state.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="c_country">Country&nbsp;:</label>
                        <input
                            type="text"
                            placeholder="Country"
                            id="c_country"
                            className="form-control"
                            title="Enter valid Entry"
                            {...register("c_country", { pattern: { value: /^[a-zA-Z\s]+$/, message: "Enter valid Country Name" } })}
                        />
                        {errors.c_country && <span className="text-danger">{errors.c_country.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="add_prf2">Specify the proof of address submitted for registered address&nbsp;:</label>
                        <textarea
                            placeholder=""
                            rows="3"
                            className="form-control"
                            {...register("add_prf2")}
                        ></textarea>
                    </div>

                    <h3 className="moreh3">Other Details</h3>
                    <div className="form-group ">
                        <label htmlFor="income-select">Gross Annual Income Details&nbsp;:</label>
                        <select id="income-select" className="form-control" {...register("income")}>
                            <option value="Below Rs 1 Lac">Below Rs 1 Lac</option>
                            <option value="1-5 Lac">1-5 Lac</option>
                            <option value="5-10 Lac">5-10 Lac </option>
                            <option value="10-25 Lac ">10-25 Lac </option>
                            <option value="25 Lacs-1 crore">25 Lacs-1 crore</option>
                            <option value="More then 1 crore">More then 1 crore</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="net_amount">Net-worth Amount&nbsp;:</label>
                        <input
                            type="text"
                            placeholder=""
                            id="net_amount"
                            className="form-control"
                            {...register("net_amount", { pattern: { value: /^[0-9]*\.?[0-9]*$/, message: "Enter valid amount" } })}
                        />
                        {errors.net_amount && <span className="text-danger">{errors.net_amount.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="net_date">Net-worth Date&nbsp;:</label>
                        <input
                            type="date" // Changed to type "date"
                            placeholder=""
                            id="net_date"
                            className="form-control"
                            {...register("net_date")}
                        />
                    </div>

                    <div className="form-group ">
                        <label htmlFor="occupation-select">Occupation&nbsp;:</label>
                        <br />
                        <select id="occupation-select" className="form-control" {...register("occupation")}>
                            <option value="Private Sector">Private Sector</option>
                            <option value="Public Sector">Public Sector</option>
                            <option value="Government Service">Government Service</option>
                            <option value="Business">Business</option>
                            <option value="Professional">Professional</option>
                            <option value="Agriculturist">Agriculturist</option>
                            <option value="Retired">Retired</option>
                            <option value="Housewife">Housewife</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="form-group ">
                        <label htmlFor="authorized-select">Please Selects, if applicable, for any of your authorized signatories/ Promoters/ Partners/ Karta/ Trustees/ whole time directors&nbsp;:</label>
                        <select id="authorized-select" className="form-control" {...register("authorized")}>
                            <option value="Politically Exposed Person (PEP)"> Politically Exposed Person (PEP)</option>
                            <option value="Related to a Politically Exposed Person (PEP)"> Related to a Politically Exposed Person (PEP)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="other_info">Any Other Information&nbsp;:</label>
                        <textarea
                            placeholder="Any Other Information"
                            rows="3"
                            id="other_info"
                            className="form-control"
                            {...register("other_info")}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="kycsignature">Upload Signature&nbsp;:(Only jpg,png,jpeg Format File)<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="file"
                            id="kycsignature"
                            {...register("nonsignature", { required: "Signature upload is required" })}
                            accept=".jpg,.png,.jpeg"
                        />
                        {errors.nonsignature && <span className="text-danger">{errors.nonsignature.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="kycphoto">Upload Photo&nbsp;:(Only jpg,png,jpeg Format File)<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="file"
                            id="kycphoto"
                            {...register("nonphoto", { required: "Photo upload is required" })}
                            accept=".jpg,.png,.jpeg"
                        />
                        {errors.nonphoto && <span className="text-danger">{errors.nonphoto.message}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="kycdocumenttsss">Upload Document&nbsp;:(Only xlsx,xls,pdf,docx,doc Format File)<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="file"
                            id="kycdocumenttsss"
                            {...register("nondocument", { required: "Document upload is required" })}
                            accept=".xlsx,.xls,.pdf,.docx,.doc"
                        />
                        {errors.nondocument && <span className="text-danger">{errors.nondocument.message}</span>}
                    </div>
                </div>


                <div className="col-sm-12">
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                defaultChecked
                                {...register("agree", { required: "You must agree to terms and conditions" })}
                            />I agree to all <span style={{ color: '#000' }}><a href="http://192.168.0.157/myresearchworld/index.php/home/TermConditions" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions.</a></span>&nbsp;
                        </label>
                        {errors.agree && <span className="text-danger">{errors.agree.message}</span>}
                    </div>
                </div>

                <button id="savekyc" className="btn01 ml15" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default IndividualKycForm