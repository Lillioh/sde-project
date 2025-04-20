import { FaHome, FaBell, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import "./App.css";

function buyerDashboard() {
  const products = Array(10).fill({
    name: "I phone 16 Pro Max",
    price: "₱ 116,490",
    image: "/iphone.jpg", // Replace with your actual image path
  });

  return (
    <div className="font-sans">
      {/* Top Navbar */}
      <div className="bg-[#223A70] text-white flex justify-between items-center p-4">
        <div className="flex gap-4 items-center">
          <FaHome />
          <span>Home</span>
          <FaBell />
          <span>Notification</span>
          <FaShoppingCart />
          <span>My Cart</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full px-4 py-1 text-black"
          />
        </div>
        <div className="flex items-center gap-2">
          <MdAccountCircle />
          <span>Van Owen</span>
          <span className="underline cursor-pointer">Start selling here</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[200px] p-4">
          <img
            src="/samsung-ad.jpg" // Replace with your ad image path
            alt="Samsung Ad"
            className="rounded-lg"
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-[#FAEBD7]">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded shadow p-2 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-48 object-cover"
              />
              <h3 className="text-sm mt-2">{product.name}</h3>
              <p className="text-orange-600 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      <button className="fixed bottom-5 right-5 bg-[#F6B24D] p-4 rounded-xl shadow-lg">
        <FaShoppingCart size={20} />
      </button>
    </div>
  );
}

export default buyerDashboard;
