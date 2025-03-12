import { useState } from 'react';
import { LogOut} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate(); // Hook to handle navigation

    const handleLogout = () => {
        // Clear authentication data if needed (optional)
        // localStorage.removeItem("adminToken");

        navigate("/admin-login"); // Redirect to Admin Login
    };
    const [isVotingActive, setIsVotingActive] = useState(false);
    const votersCount = 500;
    const votesCasted = 253;
    const leaderboard = [
        { rank: 1, name: "Suraj Krishna SS", votes: 180 },
        { rank: 2, name: "Noel George", votes: 120 },
        { rank: 3, name: "Jonahs George", votes: 45 },
        { rank: 4, name: "Navadeep Satheesh", votes: 45 },
    ];

    return(
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

             {/* Voting Status Card */}
        <div className="bg-white shadow-md border rounded-xl p-6 text-center">
          <div className="grid grid-cols-3 text-xl font-medium">
            <div>
              <p>No. of Registered Voters</p>
              <h2 className="text-4xl font-bold text-[#02306B]">{votersCount}</h2>
            </div>
            <div>
              <p>No. of Votes Casted</p>
              <h2 className="text-4xl font-bold text-[#02306B]">{votesCasted}</h2>
            </div>
            <div>
              <p>Election Status</p>
              <h2 className={`text-4xl font-bold ${isVotingActive ? "text-green-500" : "text-gray-500"}`}>
                {isVotingActive ? "Active" : "Inactive"}
              </h2>
            </div>
          </div>
          <hr className="my-4" />
          <button
            onClick={() => setIsVotingActive(!isVotingActive)}
            className={`w-full py-3 rounded-lg text-white text-lg font-bold transition duration-300 ${isVotingActive ? "bg-red-600 hover:bg-red-700" : "bg-[#02306B] hover:bg-[#01244F]"}`}
          >
            {isVotingActive ? "Stop Voting" : "Start Voting"}
          </button>
        </div>
        {/* Leaderboard */}
        <div className="mt-8">
          <h2 className="text-[#02306B] text-2xl font-bold mb-4">Leaderboard</h2>
          <div className="bg-[#02306B] text-white p-4 rounded-t-lg grid grid-cols-3 font-medium">
            <p>Rank</p> <p>Name</p> <p>No. of Votes</p>
          </div>
          {leaderboard.map((candidate) => (
            <div key={candidate.rank} className="bg-white p-4 grid grid-cols-3 border-b">
              <p>{candidate.rank}</p>
              <p>{candidate.name}</p>
              <p>{candidate.votes} Votes</p>
            </div>
          ))}
        </div>
    
        </div>
    );
}

export default Dashboard;