import React, { useState } from 'react';

import IndividualKycForm from './form/IndividualKycForm';
import NonIndividualKycForm from './form/NonIndividualKycForm';
import DownloadSection from './form/DownloadSection';
import UploadKycFormSection from './form/UploadKycFormSection';

function KYC() {
    const [activeTab, setActiveTab] = useState('Section1'); // State to manage active tab

    const handleTabClick = (sectionId) => {
        setActiveTab(sectionId);
    };

    return (
        <>
            <h2 className="heading-section text-center">KYC <span>Form</span></h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow bounceInDown animated" style={{ visibility: 'visible', animationName: 'bounceInDown' }}>
                        <div role="tabpanel" className="tab">
                            {/* Nav tabs */}
                            <ul role="tablist" className="nav nav-tabs nav-justified">
                                <li className={activeTab === 'Section1' ? 'active' : ''} role="presentation">
                                    <a href="#Section1" onClick={() => handleTabClick('Section1')} aria-expanded={activeTab === 'Section1'}>For Individual</a>
                                </li>
                                <li className={activeTab === 'Section2' ? 'active' : ''} role="presentation">
                                    <a href="#Section2" onClick={() => handleTabClick('Section2')} aria-expanded={activeTab === 'Section2'}>For Non-Individual</a>
                                </li>
                                <li className={activeTab === 'Section3' ? 'active' : ''} role="presentation">
                                    <a href="#Section3" onClick={() => handleTabClick('Section3')} aria-expanded={activeTab === 'Section3'}>Download</a>
                                </li>
                                <li className={activeTab === 'Section4' ? 'active' : ''} role="presentation">
                                    <a href="#Section4" onClick={() => handleTabClick('Section4')} aria-expanded={activeTab === 'Section4'}>Upload KYC Form</a>
                                </li>
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content tabs bgWhite01">
                                {/* Keep all components mounted, and control visibility with 'active in' classes */}
                                <div id="Section1" className={`tab-pane fade ${activeTab === 'Section1' ? 'active in' : ''} padBoth15`} role="tabpanel">
                                    <IndividualKycForm />
                                </div>

                                <div id="Section2" className={`tab-pane fade ${activeTab === 'Section2' ? 'active in' : ''} padBoth15`} role="tabpanel">
                                    <NonIndividualKycForm />
                                </div>

                                <div id="Section3" className={`tab-pane fade ${activeTab === 'Section3' ? 'active in' : ''}`} role="tabpanel">
                                    <DownloadSection />
                                </div>

                                <div id="Section4" className={`tab-pane fade ${activeTab === 'Section4' ? 'active in' : ''}`} role="tabpanel">
                                    <UploadKycFormSection />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KYC;