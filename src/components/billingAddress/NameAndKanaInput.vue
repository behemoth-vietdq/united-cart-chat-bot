<template>
  <FormLayout>
    <FormValidator label="お名前" required>
      <b-form-input v-model="billingAddressData.name" placeholder="例）山田" />
    </FormValidator>

    <FormValidator label="フリガナ" required v-if="billingAddressData.name">
      <b-form-input
        v-model="billingAddressData.kana"
        placeholder="例）ハナコ"
      />
    </FormValidator>

    <b-button
      :disabled="!billingAddressData.name || !billingAddressData.kana"
      class="w-100 mt-3 btn"
      @click="reply()"
    >
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
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const billingAddressData = ref(cart.value.billingAddressData);

const botMessage = ref([]);

const messageDisplay = ref(false);
const buttonText = ref("次へ");

function reply() {
  if (botMessage.value.length) return;

  botMessage.value.push(
    "お お様、この度は当社商品をお買い求めいただきありがとうございます！"
  );
  setTimeout(() => {
    botMessage.value.push("ご住所を郵便番号からご入力ください。");
  }, 500);

  messageDisplay.value = true;

  buttonText.value = "更新";
  setTimeout(() => {
    cartStore.increaseStep();
  }, 1300);
}
</script>
