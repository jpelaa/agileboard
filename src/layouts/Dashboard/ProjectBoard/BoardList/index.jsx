import React from "react";
import Board from "containers/Board";
const BoardList = ({ name, id, taskList }) => {
  return (
    <div className="project-board-card">
      <div className="project-board-card-header">
        <p>{name.replace("_", " ")}</p>
      </div>
      <div className="project-board-card-content" draggable={true}>
        {taskList.map((data, index) => {
          return <Board key={`${name}-${index} `} {...data} index={index} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(BoardList);
