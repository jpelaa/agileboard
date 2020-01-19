import { TASK_TYPE } from "../static";
import actionTypes from "action-types";

const initialState = {
  sprintName: "Sprint 10",
  taskList: [
    {
      taskId: "SC-110",
      type: TASK_TYPE.STORY,
      epicId: 1,
      description:
        "clean up all the now-unnecessary code that we can eliminate with `EditableView` out of our lives",
      assignee: "prasath",
      storyPoint: 2,
      status: 1
    },
    {
      taskId: "SC-111",
      type: TASK_TYPE.TASK,
      epicId: 1,
      description:
        "(8) Clicking the collection beneath a board should filter by collection, not open collections pop-over",
      storyPoint: 1,
      assignee: "prasath",
      status: 2
    },
    {
      taskId: "SC-112",
      type: TASK_TYPE.STORY,
      epicId: 1,
      description:
        "(2) Client release provides `index` as direct file as well as _at least_`index.en-GB`",
      assignee: "prasath",
      storyPoint: 4,
      status: 2
    },
    {
      taskId: "SC-113",

      type: TASK_TYPE.STORY,
      epicId: 1,
      description:
        "(2) Client release provides `index` as direct file as well as _at least_`index.en-GB`",
      assignee: "prasath",
      storyPoint: 4,
      status: 3
    },
    {
      taskId: "SC-114",

      type: TASK_TYPE.STORY,
      epicId: 1,
      description:
        "(2) Client release provides `index` as direct file as well as _at least_`index.en-GB`",
      assignee: "prasath",
      storyPoint: 4,
      status: 4
    },
    {
      taskId: "SC-115",

      type: TASK_TYPE.STORY,
      epicId: 1,
      description:
        "(2) Client release provides `index` as direct file as well as _at least_`index.en-GB`",
      assignee: "prasath",
      storyPoint: 4,
      status: 1
    },
    {
      taskId: "SC-116",

      type: TASK_TYPE.STORY,
      epicId: 1,
      description:
        "(2) Client release provides `index` as direct file as well as _at least_`index.en-GB`",
      assignee: "manoj",
      storyPoint: 4,
      status: 2
    },
    {
      taskId: "SC-117",

      type: TASK_TYPE.STORY,
      epicId: 1,
      description:
        "(2) Client release provides `index` as direct file as well as _at least_`index.en-GB`",
      assignee: "manoj",
      storyPoint: 4,
      status: 4
    },
    {
      taskId: "SC-118",
      type: TASK_TYPE.STORY,
      epicId: 1,
      description:
        "(2) Client release provides `index` as direct file as well as _at least_`index.en-GB`",
      assignee: "manoj",
      storyPoint: 4,
      status: 4
    }
  ]
};

export default function(state = initialState, action) {
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
        taskList: [...newTaskList]
      };
    case actionTypes.MOVE_TASK:
      const newTaskList1 = [...state.taskList];
      const changeTaskIndex = newTaskList1.findIndex(
        ({ taskId }) => taskId === action.payload.taskId
      );
      newTaskList1[changeTaskIndex].status = action.payload.statusId;
      return {
        ...state,
        taskList: [...newTaskList1]
      };
      case actionTypes.MOVE_TASK_COMPLETE:
        return {
          ...state,
          taskList: [...state.taskList.map(data => ({ ...data, status: 5 }))]
        };
    default:
      return state;
  }
}
