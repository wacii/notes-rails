import { connect } from "react-redux";
import ProfileSidebarComponent from "../components/profile_sidebar";

function mapStateToProps({ auth: { username }}) {
  return { username };
}

export default connect(
  mapStateToProps,
  () => ({})
)(ProfileSidebarComponent);
