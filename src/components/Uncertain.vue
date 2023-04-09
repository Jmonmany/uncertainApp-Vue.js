<template>
  <img src="" alt="" />
  <div class="bg-dark"></div>
  <div class="uncertain-container">
    <input type="text" placeholder="Ask me a question">
    <p>Do not forget to write the question mark (?)</p>
    <div>
        <h2>Will I be a millionaire?</h2>
        <h1>Yes, No ... waiting</h1>
    </div>
  </div>

</template>

<script>
export default {
  props: {},
  name: "Uncertain",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .uncertain-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>
