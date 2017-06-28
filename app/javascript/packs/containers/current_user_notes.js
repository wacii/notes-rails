import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetch as fetchNotes } from "../actions/notes";
import { entitiesSelector } from "../selectors";

function mapStateToProps(state) {
  return {
    userId: entitiesSelector("currentUserId")(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNotes }, dispatch);
}

// TODO: extract wrapper class

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
