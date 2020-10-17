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
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((el) => el.message);
      res.status(400).json({
        success: false,
        errors: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Error 500 : Server error",
      });
    }
  }
};

//@desc Delete transaction
//@route Get /api/transactions/:id
//@Public
exports.removeTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: `No transaction found with the given id ${req.params.id}`,
      });
    }

    await transaction.remove();

    return res.status(200).json({
      data: transaction,
      success: true,
    });
  } catch (error) {}
};
