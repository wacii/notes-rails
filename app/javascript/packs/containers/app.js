import { connect } from "react-redux";
import AppComponent from "../components/app";

function mapStateToProps({ auth: { signedIn }}) {
  return { signedIn };
}

export default connect(
  mapStateToProps,
  () => ({})
)(AppComponent);
