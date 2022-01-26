<template>
  <div>
    <p>
      {{ num }}
    </p>
    <p>{{ double }}</p>

    <button type="button" @click.prevent="increment">Clickme</button>
    <p>{{ name }}</p>

    <input type="text" v-model="phrase" />
    <p>{{ reversePhrase }}</p>

    <app-alert :user="user" />

    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script>
import { ref, reactive, watch, toRefs, computed, onMounted } from "vue";
import AppAlert from "@/components/Alert.vue";

export default {
  name: "App",
  components: {
    AppAlert,
  },
  setup() {
    const btn = ref(null);

    onMounted(() => {
      btn.value.addEventListener("click", () => {
        console.log("btn clicked");
      });
    });

    let num = ref(0);

    function increment() {
      num.value++;
    }

    const double = computed(() => {
      return num.value * 2;
    });

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
      double,
      user,
      btn,
    };
  },
};
</script>
