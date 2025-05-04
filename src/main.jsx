import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CreateAccount from "./CreateAccount";
import BuyerDashboard from "./buyerDashboard";
import ForgotPassword from "./ForgotPassword.jsx";
import ProfilePage from "./ProfilePage.jsx";
import ProfilePage2 from "./ProfilePage2.jsx";
import Welcome from "./WelcomePage.jsx";
import ThankYouPage from "./ThankYouPage.jsx"
import PurchaseHistory from "./PurchaseHistory.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/login" element={<App />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/profile-page-2" element={<ProfilePage2 />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
      </Routes>
      </BrowserRouter>
  </StrictMode>
);