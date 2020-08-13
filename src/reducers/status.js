import actionTypes from "action-types";
import { v4 as uuid } from "uuid";

const initialState = {
  allIds: [],
  byId: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_STATUS:
      const id = uuid();
      return {
        ...state,
        allIds: [...state.allIds, id],
        byId: {
          ...state.byId,
          [id]: {
            id,
            title: action.payload,
            tasks: [],
          },
        },
      };
    case actionTypes.ADD_NEW_TASK_TO_STATUS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.statusId]: {
            ...state.byId[action.payload.statusId],
            tasks: [
              ...state.byId[action.payload.statusId].tasks,
              action.payload.taskId,
            ],
          },
        },
      };

    default:
      return state;
  }
}
