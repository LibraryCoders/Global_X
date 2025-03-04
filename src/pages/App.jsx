
import "../style/App.css";
import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route,useLocation} from "react-router-dom";
import CryptoExchange  from "./info.jsx";
import Home from "./home.jsx";
import ImportantInfo from "./privacy.jsx";
import ExchangeForm from "./exchange.jsx";
import { FaTwitter } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#1DA1F2",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
      }}
      onClick={() => window.open("https://twitter.com", "_blank")}
    >
      <FaTwitter size={24} />
    </button>
  );
};

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
      <FloatingButton />  
    </Router>
  );
};



export default App;