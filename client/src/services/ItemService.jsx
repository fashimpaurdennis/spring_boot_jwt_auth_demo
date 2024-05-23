import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/item",
});

const create = async (formData, token) => {
  return http
    .post("/new", formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res?.data)
    .catch((error) => {
      throw error;
    });
};

export { create };
