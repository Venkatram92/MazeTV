<template>
  <div>
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        v-model="searchtext"
        type="search"
        placeholder="Search"
      />
      <router-link
        :to="{ name: 'search-details', params: { searchText: searchtext } }"
      >
        <button class="btn btn-light my-2 my-sm-0" type="submit">
          Search
        </button>
      </router-link>
    </form>
  </div>
</template>
<script>
export default {
  name: "maze-search",
  data() {
    return {
      searchtext: ""
    };
  }
};
</script>
