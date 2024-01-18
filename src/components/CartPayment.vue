<template>
  <FormLayout>
    <FormValidator label="お名前" required>
      <b-form-select
        v-model="cart.paymentMethodCode"
        placeholder="例）ハナコ"
        :options="paymentMethodOptions"
      >
        <template #first>
          <option :value="null">選択してください</option>
        </template>
      </b-form-select>
    </FormValidator>

    <b-button
      :disabled="!cart.paymentMethodCode"
      class="w-100 mt-3 btn"
      @click="reply()"
    >
      {{ buttonText }}
    </b-button>
  </FormLayout>

  <BotReply :messages="messages" v-if="messageDisplay" />
</template>

<script setup>
import { ref } from "vue";
import BotReply from "@/components/BotReply.vue";
import FormLayout from "@/layouts/form.vue";

import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const paymentMethodOptions = [
  {
    text: "代金引換",
    value: "cod",
  },
  {
    text: "PayJp",
    value: "payjp",
  },
  {
    text: "GMOクレジットカード一括",
    value: "gmo_ab",
  },
];

const messages = ref([]);
const messageDisplay = ref(false);
const buttonText = ref("次へ");

function reply() {
  if (messages.value.length) return;

  messageDisplay.value = true;
  messages.value.push("input payment success");

  buttonText.value = "更新";
  setTimeout(() => {
    cartStore.increaseStep();
  }, 800);
}
</script>
