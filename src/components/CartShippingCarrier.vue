<template>
  <FormLayout>
    <FormValidator name="shipping_carrier_id" label="配送業者" required>
      <b-form-select
        class="w-100"
        v-model="cart.shippingCarrierId"
        :options="shippingCarrierOptions"
      >
        <template #first>
          <option :value="null">選択してください</option>
        </template>
      </b-form-select>
    </FormValidator>

    <b-button
      :disabled="!cart.shippingCarrierId"
      class="w-100 mt-3 btn"
      @click="onClick"
    >
      {{ buttonText }}
    </b-button>
  </FormLayout>

  <BotReply v-if="displayBot" :messages="messages" />
</template>

<script setup>
import { ref } from "vue";

import BotReply from "@/components/BotReply.vue";
import FormLayout from "@/layouts/form.vue";

import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const shippingCarrierOptions = [
  {
    text: "佐川急便",
    value: 1,
  },
  {
    text: "ヤマト運輸",
    value: 2,
  },
  {
    text: "配x送業者名",
    value: 3,
  },
];

const displayBot = ref(false);
const messages = ref([]);
const buttonText = ref("次へ");

function onClick() {
  if (messages.value.length) return;

  displayBot.value = true;
  messages.value.push("Input Shipping Carrier Success");
  messages.value.push("Now please confirm your purchase");

  buttonText.value = "更新";
  cartStore.increaseStep();
}
</script>
