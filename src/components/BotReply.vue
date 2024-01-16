<template>
  <div class="bot-message">{{ message }}</div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: () => "",
  },
});
</script>

<style scoped>
.bot-message {
  padding: 5px;
  background-color: rgb(223, 55, 114);
  color: white;
  margin-top: 1px;
  width: 50%;
  border-radius: 10px;
}
</style>
