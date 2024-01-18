import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({
    productId: "1",
    quantity: "1",
    paymentMethodCode: "cod",
    shippingCarrierId: "1",
    termAccepted: false,
    billingAddressData: {
      postcode: "100-0001",
      perfecture: "1",
      address01: "お名前",
      address02: "お名前",
      name: "お",
      kana: "オ",
      tel: "1234567",
    },
    shippingAddressData: {
      sameWithBillingAddress: true,
      postcode: "100-0001",
      perfecture: "1",
      address01: "お名前",
      address02: "お名前",
      name: "お",
      kana: "オ",
      tel: "1234567",
    },
  });
  const step = ref(0);

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
