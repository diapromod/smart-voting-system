import { useState } from 'react';
import { LogOut} from "lucide-react";
import { useNavigate } from "react-router-dom";

function VoterList() {
    const navigate = useNavigate(); // Hook to handle navigation

    const handleLogout = () => {
        // Clear authentication data if needed (optional)
        // localStorage.removeItem("adminToken");

        navigate("/admin-login"); // Redirect to Admin Login
    };
    const voterlist = [
        { slno: 1, ktuid: "TVE22CS059", name:"Dia Promod", year:2, batch:2, dept:"CS", gender:'F', status:"Voted" },
        { slno: 2, ktuid: "TVE22CS061", name:"Evan Augustion", year:2, batch:2, dept:"CS", gender:'M', status:"Not Voted" },
        { slno: 3, ktuid: "TVE22CS107", name:"Poola Sai Harshini", year:2, batch:2, dept:"CS", gender:'F', status:"Voted" },
        { slno: 4, ktuid: "TVE22CS144", name:"Vaisakh Ramakrishnan", year:2, batch:2, dept:"CS", gender:'M', status:"Voted" }
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

             
         {/* Voter List */}
            <div>
                <div className="bg-[#02306B] text-white p-4 rounded-t-lg grid grid-cols-8 font-medium">
                    <p>Sl No.</p> <p>KTU ID</p> <p>Name</p> <p>Year</p> <p>Batch</p> <p>Department</p> <p>Gender</p> <p>Status</p>
                </div>
                {voterlist.map((voter) => (
                    <div key={voter.slno} className="bg-white p-4 grid grid-cols-8 border-b text-center">
                        <p>{voter.slno}</p>
                        <p>{voter.ktuid}</p>
                        <p>{voter.name}</p>
                        <p>{voter.year}</p>
                        <p>{voter.batch}</p>
                        <p>{voter.dept}</p>
                        <p>{voter.gender}</p>
                        <p className={voter.status === "Voted" ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                            {voter.status}
                        </p>
                    </div>
                ))}
        </div>
    
        </div>
    );
}

export default VoterList;