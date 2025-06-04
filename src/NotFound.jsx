import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const NotFound = () => {
  return (
    <div className="lex flex-col overflow-hidden w-screen h-screen font-sansbg-[#FAEBD7]">
      {/* Header (matches dashboard screenshot) */}
      <div className="bg-[#213567] shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="w-72">
            
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
            Start selling here
          </button>
        </div>
      </div>

      {/* 404 Content (centered, full-screen) */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
          <img 
            src={logo} 
            alt="Marketplace Logo" 
            className="w-32 mx-auto mb-6" 
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-3">404 - Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            Looks like this study material got lost in the library!
          </p>
          
          {/* Search Bar */}
                <input
        type="text"
        placeholder="Search for books, notes, products, etc..."
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
        />


          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Link
              to="/"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center"
            >
              Go Home
            </Link>
            <Link
              to="/buyer-dashboard"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors text-center"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;