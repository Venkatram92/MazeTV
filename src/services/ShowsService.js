import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://api.tvmaze.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getShows() {
    return apiClient.get("/shows");
  },
  getEpisodes(id) {
    return apiClient.get(`/shows/${id}/episodes`);
  },
  getSearchShows(searchText) {
    return apiClient.get(`/search/shows?q=${searchText}`);
  },
  getShowImages(id) {
    return apiClient.get(`/shows/${id}/images`);
  }
};
