import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "./components/Navbar"; // Adjust the path if needed

export default function PurchaseHistory() {
  const [activeTab, setActiveTab] = useState("purchased");

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
    <div className="flex flex-col min-h-screen w-screen overflow-hidden bg-[#FAEBD7] font-sans">
      {/* Reusable Navbar */}
      <Navbar />
 
      {/* Main Content */}
      <div className="flex flex-grow overflow-hidden w-full">
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
    </div>
  );
}
