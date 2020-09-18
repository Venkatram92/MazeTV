<template>
  <div>
    <h3 class="pl-4 pt-4 text-light">Popular shows</h3>
    <carousel-3d
      :loop="false"
      :height="400"
      :width="250"
      :display="10"
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
            <img :src="show.image.medium" class="img-fluid" />
          </router-link>
          <div class="show-content">
            <h4 class="show-title">{{ show.name }}</h4>
            <div class="show-rating text-right">
              <span>{{ show.rating.average }}/{{ ratedBy }}</span>
            </div>
          </div>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: { Carousel3d, Slide },
  props: {
    popularShows: { type: Array, required: true }
  },
  data: () => ({ ratedBy: 10 })
};
</script>
<style scoped>
.show-content {
  display: table;
  width: 100%;
  padding: 12px;
  background-color: white;
}
.show-title {
  font-size: 18px;
  display: table-cell;
}
.show-rating {
  font-weight: 600;
  color: #2196f3;
}
</style>
