<script setup>
import { IconSun } from '@tabler/icons-vue'
import { IconMoon } from '@tabler/icons-vue'
import { onMounted, ref } from 'vue'

const isDark = ref(localStorage.getItem('them') === 'dark')

// Change theme on Toggle
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('them', isDark.value ? 'dark' : 'light')
}

// Set theme on load
onMounted(() => {
  if (localStorage.getItem('them') === 'dark') {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <button @click="toggleDarkMode" class="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
    <IconMoon stroke="{2}" v-if="isDark" />
    <IconSun stroke="{2}" v-else />
  </button>
</template>

<style lang="scss" scoped></style>
