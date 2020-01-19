import React, { useState, memo, useEffect } from "react";
import AgilifyLogo from "assets/svg/agile.svg";
import BrandName from "components/BrandName";

const Login = ({ shouldRedirect, history, userAuthentication, resetUsers }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    resetUsers();
  }, []);

  useEffect(() => {
    if (shouldRedirect) {
      history.push("/home");
    }
  }, [shouldRedirect]);

  const deferredCall = () => {
    userAuthentication({ username, password });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

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
            <input
              type="text"
              placeholder="enter your email"
              value={username}
              onChange={e => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => deferredCall()}
            >
              {isLoading ? "loading..." : "login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);
