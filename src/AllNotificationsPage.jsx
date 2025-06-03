import { useState } from 'react';

export default function AllNotificationsPage() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'product_request',
      title: 'New Product Publish Request',
      message: 'John Doe has submitted a new product "iPhone 14 Pro" for approval.',
      timestamp: '2 minutes ago',
      isRead: false,
      priority: 'high',
      actionRequired: true
    },
    {
      id: 2,
      type: 'order',
      title: 'Order Needs Approval',
      message: 'Order #1234 from Sarah Wilson requires your approval before processing.',
      timestamp: '1 hour ago',
      isRead: false,
      priority: 'medium',
      actionRequired: true
    },
    {
      id: 3,
      type: 'user_registration',
      title: 'New User Registration',
      message: 'Mike Johnson has registered as a new seller on the platform.',
      timestamp: '3 hours ago',
      isRead: true,
      priority: 'low',
      actionRequired: false
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of ₱2,500 has been received for Order #1233.',
      timestamp: '5 hours ago',
      isRead: true,
      priority: 'low',
      actionRequired: false
    },
    {
      id: 5,
      type: 'report',
      title: 'Product Report',
      message: 'A product has been reported for inappropriate content and needs review.',
      timestamp: '1 day ago',
      isRead: false,
      priority: 'high',
      actionRequired: true
    },
    {
      id: 6,
      type: 'system',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur tonight at 2:00 AM - 4:00 AM.',
      timestamp: '2 days ago',
      isRead: true,
      priority: 'medium',
      actionRequired: false
    },
    {
      id: 7,
      type: 'product_request',
      title: 'Product Update Request',
      message: 'Lisa Chen wants to update product details for "Samsung Galaxy S23".',
      timestamp: '3 days ago',
      isRead: true,
      priority: 'low',
      actionRequired: false
    },
    {
      id: 8,
      type: 'order',
      title: 'Order Cancelled',
      message: 'Order #1230 has been cancelled by the customer.',
      timestamp: '4 days ago',
      isRead: true,
      priority: 'low',
      actionRequired: false
    }
  ]);

  const handleGoBack = () => {
    // Navigate back to previous page
    window.history.back();
  };

  const handleMarkAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, isRead: true }
          : notif
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'product_request':
        return (
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        );
      case 'order':
        return (
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2" />
            </svg>
          </div>
        );
      case 'user_registration':
        return (
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        );
      case 'payment':
        return (
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
        );
      case 'report':
        return (
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        );
      case 'system':
        return (
          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
            </svg>
          </div>
        );
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            High Priority
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Medium
          </span>
        );
      case 'low':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Low Priority
          </span>
        );
      default:
        return null;
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'unread') return !notif.isRead;
    if (selectedFilter === 'action') return notif.actionRequired;
    return notif.type === selectedFilter;
  });

  const unreadCount = notifications.filter(notif => !notif.isRead).length;

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 bg-fixed">
      {/* Modern Top Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side - USTP Logo */}
          <div className="flex flex-col items-center">
            <img 
              src="/src/assets/logo.png" 
              alt="USTP Logo" 
              className="h-16 w-16 object-contain mb-2"
              onError={(e) => {
                // Fallback to original design if image fails to load
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            {/* Fallback logo design */}
            <div className="hidden" style={{display: 'none'}}>
              <div className="relative w-16 h-16 mb-2">
                {/* Orange circle background */}
                <div className="absolute inset-0 rounded-full border-4 border-orange-400"></div>
                {/* Blue graduation cap */}
                <div className="absolute top-1 left-3 w-8 h-6 bg-blue-800 transform rotate-12 rounded-sm"></div>
                <div className="absolute top-0 right-2 w-3 h-3 bg-orange-400 transform rotate-45"></div>
                {/* Blue figure/person */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-blue-800 rounded-full relative">
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-blue-800 rounded-t-full"></div>
                  </div>
                </div>
                {/* Orange decorative elements */}
                <div className="absolute top-3 right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            {/* Title under logo */}
            <div className="text-center">
              <h1 className="text-lg font-bold text-blue-900 leading-tight">USTP MARKETPLACE</h1>
              <h2 className="text-sm font-semibold text-blue-900">FOR STUDENTS</h2>
            </div>
          </div>

          {/* Right side - User Profile */}
          <div className="flex items-center space-x-4">
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
        <div className="max-w-4xl mx-auto">
          
          {/* Page Header with Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <button 
                onClick={handleGoBack}
                className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Dashboard</span>
              </button>
              <span>/</span>
              <span className="text-gray-800 font-medium">Notifications</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">All Notifications</h1>
                <p className="text-gray-600">
                  {unreadCount > 0 
                    ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                    : 'All notifications are read'
                  }
                </p>
              </div>
              
              {unreadCount > 0 && (
                <button
                  onClick={handleMarkAllAsRead}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Mark All as Read
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 p-1 mb-6">
            <div className="flex flex-wrap gap-1">
              {[
                { key: 'all', label: 'All', count: notifications.length },
                { key: 'unread', label: 'Unread', count: unreadCount },
                { key: 'action', label: 'Action Required', count: notifications.filter(n => n.actionRequired).length },
                { key: 'product_request', label: 'Products', count: notifications.filter(n => n.type === 'product_request').length },
                { key: 'order', label: 'Orders', count: notifications.filter(n => n.type === 'order').length }
              ].map(filter => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter.key
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/50'
                  }`}
                >
                  {filter.label}
                  {filter.count > 0 && (
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      selectedFilter === filter.key
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {filter.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border transition-all duration-200 hover:shadow-xl hover:scale-[1.01] ${
                    !notification.isRead 
                      ? 'border-blue-200/50 bg-gradient-to-r from-blue-50/50 to-indigo-50/50' 
                      : 'border-gray-200/50'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Notification Icon */}
                      {getNotificationIcon(notification.type)}
                      
                      {/* Notification Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className={`text-lg font-semibold ${
                                !notification.isRead ? 'text-gray-900' : 'text-gray-700'
                              }`}>
                                {notification.title}
                              </h3>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              )}
                              {notification.actionRequired && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                  Action Required
                                </span>
                              )}
                              {getPriorityBadge(notification.priority)}
                            </div>
                            
                            <p className="text-gray-600 mb-3 leading-relaxed">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500 font-medium">
                                {notification.timestamp}
                              </span>
                              
                              {!notification.isRead && (
                                <button
                                  onClick={() => handleMarkAsRead(notification.id)}
                                  className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                                >
                                  Mark as read
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No notifications found</h3>
                <p className="text-gray-500">
                  {selectedFilter === 'all' 
                    ? "You don't have any notifications yet." 
                    : `No ${selectedFilter} notifications found.`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}