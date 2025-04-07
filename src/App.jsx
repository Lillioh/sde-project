import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    // Add login logic here (e.g., API call or validation)
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-cream font-sans space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-60 h-60 mt-14"
          />
          <span className="lg:text-[40px] md:text-[32px] font-bold text-center text-blue-900 mt-4">
            USTP MARKET PLACE FOR STUDENTS
          </span>
        </div>

        <div className="w-full max-w-xs space-y-3 mt-9">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md mt-3 placeholder-gray-500"
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

        <div className="w-full max-w-xs shadow-xl mt-10">
          <button
            onClick={handleLogin}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
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
