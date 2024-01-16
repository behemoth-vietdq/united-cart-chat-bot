<template>
  <FormValidator label="お名前" required>
    <b-col md="6">
      <FormValidator>
        <b-form-input v-model="tel" placeholder="例）0123456789" />
      </FormValidator>
    </b-col>
  </FormValidator>

  <b-button :disabled="!tel" class="w-50 mt-3"> 次へ </b-button>
</template>

<script setup>
import { ref } from "vue";

const tel = ref("");
</script>
