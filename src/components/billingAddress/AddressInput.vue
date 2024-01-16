<template>
  <FormValidator label="郵便番号" required>
    <b-col md="6">
      <FormValidator>
        <b-form-input
          v-model="addressInfo.postcode"
          placeholder="例）1234567"
        />
      </FormValidator>
    </b-col>
  </FormValidator>

  <FormValidator label="都道府県" required>
    <b-col md="6">
      <FormValidator>
        <b-form-select
          v-model="addressInfo.perfecture"
          placeholder="例）ハナコ"
          :options="prefectureOptions"
        >
          <template #first>
            <option :value="null">選択してください</option>
          </template>
        </b-form-select>
      </FormValidator>
    </b-col>
  </FormValidator>

  <FormValidator label="住所1（市郡区／町・村）" required>
    <b-col md="6">
      <FormValidator>
        <b-form-input
          v-model="addressInfo.address01"
          placeholder="例）○○市△△区□町"
        />
      </FormValidator>
    </b-col>
  </FormValidator>

  <FormValidator label="住所2（丁目・番地・マンション名・号室" required>
    <b-col md="6">
      <FormValidator>
        <b-form-input
          v-model="addressInfo.address02"
          placeholder="例）△△ 1-4 ○○マンション101号 "
        />
      </FormValidator>
    </b-col>
  </FormValidator>

  <b-button :disabled="checkButtonDisable" class="w-50 mt-3" @click="onClick">
    {{ buttonText }}
  </b-button>

  <BotReply v-if="displayBot" :messages="messages" />
</template>

<script setup>
import { prefectures } from "jp-prefectures";

import { ref, computed } from "vue";

import BotReply from "../BotReply.vue";

const prefectureOptions = computed(() => {
  return prefectures().map((p) => ({
    value: p.code,
    text: p.name,
  }));
});

const checkButtonDisable = computed(() =>
  Object.values(addressInfo.value).some((key) => !key)
);

const addressInfo = ref({
  postcode: null,
  perfecture: null,
  address01: null,
  address02: null,
});

const displayBot = ref(false);
const messages = ref([]);
const buttonText = ref("次へ");

function onClick() {
  messages.value.push("test");
  displayBot.value = true;

  buttonText.value = "更新";
}
</script>
