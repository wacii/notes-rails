function fetch(userId) {
  return {
    type: "FETCH_NOTES_REQUEST",
    meta: {
      offline: {
        effect: { method: "get", url: `/users/${userId}/notes` },
        commit: { type: "FETCH_NOTES_SUCCESS", userId },
        rollback: { type: "FETCH_NOTES_FAILURE", userId },
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

function destroy(id) {
  return {
    type: "DESTROY_NOTE_REQUEST",
    id,
    meta: {
      offline: {
        effect: { method: "delete", url: `/notes/${id}` },
        commit: { type: "DESTROY_NOTE_SUCCESS", id },
        rollback: { type: "DESTROY_NOTE_FAILURE", id },
      },
    },
  };
}

function update(id, attributes) {
  const data = {
    note: Object.assign({}, attributes),
  };

  return {
    type: "UPDATE_NOTE_REQUEST",
    id,
    attributes,
    meta: {
      offline: {
        effect: { method: "patch", url: `/notes/${id}`, data },
        commit: { type: "UPDATE_NOTE_SUCCESS", id, attributes },
        rollback: { type: "UPDATE_NOTE_FAILURE", id, attributes },
      }
    }
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
