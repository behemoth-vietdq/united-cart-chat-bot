<template>
  <FormLayout>
    <FormValidator label="郵便番号" required>
      <b-form-input
        v-model="billingAddressData.postcode"
        placeholder="例）1234567"
      />
    </FormValidator>

    <FormValidator label="都道府県" required>
      <b-form-select
        v-model="billingAddressData.perfecture"
        placeholder="例）ハナコ"
        :options="prefectureOptions"
      >
        <template #first>
          <option :value="null">選択してください</option>
        </template>
      </b-form-select>
    </FormValidator>

    <FormValidator label="住所1（市郡区／町・村）" required>
      <b-form-input
        v-model="billingAddressData.address01"
        placeholder="例）○○市△△区□町"
      />
    </FormValidator>

    <FormValidator label="住所2（丁目・番地・マンション名・号室" required>
      <b-form-input
        v-model="billingAddressData.address02"
        placeholder="例）△△ 1-4 ○○マンション101号 "
      />
    </FormValidator>

    <b-button
      :disabled="checkButtonDisable"
      class="w-100 mt-3 btn"
      @click="onClick"
    >
      {{ buttonText }}
    </b-button>
  </FormLayout>

  <BotReply v-if="displayBot" :messages="messages" />
</template>

<script setup>
import { prefectures } from "jp-prefectures";

import { ref, computed } from "vue";

import BotReply from "@/components/BotReply.vue";
import FormLayout from "@/layouts/form.vue";

import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const billingAddressData = ref(cart.value.billingAddressData);

const prefectureOptions = computed(() => {
  return prefectures().map((p) => ({
    value: p.code,
    text: p.name,
  }));
});

const checkButtonDisable = computed(() => {
  for (let key in billingAddressData.value) {
    if (key === "tel") continue;

    if (!billingAddressData.value[key]) return true;
  }

  return false;
});

const displayBot = ref(false);
const messages = ref([]);
const buttonText = ref("次へ");

function onClick() {
  if (messages.value.length) return;

  messages.value.push("test");
  displayBot.value = true;

  buttonText.value = "更新";
  setTimeout(() => {
    cartStore.increaseStep();
  }, 800);
}
</script>
