import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({
    productId: null,
    quantity: 1,
  });

  return {
    // data
    cart,
  };
});
