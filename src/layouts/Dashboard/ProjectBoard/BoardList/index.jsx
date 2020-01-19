import React from "react";
import Board from "containers/Board";
const BoardList = ({ name, id, taskList, moveTask }) => {
  const onDragStart = (e, id) => {
    e.dataTransfer.setData("statusId", id);
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  const onDrop = (e, id) => {
    moveTask({
      statusId: id,
      taskId: e.dataTransfer.getData("dragIndex")
    });
  };
  return (
    <div
      className="project-board-card"
      draggable={true}
      onDragStart={e => onDragStart(e, id)}
      onDragOver={e => onDragOver(e)}
      onDrop={e => onDrop(e, id)}
    >
      <div className="project-board-card-header">
        <p>{name.replace("_", " ")}</p>
      </div>
      <div className="project-board-card-content">
        {taskList.map((data, index) => {
          return <Board key={`${name}-${index} `} {...data} index={index} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(BoardList);
