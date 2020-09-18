<template>
  <img class="img-fluid p-1 w-100" :src="srcImage" />
</template>

<script>
export default {
  props: ["src"],
  data: () => ({ intersected: false }),
  computed: {
    srcImage() {
      return this.intersected ? this.src : "";
    }
  },
  mounted() {
    let observer = new IntersectionObserver(entries => {
      const image = entries[0];
      if (image.isIntersecting) {
        this.intersected = true;
        observer.disconnect();
      }
    });
    observer.observe(this.$el);
  }
};
</script>
