<template>
  <faq-form :faq="faq" :sumbitForm="editFaq"> </faq-form>
</template>

<script>
// import FaqForm from "@/components/FaqForm.vue";
import FaqForm from "@/components/FaqForm.vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  components: {
    FaqForm,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const question = ref("");
    const answer = ref("");
    const API = "http://localhost:3000/FAQs";
    async function editFaq() {
      const { id } = route.params;
      await fetch(API + "/" + id, {
        method: "PUT",
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
    async function getCurrentFaq() {
      const { id } = route.params;
      const response = await fetch(API + "/" + id);
      const json = await response.json();
      answer.value = json.answer;
      question.value = json.question;
    }
    getCurrentFaq();

    return {
      faq: {
        question,
        answer,
      },
      editFaq,
    };
  },
};
</script>

<style>
</style>