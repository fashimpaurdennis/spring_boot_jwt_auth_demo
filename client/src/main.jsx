import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Auth from "./context/Auth.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  </React.StrictMode>
);
