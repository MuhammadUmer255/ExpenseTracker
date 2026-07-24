import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('app_transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'expense',
    category: 'Food',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    localStorage.setItem('app_transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Calculations
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalBalance = totalIncome - totalExpense;

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) return;

    const newTx = {
      id: Date.now(),
      title: formData.title,
      amount: parseFloat(formData.amount),
      type: formData.type,
      category: formData.category,
      date: formData.date
    };

    setTransactions([newTx, ...transactions]);
    setFormData({
      title: '',
      amount: '',
      type: 'expense',
      category: 'Food',
      date: new Date().toISOString().split('T')[0]
    });
    setIsModalOpen(false);
  };

  const formatRs = (val) => `Rs. ${Number(val).toLocaleString('en-PK')}`;

  return (
    <div className="space-y-8 animate-fade-in transition-all duration-300">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-md shadow-lg">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Financial Overview</h1>
          <p className="text-slate-400 text-sm mt-1">Track your incomes and expenses in real-time</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <span className="text-xl font-bold">+</span> Add Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Balance Card */}
        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 p-6 rounded-2xl shadow-xl hover:border-indigo-500/40 transition duration-300 transform hover:-translate-y-1">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Balance</p>
          <h2 className={`text-3xl font-extrabold mt-3 ${totalBalance >= 0 ? 'text-indigo-400' : 'text-rose-400'}`}>
            {formatRs(totalBalance)}
          </h2>
          <span className="inline-block mt-3 px-2.5 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-300 rounded-lg">
            Net Available
          </span>
        </div>

        {/* Income Card */}
        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 p-6 rounded-2xl shadow-xl hover:border-emerald-500/40 transition duration-300 transform hover:-translate-y-1">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Income</p>
          <h2 className="text-3xl font-extrabold text-emerald-400 mt-3">
            {formatRs(totalIncome)}
          </h2>
          <span className="inline-block mt-3 px-2.5 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-lg">
            Total Inflow
          </span>
        </div>

        {/* Expense Card */}
        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 p-6 rounded-2xl shadow-xl hover:border-rose-500/40 transition duration-300 transform hover:-translate-y-1">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Expense</p>
          <h2 className="text-3xl font-extrabold text-rose-400 mt-3">
            {formatRs(totalExpense)}
          </h2>
          <span className="inline-block mt-3 px-2.5 py-1 text-xs font-medium bg-rose-500/10 text-rose-400 rounded-lg">
            Total Outflow
          </span>
        </div>

      </div>

      {/* Recent Transactions List */}
      <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Recent Activity</h3>
          <Link to="/transactions" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition">
            View All →
          </Link>
        </div>

        {transactions.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-slate-700/60 rounded-xl">
            <p className="text-slate-400 font-medium">No transactions added yet!</p>
            <p className="text-slate-500 text-xs mt-1">Click "Add Transaction" above to start logging your budget.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {transactions.slice(0, 5).map((item) => (
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
                <p className={`font-bold text-base ${item.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {item.type === 'income' ? '+' : '-'}{formatRs(item.amount)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Adding Transaction */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl w-full max-w-md shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-700 pb-3">
              <h3 className="text-lg font-bold text-white">Add New Transaction</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>

            <form onSubmit={handleAddTransaction} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Grocery, Salary, Electricity Bill"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Amount (Rs.)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="5000"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Type</label>
                  <select
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                  <select
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Food">Food</option>
                    <option value="Salary">Salary</option>
                    <option value="Bills">Bills & Utilities</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold shadow-lg transition"
                >
                  Save Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;