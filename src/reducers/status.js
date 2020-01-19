const initialState = [
  {
    statusId: 1,
    statusName: "TO_DO"
  },
  {
    statusId: 2,
    statusName: "IN_PROGRESS"
  },
  {
    statusId: 3,
    statusName: "TESTING"
  },
  {
    statusId: 4,
    statusName: "DONE"
  },
  {
    statusId: 5,
    statusName: "COMPLETED"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
