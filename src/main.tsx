import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import "./globals.css"
import Hotkeys from "./routes/hotkeys/hotkeys";
import Utils from "./routes/utils/utils";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='hotkeys' element={<Hotkeys />} />
          <Route path='utils' element={<Utils />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
