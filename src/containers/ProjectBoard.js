import { connect } from "react-redux";
import ProjectBoard from "layouts/Dashboard/ProjectBoard";
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({
  statusList: state.status.filter(
    ({ statusName }) => "COMPLETED" !== statusName
  )
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);
