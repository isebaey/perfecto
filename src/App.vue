<script setup>
import { RouterView } from "vue-router";
import LeftSidebar from "./components/layout/LeftSidebar.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Left Sidebar -->
    <LeftSidebar class="w-64" />

    <!-- Main Content Area -->
    <div class="flex flex-col flex-grow">
      <!-- Navbar -->
      <TheNavbar class="w-full" />

      <!-- Main Content -->
      <main
        class="flex-grow p-3 md:p-6 bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark"
      >
        <RouterView />
      </main>
    </div>
  </div>
</template>
