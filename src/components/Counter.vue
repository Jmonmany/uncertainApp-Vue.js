<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
  <!-- notice that using methods functions will be called with () and renders per each call,
  no matter if the value is changed or not -->
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareCounter }}</p>
  <!-- Using computed functions instead will only be called once, and the value will
  be cached We don't use () in computed functions, because they are not
  functions, they are properties -->
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 10,
    };
  },
  methods: {
    getSquareValue() {
      console.log("square value method");
      return this.counter * this.counter;
    },
  },
  // methods and computed are the same, but computed is cached,
  // so it will not be called again if the value is not changed
  computed: {
    getSquareCounter() {
      console.log("square value computed");
      return this.counter * this.counter;
    },
    // better use computed for this, to save the value in the cache memory
  },
};
</script>

<style></style>
