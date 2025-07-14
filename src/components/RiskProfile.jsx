import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Assuming you'll use axios for API calls

// Base URL for your backend API
const API_BASE_URL = 'http://localhost/backend'; // Adjust if your backend is on a different URL

function RiskProfileForm() {
    const {
        register,
        handleSubmit,
        watch,
        setValue, // Used to programmatically set form values
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm({
        defaultValues: {
            name: '',
            mobile: '',
            email: '',
            panno: '',
            adhar: '',
            birth: '', // Assuming format 'YYYY-MM-DD' for date input
            gender1: '',
            agegroup: '',
            invgoal: '',
            occupation: '',
            income: '',
            trading: '',
            preftrading: '',
            tradingexp: '',
            quitexp: '',
            debt: '',
            fund: '',
            depend: '',
            emerfund: '',
            tolerance: '',
            overall_exp_invest: '',
            expect: '',
            market_direction: '',
            inv_decision: '',
            time_invest: '',
            servicesOffered: [], // Initialize as an empty array for checkboxes
            // totalRiskScore and riskProfile will be calculated or derived
        }
    });

    // Watch specific fields to derive totalRiskScore and riskProfile
    const watchTradingExp = watch('tradingexp');
    const watchQuitExp = watch('quitexp');
    const watchTolerance = watch('tolerance');
    const watchOverallExpInvest = watch('overall_exp_invest');

    // State for calculated fields (you might move this calculation to backend or simplify)
    const [totalRiskScore, setTotalRiskScore] = useState(0);
    const [riskProfile, setRiskProfile] = useState('');

    useEffect(() => {
        // Example: Simple logic for calculating risk score and profile
        // This is a placeholder. You'll need to implement your actual risk assessment logic.
        let score = 0;
        let profile = 'Low Risk';

        // Add points based on selected options for risk assessment
        // (You'll need to expand this based on your actual scoring logic)
        if (watchTradingExp === 'More than 5 years') score += 10;
        else if (watchTradingExp === '3-5 years') score += 7;
        else if (watchTradingExp === '1-3 years') score += 4;

        if (watchQuitExp === 'Not at all') score += 5;
        else if (watchQuitExp === 'Maybe in 1-2 years') score += 3;

        if (watchTolerance === 'High tolerance') score += 10;
        else if (watchTolerance === 'Moderate tolerance') score += 5;

        if (watchOverallExpInvest === 'Very high Experience') score += 10;
        else if (watchOverallExpInvest === 'High Experience') score += 7;
        else if (watchOverallExpInvest === 'Moderate experience') score += 4;

        setTotalRiskScore(score);

        if (score > 30) profile = 'High Risk';
        else if (score > 15) profile = 'Medium Risk';
        else profile = 'Low Risk'; // Default or calculated based on score range

        setRiskProfile(profile);

        // Set the calculated values into the form fields programmatically
        // This is important so they are included in the submitted data
        setValue('totalRiskScore', score);
        setValue('riskProfile', profile);

    }, [watchTradingExp, watchQuitExp, watchTolerance, watchOverallExpInvest, setValue]);


    const onSubmit = async (data) => {
        try {
            // The calculated totalRiskScore and riskProfile are already set into the form
            // using setValue, so they will be part of the `data` object.
            const payload = { ...data };

            console.log("Form data before sending:", payload);

            // Make the API call to your backend
            const response = await axios.post("/api/index.php?action=riskprofileform", payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Backend response:', response.data);
            alert('Risk Profile submitted successfully!');

        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response) {
                console.error('Backend error data:', error.response.data);
                console.error('Backend error status:', error.response.status);
                console.error('Backend error headers:', error.response.headers);
                alert(`Submission failed: ${error.response.data?.message || error.response.data || error.message}`);
            } else if (error.request) {
                console.error('No response received:', error.request);
                alert('Submission failed: No response from server. Check network connection.');
            } else {
                console.error('Error setting up request:', error.message);
                alert(`Submission failed: ${error.message}`);
            }
        }
    };

    return (
        <div className="risk-profile-container">
            <style jsx>{`
                .risk-profile-container {
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 30px;
                    background: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    color: #333;
                }

                h2 {
                    text-align: center;
                    color: #0056b3;
                    margin-bottom: 30px;
                    font-size: 2em;
                }

                h3 {
                    color: #007bff;
                    border-bottom: 2px solid #e9ecef;
                    padding-bottom: 10px;
                    margin-top: 30px;
                    margin-bottom: 20px;
                }

                form {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 15px;
                }

                label {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 15px;
                    font-weight: 600;
                    color: #555;
                }

                input[type="text"],
                input[type="email"],
                input[type="date"],
                select {
                    width: 100%;
                    padding: 10px;
                    margin-top: 5px;
                    border: 1px solid #ced4da;
                    border-radius: 5px;
                    font-size: 1rem;
                    box-sizing: border-box; /* Include padding and border in the element's total width and height */
                }

                input[type="text"]:focus,
                input[type="email"]:focus,
                input[type="date"]:focus,
                select:focus {
                    border-color: #007bff;
                    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                    outline: none;
                }

                .checkbox-group div {
                    margin-bottom: 10px;
                }

                .checkbox-group label {
                    flex-direction: row; /* Align checkbox and label horizontally */
                    align-items: center;
                    margin-bottom: 0;
                }

                .checkbox-group input[type="checkbox"] {
                    margin-right: 10px;
                    width: auto; /* Override general input width for checkboxes */
                }

                span.error-message {
                    color: #dc3545;
                    font-size: 0.85em;
                    margin-top: 5px;
                }

                button[type="submit"] {
                    background-color: #28a745;
                    color: white;
                    padding: 12px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-top: 20px;
                    transition: background-color 0.3s ease;
                }

                button[type="submit"]:hover:not(:disabled) {
                    background-color: #218838;
                }

                button[type="submit"]:disabled {
                    background-color: #6c757d;
                    cursor: not-allowed;
                }

                p {
                    font-size: 1rem;
                    line-height: 1.5;
                    margin-bottom: 10px;
                }

                p.success-message {
                    color: #28a745;
                    font-weight: bold;
                    text-align: center;
                    margin-top: 15px;
                }

                /* Responsive adjustments */
                @media (max-width: 600px) {
                    .risk-profile-container {
                        margin: 20px 10px;
                        padding: 20px;
                    }
                }
            `}</style>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Risk Profile Assessment</h2>

                {/* Personal Information */}
                <h3>Personal Information</h3>
                <label>
                    Name:
                    <input type="text" {...register('name', { required: 'Name is required' })} />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                </label>
                <label>
                    Mobile:
                    <input type="text" {...register('mobile', { required: 'Mobile is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid mobile number (10 digits)' }})} />
                    {errors.mobile && <span className="error-message">{errors.mobile.message}</span>}
                </label>
                <label>
                    Email:
                    <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </label>
                <label>
                    PAN No:
                    <input type="text" {...register('panno', { required: 'PAN is required', pattern: { value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i, message: 'Invalid PAN format' } })} />
                    {errors.panno && <span className="error-message">{errors.panno.message}</span>}
                </label>
                <label>
                    Aadhar No:
                    <input type="text" {...register('adhar', { required: 'Aadhar is required', pattern: { value: /^[0-9]{12}$/, message: 'Invalid Aadhar number (12 digits)' } })} />
                    {errors.adhar && <span className="error-message">{errors.adhar.message}</span>}
                </label>
                <label>
                    Date of Birth:
                    <input type="date" {...register('birth', { required: 'Date of Birth is required' })} />
                    {errors.birth && <span className="error-message">{errors.birth.message}</span>}
                </label>
                <label>
                    Gender:
                    <select {...register('gender1', { required: 'Gender is required' })}>
                        <option value="">Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.gender1 && <span className="error-message">{errors.gender1.message}</span>}
                </label>
                <label>
                    Age Group:
                    <select {...register('agegroup', { required: 'Age Group is required' })}>
                        <option value="">Select...</option>
                        <option value="Under 30">Under 30</option>
                        <option value="30-45">30-45</option>
                        <option value="45-60">45-60</option>
                        <option value="Above 60">Above 60</option>
                    </select>
                    {errors.agegroup && <span className="error-message">{errors.agegroup.message}</span>}
                </label>

                {/* Financial Information */}
                <h3>Financial Information</h3>
                <label>
                    Investment Goal:
                    <select {...register('invgoal', { required: 'Investment Goal is required' })}>
                        <option value="">Select...</option>
                        <option value="Capital Appreciation">Capital Appreciation</option>
                        <option value="Regular Income">Regular Income</option>
                        <option value="Wealth Preservation">Wealth Preservation</option>
                        <option value="Tax Saving">Tax Saving</option>
                    </select>
                    {errors.invgoal && <span className="error-message">{errors.invgoal.message}</span>}
                </label>
                <label>
                    Occupation:
                    <select {...register('occupation', { required: 'Occupation is required' })}>
                        <option value="">Select...</option>
                        <option value="Salaried">Salaried</option>
                        <option value="Business">Business</option>
                        <option value="Self-Employed">Self-Employed</option>
                        <option value="Professional">Professional</option>
                        <option value="Retired">Retired</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.occupation && <span className="error-message">{errors.occupation.message}</span>}
                </label>
                <label>
                    Annual Income:
                    <select {...register('income', { required: 'Income is required' })}>
                        <option value="">Select...</option>
                        <option value="Below 2 lac">Below 2 lac</option>
                        <option value="2-5 lac">2-5 lac</option>
                        <option value="5-10 lac">5-10 lac</option>
                        <option value="Above 10 lac">Above 10 lac</option>
                    </select>
                    {errors.income && <span className="error-message">{errors.income.message}</span>}
                </label>
                <label>
                    Trading Frequency:
                    <select {...register('trading', { required: 'Trading frequency is required' })}>
                        <option value="">Select...</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Occasionally">Occasionally</option>
                    </select>
                    {errors.trading && <span className="error-message">{errors.trading.message}</span>}
                </label>
                <label>
                    Preferred Trading Style:
                    <select {...register('preftrading', { required: 'Preferred trading style is required' })}>
                        <option value="">Select...</option>
                        <option value="Intraday Trading">Intraday Trading</option>
                        <option value="Swing Trading">Swing Trading</option>
                        <option value="BTST/STBT Trading">BTST/STBT Trading</option>
                        <option value="Long Term Investing">Long Term Investing</option>
                    </select>
                    {errors.preftrading && <span className="error-message">{errors.preftrading.message}</span>}
                </label>
                <label>
                    Trading Experience:
                    <select {...register('tradingexp', { required: 'Trading experience is required' })}>
                        <option value="">Select...</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="More than 5 years">More than 5 years</option>
                    </select>
                    {errors.tradingexp && <span className="error-message">{errors.tradingexp.message}</span>}
                </label>
                <label>
                    When do you plan to quit trading completely?
                    <select {...register('quitexp', { required: 'This field is required' })}>
                        <option value="">Select...</option>
                        <option value="Never">Never</option>
                        <option value="Maybe in 1-2 years">Maybe in 1-2 years</option>
                        <option value="Maybe in 3-5 years">Maybe in 3-5 years</option>
                        <option value="Not at all">Not at all</option>
                    </select>
                    {errors.quitexp && <span className="error-message">{errors.quitexp.message}</span>}
                </label>
                <label>
                    Knowledge about Debt Funds:
                    <select {...register('debt', { required: 'Knowledge is required' })}>
                        <option value="">Select...</option>
                        <option value="Very less Experience">Very less Experience</option>
                        <option value="Less Experience">Less Experience</option>
                        <option value="Moderate experience">Moderate experience</option>
                        <option value="High Experience">High Experience</option>
                        <option value="Very high Experience">Very high Experience</option>
                    </select>
                    {errors.debt && <span className="error-message">{errors.debt.message}</span>}
                </label>
                <label>
                    Knowledge about Fund Types:
                    <select {...register('fund', { required: 'Knowledge is required' })}>
                        <option value="">Select...</option>
                        <option value="Very less Experience">Very less Experience</option>
                        <option value="Less Experience">Less Experience</option>
                        <option value="Moderate experience">Moderate experience</option>
                        <option value="High Experience">High Experience</option>
                        <option value="Very high Experience">Very high Experience</option>
                    </select>
                    {errors.fund && <span className="error-message">{errors.fund.message}</span>}
                </label>
                <label>
                    Number of Dependents:
                    <select {...register('depend', { required: 'This field is required' })}>
                        <option value="">Select...</option>
                        <option value="0">0</option>
                        <option value="1-2">1-2</option>
                        <option value="3-5">3-5</option>
                        <option value="More than 5">More than 5</option>
                    </select>
                    {errors.depend && <span className="error-message">{errors.depend.message}</span>}
                </label>
                <label>
                    Emergency Fund Cover (in months):
                    <select {...register('emerfund', { required: 'This field is required' })}>
                        <option value="">Select...</option>
                        <option value="Less than 1 month">Less than 1 month</option>
                        <option value="Between 1-3 months">Between 1-3 months</option>
                        <option value="Between 3-6 months">Between 3-6 months</option>
                        <option value="More than 6 months">More than 6 months</option>
                    </select>
                    {errors.emerfund && <span className="error-message">{errors.emerfund.message}</span>}
                </label>
                <label>
                    Risk Tolerance:
                    <select {...register('tolerance', { required: 'Risk tolerance is required' })}>
                        <option value="">Select...</option>
                        <option value="Low tolerance">Low tolerance</option>
                        <option value="Moderate tolerance">Moderate tolerance</option>
                        <option value="High tolerance">High tolerance</option>
                    </select>
                    {errors.tolerance && <span className="error-message">{errors.tolerance.message}</span>}
                </label>
                <label>
                    Overall Investment Experience:
                    <select {...register('overall_exp_invest', { required: 'Experience is required' })}>
                        <option value="">Select...</option>
                        <option value="Very less Experience">Very less Experience</option>
                        <option value="Less Experience">Less Experience</option>
                        <option value="Moderate experience">Moderate experience</option>
                        <option value="High Experience">High Experience</option>
                        <option value="Very high Experience">Very high Experience</option>
                    </select>
                    {errors.overall_exp_invest && <span className="error-message">{errors.overall_exp_invest.message}</span>}
                </label>
                <label>
                    Market Expectations:
                    <select {...register('expect', { required: 'Market expectation is required' })}>
                        <option value="">Select...</option>
                        <option value="Very Aggressive">Very Aggressive</option>
                        <option value="Aggressive">Aggressive</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Conservative">Conservative</option>
                        <option value="Very Conservative">Very Conservative</option>
                    </select>
                    {errors.expect && <span className="error-message">{errors.expect.message}</span>}
                </label>
                <label>
                    Market Direction View:
                    <select {...register('market_direction', { required: 'Market direction view is required' })}>
                        <option value="">Select...</option>
                        <option value="Bullish">Bullish</option>
                        <option value="Bearish">Bearish</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Indifferent">Indifferent</option>
                    </select>
                    {errors.market_direction && <span className="error-message">{errors.market_direction.message}</span>}
                </label>
                <label>
                    Investment Decision Making:
                    <select {...register('inv_decision', { required: 'Decision making style is required' })}>
                        <option value="">Select...</option>
                        <option value="Self-made decisions">Self-made decisions</option>
                        <option value="Based on advice">Based on advice</option>
                        <option value="Combination of both">Combination of both</option>
                    </select>
                    {errors.inv_decision && <span className="error-message">{errors.inv_decision.message}</span>}
                </label>
                <label>
                    Time Horizon for Investment:
                    <select {...register('time_invest', { required: 'Time horizon is required' })}>
                        <option value="">Select...</option>
                        <option value="Short term (less than 1 year)">Short term (less than 1 year)</option>
                        <option value="Medium term (1-3 years)">Medium term (1-3 years)</option>
                        <option value="Long term (3-5 years)">Long term (3-5 years)</option>
                        <option value="Very long term (5+ years)">Very long term (5+ years)</option>
                    </select>
                    {errors.time_invest && <span className="error-message">{errors.time_invest.message}</span>}
                </label>

                {/* Services Offered - Checkboxes */}
                <h3>Services Interested In:</h3>
                <div className="checkbox-group">
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="Equity (Long Term)"
                                {...register('servicesOffered')}
                            />{' '}
                            Equity (Long Term)
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="Debt Funds"
                                {...register('servicesOffered')}
                            />{' '}
                            Debt Funds
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                value="Fixed Deposits"
                                {...register('servicesOffered')}
                            />{' '}
                            Fixed Deposits
                        </label>
                    </div>
                    {/* Add more services as needed */}
                </div>

                {/* Display Calculated Risk Score and Profile (Optional - for user info) */}
                <h3>Calculated Risk Assessment:</h3>
                <p>Total Risk Score: **{totalRiskScore}**</p>
                <p>Calculated Risk Profile: **{riskProfile}**</p>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Risk Profile'}
                </button>
                {isSubmitSuccessful && <p className="success-message">Form submitted successfully!</p>}
            </form>
        </div>
    );
}

export default RiskProfileForm;