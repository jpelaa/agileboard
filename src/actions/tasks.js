import ActionTypes from "action-types";
import { v4 as uuid } from "uuid";
import { addNewComments } from "actions/comments";

export function swapTasks(payload) {
  return {
    type: ActionTypes.SWAP_TASKS,
    payload,
  };
}

export function moveTask(payload) {
  return {
    type: ActionTypes.MOVE_TASK,
    payload,
  };
}

export function moveTaskToComplete() {
  return {
    type: ActionTypes.MOVE_TASK_COMPLETE,
  };
}

export function addNewTask(payload) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload,
  };
}

export function updateDesc(payload) {
  return {
    type: ActionTypes.UPDATE_DESC,
    payload,
  };
}

export function addCommentsFromTask(payload) {
  return (dispatch) => {
    console.log("asdasd", payload);
    const commentId = uuid();
    const payloadForTask = {
      taskId: payload.taskId,
      commentId,
    };
    dispatch(addNewCommentsToTask(payloadForTask));
    const payloadForComment = {
      id: commentId,
      description: payload.description,
    };
    dispatch(addNewComments(payloadForComment));
  };
}

export function addNewCommentsToTask(payload) {
  return {
    type: ActionTypes.ADD_NEW_COMMENTS_TO_TASK,
    payload,
  };
}
