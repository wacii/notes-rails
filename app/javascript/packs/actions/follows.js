import axios from "axios";

function create(id) {
  return dispatch => {
    dispatch({ type: "CREATE_FOLLOW_REQUEST" });

    const data = {
      follow: {
        followed_id: id,
      },
    };

    const promise = axios({
      url: "/follows",
      method: "post",
      data,
    });

    promise.then(_response => {
      dispatch({ type: "CREATE_FOLLOW_SUCCESS" });
    });

    promise.catch(({ data }) => {
      dispatch({ type: "CREATE_FOLLOW_FAILURE", data });
    });
  }
}

export {
  create,
};
