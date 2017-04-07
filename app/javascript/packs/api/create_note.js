import request from "./cancellable_request";

function createNote(text) {
  const data = {
    note: {
      text,
    },
  };

  return request({
    url: "/notes",
    method: "POST",
    data,
  });
}

export default createNote;
