<template>
  <div class="container">
    <span v-for="(show, index) in shows" :key="index">
      <div v-if="show.show.image">
        <figure class="figure mt-4">
          <img
            :src="show.show.image.medium"
            class="figure-img img-fluid rounded w-75"
          />
          <figcaption class="figure-caption text-center">
            {{ show.show.name }}
          </figcaption>
        </figure>
      </div>
    </span>
  </div>
</template>
<script>
import ShowsService from "@/services/ShowsService.js";
export default {
  data() {
    return {
      shows: []
    };
  },
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  async beforeRouteUpdate(to, from, next) {
    const showsResponse = await this.getSearchDetails(to.params.searchText);
    this.shows = showsResponse.data;
    next();
  },
  async created() {
    const showsResponse = await this.getSearchDetails(this.searchText);
    this.shows = showsResponse.data;
  },
  methods: {
    async getSearchDetails(searchText) {
      let showsResponse = await ShowsService.getSearchShows(searchText);
      console.log(showsResponse, searchText);
      return showsResponse;
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
}
</style>
