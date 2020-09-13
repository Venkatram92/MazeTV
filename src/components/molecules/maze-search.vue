<template>
  <div class="w3_search">
    <form>
      <input type="text" v-model="searchtext" placeholder="Search" />
      <router-link
        :to="{ name: 'search-details', params: { searchText: searchtext } }"
      >
        <input type="submit" value="Go" />
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
<style scoped>
.w3_search {
  width: 40%;
}
.w3_search input[type="text"] {
  outline: none;
  border: none;
  background: #efefef;
  padding: 10px;
  text-align: center;
  width: 50%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}
.w3_search input[type="submit"] {
  outline: none;
  border: none;
  background: #212121;
  padding: 10px 0;
  color: #fff;
  width: 22%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.w3_search input[type="submit"]:hover {
  background: #ff8d1b;
}
</style>
