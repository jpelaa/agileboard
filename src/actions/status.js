import ActionTypes from "action-types";
import { v4 as uuid } from "uuid";
import { addNewTask } from "./tasks";

export function addNewStatus(payload) {
  return {
    type: ActionTypes.ADD_NEW_STATUS,
    payload,
  };
}

export function addNewTaskFromStatus(payload) {
  return (dispatch) => {
    const taskId = uuid();
    const payloadForStatus = {
      statusId: payload.statusId,
      taskId,
    };
    dispatch(addNewTaskToStatus(payloadForStatus));
    const payloadForTask = {
      taskId,
      title: payload.title,
      description: "",
      comments: [],
    };
    dispatch(addNewTask(payloadForTask));
  };
}

export function addNewTaskToStatus(payload) {
  return {
    type: ActionTypes.ADD_NEW_TASK_TO_STATUS,
    payload,
  };
}
