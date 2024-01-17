<template>
  <DefaultLayout>
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <div>
          <component :is="Component" :key="route.path" />
        </div>
      </transition>
    </router-view>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/default.vue";
</script>

<style scoped></style>
