<script setup>
import {
  IconLayoutSidebarLeftCollapse,
  IconListTree,
  IconChevronsRight,
} from "@tabler/icons-vue";
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const isCollapsed = ref(false);
const isMobile = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleMobileSidebar = () => {
  isMobile.value = !isMobile.value;
};

const menuItems = [{ label: "Today", icon: IconListTree, to: "/list" }];
</script>

<template>
  <!-- Mobile Sidebar Button -->
  <button
    @click="toggleMobileSidebar"
    class="md:hidden fixed top-4 left-3 bg-sidebarLight dark:bg-sidebarDark text-textLight dark:text-textDark p-2 rounded-md z-50"
  >
    <IconChevronsRight v-if="!isMobile" />
    <IconChevronsRight v-else class="rotate-180" />
  </button>

  <!-- Sidebar -->
  <aside
    :class="[
      'fixed md:static top-0 left-0 h-screen p-4 bg-sidebarLight dark:bg-sidebarDark text-textLight dark:text-textDark transition-all duration-300 shadow-lg z-40',
      isCollapsed ? 'w-16' : 'w-64',
      isMobile ? 'translate-x-0 ' : '-translate-x-full md:translate-x-0',
    ]"
  >
    <div class="flex items-center justify-between mb-6">
      <h1 v-if="!isCollapsed" class="text-2xl font-bold transition-opacity">
        Perfecto 👌
      </h1>
      <button
        @click="toggleSidebar"
        class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition hidden md:block"
      >
        <IconLayoutSidebarLeftCollapse
          :class="{ 'rotate-180': isCollapsed }"
          class="transition-transform duration-300"
          stroke-width="2"
        />
      </button>
    </div>

    <!-- Menu -->
    <h2 v-if="!isCollapsed" class="text-sm font-semibold uppercase mt-8">
      Menu
    </h2>
    <ul class="space-y-4 text-lg mt-2">
      <RouterLink
        v-for="item in menuItems"
        :to="item.to"
        :key="item.label"
        class="flex items-center gap-3 p-2 rounded-lg transition"
        :class="[
          isCollapsed ? 'justify-center' : '',
          route.path === item.to
            ? 'font-bold bg-gray-200 dark:bg-gray-700'
            : 'hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary',
        ]"
      >
        <component :is="item.icon" stroke-width="2" />
        <span v-if="!isCollapsed">{{ item.label }}</span>
      </RouterLink>
    </ul>
  </aside>
</template>
