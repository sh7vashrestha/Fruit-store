import React, { useEffect } from "react";
import AdminPanel from "../components/LoginPage/AdminPanel";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth) {
      navigate("/admin");
    }
  })
    return (
      <div>
        <AdminPanel />
      </div>)
}

export default AdminPage;
