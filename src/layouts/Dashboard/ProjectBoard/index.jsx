import React from "react";
import BoardList from "./BoardList";

const ProjectBoard = () => {
  return (
    <div className="project-board">
      <BoardList name="todo" />
      <BoardList name="in-progress" />
      <BoardList name="testing" />
      <BoardList name="done" />
    </div>
  );
};

export default ProjectBoard;
