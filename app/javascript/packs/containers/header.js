import { connect } from "react-redux";
import HeaderComponent from "../components/header";

function mapStateToProps({ data: { currentUserId: userId } }) {
  return { userId };
}

export default connect(
  mapStateToProps,
  () => ({})
)(HeaderComponent);
