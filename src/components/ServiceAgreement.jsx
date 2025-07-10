import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ServiceAgreement = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log("Form Data Submitted:", data);
        try {
            // Replace '/api/submit-agreement' with your actual backend API endpoint
            const response = await axios.post('/api/submit-agreement', data);
            console.log('Submission successful:', response.data);
            alert('Agreement submitted successfully!');
            // You might want to redirect the user or show a success message
        } catch (error) {
            console.error('Error submitting agreement:', error);
            alert('Failed to submit agreement. Please try again.');
            // Handle submission error, e.g., display an error message to the user
        }
    };

    // Helper function for date formatting (can be enhanced for better UX)
    const date_reformat_mm = (e) => {
        // This function would typically live in a utility file or be part of a date picker component.
        // For simple reformatting, you might do something like:
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 2 && value.length <= 4) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        } else if (value.length > 4) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4) + '/' + value.substring(4, 8);
        }
        e.target.value = value;
    };


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="investor_page">
                            <center><h3>INVESTMENT ADVISORY AGREEMENT</h3></center>
                            <br />
                            <form id="service_form" onSubmit={handleSubmit(onSubmit)}>
                                <p>This Investment Advisory Agreement is made on
                                    <input
                                        placeholder="DD/MM/YYYY"
                                        onKeyUp={date_reformat_mm}
                                        onKeyPress={date_reformat_mm}
                                        onPaste={date_reformat_mm}
                                        autoComplete="off"
                                        type="text"
                                        {...register("date1", { required: "Date is required" })}
                                        className={errors.date1 ? 'under error-border' : 'under'}
                                    />
                                    {errors.date1 && <span className="error-message">{errors.date1.message}</span>}
                                    (date) between Shivangi Chandel Investment Adviser (D.S Researech Investment Advisor), which is a SEBI registered Investment Adviser having registration number INA000010104 dated March 20, 2018 and having its office at 96 Laal Bahadur Shastri Marg, Near Model School, Ujjain (M.P.) 456001 here in after called the Investment Adviser
                                </p>
                                <br />
                                <center><b>AND</b></center>
                                <br />
                                <p>
                                    <input
                                        type="text"
                                        className={errors.name ? 'under error-border' : 'under'}
                                        {...register("name", { required: "Client name is required" })}
                                    /> (client name) s/o
                                    <input
                                        type="text"
                                        className={errors.f_name ? 'under error-border' : 'under'}
                                        {...register("f_name")}
                                    />, having its residence at
                                    <input
                                        type="text"
                                        className={errors.residence ? 'under error-border' : 'under'}
                                        {...register("residence", { required: "Residence is required" })}
                                    /> here in after called the Client.
                                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                                    {errors.residence && <span className="error-message">{errors.residence.message}</span>}
                                </p>

                                <p>That the expression of the term, Investment Adviser and Client shall mean and include their legal heirs, successors, assigns and representatives, etc.</p>

                                <p>WHERE AS Investment Adviser is been authorised by SEBI to provide investment advice in terms of SEBI (Investment Advisers) Regulations, 2013.</p>

                                <p>AND WHERE AS Client is desirous of availing the Investment Advisory services from the Investment Adviser on the terms & conditions as described here in after.</p>

                                <p>NOW, THEREFORE, in consideration of the mutual covenants contained in this agreement, the parties hereby agree as follows:</p>

                                <p><b>1.Appointment of the Investment Adviser</b></p>

                                <p style={{ paddingLeft: '20px' }}>In accordance with the applicable laws, client hereby appoints, entirely at his / her / its risk, Shivangi Chandel Investment Adviser (D.S Researech Investment Advisor)to provide Investment Advisory services in accordance with the terms and conditions of the agreement as mandated under Regulation19(1)(d) of the Securities and Exchange Board of India (Investment Advisers) Regulations, 2013.</p>

                                <p><b>2.Consent of theclient</b></p>

                                <p style={{ paddingLeft: '20px' }}>2.1 I/ We have read and understood the terms and conditions of Investment Advisory services provided by the Investment Adviser along with the fee structure and mechanism for charging and payment offer.</p>

                                <p style={{ paddingLeft: '20px' }}>2.2 Based on our written request to the Investment Adviser, an opportunity was provided by the Investment Adviser to ask questions and interact with ‘person(s) associated with the investment advice’.</p>

                                <p style={{ paddingLeft: '20px' }}> 2.3 The Client also hereby gives his consent to the Risk Profiling done by the Investment Adviser on
                                    <input
                                        type="text"
                                        className={errors.clnt1 ? 'under error-border' : 'under'}
                                        {...register("clnt1")}
                                    /> wherein Risk Score of the Client is
                                    <input
                                        type="text"
                                        className={errors.clnt2 ? 'under error-border' : 'under'}
                                        {...register("clnt2")}
                                    /> and is categorized as
                                    <input
                                        type="text"
                                        className={errors.clnt3 ? 'under error-border' : 'under'}
                                        {...register("clnt3")}
                                    /> Risk Taker.
                                </p>

                                <p><b>3.Declaration from the Investment Adviser that:</b></p>

                                <p style={{ paddingLeft: '20px' }}>3.1 Investment Adviser shall neither render any investment advice nor charge any fee until the client has signed this agreement.</p>

                                <p style={{ paddingLeft: '20px' }}>3.2 Investment Adviser shall not manage funds and securities on behalf of the client and that it shall only receive such sums of monies from the client as are necessary to discharge the client’s liability towards fees owed to the Investment Adviser.</p>

                                <p style={{ paddingLeft: '20px' }}>3.3 Investment Adviser shall not, in the course of performing its services to the client, hold out any investment advice implying any assured returns or minimum returns or target return or percentage accuracy or service provision till achievement of target returns or any other nomenclature that gives the impression to the client that the investment advice is risk-free and/ or not susceptible to market risks and or that it can generate returns with any level of assurance.</p>

                                <p><b>4. Fees specified under Investment Adviser Regulations and relevant circulars issued there under</b></p>

                                <p style={{ paddingLeft: '20px' }}>4.1 As per clause 15A of SECURITIES AND EXCHANGE BOARD OF INDIA (INVESTMENT ADVISERS) REGULATIONS,2013</p>

                                <p style={{ paddingLeft: '20px' }}> “Investment Adviser shall be entitled to charge fees for providing investment advice from a client in the manner as specified by the Board.”</p>

                                <p style={{ paddingLeft: '20px' }}>4.2 Circular No.: SEBI/HO/IMD/DF1/CIR/P/2020/182 dated Sep 23, 2020, may be referred to access the guidelines issued by SEBI in thisregards:
                                    <a href="https://www.sebi.gov.in/legal/circulars/sep-2020/guidelines-for-investment-advisers_47640.html">https://www.sebi.gov.in/legal/circulars/sep-2020/guidelines-for-investment-advisers_47640.html</a></p>

                                <p><b>5. Fees:</b></p>

                                <p style={{ paddingLeft: '20px' }}>5.1 In consideration for the services to be rendered by Investment Adviser, the Client agrees to pay to Investment Adviser charges/fees as per Investment Adviser’s schedule of charges/fees (more particularly described in Schedule A).</p>

                                <p style={{ paddingLeft: '20px' }}>5.2 The payment of fees shall be through any mode which shows trace ability of funds. Such modes may include account payee crossed cheque/ Demand Drafts or by way of direct credit to the bank accounts through NEFT/ RTGS/ IMPS/ UPI or any other mode specified by SEBI from time to time. However,the fees shall not be in cash.</p>

                                <p style={{ paddingLeft: '20px' }}>5.3 The client agrees to pay fees within 7days of signing of this Agreement, as mentioned in Schedule A, failing which the services would be stopped and the agreement would stand cancelled.</p>

                                <p><b>6. Scope of services:</b></p>

                                <p style={{ paddingLeft: '20px' }}>The Investment Adviser agrees to provide services to the client as mentioned below:</p>

                                <ul style={{ paddingLeft: '30px' }}>
                                    <li style={{ listStyleType: 'square' }}>Investment recommendations on the fee-based model.</li>
                                    <li style={{ listStyleType: 'square' }}>The subject matter of recommendations will be related to the equity market or commodity market.</li>
                                    <li style={{ listStyleType: 'square' }}>Sending updates to the client regarding recommended stocks, whenever Investment Adviser thinks necessary/ required.</li>
                                    <li style={{ listStyleType: 'square' }}>Investment Adviser will not provide whole financial planning such as Mutual Fund, Insurance, Bond, Estate, Planning of Tax, Will Matter and other aspects to the client. So, the client shall not deposit the proof of Income and financial liability, and client shall take responsibility for any regulatory action in this regard.</li>
                                </ul>
                                <p style={{ paddingLeft: '20px' }}>Further based on Risk Category and considering Age, Income, Client’s Desire to Invest in Equity market, Investment Goal, Disposable income, Surplus fund and other factors of client as informed by client, Investment Adviser has advised and client has also agreed to take the service as mentioned in Schedule A. Further, the Investment Adviser shall act in a fiduciary capacity towards its clients at all times.</p>

                                <p><b>7. Functions of the Investment Adviser:</b></p>

                                <p style={{ paddingLeft: '20px' }}>7.1 Investment Adviser shall provide Investment Advisory Services to the Client during the term of this Agreement as permitted under applicable laws and regulations governing Investment Adviser. The services rendered by the Investment Adviser are non-binding non-recourse Advisory in nature and the final decision on the type of instruments; the proportion of exposure and tenure of the investments shall be taken by the Client at its discretion.</p>

                                <p style={{ paddingLeft: '20px' }}>7.2 Investment Adviser shall act in a fiduciary capacity towards its clients at all times. Investment Adviser shall act in a bonafide manner for the benefit and in the interest of the Client.</p>

                                <p style={{ paddingLeft: '20px' }}>7.3 Investment Adviser shall be in compliance with the SEBI (Investment Advisers) Regulations, 2013 and its amendments, rules, circulars and notifications.</p>

                                <p style={{ paddingLeft: '20px' }}>7.4 Investment Adviser shall be in compliance with the eligibility criteria as specified under the IA Regulations at all times.</p>

                                <p style={{ paddingLeft: '20px' }}> 7.5 Pursuant to the SEBI (INVESTMENT ADVISERS) REGULATIONS, 2013 guidelines with respect to Risk Profiling and Suitability Assessment, Investment Adviser shall conduct proper risk profiling and risk assessment for each of the clients. As per risk analysis, risk capacity, risk aversion & client requirement,the Investment Adviser needs to ensure that correct product/service as per client risk tolerance capacity is being offered, which is suitable for client.</p>

                                <p style={{ paddingLeft: '20px' }}>7.6 Investment Adviser shall maintain client-wise KYC, advice, risk assessment, analysis reports of investment advice and suitability, terms and conditions document, rationale of advice, related books of accounts and a register containing list of clients along with dated investment advice in compliance with the SEBI(Investment Advisers)Regulations, 2013.</p>

                                <p style={{ paddingLeft: '20px' }}>7.7 Investment Adviser shall get annual compliance audit conducted as per the SEBI (Investment Advisers) Regulations,2013.</p>

                                <p style={{ paddingLeft: '20px' }}>7.8 Investment Adviser under takes to abide by the Code of Conductas specified in the Third Schedule of the SEBI (Investment Advisers) Regulations, 2013.Investment Adviser shall not receive any consideration in any form, if the client desires to avail the services of intermediary recommended by Investment Adviser.</p>

                                <p><b>8. Investment objective and guidelines:</b></p>

                                <p style={{ paddingLeft: '20px' }}>8.1 Investment Adviser would provide investment advice in listed Equity Shares (Large cap/ Mid-Cap/ Small Cap) as chosen by the client in Risk profiling form.</p>

                                <p style={{ paddingLeft: '20px' }}>8.2 Investment Adviser under takes to recommend direct implementation of advice i.e. through direct schemes/ direct codes, and other client specifications / restrictions on investments, if any.</p>

                                <p style={{ paddingLeft: '20px' }}>8.3 Investment Adviser shall provide investment advice based on the risk profiling conducted for the client, total budgeted investment amount of the client and time period for deployment as informed by the client.</p>

                                <p style={{ paddingLeft: '20px' }}>8.4 Investment Adviser shall communicate the tax related aspects pertaining to investment advice and as applicable on the investment adviser’s fee, if any.</p>

                                <p style={{ paddingLeft: '20px' }}>Further, Client expressly understands and agrees that Investment Adviser is not qualified to, and does not purport to provide, any legal, accounting, estate, actuary, or tax advice or to prepare any legal, accounting or tax documents. Nothing in this Agreement shall be construed as providing for such services. Client will rely on his or her tax attorney or accountant for tax advice or tax preparation.</p>

                                <p><b>9. Risk Factors:</b></p>

                                <p style={{ paddingLeft: '20px' }} >The Client hereby agrees to undertake the risks pertaining to the investments as stated herein:</p>

                                <p style={{ paddingLeft: '20px' }}>a) Investment in equities, derivatives, mutual funds and Exchange Traded Index are subject to market risks and there is no assurance or guarantee that the objective of the Investment Strategy will be achieved.</p>

                                <p style={{ paddingLeft: '20px' }}>b) Past performance of the Investment Adviser does not indicate the future performance. Investors are not being offered any guaranteed returns.</p>

                                <p style={{ paddingLeft: '20px' }}>c) Investors may note that Investment Adviser’s investment advice may not be always profitable, as actual market movements may be at variance with anticipated trends.</p>

                                <p style={{ paddingLeft: '20px' }}>d) The Investment Adviser is neither responsible nor liable for any losses resulting from Investment Advisory Services.</p>

                                <p style={{ paddingLeft: '20px' }}>e) The liquidity of the Investment Adviser’s investment advice is in herently restricted by trading volumes in the securities in which it invests.</p>

                                <p style={{ paddingLeft: '20px' }}>f) The Investment Adviser may, considering the overall level of risk of the client, advice lower rated/ unrated securities offering higher yields. This may increase the risk of the client’s portfolio.</p>

                                <p style={{ paddingLeft: '20px' }}>g) The performance of the Investment Strategies may be affected by changes in Government policies, general levels of interest rates and risks associated with trading volumes, liquidity and settlement systems in equity and debt markets.</p>

                                <p style={{ paddingLeft: '20px' }}>h) The names of the products/nature of investments do not in any manner indicate their prospects or returns. The performance of equity related investment strategies may be adversely affected by the performance of individual companies, changes in the market place and industry specific and macro-economic factors.</p>

                                <p style={{ paddingLeft: '20px' }}>i) There are in herent risk sarising out of investment approach,investment to objectives,investment strategy, asset allocation and non-diversification of portfolio.</p>

                                <p style={{ paddingLeft: '20px' }}> j) Changes in Applicable Law may impact the performance of the Portfolio.</p>

                                <p><b>10. Validity of advisory services:</b></p>

                                <p style={{ paddingLeft: '20px' }}>10.1 This Agreement shall remain in force for duration of service as mentioned in this agreement; however, on mutual consent by Client and by the Investment Adviser, Advisory services may be renewed before expiry of services. Client can renew services by paying Fees as mentioned in this agreement or less as mutually agreed by both the parties for next tenure of services.</p>

                                <p style={{ paddingLeft: '20px' }}>10.2 The Agreement will be deemed to be terminated after date of completion of the agreement term if not renewed for the sub sequentter munder the prevalent terms & conditions.</p>

                                <p><b>11. Amendments</b></p>

                                <p style={{ paddingLeft: '20px' }}> The Investment Adviser and the client shall be entitled to make amendments to this agreement after mutual agreement. This Agreement may be amended or revised by an instrument endorsed by the Client and by Investment Adviser. Further, this agreement may also be amended by mutual written consent (through E-mail, WhatsApp, etc.) of the parties and shall have same impact as of this Agreement.</p>

                                <p><b>12. Termination</b></p>

                                <p style={{ paddingLeft: '20px' }}>12.1 This Agreement may be terminated under the following circumstances, namely-</p>

                                <p style={{ paddingLeft: '20px' }}>(a) Voluntary / mandatory termination by the Investment Adviser.</p>
                                <p style={{ paddingLeft: '20px' }}>(b) Voluntary / mandatory termination by the client.</p>
                                <p style={{ paddingLeft: '20px' }}>(c) Suspension/Cancellation of registration of Investment Adviser by SEBI.</p>
                                <p style={{ paddingLeft: '20px' }}>(d) Any other action taken by other regulatory body/Government authority.</p>

                                <p style={{ paddingLeft: '20px' }}>12.2 In case of a voluntary termination of the agreement, the client would be required to give a 30 days prior written notice while the Investment Adviser would be required to give a 30 days prior written notice.</p>

                                <p style={{ paddingLeft: '20px' }}>12.3 In case of suspension of the certificate of registration of the IA, the client may be provided with the option to terminate the agreement.</p>

                                <p><b>13. Implications of Amendments andtermination:</b></p>

                                <p style={{ paddingLeft: '20px' }}>13.1 Not with standing any such termination, all rights, liabilities and obligations of the parties arising out of or in respect of transactions entered into prior to the termination of this relationship shall continue to subsist and vest in/be binding on the respective parties or his/its respective heirs, executors, administrators, legal representatives or successors, as the case maybe;</p>

                                <p style={{ paddingLeft: '20px' }}>13.2 In case the clients are not satisfied with the services being provided by the investment adviser and want to terminate/ stop Investment Advisory services or the investor adviser is unable to provide Investment Advisory services, either party shall have a right to terminate Investment Advisory relationship at any time subject to refund of Advisory fee after deducting one quarters fee as breakage fee in case termination is initiated by the clients and refund of the proportionate Advisory fee incase termination is initiated by Investment Adviser.</p>

                                <p><b>14. Relationship with relatedparties:</b></p>

                                <p style={{ paddingLeft: '20px' }}>14.1 The Investment Adviser here by declares that it is carrying on its activities independently,at an arms-length basis with its related parties.</p>

                                <p style={{ paddingLeft: '20px' }}>14.2 Investment Adviser does not have any conflict of interest of the investment Advisory activities with its relationship with related parties, such conflict of interest shall be disclosed to the client as and when they arise.</p>

                                <p><b>15. Investment Adviser engaged in other activities:</b></p>

                                <p style={{ paddingLeft: '20px' }}>15.1 Investment Adviser shall not provide any distribution services, for securities and investment products,either directly or through the irgroup to a Advisory client.</p>

                                <p style={{ paddingLeft: '20px' }}>15.2 Investment Adviser shall not provide investment Advisory services, for securities and investment products,either directly or through the irgroup to the distribution client;</p>

                                <p><b>16. Representation to client:</b></p>

                                <p style={{ paddingLeft: '20px' }}>Investment Adviser shall ensure that it will take all consents and permissions from the client prior to undertaking any actions in relation to the securities or investment product advised by the investment adviser. </p>

                                <p><b>17. No right to seek Power of Attorney:</b></p>

                                <p style={{ paddingLeft: '20px' }}>The Investment Adviser here by declares that it shall not seek any power of attorney or authorizations from its clients for implementation of investment advice.</p>

                                <p><b>18. No conflict of interest:</b> </p>

                                <p style={{ paddingLeft: '20px' }}>18.1 Investment Adviser does not have any conflict of interest of the investment Advisory activities, such conflict of interest shall be disclosed to the client as and when they arise.</p>

                                <p style={{ paddingLeft: '20px' }}>18.2 Investment adviser shall not derive any direct or indirect benefit out of the client’s securities/investment products.</p>

                                <p><b>19. Maintenance of accounts and confidentiality:</b></p>

                                <p style={{ paddingLeft: '20px' }}>19.1 Investment Adviser shall be responsible for maintenance of client accounts and data as mandated under the SEBI (Investment Advisers) Regulations,2013.</p>

                                <p style={{ paddingLeft: '20px' }}>19.2 Investment Adviser shall not divulge any confidentialin for mation about its client,which has come to its knowledge,with out taking prior permission of its client,except where such disclosures are required to be made in compliance with any law for the time being in force.</p>

                                <p><b>20. Liability of Investment Adviser.</b></p>

                                <p style={{ paddingLeft: '20px' }}>Except as otherwise provided by law, Investment Adviser or its officers, Partners, employees or affiliates will not be liable to Client for any loss that:</p>

                                <p style={{ paddingLeft: '20px' }}>a. client may suffer by reason of any depletion in the value of the assets under advice, which may result by reason of fluctuation in asset value, or by reason of non-performance or under-performance of the securities/funds or any other market conditions;</p>
                                <p style={{ paddingLeft: '20px' }}>b. Client may suffer as a result of Investment Adviser’s investment advice or other action taken or omitted in good faith and with the degree of care, skill, prudence and diligence that a prudent person acting in a similar fiduciary capacity would use in conducting an enterprise of a similar nature and with similar objectives under the circumstances;</p>

                                <p style={{ paddingLeft: '20px' }}>. Caused by following Client’s written or oral instructions;</p>
                                <p style={{ paddingLeft: '20px' }}>d. Caused by using inaccurate, outdated or incomplete information provided by Client and/or by Client’s failure to promptly inform Advisor of changes in his or her financial and/or economic situation, investment objectives or any restrictions that may affect the management of Client’s account.</p>

                                <p><b>21. Representations and covenants:</b></p>

                                <p style={{ paddingLeft: '20px' }}>Investment Adviser under takes to comply with the Securities and Exchange Board of India (Investment Advisers) Regulations, 2013 and its amendments, rules, circulars and notifications and keep the SEBI registration valid throughout the term of the Agreement and shall also ensure that Investment Adviser, principal officer, persons associated with the investment advice are qualified and certified all times as per the Regulations.</p>

                                <p><b>22. Death or Disability of client:</b></p>

                                <p style={{ paddingLeft: '20px' }}> 22.1 The death or in capacity of the Client shall not terminate the authority of Investment Adviser granted herein until Investment Adviser receives actual notice of such death or incapacity. Upon such notice client’s executor, guardian, successor, nominee, attorney-in-fact or other authorized representative must engage Investment Adviser in order to continue to service client’s accounts.</p>

                                <p style={{ paddingLeft: '20px' }}>22.2 The liability of fees dues with respect to services would be on the authorized representative of the client.</p>

                                <p><b>23. Death or Disability of investment adviser:</b></p>
                                <p style={{ paddingLeft: '20px' }}>Investment Adviser appoints Mr. Subodh Jain as the Obligor in the event of Investment Adviser’s death / disability.</p>

                                <p style={{ paddingLeft: '20px' }}>Name:Subodh Jain<br />
                                    PAN No.: ASJPJ0891P<br />
                                    Contact details:9340546337<br />
                                </p>

                                <p style={{ paddingLeft: '20px' }}>Obligor must take the steps including but not limited to in the event of the above eventuality:</p>

                                <p style={{ paddingLeft: '20px' }}>(a) giving notice to all clients of the occurrence of the eventuality and confirmation of having taken charge over by the Obligor</p>
                                <p style={{ paddingLeft: '20px' }}>(b) settlement of account with the client (fees payable and/or fees refundable),</p>
                                <p style={{ paddingLeft: '20px' }}>(c) completion of transition of any outstanding business to another duly registered investment adviser,</p>
                                <p style={{ paddingLeft: '20px' }}>(d) redressal of any outstanding or new disputes / claims of clients.</p>

                                <p><b>24. Settlement of disputes and provision for arbitration</b></p>

                                <p style={{ paddingLeft: '20px' }}>24.1 No suit, prosecution or other legal proceeding shall lie against the Investment adviser for any damage caused or likely to be caused by anything which is done in good faith or intended to be done under the provisions of the Securities and Exchange Board of India (Investment Advisers) Regulations,2013.</p>

                                <p style={{ paddingLeft: '20px' }}>24.2 All disputes, differences, claims and questions whatsoever arising from this Agreement between the Client and Investment Adviser and/or their respective representatives touching these presents shall be in accordance with and subject to the provisions of The Arbitration and Conciliation Act, 1996, or any statutory modification or re-enactment thereof for the time being in force. Such Arbitration proceedings shall be held at New Delhi and the language of Arbitration will be English.</p>

                                <p style={{ paddingLeft: '20px' }}>24.3 The Investment Adviser has formulated this Agreement in accordance with the Regulat</p>

                                {/* Add a submit button */}
                                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                    <button type="submit" className="btn btn-primary">Submit Agreement</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </section>
    );
};

export default ServiceAgreement;