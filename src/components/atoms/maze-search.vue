<template>
  <div>
    <form class="form-inline">
      <input
        type="search"
        v-model="searchtext"
        placeholder="Search"
        class="form-control mr-sm-2 text-center"
      />
      <router-link
        :to="{ name: 'search-details', params: { searchText: searchtext } }"
      >
        <button
          type="submit"
          :disabled="searchtext === ''"
          class="btn btn-primary my-2 my-sm-0"
        >
          Search
        </button>
      </router-link>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchtext: ""
    };
  }
};
</script>
