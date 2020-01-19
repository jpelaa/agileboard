import ActionTypes from "action-types";

const initialState = {
  currentUser: "",
  userList: [
    {
      username: "karthick",
      nickname: "kk",
      isLoggedIn: false,
      role: 1, // refer to roles
      password: "123",
      project: 1 // refer to projects
    },
    {
      username: "prasath",
      nickname: "pr",
      isLoggedIn: false,
      role: 2,
      password: "123",
      project: 1
    },
    {
      username: "manoj",
      nickname: "ms",
      isLoggedIn: false,
      role: 2,
      password: "123",
      project: 1
    },
    {
      username: "siva",
      nickname: "ss",
      isLoggedIn: false,
      role: 2,
      password: "123",
      project: 1
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_LOGIN_STATUS_BY_INDEX:
      const userList = [...state.userList];
      userList[action.payload].isLoggedIn = true;
      return { ...state, userList: [...userList] };
    case ActionTypes.UPDATE_USER_NAME:
      return { ...state, currentUser: action.payload };
    case ActionTypes.RESET_USERS:
      return { ...initialState };
    default:
      return state;
  }
}
