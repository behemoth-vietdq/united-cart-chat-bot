<template>
  <FormValidator label="お名前" required>
    <b-col md="6">
      <FormValidator>
        <b-form-input v-model="name" placeholder="例）山田" />
      </FormValidator>
    </b-col>
  </FormValidator>

  <FormValidator label="フリガナ" required v-if="name">
    <b-col md="6">
      <FormValidator>
        <b-form-input v-model="kana" placeholder="例）ハナコ" />
      </FormValidator>
    </b-col>
  </FormValidator>

  <b-button :disabled="!name || !kana" class="w-50 mt-3"> 次へ </b-button>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const kana = ref("");
</script>
