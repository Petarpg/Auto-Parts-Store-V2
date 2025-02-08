import React from "react";
import "./Header.css";

const Header = ({ cartCount = 0 }) => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="images/auto_parts_logo.png"
          alt="Auto Parts Store"
          className="logo"
        />

        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search parts..."
              className="search-input"
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="header-actions">
          <button className="login-button">Login</button>
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
