<template>
  <CartProduct />
  <NameAndKanaInput v-if="step >= 2" />
  <AddressInput v-if="step >= 3" />
  <TelInput v-if="step >= 4" />
  <CartPayment v-if="step >= 5" />
  <CartShippingCarrier v-if="step >= 6" />
  <CartConfirm v-if="step >= 7" />
</template>

<script setup>
import CartProduct from "@/components/CartProduct.vue";
import AddressInput from "@/components/billingAddress/AddressInput.vue";
import CartPayment from "@/components/CartPayment.vue";
import NameAndKanaInput from "@/components/billingAddress/NameAndKanaInput.vue";
import TelInput from "@/components/billingAddress/TelInput.vue";
import CartShippingCarrier from "@/components/CartShippingCarrier.vue";
import CartConfirm from "@/components/CartConfirm.vue";

import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { step } = storeToRefs(cartStore);
</script>

<style scoped></style>
