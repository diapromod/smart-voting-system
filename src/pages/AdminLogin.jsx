import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router navigation function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { username, password });

    if (username === 'admin' && password === '1234') {
      console.log('Login successful');
      navigate('/dashboard'); // Redirect to the dashboard without refreshing
    } else {
      console.log('Login failed');
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Panel - Dark Blue with Logo */}
      <div className="hidden md:flex md:w-7/9 bg-[#02306B] flex-col items-center justify-center text-white p-8 font-sans">
        <div className="mb-1">
          <img 
            src="/cet-logo.png" 
            alt="College Logo" 
            className="w-100 h-100 object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2">
          COLLEGE OF ENGINEERING, TRIVANDRUM
        </h1>
        <p className="text-xl text-center mb-1">
            कर्म ज्यायो द्वकर्मणः | Action is superior to inaction
        </p>
      </div>

      {/* Right Panel - White with Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#02306B] mb-8 text-center">
            Admin Panel
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#02306B] text-white px-8 py-2 rounded hover:bg-blue-800 transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
