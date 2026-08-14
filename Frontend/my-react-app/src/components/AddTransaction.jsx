import React, { useState } from 'react';
import API from '../services/api';

const AddTransaction = ({ onTransactionAdded, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        type: 'expense', // default 'expense'
        category: 'Food',
        date: new Date().toISOString().split('T')[0]
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.title || !formData.amount) {
            setError('Please fill in all required fields.');
            return;
        }

        setLoading(true);

        try {
            // API request to save transaction in backend database
            const response = await API.post('/transactions', {
                ...formData,
                amount: Number(formData.amount)
            });

            // Callback to refresh dashboard transactions list
            if (onTransactionAdded) {
                onTransactionAdded(response.data);
            }

            // Reset Form Fields
            setFormData({
                title: '',
                amount: '',
                type: 'expense',
                category: 'Food',
                date: new Date().toISOString().split('T')[0]
            });

            if (onClose) onClose();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add transaction. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm max-w-md w-full">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900">Add New Transaction</h2>
                {onClose && (
                    <button 
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-600 text-xs p-3 rounded-xl mb-4 text-center font-medium">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Type Selection (Expense vs Income) */}
                <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'expense' })}
                        className={`py-2 text-xs font-semibold rounded-lg transition ${
                            formData.type === 'expense'
                                ? 'bg-rose-600 text-white shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        Expense
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'income' })}
                        className={`py-2 text-xs font-semibold rounded-lg transition ${
                            formData.type === 'income'
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        Income
                    </button>
                </div>

                {/* Title Input */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Title / Description</label>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="e.g. Grocery, Salary, Rent"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                </div>

                {/* Amount & Category Inputs */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Amount ($)</label>
                        <input
                            type="number"
                            name="amount"
                            required
                            min="0.01"
                            step="any"
                            placeholder="0.00"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                        >
                            <option value="Food">Food</option>
                            <option value="Rent">Rent</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Salary">Salary</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

                {/* Date Input */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl text-sm shadow-sm transition flex justify-center items-center"
                >
                    {loading ? "Saving..." : "Add Transaction"}
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;