<template>
  <div>
    <img
      v-if="image"
      :src="image.medium"
      class="figure-img img-fluid rounded-circle w-50 mx-auto d-block"
    />
    <img
      v-else
      :src="require('@/assets/images/default-image.png')"
      class="figure-img img-fluid rounded-circle w-50 mx-auto d-block"
    />
    <div class="text-center">{{ name }}</div>
  </div>
</template>
<script>
export default {
  props: {
    image: Object,
    name: String
  }
};
</script>
