import axios, { CancelToken } from "axios";

// TODO: id => userId?

function fetch(id) {
  return {
    type: "FETCH_NOTES_REQUEST",
    meta: {
      offline: {
        effect: { method: "get", url: `/users/${id}/notes` },
        commit: { type: "FETCH_NOTES_SUCCESS", id },
        rollback: { type: "FETCH_NOTES_FAILURE", id },
      },
    },
  };
}

function fetchLatest() {
  return {
    type: "FETCH_LATEST_NOTES_REQUEST",
    meta: {
      offline: {
        effect: { method: "get", url: "/notes/latest" },
        commit: { type: "FETCH_LATEST_NOTES_SUCCESS" },
        rollback: { type: "FETCH_LATEST_NOTES_FAILURE" },
      }
    }
  };
}

function create(attributes) {
  const data = {
    note: attributes,
  };

  return {
    type: "CREATE_NOTE_REQUEST",
    meta: {
      offline: {
        effect: { method: "post", url: "/notes", data },
        commit: { type: "CREATE_NOTE_SUCCESS" },
        rollback: { type: "CREATE_NOTE_FAILURE" },
      },
    },
  };
}

// FIXME: resolve dependency on state and currentUserId
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

// FIXME: remove dependency on getState
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
