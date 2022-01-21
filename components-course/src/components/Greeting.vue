<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
