<template>
  <div class="offset">
    <div class="header">
      <Title
        title="How Much Can You Earn With Us"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, possimus at quas eius sint esse"
      />
    </div>
    <div 
     data-aos="zoom-in"
     data-aos-duration="1500"
     class="body">
      <Form
        holder="Enter your hash"
        opt1="TH/s"
        opt2="H/s"
        opt3="KH/s"
        opt4="MH/s"
        opt5="GH/s"
        btnText="Calculate"
      />

      <p class="blue">ESTMIATED 24 HOUR REVENUE:</p>
      <p class="bold large">0.055 130 59 ETH <span class="blue">($1275)</span></p>
      <small>Revenue will change based on mining difficulty and Ethereum price.</small>
    </div>
  </div>
</template>

<script>
import Title from "../Title.vue";
import Form from "../Forms/Form.vue";

export default {
  name: "OffsetSection",
  components: { Title, Form },
};
</script>
