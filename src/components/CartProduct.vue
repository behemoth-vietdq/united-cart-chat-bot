<template>
  <b-row>
    <b-col cols="3">
      <FormValidator name="product_id" label="Product">
        <b-form-select
          class="w-100"
          v-model="cart.productId"
          :options="productOptions"
        >
          <template #first>
            <option :value="null">選択してください</option>
          </template>
        </b-form-select>
      </FormValidator>
    </b-col>

    <b-col cols="3">
      <FormValidator name="quantity" label="Quantity">
        <b-form-select
          class="w-100"
          v-model="cart.quantity"
          :options="quantityOption"
        >
          <template #first>
            <option :value="null">選択してください</option>
          </template>
        </b-form-select>
      </FormValidator>
    </b-col>
  </b-row>

  <b-row class="mt-3">
    <b-col cols="6">
      <b-button
        :disabled="!cart.quantity || !cart.productId"
        class="w-100"
        @click="onClick"
      >
        {{ buttonText }}
      </b-button>
    </b-col>
  </b-row>

  <BotReply v-if="displayBot" :messages="messages" />
</template>

<script setup>
import { ref } from "vue";

import BotReply from "@/components/BotReply.vue";

import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const quantityOption = [1, 2, 3, 4, 5];
const productOptions = [
  {
    text: "Iphone 15",
    value: 1,
  },
  {
    text: "SamSung",
    value: 2,
  },
  {
    text: "Product 3",
    value: 3,
  },
];

const displayBot = ref(false);
const messages = ref([]);
const buttonText = ref("次へ");

function onClick() {
  if (messages.value.length) return;

  displayBot.value = true;
  messages.value.push("test");

  buttonText.value = "更新";
  cartStore.increaseStep();
}
</script>
