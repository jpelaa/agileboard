import React from "react";
import Header from "./Header";
import ProjectHeader from "./ProjectHeader";
import ProjectBoard from "./ProjectBoard";

export default () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <ProjectHeader />
        <ProjectBoard />
      </div>
    </>
  );
};
