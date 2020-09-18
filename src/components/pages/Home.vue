<template>
  <div v-if="popularShows.length > 0 && showsByGenres.length > 0">
    <maze-popular :popular-shows="popularShows" />
    <maze-genre :genresData="showsByGenres" />
  </div>
</template>
<script>
import ShowsService from "@/services/ShowsService.js";
import mazeGenre from "@/components/organisms/maze-genre.vue";
import mazePopular from "@/components/organisms/maze-popular.vue";

export default {
  components: {
    mazeGenre,
    mazePopular
  },
  data() {
    return {
      popularShows: [],
      showsByGenres: []
    };
  },
  methods: {
    // Get all maze tv shows
    getShows() {
      try {
        return ShowsService.getShows();
      } catch {
        return;
      }
    },

    // Get top rating shows
    async getPopularShows(allShows) {
      const topRating = 9;
      const popularShows = allShows.filter(
        show => show.rating.average >= topRating
      );
      popularShows.sort((a, b) => b.rating.average - a.rating.average);
      return popularShows;
    },

    // Get the unique genres from all shows
    getUniqueGenres(allShows) {
      const data = [
        ...new Set([].concat(...allShows.map(show => show.genres)))
      ].sort();
      return data;
    },

    // Get shows per each genre and sort them according to rating
    async getShowsByGenres(allShows) {
      let showsByGenres = [];
      const uniqueGeners = this.getUniqueGenres(allShows);
      uniqueGeners.forEach(genre => {
        const shows = allShows.filter(show => show.genres.includes(genre));
        shows.sort((a, b) => b.rating.average - a.rating.average);
        const showsData = {
          genre,
          shows
        };
        showsByGenres.push(showsData);
      });
      return showsByGenres;
    }
  },
  async created() {
    const allShows = await ShowsService.getShows();
    this.popularShows = await this.getPopularShows(allShows);
    this.showsByGenres = await this.getShowsByGenres(allShows);
  }
};
</script>
