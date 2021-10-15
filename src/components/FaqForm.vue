<template>
  <div class="container">
    <form @submit.prevent="sumbitForm">
      <div class="field">
        <label class="subtitle is-4">Title</label>

        <div class="control">
          <input
            v-model="question"
            class="input mt-3"
            type="text"
            placeholder="e.g. Partnership opportunity"
            required
          />
        </div>
        <!-- <p class="help is-danger">This field is required</p> -->
      </div>

      <div class="field">
        <label class="subtitle is-4">Mediasum input</label>

        <div class="control">
          <textarea
            v-model="answer"
            class="textarea mt-3"
            placeholder="Explain how we can help you"
          ></textarea>
        </div>
      </div>

      <div class="control">
        <button class="button is-primary">create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["sumbitForm", "faq"],
  setup(props) {
    const question = ref(props.faq.question);
    const answer = ref(props.faq.answer);
    // setInterval(() => {
    //   console.log("ques is" + props.faq.answer);
    //   console.log("answer is" + answer.value);
    // }, 1000);
    return {
      question,
      answer,
    };
  },
};
</script>