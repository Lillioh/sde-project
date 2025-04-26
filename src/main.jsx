import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CreateAccount from "./CreateAccount";
import BuyerDashboard from "./buyerDashboard";
import App from "./App.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import ProfilePage from "./ProfilePage.jsx";
import ProfilePage2 from "./ProfilePage2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App/>} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/profile-page-2" element={<ProfilePage2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
