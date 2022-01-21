<template>
  <div>
    <button type="button" @click="onClickAge">Update Age</button>
    <p>The user is {{ age }} years old</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["age-change"],
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>

<style></style>
