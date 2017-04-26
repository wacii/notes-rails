import { connect } from "react-redux";
import AppComponent from "../components/app";

function mapStateToProps({ auth: { username }}) {
  return { signedIn: username !== "" };
}

export default connect(
  mapStateToProps,
  () => ({})
)(AppComponent);
