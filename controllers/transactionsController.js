//@desc Get all transactions
//@route Get /api/transactions
//@Public
exports.getTransactions = (req, res, next) => {
  res.send("GET Transactions");
};

//@desc Add transaction
//@route Post /api/transactions
//@Public
exports.addTransactions = (req, res, next) => {
  res.send("Add Transaction");
};

//@desc Delete transaction
//@route Get /api/transactions/:id
//@Public
exports.removeTransaction = (req, res, next) => {
  res.send("Delete Transaction");
};
