<template>
  {{ message }}
</template>

<script setup>
import { useCartStore } from "../stores/cart";
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

function onClick() {
  console.log("click");
}
</script>
