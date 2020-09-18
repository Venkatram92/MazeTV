<template>
  <div class="container" v-if="shows.length > 0">
    <div class="row">
      <span class="col-md-2 col-6" v-for="(show, index) in shows" :key="index">
        <div>
          <figure class="figure mt-4">
            <router-link
              :to="{
                name: 'show-details',
                params: { id: show.show.id, showData: show.show }
              }"
            >
              <img
                v-if="show.show.image"
                :src="show.show.image.medium"
                class="figure-img img-fluid rounded w-100"
              />
              <img
                v-else
                :src="require('@/assets/images/default-image.png')"
                class="figure-img img-fluid rounded w-100"
              />
            </router-link>
            <figcaption class="text-light text-center">
              {{ show.show.name }}
            </figcaption>
          </figure>
        </div>
      </span>
    </div>
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
      shows: [],
      defaultImage: "@/assets/images/default-image.png"
    };
  },
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  methods: {
    async getSearchDetails(searchText) {
      try {
        this.shows = await ShowsService.getSearchShows(searchText);
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getSearchDetails(this.searchText);
  },
  beforeRouteUpdate(to, from, next) {
    this.getSearchDetails(to.params.searchText);
    next();
  }
};
</script>
<style scoped>
.noshows {
  height: 85vh;
}
</style>
