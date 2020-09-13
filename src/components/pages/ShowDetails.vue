<template>
  <div>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-lg-4">
          <img class="img-fluid w-75 rounded" :src="fullDetails.image.medium" />
          <h3 class="pt-3">{{ fullDetails.name }}</h3>
        </div>
        <div class="col-lg-8">
          <div class="d-flex mb-4">
            Rating: {{ fullDetails.rating.average }}/10
          </div>
          <div class="d-flex mb-4">Runtime: {{ fullDetails.runtime }} Mins</div>
          <div class="d-flex mb-4">Language: {{ fullDetails.language }}</div>
          <div class="d-flex mb-4">
            Premier date: {{ fullDetails.premiered }}
          </div>
          <div class="d-flex mb-4">Genres: {{ fullDetails.genres }}</div>
          <h3 class="d-flex mb-4">THE PLOT</h3>
          <p class="text-justify" v-html="fullDetails.summary"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "showFullDetails",
  data() {
    return {
      showImage: String
    };
  },
  props: {
    fullDetails: {
      type: Object
    },
    episodes: {
      type: Object,
      required: true
    }
  }
};
</script>
