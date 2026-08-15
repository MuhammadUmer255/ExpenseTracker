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
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 text-slate-700 text-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2.5 font-bold text-slate-900 text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
            E
          </div>
          <span>Expense<span className="text-indigo-600">Tracker</span></span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-indigo-600 font-medium transition bg-slate-100 text-slate-900">
            Home
          </Link>

          {user && (
            <>
              <Link to="/dashboard" className="hover:text-indigo-600 font-medium transitionbg-slate-100 text-slate-900">
                Dashboard
              </Link>
              <Link to="/transactions" className="hover:text-indigo-600 font-medium transition bg-slate-100 text-slate-900">
                Transactions
              </Link>
              <Link to="/analytics" className="hover:text-indigo-600 font-medium transition bg-slate-100 text-slate-900">
                Analytics
              </Link>
            </>
          )}

          <div className="flex items-center gap-3 ml-2 border-l border-slate-200 pl-6">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-slate-700 hover:text-indigo-600 font-semibold text-xs transition"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs shadow-sm transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;