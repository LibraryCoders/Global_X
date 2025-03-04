
import "../style/App.css";
import React,{useEffect} from "react";
import { Routes, Route,useLocation, HashRouter} from "react-router-dom";
import CryptoExchange  from "./info.jsx";
import Home from "./home.jsx";
import ImportantInfo from "./privacy.jsx";
import ExchangeForm from "./exchange.jsx";





const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/crypto-exchange" element={<CryptoExchange/>} />
        <Route path="/privacy" element={<ImportantInfo/>} />
        <Route path="/exchange" element={<ExchangeForm/>} />
      </Routes>
      
    </HashRouter>
  );
};



export default App;