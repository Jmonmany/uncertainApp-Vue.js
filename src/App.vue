<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter title="Learning props" v-bind:start="5" />
  <!-- v-bind:start or :start is the same. Here we are passing a prop to the Counter component,
  and we are binding the start property to the value 5. Without binding,
  the start property would be a string value of "5", insted of a number. -->
  <Uncertain />
</template>

<script>
import Counter from "./components/Counter.vue";
import Uncertain from "./components/Uncertain.vue";
export default {
  name: "App",
  components: {
    Counter,
    Uncertain,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
