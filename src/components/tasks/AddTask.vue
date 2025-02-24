<script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/tasks";
import { IconPlus } from "@tabler/icons-vue";

const taskStore = useTaskStore();
const newTaskTitle = ref("");

const addNewTask = () => {
  if (!newTaskTitle.value.trim()) return;
  taskStore.addTask({ title: newTaskTitle.value, completed: false });
  newTaskTitle.value = "";
};
</script>

<template>
  <div class="flex gap-3">
    <input
      v-model="newTaskTitle"
      placeholder="Enter new task..."
      class="p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-primary outline-none transition w-3/4"
    />
    <button
      @click="addNewTask"
      class="px-4 py-3 bg-primary text-white hover:bg-accent active:scale-95 duration-75 rounded-lg shadow-md hover:bg-primary-dark transition w-1/4 flex justify-center align-middle gap-x-1"
    >
      <IconPlus stroke="3" class="inline-block" /> Add
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
