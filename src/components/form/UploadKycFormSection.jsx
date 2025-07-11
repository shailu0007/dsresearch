// UploadKycFormSection.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function UploadKycFormSection() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        if (selectedFile || (data.uploadedFile && data.uploadedFile.length > 0)) {
            formData.append('kycDocument', selectedFile || data.uploadedFile[0]);
        }
        formData.append('uploadType', 'PreFilledKYC');

        console.log("Upload Form Data:", Object.fromEntries(formData.entries()));

        try {
            const response = await axios.post('https://www.D.S research.co/Webcontroller/uploadKycDocument', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Document upload successful:', response.data);
            alert('Your KYC document has been uploaded successfully!');
            reset();
            setSelectedFile(null);
        } catch (error) {
            console.error('Error uploading document:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                alert(`Document upload failed: ${error.response.data.message || 'Server error'}`);
            } else if (error.request) {
                console.error('Error request:', error.request);
                alert('Document upload failed: No response from server. Check your network connection.');
            } else {
                console.error('Error message:', error.message);
                alert(`Document upload failed: ${error.message}`);
            }
        }
    };

    return (
        <>
            <style jsx>{`
                .kyc-upload-container {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .kyc-upload-container::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    animation: float 6s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }

                .kyc-title {
                    font-size: 2.5em;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 15px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                    background: linear-gradient(45deg, #ffffff, #f0f0f0);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .kyc-subtitle {
                    text-align: center;
                    font-size: 1.1em;
                    opacity: 0.9;
                    margin-bottom: 40px;
                    font-weight: 300;
                }

                .upload-form {
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 15px;
                    padding: 35px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    position: relative;
                    z-index: 1;
                }

                .form-group {
                    margin-bottom: 30px;
                }

                .form-label {
                    display: block;
                    font-weight: 600;
                    margin-bottom: 12px;
                    color: #333;
                    font-size: 1.1em;
                }

                .required-star {
                    color: #e74c3c;
                    margin-left: 3px;
                }

                .file-upload-area {
                    border: 3px dashed #667eea;
                    border-radius: 12px;
                    padding: 40px 20px;
                    text-align: center;
                    background: ${dragActive ? 'rgba(102, 126, 234, 0.1)' : 'rgba(248, 249, 250, 0.8)'};
                    transition: all 0.3s ease;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }

                .file-upload-area:hover {
                    background: rgba(102, 126, 234, 0.05);
                    border-color: #5a67d8;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
                }

                .file-upload-area.drag-active {
                    border-color: #4c51bf;
                    background: rgba(102, 126, 234, 0.15);
                    transform: scale(1.02);
                }

                .upload-icon {
                    font-size: 3em;
                    color: #667eea;
                    margin-bottom: 15px;
                    display: block;
                }

                .upload-text {
                    font-size: 1.2em;
                    color: #4a5568;
                    margin-bottom: 8px;
                    font-weight: 500;
                }

                .upload-hint {
                    font-size: 0.9em;
                    color: #718096;
                    margin-bottom: 15px;
                }

                .file-types {
                    font-size: 0.85em;
                    color: #a0aec0;
                    font-style: italic;
                }

                .file-input {
                    position: absolute;
                    opacity: 0;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }

                .selected-file {
                    background: rgba(102, 126, 234, 0.1);
                    border: 2px solid #667eea;
                    border-radius: 8px;
                    padding: 15px;
                    margin-top: 15px;
                    color: #4a5568;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .file-icon {
                    width: 24px;
                    height: 24px;
                    color: #667eea;
                }

                .textarea-field {
                    width: 100%;
                    padding: 15px;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 1em;
                    font-family: inherit;
                    resize: vertical;
                    min-height: 100px;
                    transition: border-color 0.3s ease;
                }

                .textarea-field:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }

                .submit-btn {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    padding: 15px 40px;
                    font-size: 1.1em;
                    font-weight: 600;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
                }

                .submit-btn:active {
                    transform: translateY(0);
                }

                .error-message {
                    color: #e74c3c;
                    font-size: 0.9em;
                    margin-top: 8px;
                    font-weight: 500;
                }

                .floating-shapes {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                }

                .shape {
                    position: absolute;
                    opacity: 0.1;
                    animation: floatShape 8s infinite linear;
                }

                .shape1 {
                    top: 10%;
                    left: 10%;
                    width: 60px;
                    height: 60px;
                    background: white;
                    border-radius: 50%;
                    animation-delay: 0s;
                }

                .shape2 {
                    top: 70%;
                    right: 10%;
                    width: 40px;
                    height: 40px;
                    background: white;
                    border-radius: 20%;
                    animation-delay: 2s;
                }

                .shape3 {
                    bottom: 20%;
                    left: 20%;
                    width: 80px;
                    height: 80px;
                    background: white;
                    border-radius: 30%;
                    animation-delay: 4s;
                }

                @keyframes floatShape {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(180deg); }
                }
            `}</style>

            <div className="kyc-upload-container">
                <div className="floating-shapes">
                    <div className="shape shape1"></div>
                    <div className="shape shape2"></div>
                    <div className="shape shape3"></div>
                </div>

                <h3 className="kyc-title">UPLOAD YOUR KYC FORM</h3>
                <p className="kyc-subtitle">
                    If you have already filled out a physical KYC form, you can upload it here.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="upload-form">
                    <div className="form-group">
                        <label htmlFor="uploadedFile" className="form-label">
                            Select your KYC Document
                            <span className="required-star">*</span>
                        </label>

                        <div
                            className={`file-upload-area ${dragActive ? 'drag-active' : ''}`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <div className="upload-icon">📁</div>
                            <div className="upload-text">
                                {selectedFile ? 'File Selected!' : 'Drag and drop your document here'}
                            </div>
                            <div className="upload-hint">or click to browse</div>
                            <div className="file-types">
                                Supported: PDF, DOC, DOCX, JPG, JPEG, PNG
                            </div>

                            <input
                                type="file"
                                id="uploadedFile"
                                className="file-input"
                                {...register("uploadedFile", { required: "Please select a file to upload." })}
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                onChange={handleFileSelect}
                            />
                        </div>

                        {selectedFile && (
                            <div className="selected-file">
                                <span className="file-icon">📄</span>
                                <span>{selectedFile.name}</span>
                            </div>
                        )}

                        {errors.uploadedFile && (
                            <div className="error-message">{errors.uploadedFile.message}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="uploadComments" className="form-label">
                            Comments (Optional)
                        </label>
                        <textarea
                            id="uploadComments"
                            className="textarea-field"
                            placeholder="Add any additional comments or notes..."
                            {...register("uploadComments")}
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Upload Document
                    </button>
                </form>
            </div>
        </>
    );
}

export default UploadKycFormSection;