import { combineReducers } from "redux";
import users from "./users";
import projects from "./projects";
import roles from "./roles";
import status from "./status";
import tasks from "./tasks";
import comments from "./comments";

export default combineReducers({
  users,
  projects,
  roles,
  status,
  tasks,
  comments,
});
