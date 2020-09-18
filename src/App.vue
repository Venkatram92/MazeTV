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
};
</script>
<style scoped>
#app {
  background-color: #0f171e;
  min-height: 100vh;
}
</style>
