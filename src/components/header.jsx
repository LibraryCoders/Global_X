
import icon from "../assets/logo (1).png";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import "../style/App.css";

import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";



const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      {/* Left Button */}
      <button className="header-btn" onClick={() => navigate(-1)}>
      <IoMdClose size={20} />
      <span>Закрыть</span>
    </button>
      {/* Logo */}
      <div className="header-logo">
        <img src={icon} alt="GlobalEx" />
      </div>
      {/* Right Buttons */}
      <div className="header-right">
        <FaChevronDown size={14} />
        <HiMenu size={20} />
      </div>
    </header>
  );
};



export default Header;