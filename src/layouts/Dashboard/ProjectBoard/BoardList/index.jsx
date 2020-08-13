import React from "react";
import Card from "containers/Card";
import NewCard from "containers/NewCard";

const BoardList = ({ name, id, tasks, moveTask }) => {
  const onDragStart = (e, id) => {
    e.dataTransfer.setData("statusId", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, id) => {
    moveTask({
      statusId: id,
      taskId: e.dataTransfer.getData("dragIndex"),
    });
  };
  return (
    <div
      className="project-board-card"
      draggable={true}
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, id)}
    >
      <div className="project-board-card-header">
        <p>{name.replace("_", " ")}</p>
      </div>
      <div className="project-board-card-content">
        {tasks.map((data) => {
          return <Card key={data} id={data} />;
        })}
        <NewCard statusId={id} />
      </div>
    </div>
  );
};

export default React.memo(BoardList);
