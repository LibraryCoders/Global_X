

import React, { useEffect, useState } from "react";
import "../style/App.css";


// ✅ CryptoTicker Component
const CryptoTicker = () => {
  const [priceData, setPriceData] = useState({ current: null, previous: null });
  
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await response.json();
        setPriceData({ current: data.bitcoin.usd, previous: null });
      } catch (error) {
        console.error("Error fetching BTC price:", error);
      }
    };

    fetchPrice();
  }, []);

  const createTickerItems = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(
        <div className="ticker-item" key={`original-${i}`}>
          <span className="crypto">BTC</span>
          <span className="value">$<span className="price">{priceData.current ? priceData.current.toFixed(2) : "---"}</span>
          </span>
        </div>
      );
    }
    return [...items, ...items]; 
  };

  return (
    <div className="ticker-container">
      <div className="ticker">{createTickerItems()}</div>
    </div>
  );
};


export default CryptoTicker;