import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaBell, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  return (
    <div className="flex flex-row w-full h-[70px] p-4 text-white bg-[#213567] shadow-xl gap-10 items-center justify-between">
      {/* Left-side Icons */}
      <div className="flex flex-row ml-8 gap-20 items-center transition duration-200">
        <div onClick={() => navigate('/welcome')} className="cursor-pointer hover:text-[#DDA853]">
          <FaHome size={25} />
        </div>
        <FaBell size={25} className="cursor-pointer hover:text-[#DDA853]" />
        <FaShoppingCart size={25} className="cursor-pointer hover:text-[#DDA853]" />
      </div>

      {/* Search Bar */}
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Search"
          className="w-[600px] px-4 py-1 placeholder-gray-500 text-[14px] text-black bg-white rounded-2xl shadow-[inset_0px_2px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-1 focus:ring-[#ffa618]"
        />
      </div>

      {/* Right-side User Dropdown */}
      <div className="flex flex-row h-11 mr-8 items-center gap-5">
        <div className="relative">
          <div onClick={() => setShowDropdown(!showDropdown)} className="flex cursor-pointer items-center gap-2">
            <MdAccountCircle size={40} />
            <div className="flex items-center gap-1">
              <span>User</span>
              <FaChevronDown
                size={16}
                className={`transition-transform transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
              />
            </div>
          </div>

          {showDropdown && (
            <div className="z-50 w-48 py-2 text-black bg-white rounded-lg shadow-xl absolute top-12 -right-3">
              <div onClick={() => handleNavigation('/profile-page')} className="block py-2 px-4 cursor-pointer hover:bg-gray-100">
                Profile Information
              </div>
              <div onClick={() => handleNavigation('/profile-page-address')} className="block py-2 px-4 cursor-pointer hover:bg-gray-100">
                My Address
              </div>
              <div onClick={() => handleNavigation('/purchase-history')} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
                Purchase History
              </div>
              <div onClick={() => handleNavigation('/my-cart')} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
                My Shop
              </div>
              <div onClick={() => handleNavigation('/login')} className="py-2 px-4 text-red-500 cursor-pointer hover:bg-gray-100">
                Logout
              </div>
            </div>
          )}
        </div>

        <span onClick={() => navigate('/create-account')} className="ml-4 cursor-pointer underline">
          Start selling here
        </span>
      </div>
    </div>
  );
};

export default Navbar;
