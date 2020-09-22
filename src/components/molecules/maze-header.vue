<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 class="text-light mt-2">MazeTV</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerMaze"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerMaze">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item pl-lg-4">
            <router-link :to="{ name: 'home' }">
              <a class="nav-link" href="#">Dashboard</a>
            </router-link>
          </li>
        </ul>
        <maze-search />
      </div>
    </nav>
  </div>
</template>
<script>
import mazeSearch from "@/components/atoms/maze-search.vue";
export default {
  components: {
    mazeSearch
  }
};
</script>
