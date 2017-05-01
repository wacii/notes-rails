import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import HeaderComponent from "../components/header";

function mapStateToProps({ data: { currentUserId: userId } }) {
  return { userId };
}

export default withRouter(connect(
  mapStateToProps,
  () => ({})
)(HeaderComponent));
