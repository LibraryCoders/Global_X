import "../style/App.css";
import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

import button from "../assets/button.png";

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
          <span className="value">
            $<span className="price">{priceData.current ? priceData.current.toFixed(2) : "---"}</span>
          </span>
        </div>
      );
    }
    return [...items, ...items]; // Duplicate items for seamless loop
  };

  return (
    <div className="ticker-container">
      <div className="ticker">{createTickerItems()}</div>
    </div>
  );
};

// ✅ CryptoExchangeSection Component
const CryptoExchangeSection = () => {
  return (
    <div className="crypto-section">
      <h2>ОБМЕН КРИПТОВАЛЮТ<br /> С GLOBALEX</h2>
      <p className="subheading">надёжно, быстро, удобно</p>
      <p className="description">
      Globalex – удобная платформа для оформления заявок на обмен криптовалют <br /> <br />
      Globalex – это современный сервис, который позволяет быстро и безопасно оформить заявку на обмен криптовалют. Мы не являемся обменником, а предоставляем удобную платформу для создания заявок, которые обрабатываются на стороне партнерских обменных сервисов. <br /> <br />

      Преимущества Globalex: <br /> <br />
      ✅ Быстро и удобно – создавайте заявки за пару кликов. <br />
      ✅ Прозрачные условия – все курсы и комиссии отображаются заранее. <br />
      ✅ Безопасность – мы сотрудничаем только с проверенными обменными сервисами.<br />
      ✅ Поддержка 24/7 – оперативная помощь по всем вопросам.<br /> <br />
      Оформляйте заявки на обмен с Globalex – быстро, безопасно и выгодно!




      </p>
      <Link to="/crypto-exchange"><span className="view-more">...view more</span></Link>
    </div>
  );
};

// ✅ ReviewCards Component
const reviews = [
  { name: "Stepan", role: "Local Expert", rating: 5, date: "2 weeks ago", review: "Отличный сервис! Деньги пришли мгновенно, без проблем!" },
  { name: "Nursultan", role: "Local Expert", rating: 5, date: "2 weeks ago", review: "Супер обменник! Всё чётко, быстро и без лишних комиссий!" },
  { name: "Ivan", role: "Local Expert", rating: 5, date: "2 weeks ago", review: "Рекомендую! Надежно, удобно и очень выгодный курс" },
  { name: "Ivan", role: "Local Expert", rating: 5, date: "2 weeks ago", review: "Рекомендую! Надежно, удобно и очень выгодный курс" },
];

