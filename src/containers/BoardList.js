import { connect } from "react-redux";
import BoardList from "layouts/Dashboard/ProjectBoard/BoardList";
import { bindActionCreators } from "redux";
import { moveTask } from "actions/tasks";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ moveTask }, dispatch);
};

export default connect(null, mapDispatchToProps)(BoardList);
