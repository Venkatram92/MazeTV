<template>
  <div>
    <h3 class="d-flex pl-md-4 pb-2 ml-1 pt-5">
      {{ genreData.genre }}
    </h3>
    <carousel
      :per-page-custom="[
        [320, 4],
        [480, 5],
        [1024, 6],
        [2048, 10]
      ]"
    >
      <slide v-for="(show, index) in genreData.shows" :key="index">
        <router-link
          :to="{
            name: 'show-details',
            params: { id: show.id, fullDetails: show }
          }"
        >
          <v-lazy-image
            class="pointer img-fluid p-1"
            :src="show.image.medium"
          />
        </router-link>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import VLazyImage from "v-lazy-image";
export default {
  name: "genres",
  props: {
    genreData: {
      type: Object
    }
  },
  components: {
    VLazyImage,
    Carousel,
    Slide
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
