<template>
  <h2>Counter</h2>
  <p>{{counter}} <sup>2</sup> = {{ counter * counter}} </p>
</template>

<script>
export default {
    name: 'Counter',
    data(){
        return {
            counter: 10
        }
    }
}
</script>

<style>

</style>