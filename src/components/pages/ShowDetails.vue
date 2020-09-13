<template>
  <div v-if="showDetails">
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-lg-4">
          <img class="img-fluid w-75 rounded" :src="showDetails.image.medium" />
          <h3 class="pt-3">{{ showDetails.name }}</h3>
        </div>
        <div class="col-lg-8">
          <div class="d-flex mb-4">
            Rating: {{ showDetails.rating.average }}/10
          </div>
          <div class="d-flex mb-4">Runtime: {{ showDetails.runtime }} Mins</div>
          <div class="d-flex mb-4">Language: {{ showDetails.language }}</div>
          <div class="d-flex mb-4">
            Premier date: {{ showDetails.premiered }}
          </div>
          <div class="d-flex mb-4">Genres: {{ showDetails.genres }}</div>
          <h3 class="d-flex mb-4">THE PLOT</h3>
          <p class="text-justify" v-html="showDetails.summary"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShowsService from "@/services/ShowsService.js";
export default {
  props: {
    showData: {
      type: Object
    }
  },
  data() {
    return {
      showDetails: this.showData
    };
  },
  async created() {
    if (!this.showDetails) {
      let showsResponse = await ShowsService.getShow(this.$route.params.id);
      this.showDetails = showsResponse.data;
    }
  }
};
</script>
