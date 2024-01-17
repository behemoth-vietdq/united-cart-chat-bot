<template>
  <FormValidator label="お名前" required>
    <b-col md="6">
      <FormValidator>
        <b-form-input v-model="tel" placeholder="例）0123456789" />
      </FormValidator>
    </b-col>
  </FormValidator>

  <b-button :disabled="!tel" class="w-50 mt-3" @click="reply()">
    {{ buttonText }}
  </b-button>
  <BotReply :messages="botMessage" v-if="messageDisplay" />
</template>

<script setup>
import { ref } from "vue";
import BotReply from "../BotReply.vue";

const tel = ref("");

const botMessage = ref([]);
const messageDisplay = ref(false);
const buttonText = ref("次へ");

function reply() {
  if (botMessage.value.length) return;

  botMessage.value.push("続いて、お支払い方法をお選びください。");
  messageDisplay.value = true;

  buttonText.value = "更新";
}
</script>
