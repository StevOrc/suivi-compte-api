const Transaction = require("../models/Transaction");

//@desc Get all transactions
//@route Get /api/transactions
//@Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc Add transaction
//@route Post /api/transactions
//@Public
exports.addTransactions = async (req, res, next) => {
  res.send("Add Transaction");
};

//@desc Delete transaction
//@route Get /api/transactions/:id
//@Public
exports.removeTransaction = async (req, res, next) => {
  res.send("Delete Transaction");
};
