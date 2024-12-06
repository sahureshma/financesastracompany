import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddSIPForm from "../Addsipstockportfolio/Addsipstockportfolio"; // Adjust path as needed
import "./Addportfoliostock.css"; // Ensure CSS file exists
import { MdAddCircleOutline } from "react-icons/md";

const AddTransaction = () => {
  const navigate = useNavigate();

  // Initialize state for the new transaction
  const [newTransaction, setNewTransaction] = useState({
    type: "Buy",
    stockName: "",
    exchange: "NSE",
    date: "",
    quantity: 0,
    price: 0,
    amount: 0,
    netAmount: 0,
    totalCharges: 0,
    notes: "",
    showSIP: false,
  });

  const addMoreTransactions = () => {
    setTransactions([
      ...transactions,
      {
        type: "Buy",
        stockName: "",
        exchange: "NSE",
        date: "",
        quantity: "",
        price: "",
        amount: "",
        netAmount: "",
        totalCharges: "",
        notes: "",
        showSIP: false,
      },
    ]);
  };
  const resetForm = () => {
    setTransactions([
      {
        type: "Buy",
        stockName: "",
        exchange: "NSE",
        date: "",
        quantity: "",
        price: "",
        amount: "",
        netAmount: "",
        totalCharges: "",
        notes: "",
        showSIP: false,
      },
    ]);
  };

  // State to hold all transactions
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from localStorage on component mount
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []); // This effect runs only once when the component is mounted

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTransaction((prev) => {
      const updatedTransaction = { ...prev, [name]: value };

      // Recalculate dependent fields if quantity or price changes
      if (name === "quantity" || name === "price") {
        const quantity = Number(updatedTransaction.quantity || 0);
        const price = Number(updatedTransaction.price || 0);

        updatedTransaction.amount = quantity * price; // Fixed calculation
        updatedTransaction.netAmount = updatedTransaction.amount;
        updatedTransaction.totalCharges = updatedTransaction.netAmount; // Adjust if additional charges logic is needed
      }

      console.log(updatedTransaction); // Log the updated transaction for debugging
      return updatedTransaction;
    });
  };

  // Handle save action to save the new transaction and navigate
  // In AddTransaction component:
const handleSave = () => {
  if (!newTransaction.stockName || !newTransaction.quantity || !newTransaction.price) {
    alert("Please fill in all required fields.");
    return;
  }

  // Get existing transactions from localStorage
  const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

  // Add the new transaction
  storedTransactions.push(newTransaction);

  // Save the updated list of transactions back to localStorage
  localStorage.setItem('transactions', JSON.stringify(storedTransactions));

  // Navigate to the portfolio page with the transactions
  navigate("/portfoliogoldtoppage", {
    state: { transactions: storedTransactions },
  });
};
  // Handle cancel action
  const handleCancel = () => {
    navigate("/portfoliostockaccount");
  };

  // Toggle SIP form visibility
  const toggleSIPForm = () => {
    setNewTransaction((prev) => ({
      ...prev,
      showSIP: !prev.showSIP,
    }));
  };

  return (
    <div className="transaction-form">
      <h2 style={{ marginLeft: "40px" }}>Add New Transaction</h2>
      <div className="tabsadd">
        <button className="tabadd active">Stocks</button>
        <button className="tabadd">Mutual Fund</button>
        <button className="tabadd">Gold</button>
      </div>
      <div className="addcontainer">
        <form className="transaction-row-wrapper">
          <div className="transaction-row">
            {/* Transaction Type */}
            <label>
              <p1 style={{ marginLeft: "49px" }}> Type</p1><br/>
              <select
                name="type"
                value={newTransaction.type}
                onChange={handleChange}
                style={{
                  width: "80px",
                  height: "30px",
                  marginLeft: "50px",
                }}
                className="transaction-input"
              >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </label>

            {/* Stock Name */}
            <label>
              Stock Name<br/>
              <input
                type="text"
                name="stockName"
                value={newTransaction.stockName}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>

            {/* Exchange */}
            <label>
              Exchange<br/>
              <input
                type="text"
                name="exchange"
                value="NSE"
                readOnly
                className="transaction-input read-only"
              />
            </label>

            {/* Date */}
            <label>
              Date
              <input
                type="date"
                name="date"
                value={newTransaction.date}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>
            <label>
              Quantity
              <input
                type="number"
                name="quantity"
                value={newTransaction.quantity}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>

            {/* Price */}
            <label>
              Price / Stock
              <input
                type="number"
                name="price"
                value={newTransaction.price}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>
          </div><br/><br/>

          <div className="transaction-row" style={{
            borderTop: "1px solid #ccc", // Middle border (bottom of this row)
            marginBottom: "10px",          // Optional spacing between rows
            paddingBottom: "10px",         // Optional padding for visual clarity
          }}>
            {/* Amount */}
            <label>
              <p1 style={{ marginLeft: "35px" }}> Amount</p1>
              <input
                type="number"
                name="amount"
                value={newTransaction.amount}
                readOnly
                className="transaction-input read-only"
                style={{
                  width: "190px",
                  height: "30px",
                  marginLeft: "30px",
                }}
              />
            </label>

            {/* Net Amount */}
            <label>
              Net Amount
              <input
                type="number"
                name="netAmount"
                value={newTransaction.netAmount}
                readOnly
                className="transaction-input read-only"
              />
            </label>

            {/* Total Charges */}
            <label>
            Total Charges
              <input
                type="number"
                name="Charges"
                value={newTransaction.totalCharges}
                readOnly
                className="transaction-input read-only"
              />
            </label>
            <label>
              Notes
              <input
                type="text"
                name="notes"
                value={newTransaction.notes}
                onChange={handleChange}
                className="transaction-input"
              />
            </label>

            {/* SIP Toggle */}
            <div className="sip-link">
              <a href="#" onClick={toggleSIPForm}>
                Add SIP for this Stock
              </a>
            </div>

            {/* SIP Form */}
            {newTransaction.showSIP && (
              <div className="addsipform-container">
                <AddSIPForm />
              </div>
            )}
          </div>
        </form>
        <button
            type="button"
            className="addbutton"
            onClick={addMoreTransactions}
          >
            <MdAddCircleOutline style={{ marginTop: "-2px" }} /> Add More
            Transactions
          </button>
        {/* Action Buttons */}
        <div className="form-buttons">
          <button
            type="button"
            style={{ marginLeft: "600px", background: "#24b676", color: "white" }}
            onClick={handleSave}
            className="save-button"
          >
            Add Transaction
          </button>
          <button type="button" className="reset"  style={{marginRight:"600px"}} onClick={resetForm}>
          Reset</button>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;