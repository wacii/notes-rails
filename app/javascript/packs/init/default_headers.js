import axios from "axios";

function setup() {
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers.common["Accept"] = "application/json";

  const token = document.querySelector("meta[name='csrf-token']").content;
  axios.defaults.headers.common["X-CSRF-Token"] = token;
}

export default setup;
