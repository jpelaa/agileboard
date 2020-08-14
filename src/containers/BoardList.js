import { connect } from "react-redux";
import BoardList from "layouts/Dashboard/ProjectBoard/BoardList";
import { bindActionCreators } from "redux";
import { swapStatus, swapTasks } from "actions/status";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ swapStatus, swapTasks }, dispatch);
};

export default connect(null, mapDispatchToProps)(BoardList);
