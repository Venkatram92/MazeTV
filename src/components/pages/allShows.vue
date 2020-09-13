<template>
  <div v-if="showsByGenres.length > 0">
    <div v-for="(genre, index) in showsByGenres" :key="index">
      <maze-genre :genreData="genre" />
    </div>
  </div>
</template>

<script>
import mazeGenre from "@/components/organisms/maze-genre.vue";
import { showsMixin } from "@/mixins/showsMixin.js";

export default {
  name: "genres",
  mixins: [showsMixin],
  components: {
    mazeGenre
  },
  data() {
    return {
      showsByGenres: []
    };
  },
  async created() {
    this.showsByGenres = await this.getShowsByGenres();
  }
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
img:hover {
  transition: 0.3s;
  box-shadow: 10px 10px 5px #888888;
}
</style>
