import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { X, User, Clock, CheckCircle, Activity, Search, Filter, Calendar, Mail, UserCheck, UserX } from 'lucide-react';

// Circular Progress Component
const CircularProgress = ({ percentage, title, subtitle, color = "#3b82f6" }) => {
  const radius = 64;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative w-40 h-40">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <defs>
            <linearGradient id={`gradient-${title}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={color === "#3b82f6" ? "#1d4ed8" : "#4338ca"} />
            </linearGradient>
          </defs>
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={`url(#gradient-${title})`}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl font-bold text-gray-800">{percentage}%</span>
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md p-3 rounded-lg shadow-xl border border-gray-200/50">
        <p className="text-sm font-medium text-gray-800">{`${label}`}</p>
        <p className="text-sm text-blue-600">
          {`Value: ${payload[0].value}`}
        </p>
      </div>
    );
  }
  return null;
};

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100/50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

// User Profile Modal Component
const UserProfileModal = ({ user, isOpen, onClose, onStatusChange }) => {
  if (!isOpen || !user) return null;

  const handleStatusToggle = () => {
    const newStatus = user.status === 'Active' ? 'Inactive' : 'Active';
    onStatusChange(user.id, newStatus);
  };

  const handleViewShop = () => {
    // Navigate to seller's shop page
    // Replace with your actual navigation logic
    const shopUrl = `/shop/${user.id}`;
    window.open(shopUrl, '_blank');
    // Or use your router: navigate(`/shop/${user.id}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-lg w-full transform transition-all ${
        user.status === 'Inactive' ? 'opacity-75' : ''
      }`}>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            {user.role === 'Seller' ? 'Seller Account Details' : 'User Profile'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* User Avatar and Basic Info */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
              user.status === 'Inactive' 
                ? 'bg-gradient-to-r from-gray-400 to-gray-500' 
                : user.role === 'Seller'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500'
            }`}>
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                user.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {user.status}
              </span>
            </div>
          </div>

          {/* User Details - Aligned Layout */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Name:</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm text-gray-800 font-medium">{user.name}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Email:</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm text-gray-800">{user.email}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <UserCheck className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Role:</span>
              </div>
              <div className="col-span-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.role === 'Seller' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {user.role}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Status:</span>
              </div>
              <div className="col-span-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {user.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Join Date:</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm text-gray-800">{user.joinDate}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            {/* View Shop Button - Only for Sellers */}
            {user.role === 'Seller' && (
              <button
                onClick={handleViewShop}
                className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Activity className="w-5 h-5" />
                <span>View Shop</span>
              </button>
            )}

            {/* Status Toggle Button - Only for Sellers */}
            {user.role === 'Seller' && (
              <button
                onClick={handleStatusToggle}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                  user.status === 'Active'
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {user.status === 'Active' ? (
                  <>
                    <UserX className="w-5 h-5" />
                    <span>Deactivate Seller</span>
                  </>
                ) : (
                  <>
                    <UserCheck className="w-5 h-5" />
                    <span>Activate Seller</span>
                  </>
                )}
              </button>
            )}

            {user.status === 'Inactive' && user.role === 'Seller' && (
              <p className="text-xs text-red-600 text-center">
                This seller account is currently deactivated
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Users Table Component
const UsersTable = ({ searchTerm, setSearchTerm }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@ustp.edu.ph', role: 'Student', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@ustp.edu.ph', role: 'Seller', status: 'Active', joinDate: '2024-01-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@ustp.edu.ph', role: 'Student', status: 'Inactive', joinDate: '2024-02-01' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@ustp.edu.ph', role: 'Seller', status: 'Active', joinDate: '2024-02-10' },
    { id: 5, name: 'David Brown', email: 'david@ustp.edu.ph', role: 'Student', status: 'Active', joinDate: '2024-02-15' },
    { id: 6, name: 'Lisa Garcia', email: 'lisa@ustp.edu.ph', role: 'Seller', status: 'Inactive', joinDate: '2024-03-01' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm?.toLowerCase() || '') ||
    user.email?.toLowerCase().includes(searchTerm?.toLowerCase() || '') ||
    user.role?.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleStatusChange = (userId, newStatus) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
    setSelectedUser(prev => prev ? { ...prev, status: newStatus } : null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            />
          </div>
          <button className="p-3 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200/50 hover:bg-gray-50/50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50 border-b border-gray-200/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Join Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {filteredUsers.map((user) => (
                  <tr 
                    key={user.id} 
                    onClick={() => handleUserClick(user)}
                    className={`cursor-pointer transition-all duration-200 ${
                      user.status === 'Inactive' && user.role === 'Seller'
                        ? 'hover:bg-red-50/50 bg-red-25/25'
                        : 'hover:bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          user.status === 'Inactive' && user.role === 'Seller'
                            ? 'bg-gradient-to-r from-red-400 to-red-500'
                            : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                        }`}>
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-sm font-medium ${
                          user.status === 'Inactive' && user.role === 'Seller'
                            ? 'text-gray-500'
                            : 'text-gray-800'
                        }`}>
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-sm ${
                      user.status === 'Inactive' && user.role === 'Seller'
                        ? 'text-gray-400'
                        : 'text-gray-600'
                    }`}>
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === 'Seller' 
                          ? user.status === 'Inactive'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-purple-100 text-purple-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                        {user.role === 'Seller' && user.status === 'Inactive' && (
                          <span className="ml-1 text-xs">●</span>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-sm ${
                      user.status === 'Inactive' && user.role === 'Seller'
                        ? 'text-gray-400'
                        : 'text-gray-600'
                    }`}>
                      {user.joinDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* User Profile Modal */}
      <UserProfileModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={closeModal}
        onStatusChange={handleStatusChange}
      />
    </>
  );
};

// Activity Management Component
const ActivityManagement = () => {
  const [activities] = useState([
    { id: 1, type: 'registration', user: 'John Doe', description: 'New user registered', time: '2 minutes ago', status: 'completed' },
    { id: 2, type: 'product', user: 'Jane Smith', description: 'Product approval requested', time: '15 minutes ago', status: 'pending' },
    { id: 3, type: 'order', user: 'Mike Johnson', description: 'Order #1234 placed', time: '1 hour ago', status: 'completed' },
    { id: 4, type: 'registration', user: 'Sarah Wilson', description: 'Seller registration approved', time: '2 hours ago', status: 'completed' },
    { id: 5, type: 'product', user: 'David Brown', description: 'Product listing updated', time: '3 hours ago', status: 'completed' },
  ]);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'registration':
        return <User className="w-5 h-5 text-blue-600" />;
      case 'product':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'order':
        return <Activity className="w-5 h-5 text-purple-600" />;
      default:
        return <Activity className="w-5 h-5 text-gray-600" />;
    }
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Activity Management</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200">
          Export Report
        </button>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-colors">
              <div className="flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800">{activity.description}</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    activity.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-600">{activity.user}</span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AdDashboard() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showActiveUsersModal, setShowActiveUsersModal] = useState(false);
  const [showActiveSellersModal, setShowActiveSellersModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Chart data states
  const [visitorsData, setVisitorsData] = useState([]);
  const [sellersData, setSellersData] = useState([]);
  const [activeUsersPercent, setActiveUsersPercent] = useState(0);
  const [activeSellersPercent, setActiveSellersPercent] = useState(0);

  // Mock data for active users and sellers
  const [activeUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Student', lastActive: '2 minutes ago', status: 'Online' },
    { id: 2, name: 'Jane Smith', role: 'Student', lastActive: '5 minutes ago', status: 'Online' },
    { id: 3, name: 'Mike Johnson', role: 'Student', lastActive: '10 minutes ago', status: 'Away' },
  ]);

  const [activeSellers] = useState([
    { id: 1, name: 'Sarah Wilson', role: 'Seller', lastActive: '1 minute ago', status: 'Online' },
    { id: 2, name: 'David Brown', role: 'Seller', lastActive: '8 minutes ago', status: 'Online' },
  ]);

  // Mock API data fetch simulation
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const mockVisitorsData = [
          { month: 'Mar 2024', visitors: 45, fullMonth: 'March 2024' },
          { month: 'Apr 2024', visitors: 62, fullMonth: 'April 2024' },
          { month: 'May 2024', visitors: 58, fullMonth: 'May 2024' },
          { month: 'Jun 2024', visitors: 71, fullMonth: 'June 2024' },
          { month: 'Jul 2024', visitors: 85, fullMonth: 'July 2024' },
        ];

        const mockSellersData = [
          { month: 'Mar 2024', subscribers: 12, fullMonth: 'March 2024' },
          { month: 'Apr 2024', subscribers: 18, fullMonth: 'April 2024' },
          { month: 'May 2024', subscribers: 15, fullMonth: 'May 2024' },
          { month: 'Jun 2024', subscribers: 22, fullMonth: 'June 2024' },
          { month: 'Jul 2024', subscribers: 28, fullMonth: 'July 2024' },
        ];

        setVisitorsData(mockVisitorsData);
        setSellersData(mockSellersData);
        setActiveUsersPercent(40);
        setActiveSellersPercent(20);
      }, 1000);
    };

    fetchData();
  }, []);

  const renderActiveUsersList = (users) => (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600">{user.role}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${user.status === 'Online' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <span className="text-sm font-medium text-gray-700">{user.status}</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
              <Clock className="w-3 h-3" />
              <span>{user.lastActive}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDashboardContent = () => (
    <div className="space-y-6">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium">Total Users</p>
              <p className="text-4xl font-bold">87</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-500 to-slate-600 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium">Total Registered as Sellers</p>
              <p className="text-4xl font-bold">31</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid - 2x2 Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Row */}
        {/* Visitors Over Time Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 p-6 h-96">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Visitors Over Time</h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Overview</span>
          </div>
          <div className="h-64">
            {visitorsData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={visitorsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: '#6b7280' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="visitors" 
                    fill="url(#blueGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
        </div>

       {/* Active Users Card */}
<div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 p-6 h-96">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-lg font-semibold text-gray-800">Active Users</span>
    </div>
    <button 
      onClick={() => setShowActiveUsersModal(true)}
      className="text-xs text-blue-600 hover:text-blue-800 font-medium bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-lg transition-colors"
    >
      View
    </button>
  </div>

  {/* Updated CircularProgress Component */}
  <div className="flex items-center justify-center h-full">
    <div className="relative w-48 h-48">
      {/* SVG Circle */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          stroke="#3b82f6"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray="282.743"
          strokeDashoffset={(1 - activeUsersPercent / 100) * 282.743}
          r="45"
          cx="50"
          cy="50"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-bold text-gray-800">
          {activeUsersPercent}%
        </span>
        <span className="text-sm text-gray-500 mt-1">
          of total users
        </span>
      </div>
    </div>
  </div>
</div>
        {/* Bottom Row */}
        {/* Seller Subscribers Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 p-6 h-96">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Seller Subscribers</h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Overview</span>
          </div>
          
          <div className="h-64">
            {sellersData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sellersData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: '#6b7280' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="subscribers" 
                    fill="url(#indigoGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="indigoGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#4338ca" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            )}
          </div>
        </div>

       {/* Active Sellers Card */}
<div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50 p-6 h-96">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-lg font-semibold text-gray-800">Active Sellers</span>
    </div>
    <button 
      onClick={() => setShowActiveSellersModal(true)}
      className="text-xs text-blue-600 hover:text-blue-800 font-medium bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-lg transition-colors"
    >
      View
    </button>
  </div>

  {/* Updated CircularProgress layout */}
  <div className="flex items-center justify-center h-full">
    <div className="relative w-48 h-48">
      {/* SVG Circle */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          stroke="#6366f1"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray="282.743"
          strokeDashoffset={(1 - activeSellersPercent / 100) * 282.743}
          r="45"
          cx="50"
          cy="50"
        />
      </svg>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-bold text-gray-800">
          {activeSellersPercent}%
        </span>
        <span className="text-sm text-gray-500 mt-1">
          of total sellers
        </span>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  );



  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 bg-fixed">
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
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100/50">
                        <p className="text-sm text-gray-700">New user registration</p>
                        <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
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
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6">
            
            {/* Sidebar Navigation */}
            <aside className="w-48 flex-shrink-0">
              <nav className="space-y-2 sticky top-24">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    activeTab === 'dashboard' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-gray-50 border border-gray-200/50'
                  }`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('users')}
                  className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    activeTab === 'users' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-gray-50 border border-gray-200/50'
                  }`}
                >
                  Users
                </button>
                <button 
                  onClick={() => setActiveTab('activity')}
                  className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                    activeTab === 'activity' 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-gray-50 border border-gray-200/50'
                  }`}
                >
                  Activity Management
                </button>
              </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-1 min-w-0">
              {activeTab === 'dashboard' && renderDashboardContent()}
              {activeTab === 'users' && <UsersTable searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
              {activeTab === 'activity' && <ActivityManagement />}
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <Modal 
        isOpen={showActiveUsersModal} 
        onClose={() => setShowActiveUsersModal(false)}
        title="Active Users"
      >
        {renderActiveUsersList(activeUsers, 'users')}
      </Modal>

      <Modal 
        isOpen={showActiveSellersModal} 
        onClose={() => setShowActiveSellersModal(false)}
        title="Active Sellers"
      >
        {renderActiveUsersList(activeSellers, 'sellers')}
      </Modal>
    </div>
  );
}