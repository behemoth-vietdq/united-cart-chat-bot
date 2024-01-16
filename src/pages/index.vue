<template>
  <CartProduct />
  <AddressInput />
  <NameAndKanaInput />
  <TelInput />
</template>

<script setup>
import CartProduct from "../components/CartProduct.vue";
import AddressInput from "../components/billingAddress/AddressInput.vue";
import NameAndKanaInput from "../components/billingAddress/NameAndKanaInput.vue";
import TelInput from "../components/billingAddress/TelInput.vue";
</script>

<style scoped></style>
