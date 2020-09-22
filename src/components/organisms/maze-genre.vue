<template>
  <div class="mx-3 my-4">
    <div v-for="(genre, index) in genresData" :key="index">
      <h3 class="pl-4 py-4 ml-1 text-secondary">{{ genre.genre }}</h3>
      <div class="pl-4 pr-4">
        <carousel
          :perPageCustom="[
            [300, 3],
            [420, 4],
            [768, 5],
            [1024, 8]
          ]"
          :navigation-enabled="true"
          :pagination-enabled="false"
          :navigationClickTargetSize="12"
        >
          <slide
            v-for="(show, index) in genre.shows"
            :key="index"
            :index="index"
          >
            <router-link
              :to="{ name: 'show-details', params: { id: show.id } }"
            >
              <div class="show">
                <lazyImage :src="show.image.medium" />
                <div class="show-overlay"></div>
                <div class="show-details text-light fadeIn-bottom">
                  <h3 class="text-uppercase">Rating</h3>
                  <p>{{ show.rating.average }}/10</p>
                  <a class="text-light">View show</a>
                </div>
              </div>
            </router-link>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import lazyImage from "@/components/atoms/maze-lazyImage.vue";

export default {
  components: { lazyImage, Carousel, Slide },
  props: {
    genresData: { type: Array, required: true }
  }
};
</script>
<style scoped>
.show {
  position: relative;
}

.fadeIn-bottom {
  top: 80%;
}

.show-details p {
  font-size: 1em;
}

.show-details h3 {
  letter-spacing: 0.15em;
}

.show:hover .show-details {
  cursor: pointer;
  top: 50%;
  left: 50%;
  opacity: 1;
}

.show .show-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
}

.show:hover .show-overlay {
  opacity: 1;
}

.show-details {
  position: absolute;
  text-align: center;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
</style>
