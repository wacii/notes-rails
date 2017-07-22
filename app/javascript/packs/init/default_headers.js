import axios from "axios";

function setup() {
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers.common["Accept"] = "application/json";
}

export default setup;
