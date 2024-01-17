<template>
  <div
    v-for="(message, index) in messages"
    :key="index"
    class="d-flex align-items-center my-2"
  >
    <div class="bot-avatar">
      <img src="@/assets/images/avatar.webp" class="w-100 avatar" />
    </div>

    <div class="bot-message">{{ message }}</div>
  </div>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped lans="scss">
.bot-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  .avatar {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
}
.bot-message {
  padding: 10px;
  background-color: rgb(223, 55, 114);
  color: white;
  width: fit-content;
  margin-left: 10px;
  border-radius: 10px 10px 10px 0;
}
</style>
