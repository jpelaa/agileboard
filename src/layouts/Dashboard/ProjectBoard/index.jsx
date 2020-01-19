import React from "react";
import BoardList from "containers/BoardList";

const ProjectBoard = ({ statusList }) => {
  return (
    <div className="project-board">
      {statusList.map(({ statusId, statusName }) => {
        return (
          <BoardList
            key={`Status-${statusId}`}
            id={statusId}
            name={statusName}
          />
        );
      })}
    </div>
  );
};

export default ProjectBoard;
