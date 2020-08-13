//users
const userActionTypes = {
  UPDATE_LOGIN_STATUS_BY_INDEX: "UPDATE_LOGIN_STATUS_BY_INDEX",
  UPDATE_USER_NAME: "UPDATE_USER_NAME",
  RESET_USERS: "RESET_USERS",
};

const taskActionTypes = {
  SWAP_TASKS: "SWAP_TASKS",
  MOVE_TASK: "MOVE_TASK",
  MOVE_TASK_COMPLETE: "MOVE_TASK_COMPLETE",
  ADD_NEW_TASK: "ADD_NEW_TASK",
};

const statusActionTypes = {
  ADD_NEW_STATUS: "ADD_NEW_STATUS",
  ADD_NEW_TASK_TO_STATUS: "ADD_NEW_TASK_TO_STATUS",
};

export default {
  ...userActionTypes,
  ...taskActionTypes,
  ...statusActionTypes,
};
