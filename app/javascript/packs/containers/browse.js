import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BrowseComponent from "../components/browse";
import fetchOnMount from "./fetch_on_mount";
import { fetchLatest as fetch } from "../actions/notes";
import { entitiesSelector, requestsSelector } from "../selectors";

function mapStateToProps(state) {
  return Object.assign({}, requestsSelector("fetchLatestNotes")(state), {
    notes: entitiesSelector("latestNotes")(state)
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchOnMount(BrowseComponent));
