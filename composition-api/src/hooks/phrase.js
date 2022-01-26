import { watch, ref } from "vue";

export const usePhrase = () => {
  const phrase = ref("");
  const reversePhrase = ref("");

  const num = ref("");

  watch(() => {
    reversePhrase.value = phrase.value
      .split("")
      .reverse()
      .join("");
  });

  return {
    phrase,
    reversePhrase,
    num,
  };
};
