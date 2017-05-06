import axios, { CancelToken } from "axios";

// TODO: id => userId?

function fetch(id) {
  return dispatch => {
    dispatch({ type: "FETCH_NOTES_REQUEST", id });

    const promise = axios({
      url: `/users/${id}/notes`,
      method: "get",
    });

    promise.then(({ data }) => {
      data.forEach(note => note.review_after = new Date(note.review_after));

      dispatch({
        type: "FETCH_NOTES_SUCCESS",
        id,
        data,
      });
    });

    promise.catch(({ data }) => {
      dispatch({
        type: "FETCH_NOTES_FAILURE",
        id,
        data,
      });
    });
  }
}

function fetchLatest() {
  return dispatch => {
    dispatch({ type: "FETCH_LATEST_NOTES_REQUEST" });

    const promise = axios({
      url: `/notes/latest`,
      method: "get",
    });

    promise.then(({ data }) => {
      data.forEach(note => note.review_after = new Date(note.review_after));

      dispatch({
        type: "FETCH_LATEST_NOTES_SUCCESS",
        data,
      });
    });

    promise.catch(({ data }) => {
      dispatch({
        type: "FETCH_LATEST_NOTES_FAILURE",
        data,
      });
    });
  }
}

function create(attributes) {
  return dispatch => {
    const data = {
      note: attributes,
    };

    return axios({
      url: "/notes",
      method: "post",
      data,
    }).then(({ data }) => {
      dispatch({ type: "CREATE_NOTE", data });
    });
  }
}

function destroy(id) {
  return (dispatch, getState) => {
    dispatch({
      type: "DESTROY_NOTE_REQUEST",
      id,
      userId: getState().data.currentUserId
    });

    const promise = axios({
      url: `/notes/${id}`,
      method: "delete",
    });

    promise.then(({ data }) => {
      dispatch({ type: "DESTROY_NOTE_SUCCESS", data });
    });

    promise.catch(({ data }) => {
      dispatch({
        type: "DESTROY_NOTE_FAILURE",
        data,
      });
    });
  }
}

function update(id, attributes) {
  return (dispatch, getState) => {
    const { notes: { data: notes } } = getState();
    const note = notes.find(note => note.id === id);

    dispatch({
      type: "UPDATE_NOTE_REQUEST",
      data: attributes,
      id,
    });

    const data = {
      note: Object.assign({}, attributes),
    };

    const promise = axios({
      url: `/notes/${id}`,
      method: "patch",
      data,
    });

    promise.then(({ data }) => {
      dispatch({
        type: "UPDATE_NOTE_SUCCESS",
        data,
      });
    });

    promise.catch(({ data }) => {
      dispatch({
        type: "UPDATE_NOTE_FAILURE",
        data,
      });
    });
  }
}

function keep(id, currentInterval) {
  const interval = currentInterval + 1;
  const reviewAfter = new Date;
  reviewAfter.setDate(reviewAfter.getDate() + interval);

  const attributes = {
    interval,
    review_after: reviewAfter,
  };

  return update(id, attributes);
}

export {
  fetch,
  fetchLatest,
  create,
  destroy,
  update,
  keep,
};
