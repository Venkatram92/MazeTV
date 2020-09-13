<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <h1 class="text-light mt-2">MazeTV</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'popular-shows' }">
              <a class="nav-link text-light pl-4" href="#">Dashboard</a>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-light pl-4"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
            >
              Genres
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
            </div>
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
  components: {
    mazeSearch
  }
};
</script>
