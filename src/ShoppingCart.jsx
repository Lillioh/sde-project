import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import Navbar from '/src/components/Navbar.jsx';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
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
    },
    {
      id: 4,
      name: "USB-C Fast Charger",
      price: 1249.99,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=center"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // navigate('/checkout'); // Uncomment when routing is set up
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="h-screen w-screen bg-[#FAEBD7]-50 font-[Poppins] flex flex-col">
      <Navbar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <ShoppingBag className="h-8 w-8 text-[#213567]" />
              <h1 className="text-3xl font-bold text-[#213567]">Shopping Cart</h1>
            </div>
            <p className="text-gray-600">Review your items and proceed to checkout</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-[#213567] mb-2">Your cart is empty</h2>
              <p className="text-gray-600">Add some items to your cart to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#213567] to-[#2a4080] rounded-t-xl">
                    <h2 className="text-lg font-semibold text-white">Cart Items ({totalItems})</h2>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 rounded-xl object-cover border-2 border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-200"
                            />
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                              <div>
                                <h3 className="text-lg font-semibold text-[#213567] mb-2">{item.name}</h3>
                                <p className="text-2xl font-bold text-[#DDA853]">₱{item.price.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</p>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-2 rounded-md border border-gray-200 hover:border-[#213567] hover:bg-white transition-all duration-200 disabled:opacity-50"
                                    disabled={item.quantity <= 1}
                                  >
                                    <Minus className="h-4 w-4 text-[#213567]" />
                                  </button>
                                  <span className="w-12 text-center font-semibold text-[#213567] text-lg">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-2 rounded-md border border-gray-200 hover:border-[#213567] hover:bg-white transition-all duration-200"
                                  >
                                    <Plus className="h-4 w-4 text-[#213567]" />
                                  </button>
                                </div>
                                
                                {/* Remove Button */}
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="p-2 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </div>
                            
                            <div className="mt-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                              Subtotal: <span className="font-semibold text-[#213567]">₱{(item.price * item.quantity).toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 sticky top-8">
                  <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#213567] to-[#2a4080] rounded-t-xl">
                    <h2 className="text-lg font-semibold text-white">Order Summary</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Items ({totalItems})</span>
                      <span className="font-semibold text-[#213567]">₱{totalPrice.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Shipping Fee</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Tax (12%)</span>
                      <span className="font-semibold text-[#213567]">₱{(totalPrice * 0.12).toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
                    </div>
                    
                    <hr className="border-gray-200 my-4" />
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-xl font-bold text-[#213567]">Total</span>
                      <span className="text-2xl font-bold text-[#DDA853]">
                        ₱{(totalPrice * 1.12).toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    
                    <button 
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-[#213567] to-[#2a4080] hover:from-[#1a2a52] hover:to-[#213567] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3 mt-6"
                    >
                      Proceed to Checkout
                      <ArrowRight className="h-6 w-6" />
                    </button>
                    
                    <div className="text-center mt-4 space-y-2">
                      <p className="text-xs text-gray-500">
                        🔒 Secure checkout with SSL encryption
                      </p>
                      <p className="text-xs text-[#DDA853] font-medium">
                        ✨ Free shipping on orders over ₱1,500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;