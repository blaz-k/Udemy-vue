<template>
  <div>
    <button type="button" @click="onClickAge">Update Age</button>
    <button type="button" @click="ageChangeFn(5)">Update Age FN</button>
    <p>The user is {{ age }} years old</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      //   default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-change"],
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>

<style></style>
