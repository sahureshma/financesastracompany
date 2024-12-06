import React, { useState } from "react";
// Assuming your styles are in this file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FaEdit, FaTrashAlt} from 'react-icons/fa'; 
import { BiPlusCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import {useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Mutualportfoliodonut from "../Mutualportfoliodonut/Mutualportfoliodonut";

const Mutualgain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    location.pathname === "/portfoliostockaccount"
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Sample values for testing (You can replace with dynamic values)
  const stockData = {
    navChange: -0.12,
    gainWeight: 0.48,  // Change this to a positive number for testing
    investmentCostWeight: 1170,
    latestValueWeight: 1165.60,
    unrealizedGain: 0.38  // Change this to a positive number for testing
  };

  // Utility function to render positive values only
  const renderPositiveValue = (value) => {
    return value > 0 ? `${value}%` : null; // Only return the value if it's positive
  };

  // Utility function to determine if the value is positive and apply green color
  const getPercentageClass = (value) => {
    return value > 0 ? "positive-value" : ""; // Apply green color for positive, empty for non-positive
  };

  return (
    <div>
      <Mutualportfoliodonut />
      <div className="portfolio-account-stock-container">
        <div className="portfolio-account-stock-header">
          <h2 className="portfolio-account-stock-title">My Accounts</h2>
          <div className="portfolio-account-stock-controls">
            {/* Filters on the left */}
            <div className="portfolio-account-stock-filters">
              <span className="filter-label">FILTER:</span>
              <Link to="/mutualnone"><button className="filter-button">All</button></Link>
              <button className="filter-button" style={{background:"#24b676",color:"white"}}>Gainers</button>

              <Link to="/portfoliomutualloss">
            <button className="filter-button">Losers</button></Link>
            </div>
            {/* Actions and group controls on the right */}
            <div className="portfolio-account-stock-actions-container">
              {/* Buttons */}
              <div className="portfolio-account-stock-actions">
                <button className="add-transaction-button">+ Add Transaction</button>
                <button className="my-alerts-button">My Alerts</button>
              </div>

              {/* Grouping options */}
              <div className="portfolio-account-stock-group">
                  <label>
                    Group By:
                    <input
                      type="radio"
                      name="groupBy"
                      value="none"
                      defaultChecked
                      onClick={() => navigate("/mutualnone")}
                    />{" "}
                    None
                    <input
                      type="radio"
                      name="groupBy"
                      value="sector"
                      onClick={() => navigate("/Mutualtypefund")}
                    />{" "}
                    AMC
                    <input
                      type="radio"
                      name="groupBy"
                      value="mcap"
                      onClick={() => navigate("/mutualPortfoliosector")}
                    />{" "}
                    Types of Funds
                  </label>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Table */}
        <table className="portfolio-account-stock-table">
          <thead>
            <tr>
              <th>Scheme Name</th>
              <th>Latest NAV<br />changes(%)</th>
              <th>Day's Gain<br />Weight (%)</th>
              <th>Quantity<br />Per Unit Cost</th>
              <th>Investment Cost<br />Weight (%)</th>
              <th>Latest Value<br />Weight (%)</th>
              <th>Unrealized Gain<br />Change (%)</th>
              <th>Realized Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="stock-name">
                <span className="dropdown-icon" onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={isDropdownOpen ? faCaretDown : faCaretUp} />
                </span>
                ICICI Prudential Equity & Debt Fund 
                <span className="stock-actions">
                  <span className="action-text">Add | Sell</span>
                  <span className="trash-icon">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </span>
              </td>
              <td className={getPercentageClass(stockData.navChange)}>
                {renderPositiveValue(stockData.navChange)}
              </td>
              <td className={getPercentageClass(stockData.gainWeight)}>
                {renderPositiveValue(stockData.gainWeight)}
              </td>
              <td>4</td>
              <td>{renderPositiveValue(stockData.investmentCostWeight)}</td>
              <td>{renderPositiveValue(stockData.latestValueWeight)}</td>
              <td className={getPercentageClass(stockData.unrealizedGain)}>
                {renderPositiveValue(stockData.unrealizedGain)}
              </td>
              <td>-</td>
            </tr>

            {/* Subcategory Row */}
            {isDropdownOpen && (
              <tr>
                <td colSpan="8" className="subcategory-row">
                  {/* Render the subcategory table */}
                  <table className="subcategory-table">
                    <thead>
                      <tr>
                        <th
                          className="hover-effect"
                          style={{
                            backgroundColor: 'white',
                            color: 'black',
                            textAlign: 'center',
                            borderRight: '1px solid #ccc',
                            padding: '10px',
                          }}
                        >
                          <Link
                            to="/portfoliostockaccount"
                            style={{ textDecoration: 'none', color: 'black' }}
                          >
                            Transaction History
                          </Link>
                        </th>
                        {/* Other column links */}
                      </tr>
                      {/* Column Headers */}
                      <tr>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Date</th>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Type</th>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Quantity</th>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Amount</th>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Charges</th>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Net Amount</th>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Realized Gain/Loss</th>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Holding Balance</th>
                        <th style={{ backgroundColor: '#F4F4F4', color: 'black' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>18/11/2024</td>
                        <td>Buy My Account</td>
                        <td>2</td>
                        <td>584.40</td>
                        <td>0.60</td>
                        <td>585</td>
                        <td>-</td>
                        <td>4</td>
                        <td>
                          <span className="icon-container">
                            <FaEdit className="edit-icon" />
                            <span className="border"></span>
                            <FaTrashAlt className="delete-icon" />
                            <span className="border"></span>
                            <BiPlusCircle className="add-icon" />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Portfolio Note */}
        <div className="portfolio-account-stock-note">
          <p className="portfolio-account-stock-notep">
            Note: Investment costs for Stocks include all charges mentioned while entering the transaction. The latest value is based on the exchange selected while buying. In case no exchanges (or multiple exchanges) are selected, <br /> NSE prices are the default. In case NSE prices are not available...
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Mutualgain;
