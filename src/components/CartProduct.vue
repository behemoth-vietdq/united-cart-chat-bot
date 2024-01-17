<template>
  <FormLayout>
    <FormValidator name="product_id" label="商品" required>
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

    <FormValidator name="quantity" label="商品の個数" required>
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

    <b-button
      :disabled="!cart.quantity || !cart.productId"
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
