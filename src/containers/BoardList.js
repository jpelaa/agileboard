import { connect } from "react-redux";
import BoardList from "layouts/Dashboard/ProjectBoard/BoardList";
import { bindActionCreators } from "redux";
import { moveTask } from "actions/tasks";

// const mapStateToProps = (state, props) => ({
//   taskList:
// });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ moveTask }, dispatch);
};

export default connect(null, mapDispatchToProps)(BoardList);

const getTaskBasedOnRole = (state, props) => {
  const role = state.users.userList.find(
    ({ username, role }) => username === state.users.currentUser
  ).role;
  if (role === 1) {
    return state.tasks.taskList.filter(({ status }) => status === props.id);
  } else {
    return state.tasks.taskList.filter(
      ({ status, assignee }) =>
        status === props.id && assignee === state.users.currentUser
    );
  }
};
