<template>
  <div class="button">
    <a href="#"> {{text}} </a>
    <i class="fa-solid fa-angle-right"></i>
  </div>
</template>

<script>
export default {
  name: "ButtonIcon",
  props: {
    text: String,
    // class: String,
  },
};
</script>
