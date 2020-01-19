//users
const UserActionTypes = {
  UPDATE_LOGIN_STATUS_BY_INDEX: "UPDATE_LOGIN_STATUS_BY_INDEX",
  UPDATE_USER_NAME: "UPDATE_USER_NAME",
  RESET_USERS: "RESET_USERS"
};

const TaskActionTypes = {
  SWAP_TASKS: "SWAP_TASKS"
};

export default {
  ...UserActionTypes,
  ...TaskActionTypes
};
