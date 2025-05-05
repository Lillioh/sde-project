import { useState } from "react";
import Navbar from "./components/Navbar";

function ProfilePage() {
  const [username] = useState("User");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  return (
    <div className="flex flex-col overflow-hidden w-screen h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[#FAEBD7] p-8 flex justify-center items-start">
        <section className="w-full max-w-4xl bg-white rounded-xl shadow-md border border-black">
          <header className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-medium text-gray-800">Profile Information</h2>
          </header>

          <div className="p-6 space-y-4">
            {/* Fields */}
            {[ 
              { label: "Username", value: username, setter: () => {}, readOnly: true },
              { label: "Name", value: name, setter: setName },
              { label: "Email", value: email, setter: setEmail },
              { label: "Phone Number", value: phoneNumber, setter: setPhoneNumber }
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col">
                <label className="mb-1 text-sm font-semibold text-gray-700">{field.label}</label>
                <input
                  type={field.label === "Email" ? "email" : "text"}
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  readOnly={field.readOnly}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            {/* Gender and DOB */}
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label className="mb-1 text-sm font-semibold text-gray-700">Gender</label>
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Enter your gender"
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="mb-1 text-sm font-semibold text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <button className="px-6 py-2 text-white bg-[#213567] rounded hover:bg-[#1a2c4d]">
                Save
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
