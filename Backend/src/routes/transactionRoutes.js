const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
// Destructure 'protect' from authMiddleware
const { protect } = require('../middleware/authMiddleware');

// 1. GET ALL TRANSACTIONS FOR LOGGED IN USER
router.get('/', protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: 'Server error while fetching transactions' });
  }
});

// 2. ADD NEW TRANSACTION
router.post('/', protect, async (req, res) => {
  try {
    const { title, amount, type, category, date } = req.body;

    if (!title || !amount || !type) {
      return res.status(400).json({ message: 'Please provide title, amount, and type' });
    }

    const newTransaction = new Transaction({
      user: req.user._id,
      title,
      amount: Number(amount),
      type,
      category: category || 'General',
      date: date || Date.now()
    });

    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
    res.status(500).json({ message: 'Failed to add transaction' });
  }
});

module.exports = router;