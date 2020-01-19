import ActionTypes from "action-types";

export function swapTasks(payload) {
  return {
    type: ActionTypes.SWAP_TASKS,
    payload
  };
}
