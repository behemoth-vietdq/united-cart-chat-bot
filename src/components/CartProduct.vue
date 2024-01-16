<template>
  <b-row>
    <b-col cols="3">
      <FormValidator name="product_id" label="Product">
        <VSelect
          class="w-100"
          v-model="cart.productId"
          :options="productOptions"
          :reduce="(option) => option.value"
        />
      </FormValidator>
    </b-col>

    <b-col cols="3">
      <FormValidator name="quantity" label="Quantity">
        <VSelect
          class="w-100"
          v-model="cart.quantity"
          :options="quantityOption"
        />
      </FormValidator>
    </b-col>
  </b-row>

  <b-row class="mt-3">
    <b-col cols="6">
      <b-button class="w-100" @click="onClick">Submit</b-button>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const quantityOption = [1, 2, 3, 4, 5];
const productOptions = [
  {
    label: "Iphone 15",
    value: 1,
  },
  {
    label: "SamSung",
    value: 2,
  },
  {
    label: "Product 3",
    value: 3,
  },
];

function onClick() {
  console.log("click");
}
</script>

<style lang="scss" scoped></style>
