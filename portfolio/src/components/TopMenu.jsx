import React from "react";
import logo from "../assets/logo.png";

const TopMenu = ({ items = [] }) => {
  console.log(items);
  return (
    <header className="top-menu">
      <div className="top-menu__brand">
        <a href="/" className="top-menu__logo">
          <img
            src={logo}
            alt="Logo"
            className="top-menu__logo-image"
          />
        </a>
      </div>
      <nav className="top-menu__nav">
        <ul className="top-menu__list">
          {items.length > 0 &&
            items.map((item, index) => (
              <li key={index} className="top-menu__item">
                <a href={item.href} className="top-menu__link">
                  {item}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopMenu;
