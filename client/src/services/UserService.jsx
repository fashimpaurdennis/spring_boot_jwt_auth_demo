import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/user",
});

const getUserInfo = (token) => {
  return http
    .get("/info", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res?.data)
    .catch((error) => {
      throw error;
    });
};

export { getUserInfo };
