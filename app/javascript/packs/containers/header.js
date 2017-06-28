import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom"
import HeaderComponent from "../components/header";
import { entitiesSelector } from "../selectors";

function mapStateToProps(state) {
  return {
    userId: entitiesSelector("currentUserId")(state),
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(HeaderComponent);
