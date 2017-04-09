import request from "./cancellable_request";

function index() {
  return request({
    url: "/notes",
    method: "get",
  });
}

function create(text) {
  const data = {
    note: {
      text,
    },
  };

  return request({
    url: "/notes",
    method: "post",
    data,
  });
}

function destroy(id) {
  return request({
    url: `/notes/${id}`,
    method: "delete",
  });
}

function update(id, attributes) {
  const data = { note: attributes };

  return request({
    url: `/notes/${id}`,
    method: "patch",
    data,
  });
}

export {
  index,
  create,
  destroy,
  update,
};
