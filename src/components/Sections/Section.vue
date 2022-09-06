<template>
  <section>
    <div class="section-text">
      <h3>{{ headerText }}</h3>
      <p>{{ subText }}</p>
      <Button :text="buttonText" />
    </div>
    <div class="section-image">
      <Image :source="imageLocation" />
    </div>
  </section>
</template>

<script>
import Button from "../Buttons/Button.vue";
import Image from "../Images/Image.vue";

export default {
  name: "Section",
  props: {
    imageLocation: String,
    headerText: String,
    subText: String,
    buttonText: String,
  },
  components: { Button, Image },
  methods: {
    resoleImageSour(path){
      let images = require.context("../", false, /\.(png|jpe?g|svg)$/);
      return images("./"+path);
    }
  }
};
</script>

<style scoped>
section {
  margin-top: 5.5rem;
}

h3 {
  font-size: 1.5rem;
}
</style>