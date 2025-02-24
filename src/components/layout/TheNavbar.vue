<script setup>
import DarkModeToggle from '../DarkModeToggle.vue'
</script>

<template>
  <nav class="flex justify-end items-center p-4 bg-white dark:bg-backgroundDark shadow-md">
    <!-- Languages and Mode -->
    <div class="flex items-center gap-4">
      <button class="p-2 bg-gray-300 dark:bg-gray-600 rounded-md">🌍 AR / EN</button>
      <DarkModeToggle />
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
