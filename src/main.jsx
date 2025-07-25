import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <BrowserRouter basename="/My-PortFolio" >
      <Routes>
         <Route path="*" element={<App />} />
      </Routes>
   </BrowserRouter>
   <App />
  </React.StrictMode>
);
