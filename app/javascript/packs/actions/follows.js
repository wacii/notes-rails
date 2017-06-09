function create(id) {
  const data = {
    follow: {
      followed_id: id,
    },
  };

  return {
    type: "CREATE_FOLLOW_REQUEST",
    id,
    meta: {
      offline: {
        effect: { method: "post", url: "/follows", data },
        commit: { type: "CREATE_FOLLOW_SUCCESS", id },
        rollback: { type: "CREATE_FOLLOW_FAILURE", id },
      },
    },
  };
}

export {
  create,
};
