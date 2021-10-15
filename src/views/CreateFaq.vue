<template>
  <faq-form :faq="faq" :sumbitForm="createFaq"></faq-form>
</template>

<script>
import FaqForm from "@/components/FaqForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    FaqForm,
  },
  setup() {
    const router = useRouter();
    const question = ref("");
    const answer = ref("");

    const API = "http://localhost:3000/FAQs";
    async function createFaq() {
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question.value,
          answer: answer.value,
        }),
      });
      router.push("/");
    }

    return {
      faq: {
        answer,
        question,
      },

      createFaq,
    };
  },
};
</script>

