import { connect } from "react-redux";
import AppComponent from "../components/app";

function mapStateToProps({ auth: { data }}) {
  return { signedIn: data };
}

export default connect(
  mapStateToProps,
  () => ({})
)(AppComponent);
