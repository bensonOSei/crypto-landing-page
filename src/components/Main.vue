<template>
  <main>
    <section class="hero">
      <div class="hero-text" data-aos="fade-up-right" data-aos-duration="1500">
        <div class="discount-notice">
          <p data-aos="zoom-in" data-aos-duration="2000">
            <span>70% SAVE</span>
            for the best black Friday deals
          </p>
        </div>
        <h1>Fastest & Secure Platform To Invest In Crypto</h1>
        <small>
          buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
          transactions
        </small>
        <ButtonIcon text="Try FOR FREE" />
      </div>
      <div class="hero-image">
        <!-- <img src="./hero-img.png" alt="src" /> -->
        <Image
          data-aos="fade-up-left"
          data-aos-duration="1500"
          :source="heroImage"
          alt="Crpyto design"
        />
      </div>

      <div 
        data-aos="fade-up"
        data-aos-duration="1500"
       class="hero-icons-container">
        <HeroIcons
          mainText="$30B"
          subText="Digital Currency Exchange"
          iconClass="fa-solid fa-chart-simple"
        />
        <HeroIcons
          mainText="190+"
          subText="Countries around the world"
          iconClass="fa-solid fa-earth-americas"
        />
        <HeroIcons
          mainText="$10M"
          subText="Trusted wallet investors"
          iconClass="fa-solid fa-user"
        />
      </div>
    </section>
    <Section
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
      class="reverse"
      headerText="why you should choose CHAPPO"
      subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Vero, laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               In, praesentium."
      buttonText="Learn more"
      imageLocation="why-img.png"
    />
    <CardsSection />
    <Title
      title="Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice"
    />
    <Section
      data-aos="fade-left"
      data-aos-duration="1500"
      headerText="Invest Smart"
      subText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias."
      buttonText="Learn more"
      imageLocation="feature-1-img.png"
    />
    <Section
      data-aos="fade-right"
      data-aos-duration="1500"
      class="reverse"
      headerText="Detailed Statistics"
      subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt commodi quos adipisci! Corporis, vero?"
      buttonText="Learn more"
      imageLocation="feature-2-img.png"
    />
    <Section
      data-aos="fade-left"
      data-aos-duration="1500"
      headerText="Grow Your Profit And Track Your Investments"
      subText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias."
      buttonText="Learn more"
      imageLocation="feature-3-img.png"
    />
    <NewsLetter
    data-aos="zoom-in"
    data-aos-duration="1000"
    />
  </main>
</template>

<script>
import ButtonIcon from "./Buttons/ButtonIcon.vue";
import Button from "./Buttons/Button.vue";
import HeroIcons from "./HeroIcons/HeroIcons.vue";
import Section from "./Sections/Section.vue";
import CardsSection from "./Sections/CardsSection.vue";
import Title from "./Title.vue";
import Image from "./Images/Image.vue";
import NewsLetter from "./Sections/NewsLetter.vue";

export default {
  name: "Main",
  components: {
    ButtonIcon,
    Button,
    HeroIcons,
    Section,
    CardsSection,
    Title,
    Image,
    NewsLetter,
  },
  data() {
    return {
      bitcoinImage: "bitcoin.png",
      ethImage: "eth.png",
      litecoinImage: "litecoin.png",
      heroImage: "hero-img.png",
    };
  },
};
</script>
