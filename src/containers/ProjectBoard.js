import { connect } from "react-redux";
import ProjectBoard from "layouts/Dashboard/ProjectBoard";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  list: state.status.allIds.map((data) => state.status.byId[data]),
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);
