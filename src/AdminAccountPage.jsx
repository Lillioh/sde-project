import { useState } from 'react';

export default function AdminAccountPage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (field, value) => {
    // eslint-disable-next-line no-undef
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsEditMode(false);
    // Handle form submission logic here
  };

  const handleCancel = () => {
    setIsEditMode(false);
    // Reset form data if needed
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Modern Top Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side - USTP Logo */}
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

          {/* Right side - User Profile and Notification */}
          <div className="flex items-center space-x-4">
            {/* Notification Button */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-full bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200/50 text-gray-600 hover:text-gray-800 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z"/>
                </svg>
                {/* Notification badge */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Notification Dropdown */}
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

            {/* User Profile */}
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

              {/* User Dropdown Menu */}
              {showUserDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 z-50">
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                      Account
                    </button>
                    <hr className="my-1 border-gray-200/50" />
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50/50 transition-colors">
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex gap-6 h-full">
            
            {/* Sidebar Navigation */}
            <aside className="w-48 flex-shrink-0">
              <nav>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  Home
                </button>
              </nav>
            </aside>

            {/* Profile Form Section */}
            <div className="flex-1 min-w-0">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 p-8 h-full">
                <div className="flex gap-8 h-full">
                  
                  {/* Profile Image Section */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-72 h-96 border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100/50 backdrop-blur-sm relative overflow-hidden">
                      {profileImage ? (
                        <img 
                          src={profileImage} 
                          alt="Profile" 
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      ) : (
                        <>
                          <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-gray-500 font-medium">Add Image</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Form Fields Section - Vertical Layout with Perfect Alignment */}
                  <div className="flex-1 space-y-4 max-w-md">
                    
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Name</label>
                      <input
                        type="text"
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        disabled={!isEditMode}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-200 disabled:bg-gray-50/50 disabled:text-gray-600"
                      />
                    </div>

                    {/* Address Field */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Address</label>
                      <input
                        type="text"
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Enter your complete address"
                        disabled={!isEditMode}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-200 disabled:bg-gray-50/50 disabled:text-gray-600"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Email</label>
                      <input
                        type="email"
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email address"
                        disabled={!isEditMode}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-200 disabled:bg-gray-50/50 disabled:text-gray-600"
                      />
                    </div>

                    {/* Mobile Field */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Mobile(#)</label>
                      <input
                        type="tel"
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        placeholder="Enter your mobile number"
                        disabled={!isEditMode}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-200 disabled:bg-gray-50/50 disabled:text-gray-600"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6">
                      {!isEditMode ? (
                        <button
                          onClick={() => setIsEditMode(true)}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                        >
                          Edit Profile
                        </button>
                      ) : (
                        <div className="flex gap-4">
                          <button
                            onClick={handleSubmit}
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                          >
                            Save Changes
                          </button>
                          <button
                            onClick={handleCancel}
                            className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 px-8 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
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