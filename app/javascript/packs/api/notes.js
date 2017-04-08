import request from "./cancellable_request";

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
  create,
  destroy,
  update,
};
