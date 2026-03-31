// File: /pages/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../services/api"; // Adjust path if needed

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Call logout API function if defined
    if (authAPI.logout) {
      authAPI.logout();
    }

    // Redirect to login page after logout
    navigate("/login");
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center text-lg text-gray-600">
      Logging out...
    </div>
  );
};

export default Logout;
