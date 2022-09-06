<template>
  <section class="newsletter">
    <div class="text">
      <Title
        title="Start Mining Now"
        subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe."
      />
    </div>
    <div>
      <Form holder="enter message" btnText="Subscribe" />
    </div>
  </section>
</template>

<script>
import Title from "../Title.vue";
import Form from "../Forms/Form.vue";

export default {
  name: "NewsLetter",
  components: { Title, Form },
};
</script>
