import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    badge: '⚡ Real-time Tracking',
    title: 'Smart Expense & Income Management',
    desc: 'Keep track of every single Rupee with real-time balance calculations and intuitive categories.',
    gradient: 'from-indigo-500 to-purple-600',
    icon: '💰'
  },
  {
    id: 2,
    badge: '📊 Visual Insights',
    title: 'Deep Analytics & Dynamic Charts',
    desc: 'Understand your spending habits with instant percentage breakdowns and category ratios.',
    gradient: 'from-emerald-500 to-teal-600',
    icon: '📈'
  },
  {
    id: 3,
    badge: '🔒 Secure & Fast',
    title: 'JWT Auth & MongoDB Cloud',
    desc: 'Protected user sessions, encrypted data handling, and instant backend response times.',
    gradient: 'from-blue-500 to-cyan-600',
    icon: '🛡️'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-8 md:p-12 min-h-[320px] flex flex-col justify-between">
      {/* Background Glow */}
      <div className={`absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br ${slides[current].gradient} opacity-20 blur-3xl rounded-full transition-all duration-700`} />

      {/* Slide Content */}
      <div className="relative z-10 transition-all duration-500 animate-fade-in">
        <span className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-slate-300 mb-4">
          {slides[current].badge}
        </span>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl">{slides[current].icon}</span>
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            {slides[current].title}
          </h2>
        </div>
        <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed mt-2">
          {slides[current].desc}
        </p>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center gap-2 mt-8 relative z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === idx ? 'w-8 bg-indigo-500' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;