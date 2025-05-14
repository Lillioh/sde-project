import { useState } from "react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ShopInfoPage() {
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("customize");
  
  const tabs = [
    { key: "customize", label: "Customize product variation" },
    { key: "orders", label: "Orders" },
    { key: "returned", label: "Returned Items" },
  ];
  
  return (
    <div className="flex flex-col overflow-hidden w-screen h-screen font-sans">
      {/* Top Navbar */}
      <header className="bg-[#1a2f5d] text-white px-6 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <h1 className="text-lg font-medium">User's Shop Information</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Home size={20} />
          <span className="text-sm">Home</span>
        </div>
      </header>
      
      {/* Main Section */}
      <main className="flex-1 overflow-auto bg-[#FAEBD7] p-8 flex justify-center items-start">
        <section className="w-full max-w-4xl bg-white rounded-xl shadow-md border border-black">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 text-center text-sm font-medium">
            {tabs.map((tab) => (
              <div
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 cursor-pointer py-3 ${
                  activeTab === tab.key
                    ? "text-indigo-700 border-b-2 border-indigo-700"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
          
          <div className="p-4">
            {/* Add New Item Button */}
            <button
              onClick={() => navigate('/product-info')}
              className="px-6 py-2 text-white bg-[#213567] rounded-md text-sm hover:bg-[#1a2c4d]"
            >
              Add New Item
            </button>
            
            {/* Content Placeholder */}
            <div className="h-[300px] border-t border-gray-200 mt-4 px-6 py-4">
              {/* You can render tab content here based on activeTab */}
              {activeTab === "customize" && (
                <div className="text-gray-500">Product variation content will appear here</div>
              )}
              {activeTab === "orders" && (
                <div className="text-gray-500">Orders content will appear here</div>
              )}
              {activeTab === "returned" && (
                <div className="text-gray-500">Returned items content will appear here</div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}