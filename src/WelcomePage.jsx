import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";  
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function Welcome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div
      className="
        flex flex-col
        h-screen w-screen
        items-center justify-center
      "
    >
      {/* Card */}
      <div
        className="
          flex flex-col
          h-[700px] w-[700px]
          bg-[#F5F5F5]
          rounded-full
          shadow-[0_4px_30px_#183B4E] animate-fade-in
          items-center justify-center
        "
      >
        
        {/* Logo */}
        <img
          src={logo}
          alt="USTP Logo"
          className="
            w-[180px]
            mb-4
          "
        />
        
        {/* Marketplace Title */}
        <span
          className="
            mb-8
            text-center text-[#183B4E] font-bold text-shadow-lg tracking-wide
            md:text-3xl
            lg:text-4xl
          "
        >
          USTP MARKET PLACE FOR STUDENTS
        </span>

        {/* Buttons and Info */}
        <div
          className="
            flex flex-col
            w-full
            items-center
          "
        >
          <h2
            className="
              mb-2
              text-[#22336c] font-extrabold text-[32px] text-center
            "
          >
            Welcome User!
          </h2>
          <p
            className="
              mb-6
              text-[17px] text-[#22336c] text-center leading-relaxed font-medium
            "
          >
            Provide your necessary information and<br />
            register as a seller.
          </p>

          {/* Buttons */}
          <Link to="/login">
            <button
              className="
                mt-3 px-10 py-3
                text-white font-bold text-[18px]
                bg-[#22336c]
                rounded-md
                transition-transform
                hover:scale-105 hover:bg-[#DDA853] hover:text-black duration-300
              "
            >
              LOGIN
            </button>
          </Link>

          <button
            className="
              mt-3 px-10 py-3
              text-white font-bold text-[18px]
              bg-[#22336c]
              rounded-md
              transition-transform
              hover:scale-105 hover:bg-[#DDA853] hover:text-black duration-300
            "
          >
            Start Registration
          </button>
        </div>
      </div>
    </div>
  );
}
