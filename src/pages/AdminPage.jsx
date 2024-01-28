import React, { useEffect } from "react";
import AdminPanel from "../components/Admin/AdminPanel";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function AdminPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const Cookie = new Cookies();
    if (!Cookie.get("auth")) {
      navigate("/admin");
    }
  }, []);
  return (
    <div>
      <AdminPanel />
    </div>
  );
}

export default AdminPage;
