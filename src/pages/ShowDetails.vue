<template>
  <div>
    <div class="pl-4 pr-4 pt-5 text-secondary">
      <maze-showInfo v-if="showDetails" :show-info="showDetails" />
      <maze-seasons
        v-if="showSeasons.length > 0"
        :show-id="showId"
        :seasons="showSeasons"
      />
      <maze-cast-crew
        v-if="castData.length > 0 || crewData.length > 0"
        :cast-data="castData"
        :crew-data="crewData"
      />
    </div>
  </div>
</template>
<script>
import { getShow } from "@/services/ShowsService";
import mazeSeasons from "@/components/molecules/maze-seasons";
import mazeShowInfo from "@/components/molecules/maze-showInfo";
import mazeCastCrew from "@/components/molecules/maze-cast-crew";

export default {
  components: {
    mazeSeasons,
    mazeShowInfo,
    mazeCastCrew
  },
  data() {
    return {
      showId: "",
      castData: [],
      crewData: [],
      showSeasons: [],
      showDetails: null
    };
  },
  methods: {
    async fetchShowDetails() {
      this.showId = this.$route.params.id;
      this.showDetails = await getShow(this.showId);
      if (this.showDetails._embedded) {
        this.showSeasons = this.showDetails._embedded.seasons;
        this.castData = this.showDetails._embedded.cast.slice(0, 6);
        this.crewData = this.showDetails._embedded.crew.slice(0, 6);
      }
    }
  },
  created() {
    this.fetchShowDetails();
  }
};
</script>
