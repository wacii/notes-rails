import { connect } from "react-redux";
import BrowseSidebarComponent from "../components/browse_sidebar";

function mapStateToProps({ latestNotes: { data: notes } }) {
  return { notes };
}

export default connect(
  mapStateToProps,
  () => ({})
)(BrowseSidebarComponent);
