import { useState } from 'react';
import { ExternalLink,LogOut} from "lucide-react";
import { useNavigate } from "react-router-dom";

function RegisterNewVoters() {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleLogout = () => {
    // Clear authentication data if needed (optional)
    // localStorage.removeItem("adminToken");

    navigate("/admin-login"); // Redirect to Admin Login
  };
  return (
    <div className="flex-1 p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-[#02306B]">Hello, Admin!</h1>
        <button
          onClick={handleLogout} // Attach the function
          className="bg-[#02306B] text-white px-6 py-2 rounded-full flex items-center gap-2  hover:bg-blue-800 transition-colors"
        >
          Logout <LogOut size={18} />
        </button>
      </div>
    </div>
  )
 
}

export default RegisterNewVoters;