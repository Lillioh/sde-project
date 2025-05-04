import { useState } from "react";
import { FaHome, FaBell, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function PurchaseHistory() {
  const [activeTab, setActiveTab] = useState("purchased");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  const renderTabContent = () => {
    let status = "";
    let quantity = "1";

    switch (activeTab) {
      case "purchased":
        status = "Delivered";
        quantity = "";
        break;
      case "cancelled":
        status = "Cancelled";
        break;
      case "returned":
        status = "Returned";
        break;
    }

    return (
      <div className="w-full flex flex-col justify-between flex-grow overflow-y-auto text-sm">
        <div>
          <div className="flex justify-between items-center py-3 px-5 bg-gray-100 text-gray-700">
            <button className="flex items-center bg-gray-200 text-gray-800 px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-300 transition duration-200">
              <FaShoppingCart className="w-4 h-4 mr-1" />
              <span>View Shop</span>
            </button>
            <div className="text-gray-600">Item Status: <span className="font-medium">{status}</span></div>
          </div>

          <div className="p-5 border-b border-gray-200">
            <div className="flex">
              <div className="w-28 h-28 bg-white border border-gray-200 flex-shrink-0 rounded-lg overflow-hidden">
                <img src="/img.jpg" alt="Product" className="object-cover w-full h-full" />
              </div>
              <div className="ml-6 flex-grow">
                <div className="flex justify-between items-start">
                  <div className="text-gray-900 font-medium leading-snug">
                    Sample Item and Specifications
                  </div>
                  <div className="text-orange-600 font-semibold text-base">₱123.45</div>
                </div>
                <div className="text-gray-500 mt-4 text-sm space-y-1">
                  <div>Item Variation: Example</div>
                  {quantity && <div>Quantity: {quantity}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-5 py-4 bg-white border-t border-gray-200">
          <button className="bg-[#213567] hover:bg-[#1a2a52] text-white px-4 py-2 rounded text-sm font-medium transition duration-200">
            Buy Again
          </button>
          <div className="text-sm text-gray-800">
            <span className="mr-1">Total:</span>
            <span className="font-semibold text-orange-600">₱123.45</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-hidden bg-white font-sans">
      {/* Navigation Bar */}
      <div className="bg-[#213567] text-white w-full shadow-xl">
        <div className="px-6 py-3 h-[70px] flex items-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex space-x-20 items-center ml-8">
              <div className="cursor-pointer hover:text-[#DDA853] transition duration-200" onClick={() => navigate('/')}>
                <FaHome size={25} />
              </div>
              <div className="cursor-pointer hover:text-[#DDA853] transition duration-200">
                <FaBell size={25} />
              </div>
              <div className="cursor-pointer hover:text-[#DDA853] transition duration-200">
                <FaShoppingCart size={25} />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[600px] px-4 py-1 rounded-2xl placeholder-gray-500 text-[14px] text-black bg-white shadow-[inset_0px_2px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-1 focus:ring-[#ffa618]"
                />
              </div>
            </div>

            <div className="flex items-center space-x-6 mr-8 h-11">
              <div className="relative">
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
                  <div className="z-50 w-48 py-2 text-black bg-white rounded-lg shadow-xl absolute top-12 -right-3">
                    <div 
                      onClick={() => handleNavigation('/profile')}
                      className="block py-2 px-4 cursor-pointer hover:bg-gray-100">
                      Profile Information
                    </div>
                    <div 
                      onClick={() => handleNavigation('/address')}
                      className="py-2 px-4 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100">
                      My Address
                    </div>
                    <div 
                      className="py-2 px-4 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100 text-[#213567] font-medium">
                      Purchase History
                    </div>
                    <div 
                      onClick={() => handleNavigation('/my-shop')}
                      className="py-2 px-4 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100">
                      My Shop
                    </div>
                    <div 
                      onClick={() => handleNavigation('/logout')}
                      className="py-2 px-4 text-red-500 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100">
                      Logout
                    </div>
                  </div>
                )}
              </div>
              <span className="ml-4 cursor-pointer underline">
                Start selling here
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-[200px] bg-white border-r border-gray-200 overflow-y-auto p-4">
          <div 
            onClick={() => navigate('/profile')}
            className="py-2 text-gray-800 border-b border-gray-200 cursor-pointer hover:text-[#213567]">
            Profile Information
          </div>
          <div 
            onClick={() => navigate('/address')}
            className="py-2 text-gray-800 border-b border-gray-200 cursor-pointer hover:text-[#213567]">
            My Address
          </div>
          <div className="py-2 text-[#213567] border-b border-gray-200 font-medium cursor-pointer">
            Purchase History
          </div>
          <div 
            onClick={() => navigate('/my-shop')}
            className="py-2 text-gray-800 border-b border-gray-200 cursor-pointer hover:text-[#213567]">
            My Shop
          </div>
          
          <div className="mt-8">
            <img
              src="ad.jpg"
              alt="Ad"
              className="object-cover w-full h-[208px] bg-amber-200 rounded-lg"
            />
          </div>
        </div>

        {/* Purchase History Container */}
        <div className="flex-grow p-4 overflow-y-auto">
          <div className="bg-white border border-gray-200 rounded-lg h-full overflow-hidden flex flex-col shadow-sm">
            <div className="px-4 py-3 border-b border-gray-200 font-medium">
              Purchase History
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {["purchased", "cancelled", "returned"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-4 text-center ${
                    activeTab === tab
                      ? "border-b-2 border-[#213567] font-medium text-[#213567]"
                      : "text-gray-500 hover:text-gray-700"
                  } transition duration-200`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "purchased" && "Purchased Products"}
                  {tab === "cancelled" && "Cancellations"}
                  {tab === "returned" && "Returned Products"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {renderTabContent()}
          </div>
        </div>
      </div>
      
      {/* Floating Cart Button */}
      <button className="flex w-[125px] p-4 bg-[#F6B24D] rounded-xl shadow-lg fixed bottom-10 right-10 items-center justify-center">
        <FaShoppingCart size={30} color="black" />
      </button>
    </div>
  );
}