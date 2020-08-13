import actionTypes from "action-types";

const initialState = {
  allIds: [],
  byId: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SWAP_TASKS:
      const newTaskList = [...state.taskList];
      const dropIndex = newTaskList.findIndex(
        ({ taskId }) => taskId === action.payload.dropTaskId
      );
      const dragIndex = newTaskList.findIndex(
        ({ taskId }) => taskId === action.payload.dragTaskId
      );

      const temp = { ...newTaskList[dragIndex] };
      newTaskList[dragIndex] = { ...newTaskList[dropIndex] };
      newTaskList[dropIndex] = temp;
      return {
        ...state,
        taskList: [...newTaskList],
      };
    case actionTypes.MOVE_TASK:
      const newTaskList1 = [...state.taskList];
      const changeTaskIndex = newTaskList1.findIndex(
        ({ taskId }) => taskId === action.payload.taskId
      );
      newTaskList1[changeTaskIndex].status = action.payload.statusId;
      return {
        ...state,
        taskList: [...newTaskList1],
      };
    case actionTypes.MOVE_TASK_COMPLETE:
      return {
        ...state,
        taskList: [...state.taskList.map((data) => ({ ...data, status: 5 }))],
      };
    case actionTypes.ADD_NEW_TASK:
      return {
        ...state,
        allIds: [...state.allIds, action.payload.taskId],
        byId: {
          ...state.byId,
          [action.payload.taskId]: {
            id: action.payload.taskId,
            title: action.payload.title,
          },
        },
      };
    default:
      return state;
  }
}
