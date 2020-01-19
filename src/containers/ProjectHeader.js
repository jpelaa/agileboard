import { connect } from "react-redux";
import ProjectHeader from "layouts/Dashboard/ProjectHeader";
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({
  sprintName: state.tasks.sprintName
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHeader);
