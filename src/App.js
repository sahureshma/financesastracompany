// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Market from "./Market/Market";
import GoldETF from "./GoldETF/GoldETF";
import Stocktable from "./StockList/StockList";
import ProfitLossTable from "./ProfitLossTable/ProfitLossTable";
import BalanceSheet from "./BalanceSheet/BalanceSheet";
import Header from "./header/header";
import Overview from "./StockOverview/Overview";

import Smallcap from "./Smallcapstock/Smallcapstock";
import Midcap from "./Midcapstock/Midcapstock";
import Largecap from "./Largecapstock/Largecapstock";
import NiftyStocks from "./Nifty50stock/Nifty50stock";
import Highstock from "./Highstock/Highstock";
import Beststock from "./Beststock/Beststock";
import Netify500 from "./NiftyStocksTable/NiftyStocksTable";
import NetWorthStocksDashboard from "./Portfoliomanager/Networth/Networth";
import PortfolioGainLoss from "./Portfoliomanager/Portfoliostockcard/Portfoliostockcard";
import AddTransaction from "./Portfoliomanager/Addportfoliostock/Addportfoliostock";
import UpdateTransaction from "./Portfoliomanager/Updateportfoliostock/Updateportfoliostock";
import AddSIPForm from "./Portfoliomanager/Addsipstockportfolio/Addsipstockportfolio";
import Deletepopup from "./Portfoliomanager/Deletepopstockportfolio/Deletepopstockportfolio";
import PortfolioAccountStock from '../src/Portfoliomanager/PortfolioAccountStock/PortfolioAccountStock'
import AccountStockfundamental from '../src/Portfoliomanager/AccountStockfundamental/AccountStockfundamental'
import AccountStockreturn from '../src/Portfoliomanager/AccountStockreturn/AccountStockreturn'
import AccountStockalert from '../src/Portfoliomanager/AccountStockalert/AccountStockalert'
import Mutualportfoliodonut from '../src/Portfoliomanager/Mutualportfoliodonut/Mutualportfoliodonut'
import Portfoliosector from "./Portfoliomanager/Portfoliosector/Portfoliosector";
import Mutualtypefund from "./Portfoliomanager/Mutualtypefund/Mutualtypefund";
import Mutualnone from "./Portfoliomanager/Mutualnone/Mutualnone";
import Mutualportfoliodonutfirst from "./Portfoliomanager/Mutualdonutfirstpage/Mutualdonutfirstpage";
import Mutualfirstpage from "./Portfoliomanager/Mutualfirstpage/Mutualfirstpage";
import Portfoliogoldtop from "./Portfoliomanager/Portfoliogoldtoppage/Portfoliogoldtoppage";
import Portfoliogoldaccount from "./Portfoliomanager/Portfoliogoldaccount/Portfoliogoldaccount";
import Mutualgain from "./Portfoliomanager/Mutualgainportfolio/Mutualgainportfolio";
import Mutualloss from "./Portfoliomanager/Mutuallossportfolio/Mutuallossportfolio";
import OverviewPortfolioManager from "./Portfoliomanager/Portfoliostockoverflow/Portfoliostockoverflow";
import Goldgain from "./Portfoliomanager/Positivegoldportfolio/Positivegoldportfolio";
import StockWatchlist from "./Portfoliomanager/Stockwatchlistportfolio/Stockwatchlistportfolio";
import StockWatchsectorlist from "./Portfoliomanager/Stockwatchsectorportfolio/Stockwatchsectorportfolio";
import MutualWatchlist from "./Portfoliomanager/Mutualfundwatchlistportfolio/Mutualfundwatchlistportfolio";
import MutualWatchsectorlist from "./Portfoliomanager/Mutualsectorportwatchlist/Mutualsectorportwatchlist";
import MutualWatchtypefundlist from "./Portfoliomanager/Mutualfundwtchlisttypefund/Mutualfundwtchlisttypefund";
import MutualWatchportall from "./Portfoliomanager/Mutualwatchportall/Mutualwatchportall";
import StockWatchsectormcap from "./Portfoliomanager/Stockportfoliomcap/Stockportfoliomcap";

