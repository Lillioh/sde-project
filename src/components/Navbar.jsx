import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaBell, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  // Refs for detecting outside clicks
  const userDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);

  // Dummy notifications
  const notifications = [
    "Order #1234 has been shipped.",
    "Your item is out for delivery.",
    "New message from seller.",
    "Order #5678 has been delivered.",
  ];

  const handleNavigation = (path) => {
    setShowDropdown(false);
    setShowNotifications(false);
    navigate(path);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row w-full h-[70px] p-4 text-white bg-[#213567] shadow-xl items-center justify-between pl-20 pr-20">
      {/* Logo */}
      <div className="flex flex-row items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Left-side Icons */}
      <div className="flex flex-row gap-20 items-center">
        <div
          onClick={() => navigate("/buyer-dashboard")}
          className="cursor-pointer hover:text-[#DDA853]"
        >
          <FaHome size={25} />
        </div>

        {/* Notification Icon */}
        <div
          ref={notificationDropdownRef}
          className="relative cursor-pointer hover:text-[#DDA853]"
        >
          <FaBell
            size={25}
            onClick={() => setShowNotifications(!showNotifications)}
          />

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute top-8 -right-28 w-64 bg-white text-black rounded-lg shadow-xl z-50">
              <div className="px-4 py-2 text-sm font-semibold bg-gray-200 rounded-t-lg">
                Notifications
              </div>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {notification}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No new notifications
                </div>
              )}
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <FaShoppingCart
          size={25}
          className="cursor-pointer hover:text-[#DDA853]"
        />
      </div>

      {/* Search Bar */}
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Search"
          className="w-[600px] px-4 py-1 placeholder-gray-500 text-[14px] text-black bg-white rounded-2xl shadow-inner focus:outline-none focus:ring-1 focus:ring-[#ffa618]"
        />
      </div>

      {/* Right-side User Dropdown */}
      <div className="flex flex-row h-11 mr-8 items-center">
        <div ref={userDropdownRef} className="relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex cursor-pointer items-center gap-2"
          >
            <MdAccountCircle size={40} />
            <div className="flex items-center gap-1">
              <span>User</span>
              <FaChevronDown
                size={16}
                className={`transition-transform transform duration-200 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {showDropdown && (
            <div className="absolute top-12 -right-3 w-48 py-2 text-black bg-white rounded-lg shadow-xl z-50">
              <div
                onClick={() => handleNavigation("/profile-page")}
                className="block py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                Profile Information
              </div>
              <div
                onClick={() => handleNavigation("/profile-page-address")}
                className="block py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                My Address
              </div>
              <div
                onClick={() => handleNavigation("/purchase-history")}
                className="block py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                Purchase History
              </div>
              <div
                onClick={() => handleNavigation("/my-cart")}
                className="block py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                My Shop
              </div>
              <div
                onClick={() => handleNavigation("/reg")}
                className="block py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                Start Selling Here
              </div>
              <div
                onClick={() => handleNavigation("/login")}
                className="block py-2 px-4 text-red-500 cursor-pointer hover:bg-gray-100"
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
