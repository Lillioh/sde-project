import { useState } from "react";
import Navbar from "./components/Navbar";

function SellerRegistration() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("User");
  return (
    <div className="flex flex-col overflow-hidden w-screen h-screen font-sans">
      {/* Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[#FAEBD7] p-8 flex justify-center items-center">
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-md border border-black p-10">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-[#213567]">
              You have to register as a Seller before you can proceed to operate this platform. Thank you for your understanding.
            </h2>
            
            {/* Registration Button */}
            <div className="mt-10">
              <button 
                type="button"
                className="px-8 py-3 text-white bg-[#213567] rounded-md hover:bg-[#1a2c4d] font-medium text-lg"
              >
                Start Registration
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SellerRegistration;