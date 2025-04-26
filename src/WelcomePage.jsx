import React from "react";
import logo from "./assets/logo.png"; // saktoha path sa imong logo

export default function Welcome() {
  return (
    <div className="h-screen w-screen bg-[#f9f3e3] flex flex-col items-center justify-center">
      <img src={logo} alt="USTP Logo" className="w-[180px] mb-4" />
      <h1 className="text-[#2a3d8f] font-extrabold text-[30px] mb-8 text-center tracking-wide">
        USTP MARKET PLACE FOR STUDENTS
      </h1>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-[#22336c] font-extrabold text-[44px] mb-2 text-center">
          Welcome User!
        </h2>
        <p className="text-[17px] text-[#22336c] text-center leading-relaxed mb-6 font-medium">
          Provide your necessary information and<br />
          register as a seller.
        </p>
        <button className="mt-3 px-10 py-3 bg-[#22336c] text-white font-bold rounded-md text-[18px]">
          Start Registration
        </button>
      </div>
    </div>
  );
}
