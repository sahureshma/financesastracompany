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
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import './Mutualfirstpage.css'
import Mutualportfoliodonutfirst from "../Mutualdonutfirstpage/Mutualdonutfirstpage";

const  Mutualfirstpage = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const [isDropdownOpen, setIsDropdownOpen] = useState(
      location.pathname === "/portfoliostockaccount"
    );
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <div>
    <Mutualportfoliodonutfirst/>
    <div className="portfolio-account-stock-container">
      <div className="portfolio-account-stock-header">
        <h2 className="portfolio-account-stock-title">My Accounts</h2>
        <div className="portfolio-account-stock-controls">
          {/* Filters on the left */}
          <div className="portfolio-account-stock-filters">
            <span className="filter-label">FILTER:</span>
            <Link to="/mutualnone"><button className="filter-button ">All</button></Link>
            <Link to="/portfoliomutualgain"><button className="filter-button">Gainers</button></Link>
            <button className="filter-button">Losers</button>
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
                    onClick={() => navigate("/Mutualtypefund" )}
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
                
              </span>
         
              <span className="stock-actions">
              
                <span className="trash-icon">
              
                </span>
              </span>
            </td>
            <td className="negative"></td>
            <td className="negative"></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="negative"></td>
            <td></td>
          </tr>

         
             
         

          {/* Totals Row */}
          <tr className="table-total">
            <td>Total</td>
            <td>-</td>
            <td className="Positive">0%</td>
            <td>-</td>
            <td>0</td>
            <td>0</td>
            <td className="negative">0%</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      {/* Note Section */}
      <div className="portfolio-account-stock-note">
        <p className="portfolio-account-stock-notep">
          Note: Investment costs for Stocks include all charges mentioned while entering the transaction. The latest value is based on the exchange selected while buying. In case no exchanges (or multiple exchanges) are selected, <br /> NSE prices are the default. In case NSE prices are not available...
        </p>
      </div>
    </div>
    <Navbar/>
    </div>
  );
};

export default Mutualfirstpage;