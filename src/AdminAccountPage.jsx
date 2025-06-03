import { useState } from 'react';

export default function AdminAccountPage() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
    
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = 'New password must be different from current password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form on success
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      alert('Password changed successfully!');
    }, 2000);
  };

  const handleCancel = () => {
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-2">
              <img
                src="/src/assets/logo.png"
                alt="USTP Logo"
                className="absolute inset-0 w-full h-full object-contain rounded-full border-4 border-orange-400"
              />
            </div>
            <div className="text-center">
              <h1 className="text-lg font-bold text-blue-900 leading-tight">USTP MARKETPLACE</h1>
              <h2 className="text-sm font-semibold text-blue-900">FOR STUDENTS</h2>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-full bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200/50 text-gray-600 hover:text-gray-800 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z"/>
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 z-50">
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">Recent Notifications</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100/50">
                        <p className="text-sm text-gray-700">New product publish request</p>
                        <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100/50">
                        <p className="text-sm text-gray-700">Order #1234 needs approval</p>
                        <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                      </div>
                    </div>
                    <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium bg-blue-50 hover:bg-blue-100 py-2 rounded-lg transition-colors">
                      View All
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center space-x-3 px-4 py-2 rounded-full bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200/50 transition-all duration-200 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-gray-700">User</span>
                <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showUserDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 z-50">
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-50/50 transition-colors">
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50/50 transition-colors">
                      Account
                    </button>
                    <hr className="my-1 border-gray-200/50" />
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600  hover:bg-red-50/50 transition-colors">
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="p-6 min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex gap-6 h-full">
            <aside className="w-48 flex-shrink-0">
              <nav>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  Home
                </button>
              </nav>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 p-8 h-full">
                <div className="max-w-md mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Account Settings</h2>
                    <p className="text-sm text-gray-600">Change your password to keep your account secure</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Current Password</label>
                      <div className="relative">
                        <input
                          type={showPasswords.current ? "text" : "password"}
                          value={formData.currentPassword}
                          onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                          placeholder="Enter your current password"
                          className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-200 text-gray-900"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('current')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {showPasswords.current ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            )}
                          </svg>
                        </button>
                      </div>
                      {errors.currentPassword && (
                        <div className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                          {errors.currentPassword}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">New Password</label>
                      <div className="relative">
                        <input
                          type={showPasswords.new ? "text" : "password"}
                          value={formData.newPassword}
                          onChange={(e) => handleInputChange('newPassword', e.target.value)}
                          placeholder="Enter your new password"
                          className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-200 text-gray-900"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('new')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {showPasswords.new ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            )}
                          </svg>
                        </button>
                      </div>
                      {errors.newPassword && (
                        <div className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                          {errors.newPassword}
                        </div>
                      )}
                      <div className="text-xs text-gray-500 mt-1">
                        Password must be at least 8 characters long
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Confirm New Password</label>
                      <div className="relative">
                        <input
                          type={showPasswords.confirm ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          placeholder="Confirm your new password"
                          className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-200 text-gray-900"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('confirm')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {showPasswords.confirm ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            )}
                          </svg>
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <div className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>

                    <div className="pt-6 flex gap-4">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 text-white px-8 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Updating...
                          </div>
                        ) : (
                          'Update Password'
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 disabled:from-gray-200 disabled:to-gray-200 text-gray-700 disabled:text-gray-400 px-8 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="text-sm font-semibold text-blue-800 mb-1">Security Tips</h4>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Use a strong password with letters, numbers, and symbols</li>
                          <li>• Don't reuse passwords from other accounts</li>
                          <li>• Change your password regularly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}