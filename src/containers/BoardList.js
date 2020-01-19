import { connect } from "react-redux";
import BoardList from "layouts/Dashboard/ProjectBoard/BoardList";
import { bindActionCreators } from "redux";

const mapStateToProps = (state, props) => ({
  taskList: state.tasks.taskList.filter(({ status }) => status === props.id)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
