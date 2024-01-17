<template>
  <AppHeader />
  <div class="chatbox">
    <slot />
  </div>
</template>

<script setup>
import AppHeader from "@/components/layouts/AppHeader.vue";
</script>
<style scoped>
.chatbox {
  background-color: rgb(240, 214, 214);
  padding: 20px;
}
</style>
