import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const existingEmails = ['student1@ustp.edu.ph', 'test@ustp.edu.ph'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || !existingEmails.includes(email.trim())) {
      setError('Invalid email');
    } else {
      setError('');
      console.log('Recovery email sent to:', email);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#f9f3e5] font-sans flex flex-col">
      <header className="w-full bg-[#213567] text-white px-10 py-5 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img 
            src="/src/assets/logo.png" 
            alt="Logo" 
            className="h-[42px] w-[42px]" 
          />
          <span className="mt-1 text-[11px] font-medium tracking-[0.2px] text-center">
            USTP MARKET PLACE FOR STUDENTS
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-[13px] hover:underline">Log in</Link>
          <button className="text-[13px] hover:underline">Start selling here</button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 shadow-xl text-center max-w-md w-full">
          {/* Title */}
          <h2 className="text-[#213567] text-[28px] font-extrabold leading-snug mb-3">
            Find your<br />account
          </h2>

          {/* Email Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-white py-6 px-6 rounded-2xl shadow-md"
          >
            <div className="mb-5 text-left">
              <p className="text-[14px] text-[#374151] mb-2 leading-tight">
                Enter your email to recover your account
              </p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#cbd5e1] rounded-full py-3 px-4 text-[15px] mb-2 
                placeholder-[#9ca3af] text-[#213567] focus:outline-none focus:ring-2 focus:ring-[#213567]"
              />
              {error && (
                <p className="text-red-600 text-sm text-left px-1 mt-1">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#213567] text-white py-3 rounded-full text-[15px] font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
