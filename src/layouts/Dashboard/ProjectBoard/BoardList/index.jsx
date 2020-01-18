import React from "react";
import Board from "./Board";
const BoardList = ({ name }) => {
  return (
    <div className="project-board-card">
      <div className="project-board-card-header">
        <p>{name}</p>
      </div>
      <div className="project-board-card-content">
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
      </div>
    </div>
  );
};

export default BoardList;
