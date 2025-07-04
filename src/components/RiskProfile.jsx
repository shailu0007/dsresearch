import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const RiskProfile = () => {
    const { handleSubmit, control, watch, formState: { errors } } = useForm();
    const [totalRiskScore, setTotalRiskScore] = useState(0);
    const [riskProfile, setRiskProfile] = useState('');
    const [servicesOffered, setServicesOffered] = useState([]);

    // Watch all radio button values to calculate risk score dynamically
    const formValues = watch();

    // This effect calculates the risk score whenever form values change
    useEffect(() => {
        let score = 0;
        const questions = [
            'agegroup', 'invgoal', 'occupation', 'income', 'trading',
            'preftrading', 'tradingexp', 'quitexp', 'debt', 'fund',
            'depend', 'emerfund', 'tolerance', 'equity', 'comminves',
            'volatile', 'highrisk', 'involvement', 'investment', 'pensions'
        ];

        questions.forEach(qName => {
            const selectedValue = formValues[qName];
            if (selectedValue) {
                // Find the data-val for the selected radio button
                const radioElement = document.querySelector(`input[name="${qName}"][value="${selectedValue}"]`);
                if (radioElement) {
                    score += parseInt(radioElement.dataset.val || '0', 10);
                }
            }
        });
        setTotalRiskScore(score);
        determineRiskProfile(score);
    }, [formValues]); // Re-run when formValues change

    const determineRiskProfile = (score) => {
        let profile = '';
        let services = [];

        if (score >= 20 && score <= 35) {
            profile = 'Low Risk Appetite';
            services = ['Equity (Long Term)', 'Debt Funds', 'Fixed Deposits'];
        } else if (score >= 36 && score <= 60) {
            profile = 'Medium Risk Appetite';
            services = ['Balanced Funds', 'Large Cap Equity', 'Arbitrage Funds'];
        } else if (score >= 61 && score <= 84) {
            profile = 'High Risk Appetite';
            services = ['Small/Mid Cap Equity', 'Derivatives', 'Commodities', 'Forex'];
        } else {
            profile = 'Please complete the questionnaire to determine your risk profile.';
            services = [];
        }
        setRiskProfile(profile);
        setServicesOffered(services);
    };

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        console.log("Total Risk Score:", totalRiskScore);
        console.log("Risk Profile:", riskProfile);
        console.log("Services Offered:", servicesOffered);

        try {
            // Replace with your actual API endpoint
            const response = await axios.post('/api/submitRiskProfile', {
                ...data,
                totalRiskScore,
                riskProfile,
                servicesOffered
            });
            console.log('Form submission successful:', response.data);
            alert('Risk Profile Submitted Successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your form. Please try again.');
        }
    };

    // Dummy function for OTP (you'd replace this with actual OTP logic)
    const sendOtp = () => {
        alert("OTP functionality would be implemented here!");
        // In a real application, you would make an Axios call to your backend
        // to send an OTP to the provided mobile number.
        // Example: axios.post('/api/send-otp', { mobile: formValues.mobile });
    };

    return (
        <>
            <h2 className="heading-section text-center">Risk <span>Profile </span></h2>
            <div className="container">
                <div className="form02 sectionIn">
                    <form onSubmit={handleSubmit(onSubmit)} className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="name">Your Name :-</label>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: 'Name is required' }}
                                render={({ field }) => (
                                    <input type="text" {...field} id="name" className="form-control" autoComplete="off" />
                                )}
                            />
                            {errors.name && <p className="text-danger">{errors.name.message}</p>}
                        </div>
                        <div className="form-group col-md-4">
                            <label>Contact Number :-</label>
                            <Controller
                                name="mobile"
                                control={control}
                                rules={{
                                    required: 'Contact number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid contact number (10 digits)'
                                    }
                                }}
                                render={({ field }) => (
                                    <input type="text" {...field} id="contactno" className="form-control" autoComplete="off" />
                                )}
                            />
                            {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}
                            <button type="button" onClick={sendOtp} id="getotp" className="btn01">GET OTP</button>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Email ID :-</label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Invalid email address'
                                    }
                                }}
                                render={({ field }) => (
                                    <input type="email" {...field} id="exampleInputEmail1" className="form-control" autoComplete="off" />
                                )}
                            />
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <div className="form-group col-md-4">
                            <label>PAN Number :-</label>
                            <Controller
                                name="panno"
                                control={control}
                                rules={{
                                    required: 'PAN number is required',
                                    pattern: {
                                        value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                                        message: 'Invalid PAN number format'
                                    }
                                }}
                                render={({ field }) => (
                                    <input type="text" {...field} id="paninput" className="form-control" autoComplete="off" />
                                )}
                            />
                            {errors.panno && <p className="text-danger">{errors.panno.message}</p>}
                        </div>
                        <div className="form-group col-md-4">
                            <label>Aadhaar Number :-</label>
                            <Controller
                                name="adhar"
                                control={control}
                                rules={{
                                    required: 'Aadhaar number is required',
                                    pattern: {
                                        value: /^[0-9]{12}$/,
                                        message: 'Invalid Aadhaar number (12 digits)'
                                    }
                                }}
                                render={({ field }) => (
                                    <input type="text" {...field} id="adhar" className="form-control" autoComplete="off" />
                                )}
                            />
                            {errors.adhar && <p className="text-danger">{errors.adhar.message}</p>}
                        </div>
                        <div className="form-group col-md-4">
                            <label>Date of Birth :-</label>
                            <Controller
                                name="birth"
                                control={control}
                                rules={{ required: 'Date of Birth is required' }}
                                render={({ field }) => (
                                    <input
                                        placeholder="DD/MM/YYYY"
                                        type="text"
                                        {...field}
                                        id="dobinput"
                                        className="form-control"
                                        autoComplete="off"
                                    />
                                )}
                            />
                            {errors.birth && <p className="text-danger">{errors.birth.message}</p>}
                        </div>
                        <div className="form-group col-md-4">
                            <label>Gender :-</label>
                            <Controller
                                name="gender1"
                                control={control}
                                rules={{ required: 'Gender is required' }}
                                render={({ field }) => (
                                    <select {...field} id="gender1" className="form-control">
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                )}
                            />
                            {errors.gender1 && <p className="text-danger">{errors.gender1.message}</p>}
                        </div>
                        <div className="clearfix"></div>
                        <div className="border visiblePc"></div>
                        <div className="que">
                            <p><b>Client will be classified as low risk appetite, medium risk appetite, and high risk appetite based on the score obtained by answering the following questionnaire. Once, the score is obtained, the client will be offered services which suit his/her risk appetite. The classification of the services is also mentioned below.</b></p>
                            <p><b>Risk profiling questionnaire and product classification</b></p>
                        </div>

                        {/* Question 1 */}
                        <div className="col-md-12 mt20">
                            <div className="col-md-12 border visibleTs mb"></div>
                            <div className="col-md-4">
                                <label>1. What is your age group?</label><br />
                                <Controller
                                    name="agegroup"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Under 30" id="agegroup_under30" data-val='4' /><span className="ques">Under 30</span><br />
                                            <input type="radio" {...field} value="31-45" id="agegroup_31_45" data-val='3' /><span className="ques">31-45</span><br />
                                            <input type="radio" {...field} value="46-60" id="agegroup_46_60" data-val='2' /> <span className="ques">46-60</span><br />
                                            <input type="radio" {...field} value="60+" id="agegroup_60plus" data-val='1' /><span className="ques">60+</span>
                                        </>
                                    )}
                                />
                                {errors.agegroup && <p className="text-danger">{errors.agegroup.message}</p>}
                            </div>
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 2 */}
                            <div className="col-md-4">
                                <label>2. Your Investment Goal can be defined as?</label><br />
                                <Controller
                                    name="invgoal"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Regular Income" id="invgoal_regincome" data-val='1' /><span className="ques">Regular Income</span><br />
                                            <input type="radio" {...field} value="Capital Appreciation and Regular Income" id="invgoal_capregincome" data-val='4' /><span className="ques">Capital Appreciation and Regular Income</span><br />
                                            <input type="radio" {...field} value="Capital Appreciation" id="invgoal_capapp" data-val='2' /><span className="ques">Capital Appreciation</span>
                                        </>
                                    )}
                                />
                                {errors.invgoal && <p className="text-danger">{errors.invgoal.message}</p>}
                            </div>
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 3 */}
                            <div className="col-md-4">
                                <label>3. Occupation (please select the appropriate)</label><br />
                                <Controller
                                    name="occupation"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Self employed or Officer" id="occupation_selfofficer" data-val='3' /><span className="ques"> Self employed or Officer</span><br />
                                            <input type="radio" {...field} value="Salaried" id="occupation_salaried" data-val='2' /><span className="ques"> Salaried</span><br />
                                            <input type="radio" {...field} value="Student or senior citizen" id="occupation_student" data-val='1' /><span className="ques">Student or senior citizen</span><br />
                                            <input type="radio" {...field} value="Business man who have more than one business" id="occupation_businessman" data-val='4' /><span className="ques">Business man who have more than one &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;business</span>
                                        </>
                                    )}
                                />
                                {errors.occupation && <p className="text-danger">{errors.occupation.message}</p>}
                            </div>
                        </div>

                        <div className="col-md-12 border visiblePc"></div>

                        <div className="col-md-12 mt20">
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 4 */}
                            <div className="col-md-4">
                                <label>4. What is yours Yearly Income Range</label><br />
                                <Controller
                                    name="income"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Below 2 lac" id="income_below2" data-val='1' /><span className="ques">Below 2 lac</span><br />
                                            <input type="radio" {...field} value="2-5 lacs" id="income_2_5" data-val='2' /><span className="ques">2-5 lac </span><br />
                                            <input type="radio" {...field} value="5-10 lacs" id="income_5_10" data-val='3' /><span className="ques">5-10 lac</span><br />
                                            <input type="radio" {...field} value="Above 10 Lacs" id="income_above10" data-val='4' /><span className="ques">Above 10 Lacs</span>
                                        </>
                                    )}
                                />
                                {errors.income && <p className="text-danger">{errors.income.message}</p>}
                            </div>
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 5 */}
                            <div className="col-md-4">
                                <label>5.What is yours Trading Amount</label><br />
                                <Controller
                                    name="trading"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="1 to 3 lakh" id="trading_1_3" data-val='1' /><span className="ques"> 1 to 3 lakh </span><br />
                                            <input type="radio" {...field} value="3 to 5 lakh" id="trading_3_5" data-val='2' /><span className="ques">3 to 5 lakh</span><br />
                                            <input type="radio" {...field} value="5-10 lacs" id="trading_5_10" data-val='3' /><span className="ques">5-10 lacs</span><br />
                                            <input type="radio" {...field} value="Above 10 lacs" id="trading_above10" data-val='4' /><span className="ques"> Above 10 lacs</span>
                                        </>
                                    )}
                                />
                                {errors.trading && <p className="text-danger">{errors.trading.message}</p>}
                            </div>
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 6 */}
                            <div className="col-md-4">
                                <label>6. What is your Preferred Trading Pattern?</label><br />
                                <Controller
                                    name="preftrading"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Intraday Trader" id="preftrading_intraday" data-val='4' /><span className="ques">Intraday Trader</span><br />
                                            <input type="radio" {...field} value="BTST/STBT Trader" id="preftrading_btst" data-val='3' /><span className="ques">BTST/STBT Trader</span><br />
                                            <input type="radio" {...field} value="Short term Positional Trader" id="preftrading_shortterm" data-val='2' /><span className="ques">Short term Positional Trader</span><br />
                                            <input type="radio" {...field} value="Long Term Positional Trader" id="preftrading_longterm" data-val='1' /><span className="ques">Long Term Positional Trader</span>
                                        </>
                                    )}
                                />
                                {errors.preftrading && <p className="text-danger">{errors.preftrading.message}</p>}
                            </div>
                        </div>

                        <div className="col-md-12 border visiblePc"></div>

                        <div className="col-md-12 mt20">
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 7 */}
                            <div className="col-md-4">
                                <label>7.What is your total trading experience</label><br />
                                <Controller
                                    name="tradingexp"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Less than 1 years" id="tradingexp_less1" data-val='1' /><span className="ques">Less than 1 years</span><br />
                                            <input type="radio" {...field} value="1-3 years" id="tradingexp_1_3" data-val='2' /><span className="ques">1-3 years</span><br />
                                            <input type="radio" {...field} value="3-5 years" id="tradingexp_3_5" data-val='3' /><span className="ques">3-5years</span><br />
                                            <input type="radio" {...field} value="Above 5 years" id="tradingexp_above5" data-val='4' /><span className="ques">Above 5 years</span>
                                        </>
                                    )}
                                />
                                {errors.tradingexp && <p className="text-danger">{errors.tradingexp.message}</p>}
                            </div>
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 8 */}
                            <div className="col-md-4">
                                <label>8. You are quite experience with?</label><br />
                                <Controller
                                    name="quitexp"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Stock" id="quitexp_stock" data-val='1' /><span className="ques">Stock</span><br />
                                            <input type="radio" {...field} value="Derivatives Stocks" id="quitexp_derivatives" data-val='2' /><span className="ques">Derivatives Stocks</span><br />
                                            <input type="radio" {...field} value="Commodity and Forex" id="quitexp_commforex" data-val='3' /><span className="ques">Commodity and Forex</span><br />
                                            <input type="radio" {...field} value="All" id="quitexp_all" data-val='4' /><span className="ques">All</span>
                                        </>
                                    )}
                                />
                                {errors.quitexp && <p className="text-danger">{errors.quitexp.message}</p>}
                            </div>
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 9 */}
                            <div className="col-md-4">
                                <label>9. What percentage of monthly income is allocated to pay off debt [all EMIs]?</label><br />
                                <Controller
                                    name="debt"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Between 0% -10%" id="debt_0_10" data-val='4' /><span className="ques">Between 0% -10%</span><br />
                                            <input type="radio" {...field} value="Between 10% - 25%" id="debt_10_25" data-val='3' /><span className="ques">Between 10% - 25%</span><br />
                                            <input type="radio" {...field} value="Between 25% - 50%" id="debt_25_50" data-val='2' /><span className="ques">Between 25% - 50%</span><br />
                                            <input type="radio" {...field} value="Above 50%" id="debt_above50" data-val='1' /><span className="ques">Above 50%</span>
                                        </>
                                    )}
                                />
                                {errors.debt && <p className="text-danger">{errors.debt.message}</p>}
                            </div>
                        </div>

                        <div className="col-md-12 border visiblePc"></div>

                        <div className="col-md-12 mt20">
                            {/* Question 10 */}
                            <div className="col-md-4">
                                <label>10. Approx Value of assets held like property, FD, Shares, Mutual Fund etc.</label><br />
                                <Controller
                                    name="fund"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Less than 1 lacs" id="fund_less1" data-val='1' /><span className="ques"> Less than 1 lacs</span><br />
                                            <input type="radio" {...field} value="1-2 lacs" id="fund_1_2" data-val='2' /><span className="ques">1-2 lacs</span><br />
                                            <input type="radio" {...field} value="2-5 lacs" id="fund_2_5" data-val='3' /><span className="ques">2-5 lacs</span><br />
                                            <input type="radio" {...field} value="Above 5 lacs" id="fund_above5" data-val='4' /><span className="ques"> Above 5 lacs</span>
                                        </>
                                    )}
                                />
                                {errors.fund && <p className="text-danger">{errors.fund.message}</p>}
                            </div>
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 11 */}
                            <div className="col-md-4">
                                <label>11. Count of financially dependents person on you ?</label><br />
                                <Controller
                                    name="depend"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="None" id="depend_none" data-val='4' /><span className="ques">None</span><br />
                                            <input type="radio" {...field} value="Between 1-3" id="depend_1_3" data-val='3' /><span className="ques">Between 1-3</span><br />
                                            <input type="radio" {...field} value="Between 4-6" id="depend_4_6" data-val='2' /><span className="ques">Between 4-6</span><br />
                                            <input type="radio" {...field} value="Above 6 Members" id="depend_above6" data-val='1' /><span className="ques">Above 6 Members</span>
                                        </>
                                    )}
                                />
                                {errors.depend && <p className="text-danger">{errors.depend.message}</p>}
                            </div>
                            {/* Question 12 */}
                            <div className="col-md-4 mt20">
                                <label>12. What is the size of your emergency fund?</label><br />
                                <Controller
                                    name="emerfund"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="0-1 month income" id="emerfund_0_1" data-val='1' /><span className="ques">0-1 month income</span><br />
                                            <input type="radio" {...field} value="Between 1-3 months income" id="emerfund_1_3" data-val='2' /><span className="ques">Between 1-3 months income</span><br />
                                            <input type="radio" {...field} value="Between 3-6 months income" id="emerfund_3_6" data-val='3' /><span className="ques">Between 3-6 months income</span><br />
                                            <input type="radio" {...field} value="Above 6 months income" id="emerfund_above6" data-val='4' /><span className="ques">Above 6 months income</span>
                                        </>
                                    )}
                                />
                                {errors.emerfund && <p className="text-danger">{errors.emerfund.message}</p>}
                            </div>
                        </div>

                        <div className="col-md-12 border visiblePc"></div>

                        <div className="col-md-12 mt20">
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 13 */}
                            <div className="col-md-4">
                                <label>13. Your risk tolerance capacity, in terms of loss in your investment amount which You can bear ?</label><br />
                                <Controller
                                    name="tolerance"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="0-5%" id="tolerance_0_5" data-val='1' /><span className="ques">0-5%</span><br />
                                            <input type="radio" {...field} value="5%-10%" id="tolerance_5_10" data-val='2' /><span className="ques">5%-10%</span><br />
                                            <input type="radio" {...field} value="10%-20%" id="tolerance_10_20" data-val='3' /><span className="ques">10%-20%</span><br />
                                            <input type="radio" {...field} value="Above 20%" id="tolerance_above20" data-val='4' /><span className="ques">Above 20%</span>
                                        </>
                                    )}
                                />
                                {errors.tolerance && <p className="text-danger">{errors.tolerance.message}</p>}
                            </div>
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 14 */}
                            <div className="col-md-4">
                                <label>14. What is your experience with Equity investments?</label><br />
                                <Controller
                                    name="equity"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Extensive experience" id="equity_extensive" data-val='4' /><span className="ques"> Extensive experience</span><br />
                                            <input type="radio" {...field} value="Moderate experience" id="equity_moderate" data-val='3' /><span className="ques">Moderate experience</span><br />
                                            <input type="radio" {...field} value="Very less experience" id="equity_veryless" data-val='2' /><span className="ques"> Very less experience </span><br />
                                            <input type="radio" {...field} value="No experience" id="equity_no" data-val='1' /><span className="ques">No experience </span>
                                        </>
                                    )}
                                />
                                {errors.equity && <p className="text-danger">{errors.equity.message}</p>}
                            </div>
                            <div className="col-md-4">
                                <label>15. What is your experience with Commodity investments?</label><br />
                                <Controller
                                    name="comminves"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Extensive experience" id="comminves_extensive" data-val='4' /><span className="ques">Extensive experience </span><br />
                                            <input type="radio" {...field} value="Moderate experience" id="comminves_moderate" data-val='3' /><span className="ques">Moderate experience</span><br />
                                            <input type="radio" {...field} value="Very less Experience" id="comminves_veryless" data-val='2' /><span className="ques">Very less Experience</span><br />
                                            <input type="radio" {...field} value="No experience" id="comminves_no" data-val='1' /><span className="ques">No experience </span>
                                        </>
                                    )}
                                />
                                {errors.comminves && <p className="text-danger">{errors.comminves.message}</p>}
                            </div>
                        </div>

                        <div className="col-md-12 border visiblePc"></div>

                        <div className="col-md-12 mt20">
                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 16 */}
                            <div className="col-md-4">
                                <label>16. When market is volatile, would you like to invest in more risky investment instead of less risky investment to earn high return?/Direct questions to ascertain risk appetite?</label><br />
                                <Controller
                                    name="volatile"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Strongly prefer" id="volatile_stronglypref" data-val='4' /><span className="ques">Strongly prefer </span><br />
                                            <input type="radio" {...field} value="Prefer" id="volatile_pref" data-val='3' /><span className="ques">Prefer </span><br />
                                            <input type="radio" {...field} value="Indifferent" id="volatile_indiff" data-val='2' /><span className="ques">Indifferent </span><br />
                                            <input type="radio" {...field} value="Do not prefer" id="volatile_donotpref" data-val='1' /><span className="ques">Do not prefer </span>
                                        </>
                                    )}
                                />
                                {errors.volatile && <p className="text-danger">{errors.volatile.message}</p>}
                            </div>

                            <div className="col-md-12 border visibleTs mb"></div>
                            {/* Question 17 */}
                            <div className="col-md-4">
                                <label>17.High risk is associated with high return, medium risk is associated with medium returns and low risk is associated with low returns? What risk you can bear ?/ Direct questions to ascertain risk appetite?</label><br />
                                <Controller
                                    name="highrisk"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Low" id="highrisk_low" data-val='1' /><span className="ques">Low</span><br />
                                            <input type="radio" {...field} value="Medium" id="highrisk_medium" data-val='2' /><span className="ques">Medium</span><br />
                                            <input type="radio" value="High" {...field} id="highrisk_high" data-val='4' /><span className="ques">High</span>
                                        </>
                                    )}
                                />
                                {errors.highrisk && <p className="text-danger">{errors.highrisk.message}</p>}
                            </div>
                            {/* Question 18 */}
                            <div className="col-md-4">
                                <label>18.Your involvement on trading ?</label><br />
                                <Controller
                                    name="involvement"
                                    control={control}
                                    rules={{ required: 'Please select an option' }}
                                    render={({ field }) => (
                                        <>
                                            <input type="radio" {...field} value="Rarely traded" id="involvement_rarely" data-val='1' /><span className="ques">Rarely traded</span><br />
                                            <input type="radio" {...field} value="Traded sometimes" id="involvement_sometimes" data-val='2' /><span className="ques">Traded sometimes </span><br />
                                            <input type="radio" {...field} value="full time trader" id="involvement_fulltime" data-val='4' /><span className="ques">You are a full time trader</span><br />
                                            <input type="radio" {...field} value="part time trader" id="involvement_parttime" data-val='3' /><span className="ques">You are a part time trader</span>
                                        </>
                                    )}
                                />
                                {errors.involvement && <p className="text-danger">{errors.involvement.message}</p>}
                            </div>
                        </div>

                        <div className="col-md-12 border border visiblePc"></div>

                        {/* Question 19 */}
                        <div className="col-md-4">
                            <br />
                            <label> 19. Purpose of your investment, in terms of earning profit ? </label><br />
                            <Controller
                                name="investment"
                                control={control}
                                rules={{ required: 'Please select an option' }}
                                render={({ field }) => (
                                    <>
                                        <input type="radio" {...field} value="10 to 20 % Monthly return on investment" id="investment_10_20" data-val='1' /><span className="ques">10 to 20 % Monthly return on investment</span><br />
                                        <input type="radio" {...field} value="20 to 30 % Monthly return on investment" id="investment_20_30" data-val='2' /><span className="ques">20 to 30 % Monthly return on investment</span><br />
                                        <input type="radio" {...field} value="30 to 40 % Monthly return on investment" id="investment_30_40" data-val='3' /><span className="ques">30 to 40 % Monthly return on investment</span><br />
                                        <input type="radio" {...field} value="More than 40 % Monthly return on investment" id="investment_40plus" data-val='4' /><span className="ques">More than 40 % Monthly return on investment</span>
                                    </>
                                )}
                            />
                            {errors.investment && <p className="text-danger">{errors.investment.message}</p>}
                        </div>

                        {/* Question 20 */}
                        <div className="col-md-4">
                            <br />
                            <label> 20.How secure is your current and future income from sources such as salary, pensions or other investments? </label><br />
                            <Controller
                                name="pensions"
                                control={control}
                                rules={{ required: 'Please select an option' }}
                                render={({ field }) => (
                                    <>
                                        <input type="radio" {...field} value="Not Secure" id="pensions_not" data-val='1' /><span className="ques">Not Secure</span><br />
                                        <input type="radio" {...field} value="Somewhat Secure" id="pensions_somewhat" data-val='2' /><span className="ques">Somewhat Secure</span><br />
                                        <input type="radio" value="Fairly Secure" {...field} id="pensions_fairly" data-val='3' /><span className="ques">Fairly Secure</span><br />
                                        <input type="radio" {...field} value="Very Secure" id="pensions_very" data-val='4' /><span className="ques">Very Secure</span>
                                    </>
                                )}
                            />
                            {errors.pensions && <p className="text-danger">{errors.pensions.message}</p>}
                        </div>

                        {/* Question 21 */}
                        <div className="col-md-4">
                            <br />
                            <label>21 .Are you any of the following, or are directly or indirectly related to any of the following ?</label><br />
                            <Controller
                                name="indirectly"
                                control={control}
                                rules={{ required: 'Please select an option' }}
                                render={({ field }) => (
                                    <>
                                        <input type="radio" {...field} value="Civil Servant" id="indirectly_civil" /><span className="ques">Civil Servant</span><br />
                                        <input type="radio" {...field} value="Politician" id="indirectly_politician" /><span className="ques">Politician</span><br />
                                        <input type="radio" {...field} value="Current or former head of state" id="indirectly_headofstate" /><span className="ques">Current or former head of state</span><br />
                                        <input type="radio" {...field} value="Bureaucrat (Tax authorities, Foreign Services, IAS etc)" id="indirectly_bureaucrat" /><span className="ques">Bureaucrat (Tax authorities, Foreign Services, IAS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   etc)</span><br />
                                        <input type="radio" {...field} value="Current or former MP/MLA/MLC" id="indirectly_mpmla" /><span className="ques">Current or former MP/MLA/MLC</span><br />
                                        <input type="radio" {...field} value="Connected to Media" id="indirectly_media" /><span className="ques">Connected to Media</span><br />
                                        <input type="radio" {...field} value="NA" id="indirectly_na" /><span className="ques">NA</span>
                                    </>
                                )}
                            />
                            {errors.indirectly && <p className="text-danger">{errors.indirectly.message}</p>}
                        </div>

                        <div className="col-md-12 border visiblePc"></div>

                        <div className="col-md-12 mt20">
                            <div className="col-md-12 border visibleTs mb"></div>
                            <div className="col-md-8 servicesCheckbox" style={{ display: servicesOffered.length > 0 ? 'block' : 'none' }}>
                                <label> Determined Risk Profile: <b>{riskProfile}</b> </label><br/>
                                <label> Services to be Offered: </label>
                                <div className="allServices checkbox">
                                    <ul>
                                        {servicesOffered.map((service, index) => (
                                            <li key={index}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn01">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RiskProfile;