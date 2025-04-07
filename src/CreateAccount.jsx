import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirm] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="border-8 w-screen h-screen flex items-center justify-end  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/bg-ustp.png')" }}
    >
      <div className="absolute bottom-20 left-10 text-left text-[#DDA853] font-extrabold text-5xl leading-tight text-shadow-lg">
        <div>YOUR</div>
        <div>JOURNEY</div>
        <div>BEGINS HERE</div>
      </div>

      <div className="flex flex-col bg-[#F9F9F9] p-8 rounded-3xl shadow-2xl w-[450px] mr-50">
        <h1 className="text-4xl font-bold text-blue-900 mb-2 text-center">
          Sign Up
        </h1>
        <p className="text-sm text-center text-gray-700 mb-6">
          Step 1: Provide Username, Password
          <br />
          and Email
        </p>

        {/* Step Dots */}
        <div className="flex justify-center mb-4">
          <div className="w-2 h-2 bg-blue-900 rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-[14px] shadow-inset  text-black"
              />
              <span className="absolute right-3 top-2.5 text-pink-600 font-bold text-xl">
                i
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmpassword}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500  text-black"
              />
              <span className="absolute right-3 top-2.5 text-pink-600 font-bold text-xl">
                i
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500  text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-semibold py-2 rounded-full mt-2 shadow-md hover:bg-blue-800"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
