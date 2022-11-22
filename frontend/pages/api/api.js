import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/auth/",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    "token"
  )}`;
  return config; 
});

export const LoginAPI = {
  PostLogin(dataPost) {
    return instance
      .post(`login/`, { ...dataPost })
      .then((response) => response.data);
  },
  Registration(dataPost) {
    console.log("Data in post", dataPost);
    return instance
      .post(`register/`, { ...dataPost })
      .then((response) => response.data);
  },
};
