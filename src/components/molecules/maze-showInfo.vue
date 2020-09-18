<template>
  <div>
    <div class="row">
      <div class="col-lg-3">
        <img class="img-fluid w-100 rounded" :src="image.medium" />
      </div>
      <div class="col-lg-9">
        <div class="mb-4 mt-4">
          <span class="font-weight-bold">Rating: </span>
          <span class="pl-3">{{ rating.average }}/10</span>
        </div>
        <div class="mb-4">
          <span class="font-weight-bold">Runtime: </span>
          <span class="pl-3">{{ runtime }} Mins</span>
        </div>
        <div class="mb-4">
          <span class="font-weight-bold">Language: </span>
          <span class="pl-3">{{ language }}</span>
        </div>
        <div class="mb-4">
          <span class="font-weight-bold">Release date:</span>
          <span class="pl-3">{{ premiered }}</span>
        </div>
        <div class="mb-4">
          <span class="font-weight-bold">Genres:</span>
          <span class="pl-3">{{ genres | joinArray }}</span>
        </div>
        <h3 class="mb-2">Description</h3>
        <p class="text-justify" v-html="description"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "show-info",
  props: [
    "image",
    "rating",
    "genres",
    "runtime",
    "language",
    "premiered",
    "description"
  ],
  filters: {
    joinArray: function(value) {
      if (!value) return "";
      return value.join(" | ");
    }
  }
};
</script>
