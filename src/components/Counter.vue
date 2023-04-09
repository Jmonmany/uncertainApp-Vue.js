<template>
  <h2>{{getTitle}}</h2>
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
  <div>
    <button v-on:click="Increment()">+1</button>
    <button @click="Decrement()">-1</button>
    <!-- using @click instead of v-on:click -->
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    // start: Number,
    start: {
      type: Number,
      default: 1, // default value if start is not passed on father component
      required: false, // if true, start is required, so we must pass it on father component
      validator (value) {
        return value > 4;
      },
      // will fire a warning in console if start is not greater than 4,
      // like a custom validatior check failed,
      // but it will not stop the app from running
    },
  },
  name: "Counter",
  data() {
    return {
      counter: this.start,
    };
  },
  // Here are a few scenarios where it's better to use methods:

  // 1. When you need to perform a calculation that depends on external data or props: 
  // If you need to perform a calculation that depends on external data or props, 
  // it's better to use a method. This is because computed properties only have access to the component's own data properties.

  // 2. When you need to perform an asynchronous operation: 
  // If you need to perform an asynchronous operation, such as making an API request, 
  // it's better to use a method. Computed properties can't be asynchronous, 
  // so you won't be able to use them to fetch data from an external source.

  // 3. When you need to update multiple data properties at once: 
  // If you need to update multiple data properties at once, it's better to use a method. 
  // This is because computed properties can only return a single value, 
  // so you won't be able to use them to update multiple data properties.

  // In general, if your calculation is simple and depends only on the component's own data properties, 
  // you should use a computed property. However, if your calculation is more complex or depends on external data, 
  // you should use a method.
  methods: {
    getSquareValue() {
      console.log("square value method");
      return this.counter * this.counter;
    },
    Increment() {
      this.counter++;
    },
    Decrement() {
      this.counter--;
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
    getTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: brown;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}
button:hover {
  background-color: rgb(216, 81, 81);
  color: white;
}
</style>
