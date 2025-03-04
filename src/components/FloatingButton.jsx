import React from "react";
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

export default FloatingButton;