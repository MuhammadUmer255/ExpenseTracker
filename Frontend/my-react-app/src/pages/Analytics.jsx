import React, { useState, useEffect } from 'react';

const Analytics = () => {
  const [transactions] = useState(() => {
    const saved = localStorage.getItem('app_transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalFlow = totalIncome + totalExpense;
  const incomePct = totalFlow > 0 ? Math.round((totalIncome / totalFlow) * 100) : 0;
  const expensePct = totalFlow > 0 ? Math.round((totalExpense / totalFlow) * 100) : 0;

  // Category-wise Breakdown for Expenses
  const categoryTotals = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
      return acc;
    }, {});

  const formatRs = (val) => `Rs. ${Number(val).toLocaleString('en-PK')}`;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-md">
        <h1 className="text-3xl font-extrabold text-white">Visual Analytics</h1>
        <p className="text-slate-400 text-sm mt-1">Real-time breakdown calculated from your added transactions</p>
      </div>

      {transactions.length === 0 ? (
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-12 text-center text-slate-400">
          <p className="text-lg font-semibold text-slate-300">No Analytics Data Available</p>
          <p className="text-sm text-slate-500 mt-2">Add some income or expense transactions on the Dashboard to unlock dynamic analytics.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Income vs Expense Ratio */}
          <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 p-6 rounded-2xl shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white">Income vs Expense Ratio</h3>
            
            {/* Progress Bar */}
            <div className="w-full bg-slate-900 h-5 rounded-full overflow-hidden flex p-1 border border-slate-700">
              <div
                style={{ width: `${incomePct}%` }}
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              />
              <div
                style={{ width: `${expensePct}%` }}
                className="bg-rose-500 h-full rounded-full transition-all duration-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/40">
                <p className="text-xs text-slate-400 font-semibold">Income Share</p>
                <p className="text-2xl font-black text-emerald-400 mt-1">{incomePct}%</p>
                <p className="text-xs text-slate-500 mt-1">{formatRs(totalIncome)}</p>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/40">
                <p className="text-xs text-slate-400 font-semibold">Expense Share</p>
                <p className="text-2xl font-black text-rose-400 mt-1">{expensePct}%</p>
                <p className="text-xs text-slate-500 mt-1">{formatRs(totalExpense)}</p>
              </div>
            </div>
          </div>

          {/* Expense Category Breakdown */}
          <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 p-6 rounded-2xl shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white">Expense Distribution by Category</h3>

            {Object.keys(categoryTotals).length === 0 ? (
              <p className="text-slate-500 text-sm py-8 text-center">No expenses logged yet.</p>
            ) : (
              <div className="space-y-4">
                {Object.entries(categoryTotals).map(([cat, amount]) => {
                  const percentage = Math.round((amount / totalExpense) * 100);
                  return (
                    <div key={cat} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-300">
                        <span>{cat}</span>
                        <span>{formatRs(amount)} ({percentage}%)</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-700/50">
                        <div
                          style={{ width: `${percentage}%` }}
                          className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};

export default Analytics;