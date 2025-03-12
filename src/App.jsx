import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";

import AdminLogin from "./pages/AdminLogin";
import Navbar from "./components/navbar";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import LiveVoteStatistics from "./pages/AdminDashboard/LiveVoteStatistics";
import VoterList from "./pages/AdminDashboard/VoterList";
import RegisterNewVoters from "./pages/AdminDashboard/RegisterNewVoters";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/admin-login"; // Hide navbar on login page

  return (
    <div className="flex">
      {!hideNavbar && <Navbar />} {/* Show Navbar only if not on login */}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/live-vote-statistics" element={<LiveVoteStatistics />} />
          <Route path="/register-new-voters" element={<RegisterNewVoters />} />
          <Route path="/voter-list" element={<VoterList />} />
          {/* Redirect unknown routes to /dashboard (optional) */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route goes to login */}
        <Route path="/" element={<Navigate to="/admin-login" />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
