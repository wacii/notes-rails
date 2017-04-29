import { connect } from "react-redux";
import ProfileSidebarComponent from "../components/profile_sidebar";

function mapStateToProps({ data: { currentUserId, users }}) {
  const user = users[currentUserId];
  const {
    id,
    username,
    followers_count: followers,
    followed_count: followed
  } = user;
  return { id, username, followers, followed };
}

export default connect(
  mapStateToProps,
  () => ({})
)(ProfileSidebarComponent);
