import axios from "axios";

function setup(store) {
  const preloadUser = document.getElementById("user");
  const currentUser = preloadUser && JSON.parse(preloadUser.dataset.user);

  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.status == 401)
        store.dispatch({ type: "SIGN_OUT_REQUEST" });
      return Promise.reject(error)
    }
  )

  if (currentUser)
    store.dispatch({
      type: "SIGN_IN_SUCCESS",
      data: currentUser
    });
  else
    store.dispatch({
      type: "SIGN_OUT_REQUEST",
    });
}

export default setup;
