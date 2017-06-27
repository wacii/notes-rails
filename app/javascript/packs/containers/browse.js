import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BrowseComponent from "../components/browse";
import fetchOnMount from "./fetch_on_mount";
import { fetchLatest as fetch } from "../actions/notes";

function mapStateToProps(state) {
  const { requests: { fetchLatestNotes: { loading, error } } } = state;
  const { data: { latestNotes: notes } } = state;
  return { notes, loading, error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchOnMount(BrowseComponent));
