const initialState = [
  {
    roleId: 1,
    roleName: "SCRUM_MASTER"
  },
  {
    roleId: 2,
    roleName: "TEAM_MEMBER"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
