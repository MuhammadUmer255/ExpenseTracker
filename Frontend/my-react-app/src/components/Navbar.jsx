import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-xl font-bold text-indigo-400">
        ExpenseTracker
      </Link>

      {isAuthenticated ? (
        <div className="flex items-center space-x-6">
          <Link to="/dashboard" className="text-slate-300 hover:text-white text-sm font-medium">Dashboard</Link>
          <Link to="/transactions" className="text-slate-300 hover:text-white text-sm font-medium">Transactions</Link>
          <Link to="/analytics" className="text-slate-300 hover:text-white text-sm font-medium">Analytics</Link>
          <button 
            onClick={handleLogout}
            className="bg-red-600/80 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/login" className="text-slate-300 hover:text-white text-sm font-medium">Login</Link>
          <Link to="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;