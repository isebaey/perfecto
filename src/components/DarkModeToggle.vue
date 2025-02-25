<script setup>
import { IconSun, IconMoon } from "@tabler/icons-vue";
import { ref, watchEffect } from "vue";

const isDark = ref(localStorage.getItem("them") === "dark");

// Watch for them changes
watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("them", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("them", "light");
  }
});
</script>

<template>
  <button
    @click="isDark = !isDark"
    class="p-2 rounded-md bg-sidebarLight text-textLight dark:bg-sidebarDark dark:text-textDark"
  >
    <IconMoon v-if="isDark" stroke="2" />
    <IconSun v-else stroke="2" />
  </button>
</template>
