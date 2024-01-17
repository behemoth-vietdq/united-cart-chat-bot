<template>
  <FormLayout>
    <FormValidator label="お名前" required>
      <b-form-input v-model="tel" placeholder="例）0123456789" />
    </FormValidator>

    <b-button :disabled="!tel" class="w-100 mt-3 btn" @click="reply()">
      {{ buttonText }}
    </b-button>
  </FormLayout>

  <BotReply :messages="botMessage" v-if="messageDisplay" />
</template>

<script setup>
import { ref } from "vue";
import BotReply from "@/components/BotReply.vue";
import FormLayout from "@/layouts/form.vue";

import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const tel = ref("");

const botMessage = ref([]);
const messageDisplay = ref(false);
const buttonText = ref("次へ");

function reply() {
  if (botMessage.value.length) return;

  botMessage.value.push("続いて、お支払い方法をお選びください。");
  messageDisplay.value = true;

  buttonText.value = "更新";
  cartStore.increaseStep();
}
</script>
