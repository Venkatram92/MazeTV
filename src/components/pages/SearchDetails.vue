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
    this.getSearchDetails(to.params.searchText);
    next();
  },
  async created() {
    this.getSearchDetails(this.searchText);
  },
  methods: {
    async getSearchDetails(searchText) {
      try {
        let showsResponse = await ShowsService.getSearchShows(searchText);
        this.shows = showsResponse.data;
      } catch (err) {
        console.log(err);
      }
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
