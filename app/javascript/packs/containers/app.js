import { connect } from "react-redux";
import AppComponent from "../components/app";

function mapStateToProps({ data: { currentUserId, users }}) {
  const user = users[currentUserId];
  return { signedIn: !!user };
}

export default connect(
  mapStateToProps,
  () => ({})
)(AppComponent);
