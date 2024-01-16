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
            <option :value="''">選択してください</option>
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

  <b-button :disabled="addressInfo" class="w-50 mt-3"> 次へ </b-button>
</template>

<script setup>
import { prefectures } from "jp-prefectures";

import { ref, computed } from "vue";

const prefectureOptions = computed(() => {
  return prefectures().map((p) => ({
    value: p.code,
    text: p.name,
  }));
});

const addressInfo = ref({
  postcode: "",
  address01: "",
  address02: "",
  perfecture: "",
});
</script>
