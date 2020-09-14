<template>
  <div v-if="showDetails">
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-4">
          <img
            class="img-fluid w-100 rounded"
            :src="showDetails.image.medium"
          />
        </div>
        <div class="col-lg-8">
          <div class="mb-4">
            <span class="font-weight-bold">Rating: </span>
            <span class="pl-3">{{ showDetails.rating.average }}/10</span>
          </div>
          <div class="mb-4">
            <span class="font-weight-bold">Runtime: </span>
            <span class="pl-3">{{ showDetails.runtime }} Mins</span>
          </div>
          <div class="mb-4">
            <span class="font-weight-bold">Language: </span>
            <span class="pl-3">{{ showDetails.language }}</span>
          </div>
          <div class="mb-4">
            <span class="font-weight-bold">Release date:</span>
            <span class="pl-3">{{ showDetails.premiered }}</span>
          </div>
          <div class="mb-4">
            <span class="font-weight-bold">Genres:</span>
            <span class="pl-3">{{ showDetails.genres | joinArray }}</span>
          </div>
          <h3 class="mb-2">Description</h3>
          <p class="text-justify" v-html="showDetails.summary"></p>
        </div>
      </div>
      <div class="pt-4" v-if="castData.length > 0">
        <b>Cast</b>
        <div class="row">
          <span class="col-2" v-for="(cast, index) in castData" :key="index">
            <div v-if="cast.person.image">
              <figure class="figure mt-4">
                <img
                  :src="cast.person.image.medium"
                  class="figure-img img-fluid rounded-circle w-50"
                />
                <figcaption class="figure-caption">
                  {{ cast.person.name }}
                </figcaption>
              </figure>
            </div>
          </span>
        </div>
      </div>
      <div v-if="crewData.length > 0">
        <b>Crew</b>
        <div class="row">
          <span class="col-2" v-for="(crew, index) in crewData" :key="index">
            <div v-if="crew.person.image">
              <img
                :src="crew.person.image.medium"
                class="figure-img img-fluid rounded-circle w-50"
              />
              <div class="figure-caption">
                {{ crew.type }}
              </div>
              <div class="figure-caption">
                {{ crew.person.name }}
              </div>
            </div>
          </span>
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
      showDetails: this.showData,
      castData: [],
      crewData: []
    };
  },
  filters: {
    joinArray: function(value) {
      if (!value) return "";
      return value.join(" | ");
    }
  },
  methods: {
    async fetchShowDetails() {
      try {
        let showsResponse = await ShowsService.getShow(this.$route.params.id);
        this.showDetails = showsResponse.data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchCastDetails() {
      try {
        let castResponse = await ShowsService.getShowCast(
          this.$route.params.id
        );
        this.castData = castResponse.data.slice(0, 6);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchCrewDetails() {
      try {
        let crewResponse = await ShowsService.getShowCrew(
          this.$route.params.id
        );
        this.crewData = crewResponse.data.slice(0, 6);
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    if (!this.showDetails) {
      this.fetchShowDetails();
    }
    this.fetchCastDetails();
    this.fetchCrewDetails();
  }
};
</script>
