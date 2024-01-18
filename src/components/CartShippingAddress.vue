<template>
  <FormLayout>
    <FormValidator label="お届け先住所" required>
      <b-form-select
        v-model="shippingAddressData.sameWithBillingAddress"
        :options="options"
      />
    </FormValidator>

    <div v-if="!shippingAddressData.sameWithBillingAddress">
      <FormValidator label="お名前" required>
        <b-form-input
          v-model="shippingAddressData.name"
          placeholder="例）山田"
        />
      </FormValidator>

      <FormValidator label="フリガナ" required>
        <b-form-input
          v-model="shippingAddressData.kana"
          placeholder="例）ハナコ"
        />
      </FormValidator>

      <FormValidator label="お名前" required>
        <b-form-input
          v-model="shippingAddressData.tel"
          placeholder="例）0123456789"
        />
      </FormValidator>

      <FormValidator label="郵便番号" required>
        <b-form-input
          v-model="shippingAddressData.postcode"
          placeholder="例）1234567"
        />
      </FormValidator>

      <FormValidator label="都道府県" required>
        <b-form-select
          v-model="shippingAddressData.perfecture"
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
          v-model="shippingAddressData.address01"
          placeholder="例）○○市△△区□町"
        />
      </FormValidator>

      <FormValidator label="住所2（丁目・番地・マンション名・号室" required>
        <b-form-input
          v-model="shippingAddressData.address02"
          placeholder="例）△△ 1-4 ○○マンション101号 "
        />
      </FormValidator>
    </div>

    checkButtonDisable {{ checkButtonDisable }}
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
import { ref, computed } from "vue";
import { prefectures } from "jp-prefectures";

import BotReply from "@/components/BotReply.vue";
import FormLayout from "@/layouts/form.vue";

import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const checkButtonDisable = computed(() => {
  if (shippingAddressData.value.sameWithBillingAddress) return false;

  for (let key in shippingAddressData.value) {
    if (key === "sameWithBillingAddress") continue;

    if (!shippingAddressData.value[key]) return true;
  }

  return false;
});

const prefectureOptions = computed(() => {
  return prefectures().map((p) => ({
    value: p.code,
    text: p.name,
  }));
});

const shippingAddressData = ref(cart.value.shippingAddressData);

const displayBot = ref(false);
const messages = ref([]);
const buttonText = ref("次へ");

const options = [
  {
    text: "上記住所と同じ",
    value: true,
  },
  {
    text: "新しく入力する",
    value: false,
  },
];

function onClick() {
  if (messages.value.length) return;

  displayBot.value = true;
  messages.value.push("You have successfully entered the shipping address");

  buttonText.value = "更新";

  setTimeout(() => {
    cartStore.increaseStep();
  }, 800);
}
</script>
