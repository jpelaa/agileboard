import React from "react";

export default () => {
  return (
    <div className="completed">
      <h1>Your team has been successfully completed this sprint</h1>
      <button type="button">start new sprint</button>
      {[...Array(150)]
        .map((data, index) => index)
        .reverse()
        .map((data, index) => {
          return <div className={`confetti-${data}`}></div>;
        })}
    </div>
  );
};
