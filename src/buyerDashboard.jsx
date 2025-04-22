import { FaHome, FaBell, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";



function buyerDashboard() {
  const products = Array(20).fill({
    name: "name",
    price: "price",
    image: "/img.jpg", //img
  });

  return (
    <div
      className="
        flex flex-col overflow-clip
        w-screen h-screen
        font-sans
      "
    >
      {/* Top Navbar */}
      <div
        className="
          flex 
          flex-row
          w-full 
          h-[70px]
          p-4
          text-white
          bg-[#213567]
          gap-10
          items-center
          justify-between
          shadow-xl
        "
      >
        <div
          className="
            flex flex-row
            gap-20
            items-center
            transition duration-200
            ml-8
          "
        >
          <FaHome size={25} className="cursor-pointer transition duration-400 hover:text-[#DDA853] " />
          <FaBell size={25} className="cursor-pointer transition duration-400 hover:text-[#DDA853] " />
          <FaShoppingCart size={25} className="cursor-pointer transition duration-400 hover:text-[#DDA853]" />
        </div>
        <div
          className="
            flex
            flex-row
          "
        >
          <input
            type="text"
            placeholder="Search"
            className="
              w-[600px]
              px-4 py-1
              placeholder-gray-500 text-[14px] text-black
              bg-white
              rounded-2xl
            "
          />
        </div>
        <div
          className="
            flex flex-row
            h-11
            gap-5
            mr-8
          "
        >
          <MdAccountCircle size={40} />
          <span
            className="
              mt-2
            "
          >
            User
          </span>
          <span
            className="
              mt-2 ml-10
              cursor-pointer
              underline
            "
          >
            Start selling here
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="
          flex
        "
      >
        {/* Sidebar */}
        <div
          className="
            w-[200px]
            p-4
          "
        >
          <img
            src="ad.jpg"
            alt="Ad"
            className="
              h-full
              bg-amber-200
              rounded-lg
            "
          />
        </div>

        {/* Product Grid */}
        <div
          className="
            flex-1/3 grid grid-cols-2 overflow-auto
            h-180
            border-2
            mt-15 ml-2 mr-4
            bg-[#FAEBD7]
            no-scrollbar 
            gap-4
            md:grid-cols-4
            lg:grid-cols-4
          "
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="
                h-[250] w-[250]
                p-2
                text-center
                bg-white
                rounded shadow
              "
            >
              <img
                src={product.image}
                alt={product.name}
                className="
                  object-cover
                  h-48
                  mx-auto
                "
              />
              <h3
                className="
                  mt-2
                  text-sm
                "
              >
                {product.name}
              </h3>
              <p
                className="
                  text-orange-600 font-bold
                "
              >
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      <button
        className="
          w-[125px]
          p-4
          bg-[#F6B24D]
          rounded-xl
          shadow-lg
          fixed bottom-10 right-10 justify-items-center
        "
      >
        <FaShoppingCart size={30} color="black" />
      </button>
    </div>
  );
}

export default buyerDashboard;
