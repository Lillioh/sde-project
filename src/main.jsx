import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CreateAccount from "./CreateAccount";
import CreateAccount2 from "./CreateAccount2";
import buyerDashboard from "./buyerDashboard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-account-2" element={<CreateAccount2 />} />
        <Route path="/buyer-dashboard" element={<buyerDashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
