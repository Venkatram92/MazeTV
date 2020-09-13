<template>
  <div class="pt-4" v-if="popularShows.length > 0">
    <h3>Popular shows</h3>
    <carousel-3d
      :loop="false"
      :height="520"
      :width="300"
      :controls-visible="true"
    >
      <slide v-for="(show, index) in popularShows" :key="index" :index="index">
        <figure>
          <img :src="show.image.original" class="pointer img-fluid" />
          <div class="show-content">
            <h4 class="show-title">{{ show.name }}</h4>
            <div class="show-ratings">
              <span>{{ show.rating.average }}</span
              >/10
            </div>
          </div>
        </figure>
      </slide>
    </carousel-3d>
    <router-link :to="{ name: 'all-shows' }">
      <h4>View all shows</h4>
    </router-link>
  </div>
</template>
<script>
import { showsMixin } from "@/mixins/showsMixin.js";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  mixins: [showsMixin],
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      popularShows: []
    };
  },
  async created() {
    this.popularShows = await this.getPopularShows();
  }
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
.show-content {
  display: table;
  width: 100%;
  padding: 29px;
  background-color: white;
}
.show-title {
  font-size: 22px;
  display: table-cell;
}
.show-ratings {
  text-align: right;
  font-weight: 600;
}
.show-ratings span {
  color: #2196f3;
}
</style>
