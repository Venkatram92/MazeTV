import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.tvmaze.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
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
