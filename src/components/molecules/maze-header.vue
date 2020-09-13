<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-sm bg-dark">
      <h1 class="text-light mt-2">MazeTV</h1>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link :to="{ path: '/' }">
              <span class="text-light pl-4">Home </span>
            </router-link>
          </li>
        </ul>
        <maze-search />
      </div>
    </nav>
  </div>
</template>
<script>
import mazeSearch from "@/components/molecules/maze-search.vue";
export default {
  name: "mazeHeader",
  components: {
    mazeSearch
  }
};
</script>
