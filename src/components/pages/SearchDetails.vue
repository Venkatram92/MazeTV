<template>
  <div>Search Details {{ searchText }} {{ shows }}</div>
</template>
<script>
import ShowsService from "@/services/ShowsService.js";
export default {
  name: "search-details",
  data() {
    return {
      shows: {}
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
