import React, { useState, useEffect } from 'react';
import API from '../services/api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const res = await API.get('/transactions');
      setTransactions(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await API.delete(`/transactions/${id}`);
        setTransactions(transactions.filter((tx) => tx._id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Failed to delete transaction.");
      }
    }
  };

  const filteredTransactions = transactions.filter((tx) => {
    const matchesFilter = filter === 'all' || tx.type === filter;
    const matchesSearch = (tx.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (tx.category || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">


        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Transaction History</h1>
            <p className="text-xs text-slate-500 mt-1">Manage and delete past financial records.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Search title or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-60"
            />

            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition ${filter === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('income')}
                className={`px-3 py-1.5 rounded-lg transition ${filter === 'income' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600'}`}
              >
                Income
              </button>
              <button
                onClick={() => setFilter('expense')}
                className={`px-3 py-1.5 rounded-lg transition ${filter === 'expense' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-600'}`}
              >
                Expense
              </button>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          {loading ? (
            <p className="text-center py-8 text-slate-400 text-xs">Loading history...</p>
          ) : filteredTransactions.length === 0 ? (
            <p className="text-center py-10 text-slate-500 text-xs">No transactions recorded.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 text-xs uppercase tracking-wider">
                    <th className="py-3 px-4">Title</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 text-right">Amount</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredTransactions.map((tx) => (
                    <tr key={tx._id} className="hover:bg-slate-50/80 transition">
                      <td className="py-3.5 px-4 font-semibold text-slate-800">{tx.title}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium">
                          {tx.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-500">
                        {new Date(tx.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </td>
                      <td className={`py-3.5 px-4 text-right font-bold ${tx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {tx.type === 'income' ? '+' : '-'} Rs. {Number(tx.amount).toLocaleString()}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => handleDelete(tx._id)}
                          className="px-3 py-1 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs rounded-lg transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Transactions;