import StockWatchportall from "./Portfoliomanager/Sectorwatchlistall/Sectorwatchlistall";
import GoldWatchlist from "./Portfoliomanager/Goldwatchlistportfolio/Goldwatchlistportfolio";
import GoldWatchportall from "./Portfoliomanager/Goldwatchlistall/Goldwatchlistall";
import PaymentForm from "./Portfoliomanager/Paymentmethodsubscribe/Paymentmethodsubscribe";
import LocalpaymentForm from "./Portfoliomanager/Elitepaymentsubscribe/Elitepaymentsubscribe";
import ElitepaymentForm from "./Portfoliomanager/Elitepaymentsubscribe/Elitepaymentsubscribe";
import Premiumplanhalfyear from "./Portfoliomanager/Premiumhalfyear/Premiumhalfyear";
import Eliteplanhalfyear from "./Portfoliomanager/Eliteplanhalfyear/Eliteplanhalfyear";
import LocalPaymentPremiumForm from "./Portfoliomanager/Localpayment/Localpaymentpremium";
import LocalhalfPremiumForm from "./Portfoliomanager/Premiumlocalhalf/Premiumlocalhalf";
import ElitePaymentPremiumForm from "./Portfoliomanager/Elitelocalannualpayment/Elitelocalannualpayment";
import ElitePaymenthalfForm from "./Portfoliomanager/Elitelocalhalfpayment/Elitelocalhalfpayment";
import UpiPaymentFormpremium from "./Portfoliomanager/Upiannualpremium/Upiannualpremium";
import Upihalfyearpremium from "./Portfoliomanager/Upihalfyearpremium/Upihalfyearpremium";
import UpiPaymentFormelite from "./Portfoliomanager/Upiannualelite/Upiannualelite";
import UpihalfyearFormelite from "./Portfoliomanager/Upihalfyearelite/Upihalfyearelite";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/gold" element={<GoldETF />} />
      <Route path="/stock" element={<Stocktable />} />
      <Route path="/header" element={<Header />} />
      <Route path="/profitloss" element={<ProfitLossTable />} />
      <Route path="/balance-sheet" element={<BalanceSheet />} />
      <Route path="/register" element={<Register />} />
      <Route path="/stockhandle" element={<Overview />} />
      <Route path="/nifty" element={<Netify500 />} />
      <Route path="/smallcap" element={<Smallcap />} />
      <Route path="/midcap" element={<Midcap />} />
      <Route path="/largecap" element={<Largecap />} />
      <Route path="/niftystock" element={<NiftyStocks />} />
      <Route path="/highgrowth" element={<Highstock />} />
      <Route path="/beststock" element={<Beststock />} />


      <Route path="/portfolio" element={<NetWorthStocksDashboard />} />
      <Route path="/portfoliocard" element={<PortfolioGainLoss />} />
      <Route path="/portfoliostockaccount" element={<PortfolioAccountStock />} />
      <Route path="/accountfund" element={<AccountStockfundamental />} />
      <Route path="/accountalert" element={<AccountStockalert />} />
      <Route path="/accountreturn" element={<AccountStockreturn />} />

      <Route path="/addstockportfolio" element={<AddTransaction />} />
      <Route path="/updatestockportfolio" element={<UpdateTransaction />} />
      <Route path="/addsipstockportfolio" element={<AddSIPForm />} />
      <Route path="/deletestockportfolio" element={<Deletepopup />} />
      <Route path="/mutualportfoliodonut" element={<Mutualportfoliodonut />} />
      <Route path="/mutualPortfoliosector" element={<Portfoliosector />} />
      <Route path="/mutualtypefund" element={<Mutualtypefund />} />
      <Route path="/mutualnone" element={<Mutualnone />} />
      <Route path="/mutualportfoliodonutfirst" element={<Mutualportfoliodonutfirst />} />
      <Route path="/mutualfirstpage" element={<Mutualfirstpage />} />
      <Route path="/portfoliogoldtoppage" element={<Portfoliogoldaccount />} />
      <Route path="/portfoliomutualgain" element={<Mutualgain />} />
      <Route path="/portfoliomutualloss" element={<Mutualloss />} />
      <Route path="/overviewPortfolioManager" element={< OverviewPortfolioManager />} />
      <Route path="/goldgain" element={<Goldgain/>} />
     <Route path="/stockWatchlist" element={ <StockWatchlist/>} />
     <Route path="/stocksectorWatchlist" element={ <StockWatchsectorlist/>} />
     <Route path="/mutualWatchlist" element={ <MutualWatchlist/>} />
    <Route path="/mutualsectorWatchlist" element={<MutualWatchsectorlist/> }/>
     <Route path="/mutualWatchtypefundlist" element={<MutualWatchtypefundlist/> }/>
     <Route path="/mutualWatchportall" element={<MutualWatchportall/> }/>
     <Route path="/stockWatchsectormcap" element={< StockWatchsectormcap/> }/>
     <Route path="/stockWatchportall" element={<StockWatchportall/> }/>
    <Route path="/goldWatchlist" element={< GoldWatchlist/> }/>
    <Route path="/goldWatchlistall" element={<GoldWatchportall/> }/> 
    <Route path="/paymentForm" element={<PaymentForm/> }/>
    <Route path="/elitepaymentForm" element={<ElitepaymentForm/> }/>
    <Route path="/premiumplanhalfyear" element={<Premiumplanhalfyear/> }/>
    <Route path="/eliteplanhalfyear" element={<Eliteplanhalfyear/> }/>
    <Route path="/localpaymentpremiumForm" element={<LocalPaymentPremiumForm/> }/>
    <Route path="/localhalfpremiumForm" element={<LocalhalfPremiumForm/> }/>
    <Route path="/elitePaymentPremiumForm" element={<ElitePaymentPremiumForm/> }/>
    <Route path="/elitePaymenthalfForm" element={<ElitePaymenthalfForm/> }/>
    <Route path="/upiPaymentFormpremium" element={<UpiPaymentFormpremium/> }/>
    <Route path="/upihalfyearpremium" element={<Upihalfyearpremium/>}/>
    <Route path="/upiPaymentFormelite" element={<UpiPaymentFormelite/>}/>
    <Route path="/upihalfyearFormelite" element={<UpihalfyearFormelite/>}/>

    </Routes>

  );
}

export default App;
