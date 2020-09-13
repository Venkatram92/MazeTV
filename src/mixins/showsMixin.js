import ShowsService from "@/services/ShowsService.js";

export const showsMixin = {
  methods: {
    async getShows() {
      let showsResponse = await ShowsService.getShows();
      return showsResponse.data;
    },
    getUniqueGenres(allShows) {
      const data = [
        ...new Set([].concat(...allShows.map(show => show.genres)))
      ].sort();
      return data;
    },
    async getShowsByGenres() {
      let showsByGenres = [];
      const allShows = await this.getShows();
      const uniqueGeners = this.getUniqueGenres(allShows);
      uniqueGeners.forEach(genre => {
        const shows = allShows.filter(show => show.genres.includes(genre));
        const showsData = {
          genre,
          shows
        };
        showsByGenres.push(showsData);
      });
      return showsByGenres;
    },
    async getPopularShows() {
      const topRating = 9;
      const allShows = await this.getShows();
      const popularShows = allShows.filter(
        show => show.rating.average > topRating
      );
      return popularShows;
    }
  }
};
