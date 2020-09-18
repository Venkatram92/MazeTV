<template>
  <div>
    <div class="pt-4" v-if="showSeasons.length > 0">
      <h3>Seasons</h3>
    </div>
    <div class="accordion">
      <div class="card" v-for="(season, index) in showSeasons" :key="index">
        <div class="card-header">
          <h1 class="mb-0">
            <button
              class="btn text-white"
              type="button"
              data-toggle="collapse"
              :data-target="'#collapse' + index"
            >
              Season {{ index + 1 }} | Episodes
              {{ season.Episodes.length }}
            </button>
          </h1>
        </div>
        <div :id="'collapse' + index" class="collapse">
          <div class="ml-2 mr-2">
            <div class="row">
              <span
                class="col-md-2 col-4"
                v-for="(episode, index) in season.Episodes"
                :key="index"
              >
                <figure class="figure mt-4">
                  <img
                    v-if="episode.image"
                    :src="episode.image.medium"
                    class="figure-img img-fluid rounded w-100"
                  />
                  <img
                    v-else
                    :src="require('@/assets/images/default-image.png')"
                    class="figure-img img-fluid rounded w-100"
                  />
                  <div class="figure-caption text-center text-white">
                    Episode {{ episode.number }}
                  </div>
                </figure>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["showSeasons"]
};
</script>
<style scoped>
.btn:focus {
  outline: none;
  box-shadow: none;
}
.btn {
  font-size: 19px;
}
.card-header {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.19), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card {
  background-color: #1a242d;
}
</style>
