import React from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fruit-store" element={<MainPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/adminpanel" element={<AdminPage />} />
        </Routes>
      </div>
  );
}

export default App;
