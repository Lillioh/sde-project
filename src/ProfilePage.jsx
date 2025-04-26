import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBell, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

function ProfilePage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("User");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const steps = ["Profile Information", "My Address", "Purchase History", "My Shop"];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex flex-col w-screen h-screen font-sans overflow-hidden">
      
      {/* Navbar */}
      <div className="flex flex-row w-full h-[70px] p-4 text-white bg-[#213567] gap-10 items-center justify-between shadow-xl">
        <div className="flex flex-row gap-20 items-center ml-8">
          <Link to="/dashboard">
            <FaHome size={25} className="cursor-pointer hover:text-[#DDA853]" />
          </Link>
          <FaBell size={25} className="cursor-pointer hover:text-[#DDA853]" />
          <FaShoppingCart size={25} className="cursor-pointer hover:text-[#DDA853]" />
        </div>

        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Search"
            className="w-[600px] px-4 py-1 placeholder-gray-500 text-[14px] text-black bg-white rounded-2xl"
          />
        </div>

        <div className="flex flex-row items-center h-11 gap-5 mr-8">
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <MdAccountCircle size={40} />
              <div className="flex items-center gap-1">
                <span>{username}</span>
                <FaChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {showDropdown && (
              <div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-xl py-2 w-48 z-50">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setCurrentStep(idx);
                      setShowDropdown(false);
                    }}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-[#213567] font-medium"
                  >
                    {step}
                  </div>
                ))}
                <Link
                  to="/logout"
                  className="py-2 px-4 hover:bg-gray-100 block text-red-500"
                  onClick={() => setShowDropdown(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
          <span className="cursor-pointer underline ml-4">Start selling here</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 bg-[#FAEBD7] overflow-hidden">
        <div className="flex h-full overflow-y-auto overflow-x-hidden px-20 py-6 gap-6 justify-center">
          
          {/* Sidebar */}
          <div className="w-48 bg-white shadow-md rounded-sm">
            <div className="flex flex-col text-gray-700">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`py-4 px-6 text-lg cursor-pointer ${
                    currentStep === idx
                      ? "bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600"
                      : "hover:bg-gray-50 text-blue-600"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-2xl border border-black shadow-md overflow-hidden max-w-4xl">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-2xl font-medium text-gray-800">{steps[currentStep]}</h2>
            </div>

            {/* Form Content */}
            <div className="p-6 flex">
              {currentStep === 0 && (
                <div className="flex-1 space-y-4 pr-6">
                  {/* Profile Information Form */}
                  {[
                    { label: "Username", value: username, setter: setUsername, placeholder: "Enter your username" },
                    { label: "Name", value: name, setter: setName, placeholder: "Enter your full name" },
                    { label: "Email", value: email, setter: setEmail, placeholder: "Enter your email address" },
                    { label: "Phone Number", value: phoneNumber, setter: setPhoneNumber, placeholder: "Enter your phone number" }
                  ].map((field, idx) => (
                    <div key={idx} className="flex flex-col items-start">
                      <label className="text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
                      <input
                        type={field.label === "Email" ? "email" : "text"}
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ))}

                  {/* Gender and DOB */}
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col items-start w-1/2">
                      <label className="text-sm font-semibold text-gray-700 mb-1">Gender</label>
                      <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder="Enter your gender"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex flex-col items-start w-1/2">
                      <label className="text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
                      <input
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Other Pages */}
              {currentStep !== 0 && (
                <div className="flex-1 text-gray-600 text-lg flex items-center justify-center">
                  <p>{steps[currentStep]} content will go here...</p>
                </div>
              )}

              {/* Image Upload */}
              {currentStep === 0 && (
                <div className="w-64 flex flex-col items-center justify-start pt-4">
                  <div className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    {/* Profile Image Placeholder */}
                  </div>
                  <button className="mt-4 px-4 py-2 bg-[#213567] text-white rounded">
                    Select Image
                  </button>
                </div>
              )}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-between px-6 py-4">
              <button
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
                disabled={currentStep === steps.length - 1}
                className="px-4 py-2 bg-[#213567] text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
