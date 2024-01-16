<template>
  <CartProduct />
  <AddressInput />
  <NameAndKanaInput />
  <TelInput />
  <CartPayment />
</template>

<script setup>
import CartProduct from "../components/CartProduct.vue";
import AddressInput from "../components/billingAddress/AddressInput.vue";
import CartPayment from "../components/CartPayment.vue";
import NameAndKanaInput from "../components/billingAddress/NameAndKanaInput.vue";
import TelInput from "../components/billingAddress/TelInput.vue";
</script>

<style scoped></style>
