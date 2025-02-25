<script setup>
import { useRoute } from "vue-router";
import DarkModeToggle from "../DarkModeToggle.vue";
import { IconListDetails, IconLayoutColumns } from "@tabler/icons-vue";

const route = useRoute();
</script>

<template>
  <nav
    class="flex items-center justify-between space-x-8 p-4 bg-white dark:bg-backgroundDark shadow-md"
  >
    <!-- Task View -->
    <div class="flex flex-1 justify-center space-x-4">
      <RouterLink
        to="/list"
        class="hover:text-primary dark:hover:text-primary"
        :class="{
          'text-primary font-bold  ': route.path === '/list',
          'text-textLight dark:text-textDark': route.path !== '/list',
        }"
      >
        <IconListDetails
          stroke="2"
          width="30"
          height="30"
          class="inline-block"
        />
        List
      </RouterLink>
      <div class="divider border"></div>
      <RouterLink
        to="/columns"
        class="hover:text-primary dark:hover:text-primary"
        :class="{
          'text-primary font-bold  ': route.path === '/columns',
          'text-textLight dark:text-textDark': route.path !== '/columns',
        }"
        ><IconLayoutColumns
          stroke="2"
          width="30"
          height="30"
          class="inline-block"
        />
        Column
      </RouterLink>
    </div>

    <!-- DarkMode Toggle -->
    <div class="flex items-center gap-4">
      <DarkModeToggle />
    </div>
  </nav>
</template>

<style scoped></style>
