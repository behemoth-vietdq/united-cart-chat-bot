<template>
  <FormValidator label="お名前" required>
    <b-col md="6">
      <FormValidator>
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
    </b-col>
  </FormValidator>

  <b-button
    :disabled="!cart.paymentMethodCode"
    class="w-50 mt-3"
    @click="reply()"
  >
    {{ buttonText }}
  </b-button>

  <BotReply :messages="messages" v-if="messageDisplay" />
</template>

<script setup>
import { ref } from "vue";
import BotReply from "@/components/BotReply.vue";

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
  cartStore.increaseStep();
}
</script>
