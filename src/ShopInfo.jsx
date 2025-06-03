import React, { useState } from 'react';
import './ShopInfo.css';

const ShopInfo = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    email: '',
    idType: '',
    houseAndWard: '',
    idNumber: '',
    districtAndProvince: '',
    photoId: null,
    phoneNumber: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing again
    if (error) setError(null);
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photoId: e.target.files[0]
    });
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!formData.shopName) return "Shop Name is required";
    if (!formData.email) return "Email Address is required";
    if (!formData.email.includes('@')) return "Please enter a valid email address";
    if (!formData.idType) return "ID Type is required";
    if (!formData.idNumber) return "ID Number is required";
    if (!formData.houseAndWard) return "House# and Ward is required";
    if (!formData.districtAndProvince) return "District and Province is required";
    if (!formData.photoId) return "Please upload a valid ID photo";
    if (!formData.phoneNumber) return "Phone Number is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Simulate API call with 50% chance of failure
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate random failure
      if (Math.random() < 0.5) {
        throw new Error("Failed to register shop. Please try again later.");
      }
      
      // Success case
      setSuccess(true);
      console.log('Form submitted successfully:', formData);
      
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    console.log('Going back to previous page');
    // Add your navigation logic here
  };

  return (
    <div className="flex flex-col w-screen h-screen shop-profile-container">
      <div className="shop-profile-card">
        <button className="back-button" onClick={handleBack}>Back</button>
        
        <h1 className="shop-profile-title">Shop Profile Information</h1>
        
        {success ? (
          <div className="success-message">
            <h2>Registration Successful!</h2>
            <p>Your shop has been registered successfully.</p>
            <button 
              className="submit-button" 
              onClick={() => console.log("Navigate to dashboard or next step")}
            >
              Continue
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="profile-form">
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="shopName">Shop Name</label>
                <input
                  type="text"
                  id="shopName"
                  name="shopName"
                  placeholder="Input"
                  value={formData.shopName}
                  onChange={handleInputChange}
                  className={error && !formData.shopName ? "input-error" : ""}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Input"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={error && (!formData.email || !formData.email.includes('@')) ? "input-error" : ""}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="idType">ID Type</label>
                <input
                  type="text"
                  id="idType"
                  name="idType"
                  value={formData.idType}
                  onChange={handleInputChange}
                  className={error && !formData.idType ? "input-error" : ""}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="houseAndWard">House# and Ward</label>
                <input
                  type="text"
                  id="houseAndWard"
                  name="houseAndWard"
                  placeholder="Street/Block Lot/Barangay"
                  value={formData.houseAndWard}
                  onChange={handleInputChange}
                  className={error && !formData.houseAndWard ? "input-error" : ""}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="idNumber">ID Number</label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  className={error && !formData.idNumber ? "input-error" : ""}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="districtAndProvince">District and Province</label>
                <input
                  type="text"
                  id="districtAndProvince"
                  name="districtAndProvince"
                  value={formData.districtAndProvince}
                  onChange={handleInputChange}
                  className={error && !formData.districtAndProvince ? "input-error" : ""}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="photoId">Photo of the valid ID</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    id="photoId"
                    name="photoId"
                    onChange={handleFileChange}
                    className="file-input"
                  />
                  <button 
                    type="button" 
                    className={`upload-button ${error && !formData.photoId ? "input-error" : ""}`}
                    onClick={() => document.getElementById('photoId').click()}
                  >
                    Upload Image
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <div className={`phone-input ${error && !formData.phoneNumber ? "input-error" : ""}`}>
                  <span className="phone-prefix">+63</span>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="phone-number-input"
                  />
                </div>
              </div>
            </div>
            
            <div className="submit-container">
              <button 
                type="submit" 
                className="submit-button" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ShopInfo;