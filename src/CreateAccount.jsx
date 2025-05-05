import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after submit
import "./index.css";

function CreateAccount() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Step 1 State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirm] = useState("");
  const [email, setEmail] = useState("");

  // Step 2 State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState(""); // State for gender

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
    } else {
      console.log({
        username,
        password,
        email,
        firstName,
        lastName,
        dob,
        address,
        gender, // Include gender in the form data
      });

      navigate("/thank-you"); // 🔥 Redirect to thank you page
    }
  };

  return (
    <div
      style={{ backgroundImage: "url('/src/assets/bg-ustp.png')" }}
      className="
        flex
        w-screen h-screen
        bg-cover bg-center bg-no-repeat
        items-center justify-end
      "
    >
      <div
        className="
          text-left text-[#DDA853] font-extrabold text-5xl leading-tight text-shadow-lg
          absolute bottom-20 left-10
        "
      >
        <div>YOUR</div>
        <div>JOURNEY</div>
        <div>BEGINS HERE</div>
      </div>

      <div
        className="
          flex flex-col
          w-[550px] h-[650px]
          p-8 mr-50
          bg-[#F9F9F9]
          rounded-3xl
          shadow-2xl animate-fade-in
        "
      >
        <h1
          className="
            mb-2
            text-4xl font-bold text-blue-900 text-center
          "
        >
          Sign Up
        </h1>
        <p
          className="
            text-sm text-center text-gray-700
          "
        >
          Step {step}: {step === 1 ? "Account Credentials" : "Personal Details"}
        </p>

        {/* Pagination Dots */}
        <div
          className="
            flex
            mt-2 mb-4
            justify-center
          "
        >
          <div
            className={`
              w-2 h-2
              mx-1
              rounded-full
              ${step === 1 ? "bg-blue-900" : "bg-gray-300"}
            `}
          ></div>
          <div
            className={`
              w-2 h-2
              mx-1
              rounded-full
              ${step === 2 ? "bg-blue-900" : "bg-gray-300"}
            `}
          ></div>
        </div>

        {/* Form Start */}
        <form
          onSubmit={handleSubmit}
          className="
            flex flex-col
            space-y-4
            gap-2
          "
        >
          {step === 1 && (
            <>
              {/* Username */}
              <div>
                <label
                  className="
                    block
                    text-sm font-medium text-gray-700 text-left
                  "
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="
                    w-full
                    px-4 py-2
                    text-[14px] text-gray-900 placeholder-gray-400
                    border border-gray-300 rounded-md
                    shadow-inner
                    focus:border-blue-500 focus:outline-none
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="
                    block
                    text-sm font-medium text-gray-700 text-left
                  "
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    w-full
                    px-4 py-2
                    text-[14px] text-gray-900 placeholder-gray-400
                    border border-gray-300 rounded-md
                    shadow-inner
                    focus:border-blue-500 focus:outline-none
                  "
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  className="
                    block
                    text-sm font-medium text-gray-700 text-left
                  "
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmpassword}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="
                    w-full
                    px-4 py-2
                    text-[14px] text-gray-900 placeholder-gray-400
                    border border-gray-300 rounded-md
                    shadow-inner
                    focus:border-blue-500 focus:outline-none
                  "
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  className="
                    block
                    text-sm font-medium text-gray-700 text-left
                  "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    px-4 py-2
                    text-[14px] text-gray-900 placeholder-gray-400
                    border border-gray-300 rounded-md
                    shadow-inner
                    focus:border-blue-500 focus:outline-none
                  "
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {/* First Name */}
              <div>
                <label
                  className="
                    block
                    text-sm font-medium text-gray-700 text-left
                  "
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="
                    w-full
                    px-4 py-2
                    text-[14px] text-gray-900 placeholder-gray-400
                    border border-gray-300 rounded-md
                    shadow-inner
                    focus:border-blue-500 focus:outline-none
                  "
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  className="
                    block
                    text-sm font-medium text-gray-700 text-left
                  "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="
                    w-full
                    px-4 py-2
                    text-[14px] text-gray-900 placeholder-gray-400
                    border border-gray-300 rounded-md
                    shadow-inner
                    focus:border-blue-500 focus:outline-none
                  "
                />
              </div>

              {/* Year of Birth and Gender */}
              <div
                className="
                  flex
                  gap-4
                "
              >
                {/* Year of Birth */}
                <div
                  className="
                    flex flex-col
                    w-1/2
                    items-start
                  "
                >
                  <label
                    className="
                      block
                      mb-1
                      text-sm font-medium text-gray-700 text-left
                    "
                  >
                    Year of Birth
                  </label>
                  <input
                    type="number"
                    placeholder="YYYY"
                    value={dob}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length <= 4) setDob(value);
                    }}
                    min="1900"
                    max="2099"
                    className="
                      w-full
                      px-4 py-2
                      text-[14px] text-gray-900 placeholder-gray-400
                      border border-gray-300 rounded-md
                      shadow-inner
                      focus:border-blue-500 focus:outline-none
                    "
                  />
                </div>

                {/* Gender Dropdown */}
                <div
                  className="
                    flex flex-col
                    w-1/2
                    items-start
                  "
                >
                  <label
                    className="
                      block
                      mb-1
                      text-sm font-medium text-gray-700 text-left
                    "
                  >
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="
                      w-full
                      px-4 py-2
                      text-[14px] text-gray-900 placeholder-gray-400
                      border border-gray-300 rounded-md
                      shadow-inner
                      focus:border-blue-500 focus:outline-none
                    "
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  className="
                    block
                    text-sm font-medium text-gray-700 text-left
                  "
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="
                    w-full
                    px-4 py-2
                    text-[14px] text-gray-900 placeholder-gray-400
                    border border-gray-300 rounded-md
                    shadow-inner
                    focus:border-blue-500 focus:outline-none
                  "
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              py-2 mt-2
              text-white font-semibold
              bg-blue-900
              rounded-full
              shadow-md
              hover:bg-blue-800
            "
          >
            {step === 1 ? "Next" : "Submit"}
          </button>

          {step === 2 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="
                text-sm text-center text-blue-700
                hover:underline
              "
            >
              Back
            </button>
          )}
        </form>
        {/* Form End */}
      </div>
    </div>
  );
}

export default CreateAccount;
