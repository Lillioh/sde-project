import React from 'react';
import logo from './assets/logo.png';

export default function ThankYouPage() {
  return (
    <div className="h-screen w-screen bg-[#fdf6e3] flex flex-col items-center justify-center p-5 box-border">
      <img src={logo} alt="USTP Logo" className="w-[170px] mb-3" />
      <h1 className="text-[#2a3d8f] text-[28px] font-bold text-center mb-8">
        USTP MARKET PLACE FOR STUDENTS
      </h1>
      <div className="text-center text-[#073b4c] font-bold text-[48px] leading-tight mb-8">
        <p className="m-0">Thank you for your registry!</p>
        <p className="m-0">You can now start exploring</p>
        <p className="m-0">our platform!</p>
      </div>
      <button className="mt-5 py-4 px-8 text-[18px] bg-[#2a3d8f] text-white border-none rounded-xl font-bold cursor-pointer">
        Log in
      </button>
    </div>
  );
}
