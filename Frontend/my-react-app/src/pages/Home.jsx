import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100">
              ⚡ Smart Financial Management
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Master Your Money <br className="hidden sm:block" />
              <span className="text-blue-600">Without the Stress.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Track daily expenses, monitor income streams, and analyze your financial health with real-time visual charts and smart categorizations.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/dashboard"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
              >
                Go to Dashboard →
              </Link>
              <Link
                to="/analytics"
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-sm rounded-xl border border-slate-200 transition-all"
              >
                View Analytics
              </Link>
            </div>
          </div>

          {/* Hero Preview Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Current Balance</p>
                  <p className="text-2xl font-black text-slate-900 mt-0.5">Rs. 142,500</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-extrabold rounded-lg">
                  +18.4%
                </span>
              </div>

              {/* Sample Mini Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600">Monthly Budget Spent</span>
                  <span className="text-rose-600">62%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[62%] rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-100">
                  <p className="text-[11px] text-emerald-700 font-medium">Total Income</p>
                  <p className="text-sm font-bold text-emerald-800 mt-0.5">Rs. 200,000</p>
                </div>
                <div className="bg-rose-50/70 p-3 rounded-2xl border border-rose-100">
                  <p className="text-[11px] text-rose-700 font-medium">Total Expenses</p>
                  <p className="text-sm font-bold text-rose-800 mt-0.5">Rs. 57,500</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS HIGHLIGHTS BAR */}
      <section className="py-10 bg-white border-y border-slate-200/80 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Private & Encrypted</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-blue-600">Real-time</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Data Synchronization</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">0s</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Manual Calculations</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-emerald-600">Visual</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Spending Analytics</p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (3 SIMPLE STEPS) */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Workflow</span>
          <h2 className="text-3xl font-extrabold text-slate-900">How ExpenseTracker Works</h2>
          <p className="text-slate-500 text-xs sm:text-sm">Manage your personal finances in three seamless steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm relative space-y-4">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/20">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900">Sign In & Access Workspace</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Log in to your private workspace protected with secure JWT authentication for personalized tracking.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm relative space-y-4">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-md shadow-emerald-500/20">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900">Log Daily Income & Expenses</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Add transactions on the fly with amounts, categories (Food, Bills, Shopping), and custom dates.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm relative space-y-4">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-md shadow-indigo-500/20">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900">Analyze Cashflow & Save</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Review live cashflow comparisons and visual category breakdowns to optimize your monthly spending habits.
            </p>
          </div>

        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="py-16 px-4 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Designed for Effortless Control</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Everything you need to keep your personal finances structured and clear.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">
                📊
              </div>
              <h3 className="text-base font-bold text-slate-800">Visual Category Analytics</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Understand where your money goes with visual category breakdowns and income vs expense ratios.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg">
                ⚡
              </div>
              <h3 className="text-base font-bold text-slate-800">Instant Logging</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Quickly record transactions with custom dates, titles, categories, and payment types in seconds.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold text-lg">
                🔒
              </div>
              <h3 className="text-base font-bold text-slate-800">JWT Protected Security</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your financial records are strictly linked to your authenticated profile via secure web tokens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-blue-600 text-white rounded-3xl p-10 text-center space-y-6 shadow-xl shadow-blue-500/20">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to take charge of your finances?</h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-lg mx-auto">
            Start tracking your daily expenses now and make smarter decisions with live analytics.
          </p>
          <div>
            <Link
              to="/dashboard"
              className="inline-block px-8 py-3.5 bg-white text-blue-600 font-extrabold text-sm rounded-xl shadow-md hover:bg-slate-50 transition-all"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;