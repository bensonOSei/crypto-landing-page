<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { onMounted } from "vue";
import AOS from "aos";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>

<style>
/* #app {
} */
</style>
