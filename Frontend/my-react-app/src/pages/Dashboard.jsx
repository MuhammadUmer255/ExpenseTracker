import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddTransaction from '../components/AddTransaction';
import API from '../services/api';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch transactions from backend
  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const res = await API.get('/transactions');
      setTransactions(res.data);
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Handle new transaction addition
  const handleTransactionAdded = (newTx) => {
    setTransactions((prev) => [newTx, ...prev]);
    setIsModalOpen(false); // Modal close ho jayega add hone ke baad
  };

  // Dynamic calculations for Income, Expense & Balance
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen bg-white text-slate-800 py-8 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Financial Overview
            </h1>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              Track your daily incomes and expenses in real-time.
            </p>
          </div>

          {/* Add Transaction Button with onClick */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition"
          >
            + Add Transaction
          </button>
        </div>

        {/* FULL SOLID BLUE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Total Balance Card */}
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">
              Total Balance
            </span>
            <div className="text-3xl font-extrabold text-white">
              Rs. {balance.toLocaleString()}
            </div>
            <span className="inline-block px-3 py-1 bg-blue-700 text-white text-xs font-medium rounded-lg">
              Net Available
            </span>
          </div>

          {/* 2. Total Income Card */}
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">
              Total Income
            </span>
            <div className="text-3xl font-extrabold text-white">
              Rs. {totalIncome.toLocaleString()}
            </div>
            <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-lg">
              Total Inflow
            </span>
          </div>

          {/* 3. Total Expense Card */}
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">
              Total Expense
            </span>
            <div className="text-3xl font-extrabold text-white">
              Rs. {totalExpense.toLocaleString()}
            </div>
            <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-medium rounded-lg">
              Total Outflow
            </span>
          </div>

        </div>

        {/* Recent Activity Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
            <Link to="/transactions" className="text-xs text-blue-600 font-semibold hover:underline">
              View All →
            </Link>
          </div>

          {loading ? (
            <p className="text-xs text-slate-400 text-center py-4">Loading transactions...</p>
          ) : transactions.length === 0 ? (
            <div className="border border-dashed border-blue-200 rounded-xl p-10 text-center space-y-1.5 bg-blue-50/50">
              <p className="text-slate-800 font-semibold text-sm">No transactions added yet!</p>
              <p className="text-slate-500 text-xs">Click "+ Add Transaction" above to start logging your budget.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {transactions.slice(0, 5).map((tx, idx) => (
                <div key={tx._id || idx} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{tx.title}</p>
                    <p className="text-xs text-slate-400">{tx.category} • {new Date(tx.date).toLocaleDateString()}</p>
                  </div>
                  <div className={`text-sm font-bold ${tx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {tx.type === 'income' ? '+' : '-'} Rs. {Number(tx.amount).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* ADD TRANSACTION MODAL POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-md">
            <AddTransaction 
              onTransactionAdded={handleTransactionAdded} 
              onClose={() => setIsModalOpen(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;