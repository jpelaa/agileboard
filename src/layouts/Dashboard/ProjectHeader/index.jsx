import React from "react";

const ProjectHeader = ({ sprintName, history }) => {
  return (
    <div className="project-header">
      <div className="project-header-title">
        <h1>{sprintName}</h1>
      </div>
      <div className="project-timeline">
        <button type="button" onClick={() => history.push("/completed")}>
          complete
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;
