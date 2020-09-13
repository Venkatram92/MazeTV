<template>
  <div id="app">
    <maze-header />
    <router-view />
  </div>
</template>

<script>
import mazeHeader from "@/components/molecules/maze-header.vue";
export default {
  components: {
    mazeHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
