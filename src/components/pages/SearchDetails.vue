<template>
  <div class="container d-flex flex-row flex-wrap" v-if="shows.length > 0">
    <span v-for="(show, index) in shows" :key="index">
      <div v-if="show.show.image">
        <figure class="figure mt-4">
          <router-link
            :to="{
              name: 'show-details',
              params: { id: show.show.id, showData: show.show }
            }"
          >
            <img
              :src="show.show.image.medium"
              class="figure-img img-fluid rounded w-75"
            />
          </router-link>
          <figcaption class="figure-caption">
            {{ show.show.name }}
          </figcaption>
        </figure>
      </div>
    </span>
  </div>
  <div v-else>
    <h2 class="noshows d-flex justify-content-center align-items-center">
      No shows found
    </h2>
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
      return showsResponse;
    }
  }
};
</script>
<style scoped>
.noshows {
  height: 85vh;
  width: 100%;
}
</style>
