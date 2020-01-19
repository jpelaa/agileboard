import React from "react";
import StorySvg from "assets/svg/like.svg";

const TaskIcon = ({ type }) => {
  return <img src={StorySvg} alt={type} />;
};

export default TaskIcon;