const ReviewCards = () => {
  return (
    <div className="review-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <div className="avatar"></div>
            <div className="review-info">
              <h4>{review.name}</h4>
              <p>{review.role}</p>
            </div>
          </div>
          <div className="review-body">
            <div className="stars">{"★".repeat(review.rating)} <span className="review-date">{review.date}</span> </div>
            <p className="review-text">{review.review}</p>
            <a href="#" className="view-more">...view more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

const MainForm = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const postData = { amount, fromCurrency, toCurrency, location };

    try {
      const response = await fetch("https://your-api-url.com/exchange", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate("/exchange?amount="+amount+"&currency="+toCurrency);
    } catch (err) {
      navigate("/exchange?amount="+amount+"&currency="+toCurrency); 
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="exchange-box">
      <label>Вы отдаете</label>
      <div className="exchange-box-content-row">
        <input
          className="input-true"
          type="text"
          placeholder="Введите количество"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        
        {/* Dropdown with background image */}
        <select
  className="input-false"
  data-currency={fromCurrency}
  style={{
    // backgroundImage: `url(${currencyBackgrounds[fromCurrency]})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "left 10px center",
    // paddingLeft: "40px", 
    // width: "100%",
    // backgroundSize: "20px",
    // backgroundColor: "#252628",
    // padding: "1rem",
    // borderRadius: "15px",
    // border: "1px solid #929292",
    // marginBottom: "1rem",
    // color: "#ffffff",
    // fontSize: "1.1rem",
    // transition: "all 0.3s ease",
  }}
  value={fromCurrency}
  onChange={(e) => {
    const newCurrency = e.target.value;
    setFromCurrency(newCurrency);
    setToCurrency(newCurrency === "USD" ? "USDT" : "USD");
  }}
>
  <option value="USD">USD</option>
  <option value="USDT">USDT</option>
</select>

      </div>

      <img onClick={()=>{
        const data=toCurrency;
        setToCurrency(fromCurrency);
        setFromCurrency(data);


      }} className="swap-icon" src={button} alt="Swap Icon" />

      <label>Вы получаете</label>
      <select
        value={toCurrency}
        data-currency={toCurrency}
        style={{
    //     backgroundImage: `url(${currencyBackgrounds[fromCurrency]})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "left 10px center",
    // paddingLeft: "40px", 

        }}
        onChange={(e) => {
          const newCurrency = e.target.value;
          setToCurrency(newCurrency);
          setFromCurrency(newCurrency === "USD" ? "USDT" : "USD");
        }}
      >
        <option value="USD">USD</option>
        <option value="USDT">USDT</option>
      </select>

      <label>Локация</label>
      <select className="location">
  {/* Россия */}
  <option value="Россия, Москва">Россия, Москва</option>
  <option value="Россия, Красноярск">Россия, Красноярск</option>
  <option value="Россия, Краснодар">Россия, Краснодар</option>
  <option value="Россия, Уфа">Россия, Уфа</option>
  <option value="Россия, Екатеринбург">Россия, Екатеринбург</option>
  <option value="Россия, Казань">Россия, Казань</option>
  <option value="Россия, Владивосток">Россия, Владивосток</option>
  <option value="Россия, Санкт-Петербург">Россия, Санкт-Петербург</option>
  <option value="Россия, Новосибирск">Россия, Новосибирск</option>
  <option value="Россия, Иркутск">Россия, Иркутск</option>
  <option value="Россия, Ростов-на-дону">Россия, Ростов-на-дону</option>
  <option value="Россия, Сочи">Россия, Сочи</option>
  <option value="Россия, Ставрополь">Россия, Ставрополь</option>
  <option value="Россия, Нижний Новгород">Россия, Нижний Новгород</option>
  <option value="Россия, Воронеж">Россия, Воронеж</option>
  <option value="Россия, Барнаул">Россия, Барнаул</option>
  <option value="Россия, Калининград">Россия, Калининград</option>
  <option value="Россия, Кемерово">Россия, Кемерово</option>
  <option value="Россия, Южно-Сахалинск">Россия, Южно-Сахалинск</option>
  <option value="Россия, Ижевск">Россия, Ижевск</option>
  <option value="Россия, Самара">Россия, Самара</option>
  <option value="Россия, Челябинск">Россия, Челябинск</option>
  <option value="Россия, Пермь">Россия, Пермь</option>
  <option value="Россия, Волгоград">Россия, Волгоград</option>
  <option value="Россия, Омск">Россия, Омск</option>
  <option value="Россия, Бишкек">Россия, Бишкек</option>
  <option value="Россия, Саратов">Россия, Саратов</option>
  <option value="Россия, Пенза">Россия, Пенза</option>
  <option value="Россия, Липецк">Россия, Липецк</option>
  <option value="Россия, Хабаровск">Россия, Хабаровск</option>
  <option value="Россия, Тюмень">Россия, Тюмень</option>
  <option value="Россия, Горно-Алтайск">Россия, Горно-Алтайск</option>
  <option value="Россия, Махачкала">Россия, Махачкала</option>
  <option value="Россия, Рязань">Россия, Рязань</option>
  <option value="Россия, Бийск">Россия, Бийск</option>
  <option value="Россия, Астрахань">Россия, Астрахань</option>
  <option value="Россия, Ульяновск">Россия, Ульяновск</option>
  <option value="Россия, Другие города (по запросу)">Россия, Другие города (по запросу)</option>

  {/* Казахстан */}
  <option value="Казахстан, Астана">Казахстан, Астана</option>
  <option value="Казахстан, Алматы">Казахстан, Алматы</option>
  <option value="Казахстан, Шимкент">Казахстан, Шимкент</option>
  <option value="Казахстан, Другие города (по запросу)">Казахстан, Другие города (по запросу)</option>

  {/* Молдова */}
  <option value="Молдова, Кишинев">Молдова, Кишинев</option>
  <option value="Молдова, Тирасполь">Молдова, Тирасполь</option>
  <option value="Молдова, Другие города (по запросу)">Молдова, Другие города (по запросу)</option>

  {/* Узбекистан */}
  <option value="Узбекистан, Ташкент">Узбекистан, Ташкент</option>
  <option value="Узбекистан, Другие города (по запросу)">Узбекистан, Другие города (по запросу)</option>

  {/* Другие страны */}
  <option value="Другие страны и города (по запросу)">Другие страны и города (по запросу)</option>

  {/* Дубай */}
  <option value="Дубай, ОАЭ">Дубай, Объединённые Арабские Эмираты (ОАЭ)</option>
  <option value="Дубай, Объединённые Эмираты (ОАЭ)">Дубай, Объединённые Эмираты (ОАЭ)</option>
</select>


      <button className="exchange-btn" onClick={handleSubmit} disabled={loading}>
        {loading ? "Processing..." : "Обменять"}
      </button>
    </div>
  );
};

// ✅ Home Component
const Home = () => {
  return (
    <div className="container">
      <Header />
      <CryptoTicker />
      <MainForm/>
      <section className="reviews">
        <CryptoExchangeSection />
        <ReviewCards />
      </section>
      <Footer />
    </div>
  );
};

// ✅ Proper Exports
export { CryptoTicker, CryptoExchangeSection, ReviewCards };
export default Home;
