import React from "react";
import { withRouter } from "react-router-dom";

const ProjectHeader = ({
  sprintName,
  history,
  hasAccessToComplete,
  moveTaskToComplete
}) => {
  const clickCompleteButton = () => {
    moveTaskToComplete();
    history.push("/completed");
  };
  return (
    <div className="project-header">
      <div className="project-header-title">
        <h1>{sprintName}</h1>
      </div>
      <div className="project-timeline">
        {hasAccessToComplete && (
          <button type="button" onClick={() => clickCompleteButton()}>
            complete
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(ProjectHeader);
