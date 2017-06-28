import { connect } from "react-redux";
import AppComponent from "../components/app";
import { currentUserSelector } from "../selectors";

function mapStateToProps(state) {
  return {
    signedIn: !!currentUserSelector(state),
  };
}

export default connect(mapStateToProps)(AppComponent);
