<script setup>
import {
  IconLayoutSidebarLeftCollapse,
  IconListTree,
  IconCalendarMonth,
  IconChevronsRight,
  IconSquareFilled,
} from "@tabler/icons-vue";
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const menuItems = [
  { label: "Upcoming", icon: IconChevronsRight, to: "/upcoming" },
  { label: "Today", icon: IconListTree, to: "/list" },
  { label: "Calendar", icon: IconCalendarMonth, to: "/calendar" },
];

const listItems = [
  { label: "Personal", icon: IconSquareFilled },
  { label: "Work", icon: IconSquareFilled },
  { label: "List 1", icon: IconSquareFilled },
];

const tagItems = [{ label: "Tag 1" }, { label: "Tag 2" }, { label: "Tag 3" }];
</script>

<template>
  <aside
    :class="[
      'h-screen p-4 bg-sidebarLight dark:bg-sidebarDark text-textLight dark:text-textDark transition-all duration-300',
      isCollapsed ? 'max-w-20' : 'w-64',
    ]"
  >
    <!-- Sidebar Header -->
    <div class="flex items-center justify-between mb-6">
      <!-- Logo -->
      <h1 v-if="!isCollapsed" class="text-2xl font-bold transition-opacity">
        Perfecto 👌
      </h1>
      <button
        @click="toggleSidebar"
        class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <IconLayoutSidebarLeftCollapse
          :class="{ 'rotate-180': isCollapsed }"
          class="transition-transform duration-300"
          stroke-width="2"
        />
      </button>
    </div>

    <!-- Menu -->
    <h2 v-if="!isCollapsed" class="text-sm font-semibold uppercase mt-4">
      Menu
    </h2>
    <ul class="space-y-1 text-lg mt-2">
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

    <hr v-if="!isCollapsed" class="my-3 opacity-50" />

    <!-- Lists -->
    <h2 v-if="!isCollapsed" class="text-sm font-semibold uppercase mt-4">
      Lists
    </h2>
    <ul v-if="!isCollapsed" class="space-y-1 text-lg mt-2">
      <li
        v-for="list in listItems"
        :key="list.label"
        class="flex items-center gap-3 p-2 rounded-lg transition cursor-pointer"
        :class="['hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary']"
      >
        <component :is="list.icon" stroke-width="2" class="text-xl" />
        <span>{{ list.label }}</span>
      </li>
    </ul>

    <hr v-if="!isCollapsed" class="my-3 opacity-50" />

    <!-- Tags -->
    <h2 v-if="!isCollapsed" class="text-sm font-semibold uppercase mt-4">
      Tags
    </h2>
    <ul v-if="!isCollapsed" class="space-y-1 text-lg mt-2">
      <li
        v-for="tag in tagItems"
        :key="tag.label"
        class="flex items-center gap-3 p-2 rounded-lg transition cursor-pointer"
        :class="['hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary']"
      >
        <span>{{ tag.label }}</span>
      </li>
    </ul>
  </aside>
</template>
