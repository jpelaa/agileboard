import { connect } from "react-redux";
import ProjectHeader from "layouts/Dashboard/ProjectHeader";
import { bindActionCreators } from "redux";
import { moveTaskToComplete } from "actions/tasks";

const mapStateToProps = state => ({
  sprintName: state.tasks.sprintName,
  hasAccessToComplete: checkAccess(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ moveTaskToComplete }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHeader);

const checkAccess = state => {
  const role = state.users.userList.find(
    ({ username }) => username === state.users.currentUser
  ).role;
  return role !== 1 ? false : true;
};
