import React from "react";
import AgilifyLogo from "assets/svg/agile.svg";
import BrandName from "components/BrandName";

export default () => {
  return (
    <section>
      <div className="login">
        <div className="login-header">
          <img src={AgilifyLogo} alt="Agilify logo" />
          <BrandName />
        </div>
        <div className="login-form">
          <h1>welcome back</h1>
          <form name="login">
            <input type="text" placeholder="enter your email" />
            <input type="password" placeholder="enter your password" />
            <button type="button">login</button>
          </form>
        </div>
      </div>
    </section>
  );
};
