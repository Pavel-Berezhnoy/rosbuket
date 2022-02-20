import config from "./../config/main";
import instance from "./instanse";

const api = {
  get: async (pageAddress) => {
    const response = await instance.get(pageAddress);
    return response;
  },
  post: async (pageAddress, data) => {
    const response = await instance.post(pageAddress, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return response;
  },
  put: async (pageAddress, data) => {
    const response = await fetch(config.domain + pageAddress, {
      data
    }, {
      method: "PUT",
    })
    return response;
  },
  delete: async (pageAddress, id) => {
    const response = await instance.delete(pageAddress, {
      data: id
    }, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    return response;
  },
  postJson: async (pageAddress, data) => {
    const response = await instance.post(pageAddress,data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
    return response;
  },
  putJson: async (pageAddress, data) => {
    const response = await instance.put(pageAddress,data, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
    })
    return response;
  }
}
export { api };