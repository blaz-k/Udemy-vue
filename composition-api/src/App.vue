<template>
  <div>
    <p>
      {{ num }}
    </p>

    <button type="button" @click.prevent="increment">Clickme</button>
    <p>{{ name }}</p>

    <input type="text" v-model="phrase" />
    <p>{{ reversePhrase }}</p>
  </div>
</template>

<script>
import { ref, reactive, watch, toRefs } from "vue";

export default {
  name: "App",
  setup() {
    let num = ref(0);

    function increment() {
      num.value++;
    }

    const user = reactive({
      name: "John",
      age: 20,
    });

    const phrase = ref("");
    const reversePhrase = ref("");

    watch(() => {
      reversePhrase.value = phrase.value
        .split("")
        .reverse()
        .join("");
    });

    setTimeout(() => {
      user.name = "Luis";
    }, 3000);

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversePhrase,
    };
  },
};
</script>
