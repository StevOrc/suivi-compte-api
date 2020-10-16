const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  removeTransaction,
} = require("../controllers/transactionsController");

router.route("/").get(getTransactions);

router.route("/").post(addTransactions);

router.route("/:id").delete(removeTransaction);

module.exports = router;
