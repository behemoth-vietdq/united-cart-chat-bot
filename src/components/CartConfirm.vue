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
        :disabled="!cart.termAccepted"
        type="submit"
        @click="reply()"
        name="submit"
        id="submit"
        class="confirm-btn"
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
  messages.value.push("i'm oke i'm fai quìn cha nà");

  window.parent.postMessage(
    JSON.stringify(cart.value),
    "http://localhost:3000"
  );
  cartStore.increaseStep();
}
</script>

<style scoped>
.confirm-btn {
  width: 95%;
  background-image: linear-gradient(
    to right,
    #dd5e89 0%,
    #f7bb97 51%,
    #dd5e89 100%
  );
  margin: 0 auto;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 60px;
  display: block;
}

.confirm-btn:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

.confirm-btn:disabled {
  opacity: 0.5;
}
</style>
