import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream font-sans space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <img src="/vite.svg" alt="Logo" className="w-40 h-40" />
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
            USTP MARKET PLACE FOR STUDENTS
          </h1>
        </div>

        <div className="w-full max-w-xs space-y-3">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-600">
            <a href="#" className="hover:underline">
              Create account
            </a>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="w-full max-w-xs">
          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
            Login
          </button>
        </div>

        <footer className="absolute bottom-4 text-xs text-gray-500">
          © 2025 All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
