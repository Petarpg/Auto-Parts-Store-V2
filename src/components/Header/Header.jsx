import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>

        <div className={`header-actions ${isMenuOpen ? "show" : ""}`}>
          <button className="login-button">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>

        <button
          className="burger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
