<template>
  <div class="mt-5">
    <BotReply :messages="messages" />

    <CartProduct v-if="step >= 1" />
    <NameAndKanaInput v-if="step >= 2" />
    <AddressInput v-if="step >= 3" />
    <TelInput v-if="step >= 4" />
    <CartShippingAddress v-if="step >= 5" />
    <CartPayment v-if="step >= 6" />
    <CartShippingCarrier v-if="step >= 7" />
    <CartConfirm v-if="step >= 8" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import CartProduct from "@/components/CartProduct.vue";
import AddressInput from "@/components/billingAddress/AddressInput.vue";
import CartPayment from "@/components/CartPayment.vue";
import NameAndKanaInput from "@/components/billingAddress/NameAndKanaInput.vue";
import TelInput from "@/components/billingAddress/TelInput.vue";
import CartShippingCarrier from "@/components/CartShippingCarrier.vue";
import CartConfirm from "@/components/CartConfirm.vue";
import CartShippingAddress from "@/components/CartShippingAddress.vue";

import BotReply from "@/components/BotReply.vue";

import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { step } = storeToRefs(cartStore);

const messages = ref([]);

onMounted(() => {
  setTimeout(() => messages.value.push("Hello"), 500);
  setTimeout(
    () =>
      messages.value.push(
        "To begin your order please select product and quantity"
      ),
    1000
  );

  setTimeout(() => cartStore.increaseStep(), 1800);
});
</script>

<style scoped></style>
