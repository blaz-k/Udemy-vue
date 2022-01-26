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
import { ref, reactive, toRefs, onMounted } from "vue";
import AppAlert from "@/components/Alert.vue";
import { useNumber } from "./hooks/number";
import { usePhrase } from "./hooks/phrase";

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

    const user = reactive({
      name: "John",
      age: 20,
    });

    setTimeout(() => {
      user.name = "Luis";
    }, 3000);

    const { num, increment, double } = useNumber();

    const { phrase, reversePhrase, num: phraseNum } = usePhrase();

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversePhrase,
      double,
      user,
      btn,
      phraseNum,
    };
  },
};
</script>
