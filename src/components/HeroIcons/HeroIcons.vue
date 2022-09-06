<template>
  <div class="hero-icon">
    <div class="icon-container">
      <i :class="iconClass"></i>
    </div>
    <div class="icon-text">
      <h2>{{ mainText }}</h2>
      <p>{{ subText }}</p>
    </div>
  </div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
export default {
  name: "HeroIcon",
  props: {
    mainText: String,
    subText: String,
    iconClass: String,
  },
};
</script>
