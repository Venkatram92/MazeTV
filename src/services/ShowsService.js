import axios from "axios";
import router from "@/router/index.js";

const apiClient = axios.create({
  baseURL: `https://api.tvmaze.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.response.use(null, error => {
  let path = "/error";
  router.push(path);
  return Promise.reject(error);
});

export default {
  getShows() {
    return apiClient.get("/shows");
  },
  getShow(id) {
    return apiClient.get(`/shows/${id}`);
  },
  getSearchShows(searchText) {
    return apiClient.get(`/search/shows?q=${searchText}`);
  },
  getShowImages(id) {
    return apiClient.get(`/shows/${id}/images`);
  },
  getShowCast(id) {
    return apiClient.get(`shows/${id}/cast`);
  },
  getShowCrew(id) {
    return apiClient.get(`shows/${id}/crew`);
  }
};
