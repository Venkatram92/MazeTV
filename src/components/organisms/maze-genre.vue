<template>
  <div class="mx-3 my-4">
    <div v-for="(genre, index) in genresData" :key="index">
      <h3 class="pl-4 py-4 ml-1 text-light">{{ genre.genre }}</h3>
      <div class="pl-4 pr-4">
        <carousel
          :navigation-enabled="true"
          :navigationClickTargetSize="10"
          :perPageCustom="[
            [300, 2],
            [420, 4],
            [768, 5],
            [1024, 8]
          ]"
          :pagination-enabled="false"
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
                <div class="show-overlay"></div>
                <lazyImage :src="show.image.medium" />
                <div class="show-details fadeIn-bottom">
                  <h3>Rating</h3>
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
import lazyImage from "@/components/atoms/maze-image.vue";

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

.show .show-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
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

.show:hover .show-details {
  cursor: pointer;
  top: 50%;
  left: 50%;
  opacity: 1;
}

.show-details h3 {
  color: #fff;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.show-details p {
  color: #fff;
  font-size: 1em;
}

.fadeIn-bottom {
  top: 80%;
}
</style>
