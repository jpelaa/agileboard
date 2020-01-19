import React from "react";
import StorySvg from "assets/svg/like.svg";
import TaskSvg from "assets/svg/check.svg";

import { TASK_TYPE } from "static";

const TaskIcon = ({ type }) => {
  return <img src={type === TASK_TYPE.STORY ? StorySvg : TaskSvg} alt={type} />;
};

export default TaskIcon;
