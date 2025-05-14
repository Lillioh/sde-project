import { useState } from "react";
import Navbar from './components/Navbar';

function AddressPage() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  
  return (
    <div className="flex flex-col overflow-hidden w-screen h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden bg-[#FAEBD7]">
        <div className="flex flex-col h-full px-20 py-6 items-center">
          <section className="w-full max-w-4xl bg-white rounded-2xl border border-black shadow-md p-6">
            <div className="flex mb-6 justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">My Address</h2>
              <button
                onClick={() => setShowAddressForm(true)}
                className="flex px-4 py-2 bg-white border border-black rounded-md items-center gap-2 shadow hover:bg-gray-100"
              >
                <span className="text-lg font-bold text-gray-900">+</span>
                <span className="text-sm font-semibold text-gray-900">Add New Address</span>
              </button>
            </div>

            {/* Empty State */}
            <div className="mt-10 text-gray-500 text-center">No address added yet.</div>

            {/* Address Modal */}
            {showAddressForm && (
              <div className="fixed inset-0 flex z-50 bg-black/30 backdrop-blur-sm justify-center items-center">
                <div className="w-[400px] p-8 bg-white rounded-xl shadow-lg space-y-6">
                  <h2 className="text-xl font-bold text-center text-gray-800">NEW ADDRESS</h2>
                  <div className="space-y-4">
                    {["Full Name", "House# & Ward", "District and Province", "Phone Number"].map((label, idx) => (
                      <div key={idx}>
                        <label className="text-sm font-semibold text-gray-700">{label}</label>
                        <input
                          type="text"
                          placeholder={label}
                          className="w-full mt-1 px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex mt-6 justify-end gap-4">
                    <button
                      onClick={() => setShowAddressForm(false)}
                      className="px-6 py-2 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setShowAddressForm(false)}
                      className="px-6 py-2 text-white bg-[#213567] rounded-lg hover:bg-[#1a2c4d]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default AddressPage;
