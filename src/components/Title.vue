<template>
  <h4
  data-aos="zoom-in"
  data-aos-duration="1500"
  >{{ title }}</h4>
  <p v-if="subTitle" >{{ subTitle }}</p>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    subTitle: String,
  },
};
</script>

<!-- <style scoped>

</style> -->