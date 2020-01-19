import ActionTypes from "action-types";

export function swapTasks(payload) {
  return {
    type: ActionTypes.SWAP_TASKS,
    payload
  };
}

export function moveTask(payload) {
  return {
    type: ActionTypes.MOVE_TASK,
    payload
  };
}

export function moveTaskToComplete() {
  return {
    type: ActionTypes.MOVE_TASK_COMPLETE
  };
}
