<template>
  <footer>
    <div class="logo-container">
      <Image source="logo.svg" />
    </div>
    <nav>
      <Title title="Quick Links" />
      <Navlink text="Home" />
      <Navlink text="Podcasts" />
      <Navlink text="About" />
      <Navlink text="Features" />
      <Navlink text="Contact" />
    </nav>
    <nav >
      <Title title="Resources Links" />
      <Navlink text="Download Whitepapper" />
      <Navlink text="Smart Token" />
      <Navlink text="Blockchan=in Explore" />
      <Navlink text="Crypto Api" />
      <Navlink text="Interest" />
    </nav>

    <div class="footer-icons">
      <Title title="We accept following payment systems" />
      <div>
        <Image source="visa.png" />
        <Image source="mastercard.png" />
        <Image source="bitcoin-pay.png" />
      </div>
    </div>

    <div class="footnote">
      <div class="copyright">
        <p>&copy; 2022 CRAPPO. All rights reserved</p>
      </div>
      <div class="social-icons">
        <font-awesome-icon icon="fa-brands fa-youtube" />
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
        <font-awesome-icon icon="fa-brands fa-instagram" />
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-brands fa-linkedin" />
      </div>
    </div>
  </footer>
</template>

<script>
import Image from "./Images/Image.vue";
import Title from "./Title.vue";
import Navlink from "./Navlinks/Navlink.vue";
export default {
  name: "Footer",
  components: { Image, Title, Navlink },
};
</script>

<style scoped>
h4 {
  display: none;
}
</style>
