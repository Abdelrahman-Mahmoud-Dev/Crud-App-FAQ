<template>
  <div class="home container">
    <div class="card mb-5" v-for="faq in faqs" :key="faq.id">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ faq.question }}</p>
          </div>
        </div>
        <div class="content">{{ faq.answer }}</div>
      </div>
      <button class="button is-danger ml-3 mb-3" @click="removeFaq(faq.id)">
        Remove
      </button>
      <router-link :to="{ name: 'edit', params: { id: faq.id } }">
        <button class="button is-warning ml-3 mb-3">Edit</button>
      </router-link>
    </div>
    <router-link class="has-text-white" to="/create">
      <button class="button is-success mt-3">Create Faq</button>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const faqs = ref([]);
    const API = "http://localhost:3000/FAQs";
    async function getFAQs() {
      const response = await fetch(API);
      const json = await response.json();
      faqs.value = json;
    }
    async function removeFaq(id) {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
      });
      getFAQs();
    }
    getFAQs();

    return {
      faqs,
      removeFaq,
    };
  },
};
</script>
