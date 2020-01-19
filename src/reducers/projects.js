const initialState = [
  {
    projectId: 1,
    projectName: "SCORE_CARD",
    epicList: [
      {
        id: 1,
        name: "user authentication"
      },
      {
        id: 2,
        name: "score card"
      }
    ]
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
