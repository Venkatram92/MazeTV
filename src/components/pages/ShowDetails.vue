<template>
  <div v-if="showDetails">
    <div class="pl-4 pr-4 text-light pt-5">
      <maze-showInfo
        :image="showImage"
        :rating="showRating"
        :genres="showDetails.genres"
        :runtime="showDetails.runtime"
        :language="showDetails.language"
        :premiered="showDetails.premiered"
        :description="showDetails.summary"
      />
      <maze-seasons :showSeasons="showSeasons" />
      <div class="pt-4" v-if="castData.length > 0">
        <b>Cast</b>
        <div class="pt-4 pb-4 row">
          <span
            class="col-md-2 col-4"
            v-for="(cast, index) in castData"
            :key="index"
          >
            <div>
              <maze-cast :image="cast.person.image" :name="cast.person.name" />
            </div>
          </span>
        </div>
      </div>
      <div class="pt-4" v-if="crewData.length > 0">
        <b>Crew</b>
        <div class="pt-4 pb-4 row">
          <span
            class="col-md-2 col-4"
            v-for="(crew, index) in crewData"
            :key="index"
          >
            <div>
              <maze-cast :image="crew.person.image" :name="crew.type" />
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShowsService from "@/services/ShowsService.js";
import mazeCast from "@/components/molecules/maze-cast.vue";
import mazeShowInfo from "@/components/molecules/maze-showInfo.vue";
import mazeSeasons from "@/components/molecules/maze-seasons.vue";
export default {
  components: {
    mazeCast,
    mazeSeasons,
    mazeShowInfo
  },
  data() {
    return {
      showName: String,
      showImage: String,
      showRating: String,
      showDetails: Object,
      showSeasons: Array,
      castData: [],
      crewData: []
    };
  },
  methods: {
    async fetchShowDetails() {
      try {
        this.showDetails = await ShowsService.getShow(this.$route.params.id);
        this.showName = this.showDetails.name;
        this.showImage = this.showDetails.image || null;
        this.showRating = this.showDetails.rating;
        if (this.showDetails._embedded) {
          this.episodesBySeason(
            this.showDetails._embedded.seasons,
            this.showDetails._embedded.episodes
          );
          this.castData = this.showDetails._embedded.cast.slice(0, 6);
          this.crewData = this.showDetails._embedded.crew.slice(0, 6);
        }
      } catch (err) {
        console.log(err);
      }
    },
    episodesBySeason(allSeasons, allEpisodes) {
      let episodesByShows = [];
      allSeasons.forEach(season => {
        const Episodes = allEpisodes.filter(
          episode => episode.season === season.number
        );
        const seasonData = {
          season: season.number,
          Episodes
        };
        episodesByShows.push(seasonData);
      });
      this.showSeasons = episodesByShows;
    }
  },
  async created() {
    this.fetchShowDetails();
  }
};
</script>
