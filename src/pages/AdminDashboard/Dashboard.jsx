import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ExternalLink,LogOut} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleLogout = () => {
    // Clear authentication data if needed (optional)
    // localStorage.removeItem("adminToken");

    navigate("/admin-login"); // Redirect to Admin Login
  };
  const [isVotingActive, setIsVotingActive] = useState(false);
  return (
    <div className="flex-1 p-8">git remote -v

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

      {/* Bento Box Layout - Using flex-grow to take full height */}
    <div className="flex flex-1 gap-6 min-h-200">
      {/* Registered Voters Box */}
      <div className="bg-white shadow-md border rounded-xl p-6 text-center flex flex-col flex-1">
          <div className="flex flex-col flex-1 justify-center items-center">
              <p className="text-gray-600 text-2xl">No. of Registered Voters</p>
              <h2 className="text-6xl font-bold text-[#02306B] mt-2">500</h2>
              <p className="text-gray-600 text-2xl mt-16">No. of Votes Casted</p>
              <h2 className="text-6xl font-bold text-[#02306B] mt-2">0</h2>
              <p className="text-gray-600 text-2xl mt-16">Election Status</p>
              <p className={`font-semibold text-6xl ${isVotingActive ? "text-green-500" : "text-gray-500"}`}>
                  {isVotingActive ? "Active" : "Inactive"}
              </p>
          </div>
        <hr className="my-4" />
        <button 
          onClick={() => setIsVotingActive(!isVotingActive)}
          className={`px-6 py-2 rounded-full transition duration-300 ${isVotingActive ? "bg-red-600 hover:bg-red-700" : "bg-[#02306B] hover:bg-[#01244F]"} text-white`}>
          {isVotingActive ? "Stop Voting" : "Start Voting"}
        </button>
      </div>

      {/* Live Voting Statistics Box */}
      <button 
        onClick={() => navigate("/live-vote-statistics")} // Add navigation
        className="bg-[#02306B] text-white shadow-md border rounded-xl p-6 flex flex-col flex-1 justify-center hover:bg-[#01244F] transition duration-300"
      >
          <div className="w-full text-left">
              <h2 className="text-gray-400 text-4xl font-medium">View</h2>
              <h1 className="text-6xl font-bold">Live Voting</h1>
              <h2 className="text-gray-400 text-6xl font-semibold mt-2 mb-2">Statistics</h2>
              <ExternalLink size={30} color='gray'/>
          </div>
      </button>


      {/* Voter List Box */}
      <div className="bg-white shadow-md border rounded-xl p-6 flex flex-col flex-1">
        <h2 className="text-5xl font-bold text-[#02306B] text-center mb-4">Voter List</h2>
        <ul className="text-gray-700 text-lg space-y-1 flex-grow px-15">
          <li>Dia Promod</li>
          <li>Evan Augustion</li>
          <li>Poola Sai Harshini</li>
          <li>Vaisakh Ramakrishnan</li>
          <li>Devika Krishnan</li>
          <li>Ananthakrishnan J</li>
          <li>Dev Anand B</li>
          <li>Anandaram R</li>
          <li>Amith Sam</li>
          <li>Shezma Bijumon</li>
          <li>Joshua T Joy</li>
          <li>Dia Promod</li>
          <li>Evan Augustion</li>
          <li>Poola Sai Harshini</li>
          <li>Vaisakh Ramakrishnan</li>
          <li>Devika Krishnan</li>
          <li>Ananthakrishnan J</li>
          <li>Dev Anand B</li>
          <li>Anandaram R</li>
        </ul>
        <button className="mt-4 border border-[#02306B] text-[#02306B] px-4 py-2 rounded-full hover:bg-[#02306B] hover:text-white transition duration-300">
          View All
        </button>
      </div>
    </div>
  </div>
);
}

export default Dashboard;