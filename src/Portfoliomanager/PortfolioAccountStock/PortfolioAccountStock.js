import React, { useState, useEffect } from "react";
import "./PortfolioAccountStock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import PortfolioGainLoss from "../Portfoliostockcard/Portfoliostockcard";
import Navbar from "../../Navbar/Navbar";
import { Link } from 'react-router-dom';

const PortfolioAccountStock = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  
  const calculateTotalCharges = (amount) => {
    return (amount * 0.01);  // Assuming charges are 1% of the amount
  };

  const calculateRealizedGainLoss = (transaction) => {
    const currentMarketValue = transaction.quantity * transaction.price;
    const costOfInvestment = transaction.amount;
    return currentMarketValue - costOfInvestment;
  };

  const calculateHoldingBalance = (transaction) => {
    return transaction.quantity * transaction.price;
  };

  // Fetching transactions from location or localStorage
  useEffect(() => {
    if (location.state?.transactions) {
      setTransactions(location.state.transactions);
    } else {
      const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
      setTransactions(storedTransactions);
    }
  }, [location.state]);

  // Handle Edit Transaction
  const handleEdit = (transaction) => {
    const updatedTransaction = {
      ...transaction,
      totalCharges: calculateTotalCharges(transaction.amount),
      realizedGainLoss: calculateRealizedGainLoss(transaction),
      holdingBalance: calculateHoldingBalance(transaction),
    };

    navigate("/updatestockportfolio", { state: { transaction: updatedTransaction } });
  };

  // Handle Add New Transaction
  const handleAdd = () => {
    const newTransaction = {
      type: "Buy",
      stockName: "",
      exchange: "NSE",
      date: "",
      quantity: 0,
      price: 0,
      amount: 0,
      netAmount: 0,
      totalCharges: 0,
      realizedGainLoss: 0,
      holdingBalance: 0,
      notes: "",
      showSIP: false,
    };
    newTransaction.amount = newTransaction.quantity * newTransaction.price;
    newTransaction.totalCharges = calculateTotalCharges(newTransaction.amount);
    newTransaction.realizedGainLoss = calculateRealizedGainLoss(newTransaction);
    newTransaction.holdingBalance = calculateHoldingBalance(newTransaction);
    
    navigate("/addstockportfolio", { state: { transaction: newTransaction } });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Update transactions when coming back from the Edit page with updatedTransaction
  useEffect(() => {
    if (location.state?.updatedTransaction) {
      const updatedTransaction = location.state.updatedTransaction;
      setTransactions(prevTransactions =>
        prevTransactions.map(txn =>
          txn.id === updatedTransaction.id ? updatedTransaction : txn
        )
      );
    }
  }, [location.state]);
  const isActive = (path) => location.pathname === path;
  return (
    <div>
     < div className="networth-stocks-dashboard">
      <h2 className="newwmutual">
      Mutual Fund Portfolio
    </h2>
      <div className="networth-tabs">
        <button className="networth-tab ">Dashboard</button>
        <Link to="/portfoliostockaccount">
        <button className="networth-tab " style={{background:"#24b676",color:"white"}}>
          Stocks
        </button>
      </Link>
      <Link to="/mutualfirstpage">
        <button className="networth-tab">Mutual Fund</button>  </Link>
        <Link to="/portfoliogoldtoppage">
        <button className="networth-tab">Gold</button></Link>
      </div>
    

      {/* Summary Section */}
      <div className="networth-summary">
        <div>
          <p className="networthp">My Net Worth</p>
          <h2>₹0</h2>
        </div>
        <div>
          <p className="networthp">Today's Gain / Loss</p>
          <h2 className="networth-positive">0 ▼ 0%</h2>
        </div>
        <div>
          <p className="networthp">Amount Invested</p>
          <h2>₹0</h2>
        </div>
        <div>
          <p className="networthp">Unrealized Gain</p>
          <h2 className="networth-positive">0 ▼ 0%</h2>
        </div>
      </div>
      <PortfolioGainLoss />
      <div className="portfolio-account-stock-container">
        <div className="portfolio-account-stock-header">
          <h2 className="portfolio-account-stock-title">My Accounts</h2>
          <div className="portfolio-account-stock-controls">
            <div className="portfolio-account-stock-filters">
              <span className="filter-label">FILTER:</span>
              <button className="filter-button">All</button>
              <button className="filter-button">Gainers</button>
              <button className="filter-button">Losers</button>
            </div>
            <div className="portfolio-account-stock-actions-container">
              <div className="portfolio-account-stock-actions">
                <button className="add-transaction-button" onClick={handleAdd}>
                  + Add Transaction
                </button>
                <button className="my-alerts-button">My Alerts</button>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Table */}
        <table className="portfolio-account-stock-table">
          <thead>
            <tr>
              <th>Stocks Name</th>
              <th>Live Price</th>
              <th>Day's Gain</th>
              <th>Quantity</th>
              <th>Investment Cost</th>
              <th>Latest Value</th>
              <th>Unrealized Gain</th>
              <th>Realized Profit/Loss</th>
              <th>Holding Balance</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Stock Row */}
            <tr>
              <td className="stock-name">
                <span className="dropdown-icon" onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={isDropdownOpen ? faCaretDown : faCaretUp} />
                </span>
                ITI (2)
              </td>
              <td>291.40</td>
              <td>-0.48%</td>
              <td>4</td>
              <td>1,170.00</td>
              <td>1,165.60</td>
              <td>-0.38%</td>
              <td>-</td>
              <td>-</td>
            </tr>

            {isDropdownOpen && (
              <tr>
                <td colSpan="9" className="subcategory-row">
                  <table className="subcategory-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Total Charges</th>
                        <th>Net Amount</th>
                        <th>Realized Gain/Loss</th>
                        <th>Holding Balance</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>{transaction.date}</td>
                          <td>{transaction.type}</td>
                          <td>{transaction.quantity}</td>
                          <td>{transaction.amount}</td>
                          <td>{transaction.totalCharges}</td>
                          <td>{transaction.netAmount}</td>
                          <td>{transaction.realizedGainLoss}</td>
                          <td>{transaction.holdingBalance}</td>
                          <td>
                            <span className="icon-container">
                              <FaEdit
                                className="edit-icon"
                                onClick={() => handleEdit(transaction)}
                              />
                              <FaTrashAlt className="delete-icon" />
                              <BiPlusCircle
                                className="add-icon"
                                onClick={handleAdd}
                              />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Navbar />
    </div></div>
  );
};

export default PortfolioAccountStock;
