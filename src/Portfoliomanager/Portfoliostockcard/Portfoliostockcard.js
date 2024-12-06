import React from "react";
import "./Portfoliostockcard.css"; // Corrected CSS file import
import { Doughnut } from "react-chartjs-2";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const PortfolioGainLoss = () => {
  const data = {
    todayGain: {
      totalGaining: 0,
      totalLosing: 1,
      gainPercentage: 0,
      losePercentage: -0.04,
      losingStocks: [{ name: "ITI", value: 291.4, percentage: -0.04 }],
    },
    unrealizedGain: {
      totalProfit: 0,
      totalLoss: 1,
      profitPercentage: 0,
      lossPercentage: -0.38,
      highestLoss: { name: "ITI", value: -4, percentage: -0.38 },
      highestProfit: { name: "XYZ", value: 10, percentage: 2.5 }, // Example for highest profit
    },
  };

  const donutChartData = {
    labels: ["Red Segment", "Empty Space"],
    datasets: [
      {
        data: [75, 2], // Adjust these values for the red segment and empty space
        backgroundColor: ["#FF3D3D", "#FFFFFF"], // Red and White
        hoverBackgroundColor: ["#FF3D3D", "#FFFFFF"],
        borderWidth: 0, // No borders for a cleaner look
      },
    ],
  };

  const donutChartOptions = {
    cutout: "55%", // Makes it a thinner donut
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip if not needed
      legend: { display: false }, // Disable legend
    },
  };

  return (
    <div className="portfolio-gain-loss">
      {/* Today's Gain Section */}
      <div className="gain-card">
        <h3  style={{ marginRight: "290px" }}>Today's Gain</h3>
        <div className="content">
          <div className="portrow">
            {/* Donut Chart */}
            <div className="chart">
              <Doughnut data={donutChartData} options={donutChartOptions} style={{borderRadius: "50%",
                transform: "rotate(90deg)", width: "120px",
                height: "120px",}} />
                
            </div>
            {/* Stats Text */}
            <div className="stats">
              <p style={{ fontSize: "15px" }}>
                {data.todayGain.totalGaining} of{" "}
                {data.todayGain.totalGaining + data.todayGain.totalLosing} Gaining
              </p>
              <p className="gain-text"><FaCaretUp/>{data.todayGain.gainPercentage}%</p>
              <p style={{ fontSize: "15px" }}>
                {data.todayGain.totalLosing} of{" "}
                {data.todayGain.totalGaining + data.todayGain.totalLosing} Losing
              </p>
              <p className="loss-text">
                <FaCaretDown/>
                {data.todayGain.losePercentage}%
              </p>
            </div>
          
          </div>
        <p1 style={{marginLeft:'20px'}}>0% investment</p1>
          <div className="stocks-summary">
          
            {/* Gaining and Losing Stocks Section */}
            <div className="gaining-and-losing-stocks">
              <div className="gaining-stocks">
                <h4>Gaining Stocks</h4>
                <p style={{fontSize: "10px" }}>-</p>
                <p style={{fontSize: "10px" }}>-</p>
                
              </div>
              <div className="losing-stocks">
                <h4>Losing Stocks</h4>
                {data.todayGain.losingStocks.map((stock, index) => (
                  <p key={index} style={{ color: stock.percentage < 0 ? 'red' : 'black' }}>
                  {stock.name}: <br />{stock.value} ({stock.percentage}%)
                </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unrealized Gain Section */}
      <div className="unrealized-card">
        <h3 style={{ marginRight: "250px" }}>Unrealized Gain</h3>
        <div className="content">
          <div className="row">
            {/* Donut Chart */}
            <div className="chart">
              <Doughnut data={donutChartData} options={donutChartOptions}style={{
  borderRadius: "50%",
  transform: "rotate(90deg)",
  width: "120px",
  height: "150px"
}}
/>
            </div>
            {/* Stats Text */}
            <div className="stats">
              <p>
                {data.unrealizedGain.totalProfit} of{" "}
                {data.unrealizedGain.totalProfit + data.unrealizedGain.totalLoss} In Profit
              </p>
              <p className="gain-text"><FaCaretUp/>{data.unrealizedGain.profitPercentage}%</p>
              <p>
                {data.unrealizedGain.totalLoss} of{" "}
                {data.unrealizedGain.totalProfit + data.unrealizedGain.totalLoss} In Loss
              </p>
              <p className="loss-text">
              <FaCaretDown/>{data.unrealizedGain.highestLoss.value} (
                {data.unrealizedGain.lossPercentage}%)
              </p>
            </div>
          </div>
          <p1 style={{marginLeft:'20px'}}>0% investment</p1>
          <div className="stocks-summary">
            {/* Highest Profit and Highest Loss Section */}
            <div className="profit-and-loss">
              <div className="highest-profit">
                <h4>Highest Profit</h4>
                <p style={{fontSize: "10px" }}>-</p>
                <p style={{fontSize: "10px" }}>-</p>
              </div>
              <div className="highest-loss">
                <h4>Highest Loss</h4>
                <p style={{ color: data.unrealizedGain.highestLoss.percentage < 0 ? 'red' : 'black' }}>
  {data.unrealizedGain.highestLoss.name}: {data.unrealizedGain.highestLoss.value} (
  {data.unrealizedGain.highestLoss.percentage}%)
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGainLoss;
