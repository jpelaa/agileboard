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
      assignee: "prasath",
      storyPoint: 1,
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
      console.log(
        action.payload.dragTaskId,
        action.payload.dropTaskId,
        " drap and drop in reducer"
      );
      const taskList = [...state.taskList];
      const dropIndex = taskList.findIndex(
        ({ taskId }) => taskId === action.payload.dropTaskId
      );
      const dragIndex = taskList.findIndex(
        ({ taskId }) => taskId === action.payload.dragTaskId
      );
      console.log(dragIndex, dropIndex, "dragIndex, dropIndex in reducer");

      const temp = { ...taskList[dragIndex] };
      console.log(temp, " dragValue");
      console.log(taskList[dropIndex], " dropValue");
      taskList[dragIndex] = { ...taskList[dropIndex] };
      taskList[dropIndex] = temp;
      console.log(taskList[dragIndex], taskList[dropIndex], "after swap  ");
      console.log(taskList);
      return {
        state,
        taskList: [...taskList]
      };
    default:
      return state;
  }
}
