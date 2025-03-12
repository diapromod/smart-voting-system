import { Link, useLocation } from "react-router-dom";
import { User, UserPlus, List, BarChart2 } from "lucide-react";

function Navbar() {
  const location = useLocation(); // Get the current URL path

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <User size={18} /> },
    { name: "Register New Voters", path: "/register-new-voters", icon: <UserPlus size={18} /> },
    { name: "Voter List", path: "/voter-list", icon: <List size={18} /> },
    { name: "Live Voting Statistics", path: "/live-vote-statistics", icon: <BarChart2 size={18} /> },
  ];

  return (
    <div className="w-80 bg-[#02306B] min-h-screen flex flex-col items-center pt-10">
      {/* Logo Section */}
      <div className="mb-8">
        <img src="/cet-logo.png" alt="College Logo" className="w-40 h-40 mx-auto mb-2" />
        <div className="text-white text-xs text-center font-bold mt-2">
          <div>COLLEGE OF ENGINEERING, TRIVANDRUM</div>
          <div className="text-xs mt-1 font-light italic">
            कर्म ज्यायो द्वकर्मणः | Action is Superior to Inaction
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="w-full px-4 flex flex-col gap-4 mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 rounded-full py-3 px-6 w-full transition-all 
              ${
                location.pathname === item.path
                  ? "bg-white text-[#02306B] font-semibold"
                  : "text-white hover:bg-[#032d5a]"
              }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
