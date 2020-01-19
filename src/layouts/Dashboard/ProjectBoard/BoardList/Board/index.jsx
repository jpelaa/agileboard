import React from "react";
import TaskIcon from "./TaskIcon";

const Board = props => {
  const onDragStart = (e, dragIndex) => {
    e.dataTransfer.setData("dragIndex", dragIndex);
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  const onDrop = (e, dropIndex) => {
    props.swapTasks({
      dragTaskId: e.dataTransfer.getData("dragIndex"),
      dropTaskId: dropIndex
    });
    e.dataTransfer.clearData();
  };

  return (
    <div
      className="project-board-card-content-list"
      draggable={true}
      onDragStart={e => onDragStart(e, props.taskId)}
      onDragOver={e => onDragOver(e)}
      onDrop={e => onDrop(e, props.taskId)}
    >
      <div>
        <p>{props.description}</p>
      </div>
      <div className="project-board-card-content-list-footer">
        <div className="task-id">
          <TaskIcon />
          <p>{props.taskId || "SC-112"}</p>
        </div>
        <div className="assignee">{props.assignee || "ram"}</div>
      </div>
    </div>
  );
};

export default Board;
