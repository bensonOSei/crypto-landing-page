<template>
  <header>
    <div class="logo-container">
      <Image :source="logo" :alt="altText" />
    </div>
    <nav>
      <Navlink text="Products" />
      <Navlink text="Features" />
      <Navlink text="About" />
      <Navlink text="Contact" />

      <div class="loginReg">
        <Navlink text="Login" />
        <Button text="Register" class="diff" />
      </div>

      <div class="closeMenu" @click="closeNav">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
    </nav>

    <div class="menuBtn" @click="openNav">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
  </header>
</template>

<script>
import Navlink from "./Navlinks/Navlink.vue";
import Button from "./Buttons/Button.vue";
import Image from "./Images/Image.vue";

export default {
  name: "Header",
  components: {
    Navlink,
    Button,
    Image,
  },
  data() {
    return {
      logo: "logo.svg",
      altText: "App Logo",
    };
  },
  methods: {
    openNav(){
      let nav = document.querySelector('header nav')
      nav.classList.add('open')
    },
    closeNav(){
      let nav = document.querySelector('header nav')
      nav.classList.remove('open')

    }
  }
};
</script>
