import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Auth context import karein

const Home = () => {
  // Check if user is logged in
  const { user } = useAuth(); 

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        
        {/* Academic Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-xs font-mono font-medium mb-6">
          <span></span>
          <span className="text-slate-400">•</span>
          <span>Personal Expense Tracker</span>
        </div>

        {/* Dynamic Heading & Subheading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          {user ? (
            <>Welcome Back, <span className="text-blue-600">{user.name || 'User'}</span>!</>
          ) : (
            <>Track Your Expenses <span className="text-blue-600">Smartly & Effortlessly</span></>
          )}
        </h1>

        <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
          {user 
            ? "You are currently logged in. Jump straight to your dashboard to manage your income, transactions, and analytics."
            : "A simple, clean tool built to keep track of your daily expenses, monthly budget, and personal financial health."
          }
        </p>

        {/* Dynamic Hero Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {user ? (
            // LOGGED IN: Show Dashboard & Add Transaction Options
            <>
              <Link
                to="/dashboard"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-sm transition flex items-center gap-2"
              >
                <span>Go to Dashboard</span>
                <span>→</span>
              </Link>
            </>
          ) : (
            // NOT LOGGED IN: Show Register & Login Options
            <>
              <Link
                to="/signup"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-sm transition"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition border border-slate-200"
              >
                User Login
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Test Account / Quick Status Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        {user ? (
          // LOGGED IN: Quick Account Summary Card
          <div className="bg-blue-50/60 border border-blue-200 p-6 rounded-2xl text-center space-y-3">
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Active Session</h3>
            <p className="text-xs text-slate-600">
              Logged in as <strong className="text-slate-900">{user.email}</strong>
            </p>
            <div className="pt-2">
              <Link
                to="/dashboard"
                className="inline-block px-4 py-2 bg-white border border-blue-300 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                View Financial Analytics
              </Link>
            </div>
          </div>
        ) : (
          // NOT LOGGED IN: Show Demo Credentials
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
            <div className="text-center">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Demo / Test Credentials</h3>
              <p className="text-xs text-slate-600 mt-1">Use these credentials to quick test without registration:</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-mono bg-white p-3 rounded-xl border border-slate-200">
              <div><span className="text-slate-400">Email:</span> test@example.com</div>
              <div className="hidden sm:block text-slate-300">•</div>
              <div><span className="text-slate-400">Password:</span> 123456</div>
            </div>
          </div>
        )}
      </section>

    </div>
  );
};

export default Home;