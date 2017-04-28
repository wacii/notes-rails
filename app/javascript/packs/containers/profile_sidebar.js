import { connect } from "react-redux";
import ProfileSidebarComponent from "../components/profile_sidebar";

function mapStateToProps({ auth: { data }}) {
  const {
    id,
    username,
    followers_count: followers,
    followed_count: followed
  } = data;
  return { id, username, followers, followed };
}

export default connect(
  mapStateToProps,
  () => ({})
)(ProfileSidebarComponent);
