<template>
  <FormLayout>
    <form-validator class="mt-4 pt-2 mb-3" name="termAccepted">
      <b-form-checkbox
        v-model="cart.termAccepted"
        name="agree_check"
        id="agree_check"
      >
        <a href="https://test.unicorncart.jp/info/customer_term">利用規約</a>
        に同意して申込みます。未成年者については法定代理人の同意を得ていることを確認します
      </b-form-checkbox>
    </form-validator>

    <div class="text-center my-5">
      <b-button
        size="lg"
        variant="success"
        type="submit"
        @click="reply()"
        name="submit"
        id="submit"
        class="w-100 confirm-btn"
      >
        確認ページへ進む
      </b-button>
    </div>
  </FormLayout>

  <BotReply :messages="messages" v-if="messageDisplay" />
</template>

<script setup>
import { ref } from "vue";
import BotReply from "@/components/BotReply.vue";
import FormLayout from "@/layouts/form.vue";

import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const messages = ref([]);
const messageDisplay = ref(false);

function reply() {
  if (messages.value.length) return;

  messageDisplay.value = true;
  messages.value.push("ご注文ありがとうございました。");

  // cartStore.increaseStep();
}
</script>

<style scoped>
.confirm-btn {
  background-color: rgb(145, 232, 232);
}
</style>
