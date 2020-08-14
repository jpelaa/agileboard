import { connect } from "react-redux";
import ProjectHeader from "layouts/Dashboard/ProjectHeader";

const mapStateToProps = (state) => ({
  sprintName: state.tasks.sprintName,
  hasAccessToComplete: checkAccess(state),
});

export default connect(mapStateToProps, null)(ProjectHeader);

const checkAccess = (state) => {
  const role = state.users.userList.find(
    ({ username }) => username === state.users.currentUser
  ).role;
  return role !== 1 ? false : true;
};
