import React from "react";
import AgilifyLogo from "assets/svg/agile.svg";
import BrandName from "components/BrandName";

const Header = ({ currentUser, resetUsers }) => {
  return (
    <header>
      <div className="logo">
        <img src={AgilifyLogo} alt="Agilify logo" />
        <BrandName />
      </div>
      <i className="fa fa-bars hamburger"></i>
      <nav id="menu">
        <p> {currentUser}</p>
        <p>
          <a href="#" onClick={() => resetUsers()}>
            sign out
          </a>
        </p>
      </nav>
    </header>
  );
};

export default Header;
