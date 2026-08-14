import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8 text-slate-600 text-xs mt-20">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs">
                E
              </div>
              <span>Expense<span className="text-blue-600">Tracker</span></span>
            </div>
            
            <p className="text-slate-500 leading-relaxed text-xs">
              Personal financial management web application built for academic coursework to track daily income, expenses, and spending habits.
            </p>
          </div>

          {/* Col 2: Core Modules */}
          <div className="space-y-2">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Application Modules</h4>
            <ul className="space-y-1.5 text-slate-600">
              <li>Transaction Logging</li>
              <li>Category Allocation</li>
              <li>Income vs Expense Metrics</li>
              <li>Visual Analytics</li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-2">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5">
              <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link to="/login" className="hover:text-blue-600 transition">Login</Link></li>
              <li><Link to="/signup" className="hover:text-blue-600 transition">Register</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link></li>
            </ul>
          </div>

          {/* Col 4: Project Scope (MERN replaced with feature tags) */}
          <div className="space-y-2">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Project Features</h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600">
              <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Budgeting</span>
              <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Analytics</span>
              <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Transactions</span>
              <span className="bg-white border border-slate-200 px-2 py-0.5 rounded">Security</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} ExpenseTracker • </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-700 cursor-pointer">Documentation</span>
            <span className="hover:text-slate-700 cursor-pointer">Privacy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;