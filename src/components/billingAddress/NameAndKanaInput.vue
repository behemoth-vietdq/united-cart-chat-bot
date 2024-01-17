<template>
  <FormValidator label="お名前" required>
    <b-col md="6">
      <FormValidator>
        <b-form-input v-model="name" placeholder="例）山田" />
      </FormValidator>
    </b-col>
  </FormValidator>

  <FormValidator label="フリガナ" required v-if="name">
    <b-col md="6">
      <FormValidator>
        <b-form-input v-model="kana" placeholder="例）ハナコ" />
      </FormValidator>
    </b-col>
  </FormValidator>

  <b-button :disabled="!name || !kana" class="w-50 mt-3" @click="reply()">
    {{ buttonText }}
  </b-button>

  <BotReply :messages="botMessage" v-if="messageDisplay" />
</template>

<script setup>
import { ref } from "vue";
import BotReply from "../BotReply.vue";

const name = ref("");
const kana = ref("");

const botMessage = ref([]);

const messageDisplay = ref(false);
const buttonText = ref("次へ");

function reply() {
  if (botMessage.value.length) return;

  botMessage.value.push(
    "お お様、この度は当社商品をお買い求めいただきありがとうございます！"
  );
  botMessage.value.push("ご住所を郵便番号からご入力ください。");
  messageDisplay.value = true;

  buttonText.value = "更新";
}
</script>
