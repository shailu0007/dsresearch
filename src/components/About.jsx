import React from 'react';
import AboutCard from './AboutCard'; 
import { Outlet } from 'react-router-dom';
const About = () => {
    return (
        <>
        <div className="finance">
            {/* Overlay applies on the entire section */}
            <div className="overlay"></div>
            {/* Left and Right Section Split */}
            <div className="finance-left">
                <div className="finance-content">
                    <h1 className="heading-section">About <span style={{ color: '#000' }}>Us</span></h1>
                    <p style={{ textAlign: 'justify' }}><strong>Eminent Investment Advisors</strong>&nbsp;is an SEBI registered one of the leading Stock Advisory Company in Stock and Commodity Market. Our strong hold in providing the most accurate Tips makes us stand apart from our competitors.<br />
                        <strong>Eminent investment Advisors</strong> is equipped with a team of the best and most experienced professionals who work with full devotion towards benefitting customers and helping them and their capital achieve new heights. Our analysis is solely based on the economic news and deep technical analysis done by our experts. We dedicatedly work for benefit of our personal and commercial trading clients by providing them best tips and information. We Provide all services through SMS and Instant Messenger. Our research is based around these services:</p>

                    <p style={{ textAlign: 'justify' }}><br />
                        <strong>-</strong> Equity Tips<br />
                        <strong>-</strong> Derivatives Tips<br />
                        <strong>-</strong> Intraday Tips<br />
                        <strong>-</strong> Commodity Tips<br />
                        <strong>-</strong> Nifty Future Tips<br />
                        <strong>-</strong> Stock Future Tips<br />
                        <strong>-</strong> Bullion Premium Tips</p>
                </div>
                <div className="batch">
                    <img src="webassets/image/cup.png" alt="Trophy" />
                </div>
            </div>

            {/* Right Section for Image */}
            <div className="finance-right"></div>
       

        </div>
<Outlet/>
                   </>
                   
        
    );
};

export default About;
