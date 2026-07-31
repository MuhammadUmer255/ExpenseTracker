import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <div className="space-y-20 animate-fade-in pb-12">
      
      {/* 1. Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-6 pt-6">
        <span className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-widest">
          💡 Take Control of Your Personal Finances
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Smart Money Management Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Effortless</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Stop wondering where your money went. Track daily expenses, monitor monthly income, and build better spending habits with clear visual insights.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/signup"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-indigo-500/25 transition duration-200 transform hover:-translate-y-1"
          >
            Start Tracking for Free →
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold rounded-2xl transition duration-200"
          >
            Explore Dashboard
          </Link>
        </div>
      </div>

      {/* 2. Interactive Feature Highlights (Slider) */}
      <HeroSlider />

      {/* 3. AI PROMO VIDEO SECTION */}
      <div className="space-y-6 max-w-4xl mx-auto text-center">
        <div className="space-y-2">
          <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-semibold">
            🎬 Product Tour
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">See ExpenseTracker in Action</h2>
          <p className="text-slate-400 text-sm">
            Watch how simple it is to log income, manage daily expenses, and build lasting financial discipline.
          </p>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-indigo-500/20 group">
          <video 
            className="w-full h-full object-cover" 
            controls 
            preload="metadata"
            playsInline
          >
            <source src="/promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* 4. How It Works (3 Steps) */}
      <div className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">How It Works</h2>
          <p className="text-slate-400 text-sm">3 steps to total financial clarity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl hover:border-indigo-500/50 transition">
            <span className="w-10 h-10 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-lg mb-6 border border-indigo-500/30">
              01
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Log Daily Activity</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Quickly record incomes and expenses as they happen with category tags.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl hover:border-purple-500/50 transition">
            <span className="w-10 h-10 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-lg mb-6 border border-purple-500/30">
              02
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Organize & Categorize</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Group transactions into Food, Rent, Bills, or Shopping automatically.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl hover:border-emerald-500/50 transition">
            <span className="w-10 h-10 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6 border border-emerald-500/30">
              03
            </span>
            <h3 className="text-xl font-bold text-white mb-2">Analyze & Save</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              View visual charts to spot overspending and grow monthly savings.
            </p>
          </div>

        </div>
      </div>

      {/* 5. Call To Action Banner */}
      <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900 border border-indigo-500/30 p-8 md:p-12 rounded-3xl text-center space-y-4 shadow-2xl">
        <h2 className="text-3xl font-black text-white">Ready to start saving more money today?</h2>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          Take full control of your finances with smart tracking tools.
        </p>
        <div className="pt-2">
          <Link
            to="/signup"
            className="inline-block px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
          >
            Create Your Free Account
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;