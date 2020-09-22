<template>
  <div>
    <maze-popular
      v-if="popularShows.length > 0"
      :popular-shows="popularShows"
    />
    <maze-genre v-if="showsByGenres.length > 0" :genresData="showsByGenres" />
  </div>
</template>
<script>
import { getShows } from "@/services/ShowsService";
import mazeGenre from "@/components/organisms/maze-genre";
import mazePopular from "@/components/organisms/maze-popular";

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
    // Get top rating shows
    getPopularShows(allShows) {
      const topRating = 9;
      const popularShows = allShows.filter(
        show => show.rating.average >= topRating
      );
      popularShows.sort((a, b) => b.rating.average - a.rating.average);
      return popularShows;
    },

    // Get all unique genres from all shows
    getUniqueGenres(allShows) {
      return [...new Set(allShows.map(show => show.genres).flat())].sort();
    },

    // Get shows per each genre and sort them according to rating
    getShowsByGenres(allShows) {
      const uniqueGeners = this.getUniqueGenres(allShows);
      const showsByGenres = uniqueGeners.map(genre => {
        const shows = allShows
          .filter(show => show.genres.includes(genre))
          .sort((a, b) => b.rating.average - a.rating.average);
        return { genre, shows };
      });
      return showsByGenres;
    }
  },

  async created() {
    const allShows = await getShows();
    this.popularShows = await this.getPopularShows(allShows);
    this.showsByGenres = await this.getShowsByGenres(allShows);
  }
};
</script>
