import React, { useState } from 'react';

const ServiceSub = ({ stockcashregular }) => {
  const { title, table, overview, feature, mediumOfCall, sampleCall } = stockcashregular;
  
  // State to track active tab
  const [activeTab, setActiveTab] = useState('Section1');

  // Function to handle tab switching
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container">
     <center><b><h1 style={{paddingBottom:"1.5em"}}>{title}</h1></b></center>
      <div className="row">
        <div className="col-md-4">
          <div className="sidepanel">
            <table
              style={{ backgroundColor: "#FFF" }}
              className="table tableBodyIn01 table-bordered"
            >
              <tbody>
                <tr style={{ backgroundColor: "#1ABC9C" }}>
                  <th style={{ textTransform: "uppercase", color: "#FFF" }}>Duration</th>
                  <th style={{ textTransform: "uppercase", color: "#FFF" }}>Price</th>
                </tr>
                <tr>
                  <th>Monthly</th>
                  <td><i className="fa fa-inr"></i> {table.monthly || "N/A"}</td>
                </tr>
                <tr>
                  <th>Quarterly</th>
                  <td><i className="fa fa-inr"></i> {table.quarterly || "N/A"}</td>
                </tr>
                <tr>
                  <th>Half-Yearly</th>
                  <td><i className="fa fa-inr"></i> {table.halfyearly || table.halfYearly || "N/A"}</td>
                </tr>
                <tr>
                  <th>Yearly</th>
                  <td><i className="fa fa-inr"></i> {table.yearly || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-8">
          <div className="tab01 tab02" role="tabpanel">
            <ul className="nav nav-tabs nav-tabs nav-justified" role="tablist">
              <li role="presentation" className={activeTab === 'Section1' ? 'active' : ''}>
                <a 
                  href="#Section1" 
                  aria-controls="home" 
                  role="tab" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick('Section1');
                  }}
                >
                  Overview
                </a>
              </li>
              <li role="presentation" className={activeTab === 'Section2' ? 'active' : ''}>
                <a 
                  href="#Section2" 
                  aria-controls="profile" 
                  role="tab" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick('Section2');
                  }}
                >
                  Features
                </a>
              </li>
              <li role="presentation" className={activeTab === 'Section3' ? 'active' : ''}>
                <a 
                  href="#Section3" 
                  aria-controls="settings" 
                  role="tab" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick('Section3');
                  }}
                >
                  Medium of Calls
                </a>
              </li>
              <li role="presentation" className={activeTab === 'Section4' ? 'active' : ''}>
                <a 
                  href="#Section4" 
                  aria-controls="settings" 
                  role="tab" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick('Section4');
                  }}
                >
                  Sample Call
                </a>
              </li>
            </ul>

            <div className="tab-content tab-content02">
              <div 
                role="tabpanel" 
                className={`tab-pane fade ${activeTab === 'Section1' ? 'in active' : ''}`} 
                id="Section1"
              >
                <div className="padTopBot15 padBoth15">
                  <div className="row service_inner">
                    <div className="clearfix">
                      <div className="col-md-12">
                        <p>{overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                role="tabpanel" 
                className={`tab-pane fade ${activeTab === 'Section2' ? 'in active' : ''}`} 
                id="Section2"
              >
                <div className="padTopBot15 padBoth15">
                  <div className="row service_inner">
                    <div className="clearfix">
                      <div className="col-md-12">
                        {feature && feature.split('\n').map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                role="tabpanel" 
                className={`tab-pane fade ${activeTab === 'Section3' ? 'in active' : ''}`} 
                id="Section3"
              >
                <div className="padTopBot15 padBoth15">
                  <div className="row service_inner">
                    <div className="clearfix">
                      <div className="col-md-12">
                        <p>{mediumOfCall}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                role="tabpanel" 
                className={`tab-pane fade ${activeTab === 'Section4' ? 'in active' : ''}`} 
                id="Section4"
              >
                <div className="padTopBot15 padBoth15">
                  <div className="row service_inner">
                    <div className="clearfix">
                      <div className="col-md-12">
                        {sampleCall && sampleCall.split('\n').map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSub;