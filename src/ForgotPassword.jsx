import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    console.log("Reset link sent to:", email);
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center">
        {/* Header Logo and Title */}
        <div className="flex flex-col w-full h-1/3 font-[Poppins] items-center justify-end">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="max-w-40 max-h-40"
          />
          <span className="text-center text-[#183B4E] font-bold text-shadow-lg md:text-3xl lg:text-4xl">
            USTP MARKETPLACE FOR STUDENTS
          </span>
        </div>

        {/* Forgot Password Card */}
        <div className="flex flex-col w-full h-1/3 font-[Poppins] items-center justify-end">
          <div className="w-full max-w-xs space-y-4">
            <h2 className="text-xl font-semibold text-[#183B4E] text-center">
              Forgot Password?
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Enter your email to receive a password reset link
            </p>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                px-4 py-2
                text-black placeholder-gray-500
                bg-white
                border border-gray-300 rounded-md
                shadow-md
                focus:outline-none focus:ring-1 focus:ring-blue-500
              "
            />

            <button
              onClick={handleReset}
              className="
                w-full
                py-3 px-4
                text-white font-bold
                bg-[#183B4E]
                rounded-lg
                transition-transform shadow-md
                hover:scale-102 hover:bg-[#DDA853] hover:text-black
              "
            >
              Send Reset Link
            </button>

            <div className="text-sm text-center text-gray-600">
              Remembered your password?{" "}
              <Link to="/" className="text-[#183B4E] hover:underline font-medium">
                Log in
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col h-1/3 justify-end">
          <div className="w-full text-center text-xs text-gray-500 font-sans">
            © 2025 All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
