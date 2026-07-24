import React, { useState, useEffect } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('app_transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    localStorage.setItem('app_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const filtered = transactions.filter((t) => {
    if (filterType === 'income') return t.type === 'income';
    if (filterType === 'expense') return t.type === 'expense';
    return true;
  });

  const formatRs = (val) => `Rs. ${Number(val).toLocaleString('en-PK')}`;

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-md">
        <div>
          <h1 className="text-3xl font-extrabold text-white">All Transactions</h1>
          <p className="text-slate-400 text-sm mt-1">Manage and filter your transaction history</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${filterType === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('income')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${filterType === 'income' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Incomes
          </button>
          <button
            onClick={() => setFilterType('expense')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${filterType === 'expense' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Expenses
          </button>
        </div>
      </div>

      {/* List */}
      <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-400 border-2 border-dashed border-slate-700/60 rounded-xl">
            No transactions found for this filter.
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 bg-slate-900/60 border border-slate-700/40 rounded-xl hover:border-slate-600 transition"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                    item.type === 'income' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {item.type === 'income' ? '↓' : '↑'}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{item.category} • {item.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className={`font-bold text-base ${item.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {item.type === 'income' ? '+' : '-'}{formatRs(item.amount)}
                  </p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-slate-500 hover:text-rose-400 transition text-sm p-1.5"
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Transactions;