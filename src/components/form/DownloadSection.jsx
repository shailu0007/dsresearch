import React from 'react';

function DownloadSection() {
    return (
        <>
            <style jsx>{`
                .download-container {
                    padding: 60px 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                }
                
                .download-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .download-card {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                
                .download-header {
                    background: linear-gradient(90deg, #4CAF50, #45a049);
                    text-align: center;
                    padding: 30px;
                }
                
                .download-title {
                    color: white;
                    font-size: 2.8rem;
                    font-weight: bold;
                    margin: 0;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                    letter-spacing: 1px;
                }
                
                .download-body {
                    padding: 50px;
                }
                
                .download-description {
                    text-align: center;
                    margin-bottom: 50px;
                }
                
                .download-description p {
                    font-size: 1.4rem;
                    line-height: 1.6;
                    color: #666;
                    margin: 0;
                }
                
                .download-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-bottom: 50px;
                }
                
                .download-item {
                    background: linear-gradient(145deg, #f8f9fa, #e9ecef);
                    border-radius: 15px;
                    padding: 30px;
                    text-align: center;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    height: 100%;
                }
                
                .download-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
                }
                
                .download-icon {
                    font-size: 3rem;
                    margin-bottom: 20px;
                    display: block;
                }
                
                .download-item-title {
                    color: #333;
                    font-size: 1.6rem;
                    font-weight: bold;
                    margin-bottom: 15px;
                }
                
                .download-item-description {
                    color: #666;
                    font-size: 1.1rem;
                    line-height: 1.5;
                    margin-bottom: 25px;
                }
                
                .download-btn {
                    display: inline-block;
                    padding: 15px 25px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.2rem;
                    transition: all 0.3s ease;
                    border: none;
                    color: white;
                    width: 100%;
                    max-width: 250px;
                    margin-bottom: 10px;
                }
                
                .download-btn:hover {
                    transform: translateY(-2px);
                    text-decoration: none;
                    color: white;
                }
                
                .btn-green {
                    background: linear-gradient(90deg, #4CAF50, #45a049);
                }
                
                .btn-green:hover {
                    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
                }
                
                .btn-blue {
                    background: linear-gradient(90deg, #2196F3, #1976D2);
                }
                
                .btn-blue:hover {
                    box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);
                }
                
                .btn-orange {
                    background: linear-gradient(90deg, #FF9800, #F57C00);
                }
                
                .btn-orange:hover {
                    box-shadow: 0 8px 25px rgba(255, 152, 0, 0.3);
                }
                
                .file-size {
                    font-size: 0.85rem;
                    color: #888;
                    margin-top: 10px;
                }
                
                .notice-section {
                    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
                    border-left: 5px solid #2196F3;
                    border-radius: 15px;
                    padding: 30px;
                    margin-bottom: 30px;
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                }
                
                .notice-icon {
                    font-size: 2rem;
                    color: #2196F3;
                    flex-shrink: 0;
                }
                
                .notice-content h6 {
                    color: #1976D2;
                    font-weight: bold;
                    margin-bottom: 10px;
                    font-size: 1.3rem;
                }
                
                .notice-content p {
                    color: #1565C0;
                    font-size: 1.1rem;
                    margin: 0;
                    line-height: 1.5;
                }
                
                .help-section {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border-radius: 15px;
                    padding: 30px;
                    text-align: center;
                }
                
                .help-section h6 {
                    color: #495057;
                    font-weight: 600;
                    margin-bottom: 15px;
                    font-size: 1.3rem;
                }
                
                .help-section p {
                    color: #6c757d;
                    font-size: 1.1rem;
                    margin: 0;
                    line-height: 1.5;
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                    .download-container {
                        padding: 40px 15px;
                    }
                    
                    .download-body {
                        padding: 30px 20px;
                    }
                    
                    .download-title {
                        font-size: 1.8rem;
                    }
                    
                    .download-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .download-item {
                        padding: 25px;
                    }
                    
                    .notice-section {
                        flex-direction: column;
                        text-align: center;
                        gap: 15px;
                    }
                }
                
                @media (max-width: 480px) {
                    .download-title {
                        font-size: 1.5rem;
                    }
                    
                    .download-body {
                        padding: 20px 15px;
                    }
                    
                    .download-item {
                        padding: 20px;
                    }
                    
                    .download-btn {
                        padding: 12px 20px;
                        font-size: 0.9rem;
                    }
                }
            `}</style>
            
            <div className="download-container">
                <div className="download-wrapper">
                    <div className="download-card">
                        <div className="download-header">
                            <h3 className="download-title">
                                📋 DOWNLOAD KYC FORMS
                            </h3>
                        </div>
                        
                        <div className="download-body">
                            <div className="download-description">
                                <p>
                                    Download the required KYC forms and documents to complete your verification process.
                                </p>
                            </div>
                            
                            <div className="download-grid">
                                <div className="download-item">
                                    <span className="download-icon" style={{color: '#4CAF50'}}>👤</span>
                                    <h5 className="download-item-title">Individual KYC Form</h5>
                                    <p className="download-item-description">
                                        For individual account holders and personal verification
                                    </p>
                                    <a 
                                        href="/path/to/individual-kyc-form.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="download-btn btn-green"
                                    >
                                        📥 Download PDF
                                    </a>
                                    <div className="file-size">Size: ~2.5 MB</div>
                                </div>
                                
                                <div className="download-item">
                                    <span className="download-icon" style={{color: '#2196F3'}}>🏢</span>
                                    <h5 className="download-item-title">Non-Individual KYC Form</h5>
                                    <p className="download-item-description">
                                        For corporate accounts, trusts, and business entities
                                    </p>
                                    <a 
                                        href="/path/to/non-individual-kyc-form.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="download-btn btn-blue"
                                    >
                                        📥 Download PDF
                                    </a>
                                    <div className="file-size">Size: ~3.2 MB</div>
                                </div>
                                
                                <div className="download-item">
                                    <span className="download-icon" style={{color: '#FF9800'}}>📄</span>
                                    <h5 className="download-item-title">Terms & Conditions</h5>
                                    <p className="download-item-description">
                                        Complete terms and conditions document
                                    </p>
                                    <a 
                                        href="/path/to/terms-and-conditions.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="download-btn btn-orange"
                                    >
                                        📥 Download PDF
                                    </a>
                                    <div className="file-size">Size: ~1.8 MB</div>
                                </div>
                            </div>
                            
                            <div className="notice-section">
                                <div className="notice-icon">ℹ️</div>
                                <div className="notice-content">
                                    <h6>Important Notice</h6>
                                    <p>
                                        Please ensure you have <strong>Adobe Acrobat Reader</strong> or a compatible PDF viewer installed to open these files. All forms should be filled out completely and submitted along with required documents.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="help-section">
                                <h6>Need Help? 📞</h6>
                                <p>
                                    If you encounter any issues downloading or filling out the forms, please contact our support team for assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DownloadSection;