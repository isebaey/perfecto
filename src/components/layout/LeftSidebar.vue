<script setup>
import {
  IconLayoutSidebarRightCollapse,
  IconListCheck,
  IconCalendarMonth,
  IconChevronsRight,
  IconSettings,
} from '@tabler/icons-vue'
import { ref } from 'vue'

const isCollapsed = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const menuItems = [
  { label: 'Upcoming', icon: IconChevronsRight },
  { label: 'Today', icon: IconListCheck },
  { label: 'Calendar', icon: IconCalendarMonth },
  { label: 'Settings', icon: IconSettings },
]
</script>

<template>
  <aside
    :class="[
      'h-screen p-4 bg-sidebarLight dark:bg-sidebarDark text-textLight dark:text-textDark transition-all duration-300',
      isCollapsed ? 'w-20' : 'w-64',
    ]"
  >
    <!-- Sidebar Header -->
    <div class="flex items-center justify-between mb-12">
      <!-- Logo -->
      <h1 v-if="!isCollapsed" class="text-2xl font-bold transition-opacity duration-300">
        Perfecto 👌
      </h1>
      <button
        @click="toggleSidebar"
        class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <IconLayoutSidebarRightCollapse
          :class="{ 'rotate-180': isCollapsed }"
          class="transition-transform duration-300"
          stroke-width="2"
        />
      </button>
    </div>

    <!-- Menu -->
    <h2 v-if="!isCollapsed" class="text-base font-bold mb-6 transition-opacity duration-300">
      Menu
    </h2>
    <ul class="space-y-6 text-lg">
      <li
        v-for="item in menuItems"
        :key="item.label"
        class="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white transition"
      >
        <component :is="item.icon" stroke-width="2" class="text-xl" />
        <span v-if="!isCollapsed" class="transition-opacity duration-300">{{ item.label }}</span>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped></style>
