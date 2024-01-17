import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({
    productId: null,
    quantity: null,
    paymentMethodCode: null,
    shippingCarrierId: null,
    termAccepted: null,
  });
  const step = ref(1);

  function increaseStep() {
    step.value++;
  }

  return {
    // data
    cart,
    step,

    // function
    increaseStep,
  };
});
