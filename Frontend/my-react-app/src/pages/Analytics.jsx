import React, { useState, useEffect } from 'react';
import API from '../services/api';

const Analytics = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const res = await API.get('/transactions');
        setTransactions(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Analytics fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  // Total Income & Expense Calculation
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + Number(t.amount || 0), 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + Number(t.amount || 0), 0);

  const totalVolume = totalIncome + totalExpense;
  const incomePercentage = totalVolume > 0 ? Math.round((totalIncome / totalVolume) * 100) : 0;
  const expensePercentage = totalVolume > 0 ? Math.round((totalExpense / totalVolume) * 100) : 0;

  // Expense Breakdown by Category
  const expenseByCategory = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => {
      const cat = t.category || 'Others';
      acc[cat] = (acc[cat] || 0) + Number(t.amount || 0);
      return acc;
    }, {});

  const categoryList = Object.keys(expenseByCategory).map((cat) => ({
    name: cat,
    amount: expenseByCategory[cat],
    percentage: totalExpense > 0 ? Math.round((expenseByCategory[cat] / totalExpense) * 100) : 0
  })).sort((a, b) => b.amount - a.amount);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-400 font-medium text-sm">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Financial Analytics</h1>
          <p className="text-xs text-slate-500 mt-1">Visual spending breakdown and inflow vs outflow stats.</p>
        </div>

        {transactions.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl text-center text-slate-500 shadow-sm border border-slate-200">
            <p className="font-semibold text-sm text-slate-700">No transactions recorded yet!</p>
            <p className="text-xs text-slate-400 mt-1">Add transactions from the Dashboard to see real-time analytics.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* 1. VISUAL BAR: Income vs Expense Comparison */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900">Cashflow Comparison</h2>
                <span className="text-xs font-semibold text-slate-400">Inflow vs Outflow</span>
              </div>

              {/* Progress Bar Visual */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-emerald-600">Income: {incomePercentage}%</span>
                  <span className="text-rose-600">Expense: {expensePercentage}%</span>
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-500" 
                    style={{ width: `${incomePercentage}%` }}
                  />
                  <div 
                    className="bg-rose-500 h-full transition-all duration-500" 
                    style={{ width: `${expensePercentage}%` }}
                  />
                </div>
              </div>

              {/* Detailed Numbers */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                  <p className="text-xs text-emerald-700 font-medium">Total Income</p>
                  <p className="text-lg font-extrabold text-emerald-800 mt-1">Rs. {totalIncome.toLocaleString()}</p>
                </div>
                <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl">
                  <p className="text-xs text-rose-700 font-medium">Total Expense</p>
                  <p className="text-lg font-extrabold text-rose-800 mt-1">Rs. {totalExpense.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* 2. CATEGORY BREAKDOWN BARS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900">Expense by Category</h2>
                <span className="text-xs font-semibold text-slate-400">Share %</span>
              </div>

              {categoryList.length === 0 ? (
                <p className="text-xs text-slate-400 py-8 text-center">No expense categories found.</p>
              ) : (
                <div className="space-y-4">
                  {categoryList.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold text-slate-700">
                        <span>{item.name}</span>
                        <span>Rs. {item.amount.toLocaleString()} ({item.percentage}%)</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Analytics;