import axios from "axios";
import router from "@/router/index.js";

const apiClient = axios.create({
  baseURL: `https://api.tvmaze.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.response.use(
  response => response.data,
  error => {
    let path = "/error";
    router.push(path);
    return Promise.reject(error);
  }
);

export default {
  // Api request for all shows
  getShows: () => apiClient.get("/shows"),

  // Api request for particular show id
  getShow: id =>
    apiClient.get(
      `/shows/${id}?embed[]=episodes&embed[]=seasons&embed[]=cast&embed[]=crew`
    ),

  // Api request to search shows
  getSearchShows: searchText => apiClient.get(`/search/shows?q=${searchText}`)
};
