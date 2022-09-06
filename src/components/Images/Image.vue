<template>
  <img :src="resoleImageSour(source)" :alt="alt" />
</template>

<script>
export default {
  name: "Image",
  props: {
    source: String,
    alt: String,
  },
  methods: {
    resoleImageSour(path) {
      let images = require.context("./", false, /\.(png|jpe?g|svg)$/);
      return images("./" + path);
    },
  },
};
</script>
