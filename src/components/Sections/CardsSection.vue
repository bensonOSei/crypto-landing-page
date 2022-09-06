<template>
  <section class="off">
    <OffsetSection />
    <div class="cards">
      <div class="cards-header">
        <!-- <h4>Trade Securely And Market The High Growth Cryptocurrencies.</h4> -->
        <Title title="Trade Securely And Market The High Growth Cryptocurrencies." />
      </div>
      <Card
        data-aos="flip-left"        
        data-aos-duration="1500"
        class="active"
        imageSource="bitcon.png"
        mainText="Bitcoin"
        textAbbr="BTC"
        cardText="Digital currency in which a record of transactions is maintained."
      />
      <Card
        data-aos="flip-left"        
        data-aos-duration="1500"
        data-aos-delay="400"
        imageSource="eth.png"
        mainText="Etherium"
        textAbbr="ETH"
        cardText="Blockchain technology to create and run decentralized digital applications."
      />
      <Card
        data-aos="flip-left"        
        data-aos-duration="1500"
        data-aos-delay="500"
        imageSource="litecoin.png"
        mainText="Litecoin"
        textAbbr="LTC"
        cardText="Cryptocurrency that enables instant payments to anyone in the world."
      />
    </div>
  </section>
</template>

<script>
import OffsetSection from "./OffsetSection.vue";
import Card from "../Card.vue";
import Title from "../Title.vue";

export default {
  name: "CardsSection",
  props: {
    imageSourceOne: String,
    imageSourceTwo: String,
    imageSourceThree: String,
  },
  components: { OffsetSection, Card, Title },
  data(){
    return {
      cards: []
    }
  },
  created(){
    this.cards = [
      {
        id: 1,
        imageSource: this.imageSourceOne,
        mainText: "Bitcoin",
        textAbbr: "BTC",
        cardText: "Digital currency in which a record of transactions is maintained."
      },
      {
        id: 2,
        imageSource: this.imageSourceTwo,
        mainText: "Etherium",
        textAbbr: "ETH",
        cardText: "Blockchain technology to create and run decentralized digital applications."
      },
      {
        id: 3,
        imageSource: this.imageSourceThree,
        mainText: "Litecoin",
        textAbbr: "LTC",
        cardText: "Cryptocurrency that enables instant payments to anyone in the world."
      }
    ]
  }
};
</script>
