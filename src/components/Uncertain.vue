<template>
  <img v-if="image" :src="image" alt="" />
  <div class="bg-dark"></div>
  <div class="uncertain-container">
    <input
      type="text"
      placeholder="Ask me a question"
      v-model="question"
      @keyup.enter="getQuestion()"
    />
    <p>Do not forget to write the question mark (?)</p>
    <div v-if="isValid">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  name: "Uncertain",
  data() {
    return {
      question: "",
      answer: null,
      image: null,
      isValid: false,
    };
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = "Waiting for answer...";
        const response = await fetch("https://yesno.wtf/api");
        const { answer, image } = await response.json();
        this.answer = answer;
        this.image = image;
      } catch (error) {
        this.answer = "Fail to fetch";
        this.img = null;
      }
    },
  },
  watch: {
    question(value, oldValue) {
      console.log({ value });
      if (!value.includes("?")) return;
      this.isValid = true;
      this.getAnswer();
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 67%;
  max-width: 100%;
  position: fixed;
  bottom: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.uncertain-container {
  margin-block-start: 1rem;
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid black;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
