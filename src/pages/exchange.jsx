import React, { useState } from 'react';
import '../style/exchange.css';
import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from "react-router-dom";
import CryptoTicker from '../components/btc_rate';
import image from "../assets/Group 146.png";
import image1 from "../assets/Group 7.png";
import FloatingButton from '../components/FloatingButton';


const ExchangeForm = () => {

  const amount = new URLSearchParams(window.location.search).get("amount");
  const currency = new URLSearchParams(window.location.search).get("currency");



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    agreedToTerms: false,
    agreedToPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.agreedToTerms || !formData.agreedToPolicy) {
      alert("Please agree to the terms and policy before proceeding.");
      return;
    }
    
    try {
      const response = await fetch('https://your-api-endpoint.com/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert("Exchange request submitted successfully!");
      } else {
        alert("Failed to submit exchange request.");
      }
    } catch (error) {
      alert("Error submitting request: " + error.message);
    }
  };

  return (
    <div className='main-contianer'>
      <Header />
      <div className="exchange-container">
        <div className="main-content">
          <h1>НОВАЯ ЗАЯВКА</h1>
          <div className="exchange-details">
            <div className="exchange-row">
              <span>Отдаёте:</span>
              <span>{amount}</span>
              <span className='img-row'><img src={ currency=="USD"? image:   image1} alt="image2" />   {currency}</span>
            </div>
            <div className="exchange-row">
              <span>Получаете:</span>
              
              
              
              <span className='img-row'><img src={ currency!="USD"? image:   image1} alt="image2" />    {currency=="USD"?"USDT":"USD"}</span>



            </div>
            <div className="exchange-row">
              <span>Локация:</span>
              <span>Дубай, Объединённые<br />Арабские Эмираты (ОАЭ)</span>
            </div>
          </div>
          <div className="user-data">
            <h2>Ваши данные</h2>
            <div className="input-group">

              <input type="text" placeholder='Имя' name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="input-group">
              <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="input-group">
      
              <input type="text" placeholder='Telegram' name="telegram" value={formData.telegram} onChange={handleChange} />
            </div>
          </div>
          <CryptoExchangeSection />
          <div className="agreements">
            <label>
              <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} /> Я согласен с правилами сервиса
            </label>
            <label>
              <input type="checkbox" name="agreedToPolicy" checked={formData.agreedToPolicy} onChange={handleChange} /> Я согласен с политикой
            </label>
          </div>
          <button className="exchange-button-confirm" onClick={handleSubmit}>Обменять</button>
        </div>
      </div>
      <CryptoTicker />
      <Footer />
      <FloatingButton/>
    </div>
  );
};

const CryptoExchangeSection = () => {
  return (
    <div className="crypto-section-1">
      <h2>Пожалуйста, ознакомьтесь с важной информацией:</h2>
      <p className="description-1">
        Для совершения обмена необходимо создать заявку, заполнив форму актуальными данными, а затем обратиться
      </p>
      <Link to="/crypto-exchange"><span className="view-more-1">...view more</span></Link>
    </div>
  );
};

export default ExchangeForm;
