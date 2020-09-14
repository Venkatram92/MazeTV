<template>
  <div class="maze-search">
    <form class="mt-lg-0">
      <input type="text" v-model="searchtext" placeholder="Search" required />
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
.maze-search {
  width: 40%;
}
.maze-search input[type="text"] {
  outline: none;
  border: none;
  background: #efefef;
  padding: 10px;
  text-align: center;
  width: 50%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}
.maze-search input[type="submit"] {
  outline: none;
  border: none;
  background: #212121;
  padding: 10px 0;
  color: #fff;
  width: 22%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.maze-search input[type="submit"]:hover {
  background: #ff8d1b;
}

@media only screen and (max-width: 768px) {
  .maze-search {
    width: 80%;
    margin-top: 3%;
    margin-bottom: 3%;
  }
}
</style>
