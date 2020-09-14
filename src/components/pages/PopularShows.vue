<template>
  <div class="pt-4" v-if="popularShows.length > 0">
    <h3 class="text-center">Popular shows</h3>
    <carousel-3d
      :loop="false"
      :height="500"
      :width="300"
      :controls-visible="true"
    >
      <slide v-for="(show, index) in popularShows" :key="index" :index="index">
        <figure>
          <router-link
            :to="{
              name: 'show-details',
              params: { id: show.id, showData: show }
            }"
          >
            <img :src="show.image.medium" class="pointer img-fluid" />
          </router-link>
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
      <h4 class="text-center">View all shows</h4>
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
    try {
      this.popularShows = await this.getPopularShows();
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
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
