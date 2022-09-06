<template>
  <form action="#">
    <input type="text" :placeholder="holder" />
    <select id="select" v-if="opt1">
      <option :value="opt1">TH/s</option>
      <option v-if="opt2" :value="opt2">{{opt2}}</option>
      <option v-if="opt3" :value="opt3">{{opt3}}</option>
      <option v-if="opt4" :value="opt4">{{opt4}}</option>
      <option v-if="opt5" :value="opt5">{{opt5}}</option>
    </select>

    <button>{{ btnText }}</button>
  </form>
</template>

<script>

    export default {
        name: "Form",
        props: {
            holder: String,
            opt1: String,
            opt2: String,
            opt3: String,
            opt4: String,
            opt5: String,
            btnText: String
        }
    }
</script>