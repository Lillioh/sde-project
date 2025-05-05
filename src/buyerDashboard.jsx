import { FaHome, FaBell, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from './components/Navbar';


function BuyerDashboard() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cart, setCart] = useState([]);
  const products = Array(20).fill({
    name: "Sample Item",
    price: "₱123.45",
    image: "/src/assets/img.jpg",
  });

  // Handle adding product to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("Product added to cart:", product);
  };

  return (
    <div className="flex flex-col overflow-clip w-screen h-screen font-sans">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[200px] h-208 mt-4 p-4">
          <img
            src="/src/assets/ad.jpg"
            alt="Ad"
            className="object-cover w-full h-full bg-amber-200 rounded-lg"
          />
        </div>

        <div
          style={{ maxHeight: "calc(96vh - 70px)" }}
          className="flex-1 grid grid-cols-2 overflow-auto mt-4 ml-2 mr-4 p-4 no-scrollbar gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="p-2 text-center text-sm bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="overflow-hidden w-full aspect-square rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-2">{product.name}</h3>
              <p className="text-orange-600 font-bold">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="flex w-[125px] p-4 bg-[#F6B24D] rounded-xl shadow-lg fixed bottom-10 right-10 items-center justify-center">
        <FaShoppingCart size={30} color="black" />
      </button>
    </div>
  );
}

export default BuyerDashboard;
