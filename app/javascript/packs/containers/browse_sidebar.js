import { connect } from "react-redux";
import BrowseSidebarComponent from "../components/browse_sidebar";

// FIXME: fetch latest notes actively

function mapStateToProps({ data: { latestNotes: notes } }) {
  return { notes };
}

export default connect(
  mapStateToProps,
  () => ({})
)(BrowseSidebarComponent);
