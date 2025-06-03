import React, { useState } from 'react';
import { 
  ArrowLeft,
  CheckCircle, 
  Shield
} from 'lucide-react';
import Navbar from '/src/components/Navbar.jsx';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    
    // Payment Information
    paymentMethod: 'gcash'
  });

  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 14999.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 9999.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 4499.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop&crop=center"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const goBack = () => {
    alert('Navigating back to cart...');
  };

  return (
    <div className="h-screen w-screen bg-gray-50 font-[Poppins] flex flex-col">
      <Navbar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={goBack}
              className="flex items-center gap-2 text-[#213567] hover:text-[#DDA853] transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Cart</span>
            </button>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-[#213567] mb-2">Checkout</h1>
              <p className="text-gray-600 text-lg">Complete your purchase securely</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Shipping Information */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#213567] to-[#2a4080] px-8 py-6">
                    <h2 className="text-xl font-semibold text-white">Shipping Information</h2>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#213567] mb-3">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#213567] focus:border-transparent transition-all duration-200 text-gray-700"
                          placeholder="Enter first name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#213567] mb-3">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#213567] focus:border-transparent transition-all duration-200 text-gray-700"
                          placeholder="Enter last name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#213567] mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#213567] focus:border-transparent transition-all duration-200 text-gray-700"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#213567] mb-3">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#213567] focus:border-transparent transition-all duration-200 text-gray-700"
                          placeholder="+63 9XX XXX XXXX"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-[#213567] mb-3">
                          Complete Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#213567] focus:border-transparent transition-all duration-200 text-gray-700"
                          placeholder="House No., Street, Barangay"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#213567] mb-3">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#213567] focus:border-transparent transition-all duration-200 text-gray-700"
                          placeholder="Enter city"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#213567] mb-3">
                          Province *
                        </label>
                        <input
                          type="text"
                          name="province"
                          value={formData.province}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#213567] focus:border-transparent transition-all duration-200 text-gray-700"
                          placeholder="Enter province"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-[#213567] mb-3">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#213567] focus:border-transparent transition-all duration-200 text-gray-700"
                          placeholder="XXXX"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#213567] to-[#2a4080] px-8 py-6">
                    <h2 className="text-xl font-semibold text-white">Payment Method</h2>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <label className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#213567] cursor-pointer transition-all duration-200 group">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="gcash"
                            checked={formData.paymentMethod === 'gcash'}
                            onChange={handleInputChange}
                            className="hidden"
                            id="gcash-radio"
                        />
                        <div className="mr-4 h-5 w-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                            {formData.paymentMethod === 'gcash' && (
                            <div className="h-2.5 w-2.5 bg-black rounded-full" />
                            )}
                        </div>
                        <div className="flex-grow">
                    <div className="flex justify-between items-center">
                        <div>
                        <p className="font-semibold text-[#213567] text-lg">GCash</p>
                        <p className="text-sm text-gray-600">Pay with your GCash wallet</p>
                        </div>
                        <img
                        src="/src/assets/gcash.jpg"
                        alt="GCash Logo"
                        className="w-10 h-10 object-contain"
                        />
                    </div>
                 </div>
                    </label>
                    
                    <label className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#213567] cursor-pointer transition-all duration-200 group">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={handleInputChange}
                            className="hidden"
                            id="cod-radio"
                        />
                        <div className="mr-4 h-5 w-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                            {formData.paymentMethod === 'cod' && (
                            <div className="h-2.5 w-2.5 bg-black rounded-full" />
                            )}
                        </div>
                        <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-[#213567] text-lg">Cash on Delivery</p>
                            <p className="text-sm text-gray-600">Pay when your order arrives</p>
                          </div>
                          <div className="text-2xl">💵</div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 sticky top-8 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#213567] to-[#2a4080] px-8 py-6">
                    <h2 className="text-xl font-semibold text-white">Order Summary</h2>
                  </div>
                  
                  <div className="p-8">
                    {/* Cart Items */}
                    <div className="space-y-6 mb-8">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-xl object-cover border border-gray-100"
                          />
                          <div className="flex-grow">
                            <h4 className="font-semibold text-[#213567] text-sm leading-tight mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">Qty: {item.quantity}</p>
                            <p className="font-bold text-[#DDA853] text-lg">
                              ₱{(item.price * item.quantity).toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <hr className="border-gray-200 mb-6" />
                    
                    {/* Price Breakdown */}
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-base">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold text-[#213567]">
                          ₱{subtotal.toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between text-base">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold text-green-600">FREE</span>
                      </div>
                      
                      
                      <hr className="border-gray-200" />
                      
                      <div className="flex justify-between">
                        <span className="text-xl font-bold text-[#213567]">Total</span>
                        <span className="text-2xl font-bold text-[#DDA853]">
                          ₱{total.toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                    
                    {/* Place Order Button */}
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#213567] to-[#2a4080] hover:from-[#1a2a52] hover:to-[#213567] text-white py-5 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3 mb-6"
                    >
                      <CheckCircle className="h-6 w-6" />
                      Place Order
                    </button>
                    
                    {/* Security Info */}
                    <div className="text-center space-y-3">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Shield className="h-4 w-4" />
                        <span>Secure checkout protected</span>
                      </div>
                      <p className="text-sm text-[#DDA853] font-medium">
                        📱 GCash • 💵 Cash on Delivery
                      </p>
                      <p className="text-xs text-gray-500">
                        Delivery within 1-7 days in your local area
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;