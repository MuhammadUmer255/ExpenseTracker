import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-black text-white text-xl shadow-lg group-hover:scale-105 transition">
            E
          </div>
          <span className="text-xl font-black text-white tracking-tight">
            Expense<span className="text-indigo-400">Tracker</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-sm font-semibold">
          <Link to="/" className="text-slate-300 hover:text-indigo-400 transition">Home</Link>
          
          {user && (
            <>
              <Link to="/dashboard" className="text-slate-300 hover:text-indigo-400 transition">Dashboard</Link>
              <Link to="/transactions" className="text-slate-300 hover:text-indigo-400 transition">Transactions</Link>
              <Link to="/analytics" className="text-slate-300 hover:text-indigo-400 transition">Analytics</Link>
            </>
          )}
        </div>

        {/* Auth Actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1 bg-slate-800 text-indigo-300 rounded-full border border-slate-700 hidden sm:inline-block">
                {user.name || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 rounded-xl text-xs font-bold transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-slate-300 hover:text-white text-sm font-semibold px-3 py-2">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-md transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;