import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetch as fetchNotes } from "../actions/notes";

function mapStateToProps({ auth: { data: { id: userId }} }) {
  return { userId };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNotes }, dispatch);
}

function currentUserNotes(WrappedComponent) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(class extends Component {
    componentDidMount() {
      const { fetchNotes, userId } = this.props;
      fetchNotes(userId);
    }

    render() {
      const otherProps = Object.assign({}, this.props);
      delete otherProps.fetchNotes;
      delete otherProps.userId;

      return <WrappedComponent {...otherProps} />;
    }
  });
}

export default currentUserNotes;
