import React, { useState } from 'react';

const CreateAdminAccount = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    suffix: '',
    sex: '',
    dateOfBirth: '',
    houseNumber: '',
    barangay: '',
    city: '',
    province: '',
    contactNumber: '+639',
    postalCode: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for contact number to maintain +639 prefix
    if (name === 'contactNumber') {
      if (!value.startsWith('+639')) {
        return; // Don't allow changes that remove the prefix
      }
      // Only allow numbers after +639
      const numericPart = value.slice(4);
      if (numericPart && !/^\d*$/.test(numericPart)) {
        return; // Don't allow non-numeric characters
      }
      if (numericPart.length > 9) {
        return; // Limit to 9 digits after +639
      }
    }
    
    // Special handling for date of birth to ensure 4-digit year
    if (name === 'dateOfBirth' && value) {
      const year = new Date(value).getFullYear();
      if (year.toString().length !== 4) {
        return; // Don't allow invalid years
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.sex) newErrors.sex = 'Sex is required';
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else {
      const year = new Date(formData.dateOfBirth).getFullYear();
      if (year.toString().length !== 4 || year < 1900 || year > new Date().getFullYear()) {
        newErrors.dateOfBirth = 'Please enter a valid date with 4-digit year';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    
    if (!formData.houseNumber.trim()) newErrors.houseNumber = 'House number is required';
    if (!formData.barangay.trim()) newErrors.barangay = 'Barangay is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.province.trim()) newErrors.province = 'Province is required';
    if (formData.contactNumber === '+639' || formData.contactNumber.length < 13) {
      newErrors.contactNumber = 'Please enter a valid contact number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    
    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    } else if (currentStep === 3) {
      isValid = validateStep3();
    }
    
    if (isValid) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(4);
    }, 2000);
  };

  const handleBackToLogin = () => {
    // Reset form and go back to step 1
    setCurrentStep(1);
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      suffix: '',
      sex: '',
      dateOfBirth: '',
      houseNumber: '',
      barangay: '',
      city: '',
      province: '',
      contactNumber: '+639',
      postalCode: ''
    });
    setErrors({});
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center">
        {[1, 2, 3].map((step, index) => (
          <React.Fragment key={step}>
            <div className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center text-xs font-bold ${
              currentStep >= step 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-110' 
                : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
            }`}>
              {currentStep > step ? '✓' : step}
            </div>
            {index < 2 && (
              <div className={`w-12 h-1 mx-3 rounded-full transition-all duration-300 ${
                currentStep > step 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                  : 'bg-gray-200'
              }`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const PasswordToggleIcon = ({ show, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors p-1 rounded-md hover:bg-gray-100"
    >
      {show ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )}
    </button>
  );

  const renderStep1 = () => (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="w-28 h-28 mx-auto mb-6 relative rounded-full border-4 border-orange-400 overflow-hidden">
          <img
            src="/src/assets/logo.png"
            alt="USTP Logo"
            className="absolute inset-0 w-full h-full object-contain"
          />
          </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">USTP MARKET PLACE FOR STUDENTS</h1>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Sign Up
          </h2>
          <p className="text-sm text-gray-700 font-medium">Step 1: Provide Username, Password and Email</p>
        </div>

        {renderStepIndicator()}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                errors.username ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
              }`}
            />
            {errors.username && <p className="text-red-600 text-sm mt-2 font-medium">{errors.username}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 pr-12 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-600 ${
                  errors.password ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
                }`}
                style={{ fontSize: '16px', letterSpacing: showPassword ? 'normal' : '2px' }}
              />
              <PasswordToggleIcon show={showPassword} onClick={() => setShowPassword(!showPassword)} />
            </div>
            {errors.password && <p className="text-red-600 text-sm mt-2 font-medium">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••••••"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 pr-12 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-600 ${
                  errors.confirmPassword ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
                }`}
                style={{ fontSize: '16px', letterSpacing: showConfirmPassword ? 'normal' : '2px' }}
              />
              <PasswordToggleIcon show={showConfirmPassword} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
            </div>
            {errors.confirmPassword && <p className="text-red-600 text-sm mt-2 font-medium">{errors.confirmPassword}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                errors.email ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
              }`}
            />
            {errors.email && <p className="text-red-600 text-sm mt-2 font-medium">{errors.email}</p>}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Next Step →
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="w-28 h-28 mx-auto mb-6 relative rounded-full border-4 border-orange-400 overflow-hidden">
          <img
            src="/src/assets/logo.png"
            alt="USTP Logo"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">USTP MARKET PLACE FOR STUDENTS</h1>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Sign Up
          </h2>
          <p className="text-sm text-gray-700 font-medium">Step 2: Provide your Information</p>
        </div>

        {renderStepIndicator()}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                errors.firstName ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
              }`}
            />
            {errors.firstName && <p className="text-red-600 text-sm mt-2 font-medium">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                errors.lastName ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
              }`}
            />
            {errors.lastName && <p className="text-red-600 text-sm mt-2 font-medium">{errors.lastName}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Suffix</label>
              <input
                type="text"
                name="suffix"
                placeholder="e.g Jr, Sr, II, III"
                value={formData.suffix}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 bg-white/50 font-medium placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Sex</label>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-800 ${
                  errors.sex ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
                }`}
              >
                <option value="" className="text-gray-500">Male/Female</option>
                <option value="Male" className="text-gray-800">Male</option>
                <option value="Female" className="text-gray-800">Female</option>
              </select>
              {errors.sex && <p className="text-red-600 text-sm mt-2 font-medium">{errors.sex}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              max={new Date().toISOString().split('T')[0]}
              min="1900-01-01"
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-gray-800 ${
                errors.dateOfBirth ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
              }`}
            />
            {errors.dateOfBirth && <p className="text-red-600 text-sm mt-2 font-medium">{errors.dateOfBirth}</p>}
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleBack}
            className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
  <div className="w-full max-w-md mx-auto">
    <div className="text-center mb-8">
      {/* Replace the SVG logo div with the image container */}
      <div className="w-28 h-28 mx-auto mb-6 relative rounded-full border-4 border-orange-400 overflow-hidden">
        <img
          src="/src/assets/logo.png"
          alt="USTP Logo"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        USTP MARKET PLACE FOR STUDENTS
      </h1>
    </div>

    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                 Sign Up
          </h2>
          <p className="text-sm text-gray-700 font-medium">Step 3: Address Information and Contact</p>
        </div>

        {renderStepIndicator()}

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">House#</label>
              <input
                type="text"
                name="houseNumber"
                placeholder="Street/Block/Lot(#)"
                value={formData.houseNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                  errors.houseNumber ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
                }`}
              />
              {errors.houseNumber && <p className="text-red-600 text-sm mt-2 font-medium">{errors.houseNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Barangay</label>
              <input
                type="text"
                name="barangay"
                placeholder="Barangay"
                value={formData.barangay}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                  errors.barangay ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
                }`}
              />
              {errors.barangay && <p className="text-red-600 text-sm mt-2 font-medium">{errors.barangay}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">City</label>
              <input
                type="text"
                name="city"
                placeholder="City/Municipality"
                value={formData.city}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                  errors.city ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
                }`}
              />
              {errors.city && <p className="text-red-600 text-sm mt-2 font-medium">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Province</label>
              <input
                type="text"
                name="province"
                placeholder="Province"
                value={formData.province}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                  errors.province ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
                }`}
              />
              {errors.province && <p className="text-red-600 text-sm mt-2 font-medium">{errors.province}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                placeholder="+639"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium placeholder:text-gray-500 ${
                  errors.contactNumber ? 'border-red-400 bg-red-50/50' : 'border-gray-300 hover:border-gray-400 bg-white/50'
                }`}
              />
              {errors.contactNumber && <p className="text-red-600 text-sm mt-2 font-medium">{errors.contactNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                placeholder="0000"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 bg-white/50 font-medium placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleBack}
            className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={isLoading}
            className={`flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02]'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                Creating Account...
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-12 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Registration Successful!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 font-medium">
          You have successfully registered as an administrator.
        </p>
        
        <button
          onClick={handleBackToLogin}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Go to Login →
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>
      </div>
      
      <footer className="text-center text-gray-700 text-sm py-6 font-medium">
        © 2025 USTP Market Place. All Rights Reserved.
      </footer>
    </div>
  );
};

export default CreateAdminAccount;