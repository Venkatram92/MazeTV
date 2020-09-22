<template>
  <div>
    <form class="form-inline mt-1">
      <input
        type="search"
        v-model="searchtext"
        placeholder="Search"
        class="form-control mr-sm-2 text-center"
      />
      <div v-if="searchtext">
        <router-link
          :to="{ name: 'search-details', params: { searchText: searchtext } }"
        >
          <button type="submit" class="btn btn-primary my-2 my-sm-0">
            Search
          </button>
        </router-link>
      </div>
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
