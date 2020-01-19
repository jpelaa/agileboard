import { connect } from "react-redux";
import Board from "layouts/Dashboard/ProjectBoard/BoardList/Board";
import { bindActionCreators } from "redux";
import { swapTasks } from "actions/tasks";

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      swapTasks
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Board);
