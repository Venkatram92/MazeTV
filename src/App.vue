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
