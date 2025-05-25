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
import ThankYouPage from "./ThankYouPage.jsx";
import AddressPage from "./AddressPage.jsx";
import PurchaseHistory from "./PurchaseHistory.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import SellerReg from "./SellerReg.jsx";
import ShopInfo from "./ShopInfo.jsx";
import ShopInfoPage from "./ShopInfoPage.jsx";
import ProductInfoPage from "./ProductInfoPage.jsx";
import SellerRegistration from "./SellerRegistration.jsx";
import NotFound from "./NotFound.jsx";
import AdLogin from "./AdLogin.jsx";
import AdDashboard from "./AdDashboard.jsx";
import ShopInfoEdit from "./ShopInfoEdit.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/login" element={<App />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/profile-page-2" element={<ProfilePage2 />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/profile-page-address" element={<AddressPage />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/my-cart" element={<ShoppingCart />} />
        <Route path="/seller-registration" element={<SellerReg />} />
        <Route path="/shop-info" element={<ShopInfo />} />
        <Route path="/shop-info-page" element={<ShopInfoPage />} />
        <Route path="/product-info" element={<ProductInfoPage />} />
        <Route path="/reg" element={<SellerRegistration />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/admin-login" element={<AdLogin />} />
        <Route path="/admin-Dashboard" element={<AdDashboard />} /> 
        <Route path="/shop-info-edit" element={<ShopInfoEdit />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);