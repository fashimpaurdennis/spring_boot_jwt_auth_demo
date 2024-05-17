import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080/auth",
});

const register = async (newUser) => {
  return http
    .post("/register", newUser)
    .then((res) => res?.data)
    .catch((error) => {
      throw error;
    });
};

const login = async (formData) => {
  const { email, password } = formData;

  return http
    .post("/login", { email, password })
    .then((res) => res?.data)
    .catch((error) => {
      throw error;
    });
};

export { register, login };
