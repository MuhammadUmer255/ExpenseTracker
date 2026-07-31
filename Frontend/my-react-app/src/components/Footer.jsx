import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-8 text-slate-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-black text-white text-xl shadow-lg">
                E
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Expense<span className="text-indigo-400">Tracker</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Smart financial tracking platform designed to log daily expenses, monitor income streams, and analyze spending habits with ease.
            </p>
          </div>

          {/* Col 2: Product Features */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide">Features</h3>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-indigo-400 transition cursor-pointer">Expense & Income Logging</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">Categorized Budgeting</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">Visual Analytics & Reports</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">Real-time Balance Calculator</li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide">Navigation</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-400 transition">Dashboard</Link></li>
              <li><Link to="/transactions" className="hover:text-indigo-400 transition">Transactions</Link></li>
              <li><Link to="/analytics" className="hover:text-indigo-400 transition">Analytics</Link></li>
            </ul>
          </div>

          {/* Col 4: Support & Security */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide">Support & Security</h3>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-indigo-400 transition cursor-pointer">Encrypted User Auth</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">Data Privacy Guaranteed</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">Help Center / FAQs</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">Contact Support</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ExpenseTracker. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;