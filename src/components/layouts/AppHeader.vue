<template>
  <div class="chatbox-header">
    <b-button class="close-btn">
      <font-awesome-icon icon="fa-solid fa-x" class="close-icon"
    /></b-button>
  </div>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faX } from "@fortawesome/free-solid-svg-icons";
library.add(faX);
</script>
<style scoped>
.close-btn {
  background-color: #c2281c;
  float: right;
}
.chatbox-header {
  width: 100%;
  height: 50px;
  background-color: #c2281c;
  overflow: hidden;
}
.close-icon {
  color: white;
}
</style>
