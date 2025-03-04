
import "../style/App.css";
import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route,useLocation} from "react-router-dom";
import CryptoExchange  from "./info.jsx";
import Home from "./home.jsx";
import ImportantInfo from "./privacy.jsx";
import ExchangeForm from "./exchange.jsx";





const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/crypto-exchange" element={<CryptoExchange/>} />
        <Route path="/privacy" element={<ImportantInfo/>} />
        <Route path="/exchange" element={<ExchangeForm/>} />
      </Routes>
      
    </Router>
  );
};



export default App;