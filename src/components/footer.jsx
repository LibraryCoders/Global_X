import {Link} from "react-router-dom";


import "../style/App.css";
import React from "react";




const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>Contact us</h3>
        <p>Email: support@globalex.io</p>
        <p>Telegram: @GlobalExSupport</p>
        <p>Официальный сайт: www.globalex.io</p>
        <p>
          Поддержка 24/7: оперативные <br />
          ответы на все ваши вопросы!
        </p>
      </div>

      <div className="footer-left">       
        <Link to="/privacy?title=privacy"><p>Privacy Policy | Terms of Service</p></Link>
        <Link to="/privacy?title=Обмен"><p>Обмен</p></Link>
        <Link to="/privacy?title=Партнеры"><p>Партнеры</p></Link>
        <Link to="/privacy?title=KYC"><p>KYC</p></Link>
        <Link to="/privacy?title=Политика конфиденциальности"><p>Политика конфиденциальности</p></Link>
        <Link to="/privacy?title=Контакты"><p>Контакты</p></Link>
      </div>
    </div>
  );
};

export default Footer;