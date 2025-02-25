<script setup>
import { computed } from "vue";
import { useTaskStore } from "@/stores/tasks";
import TaskItem from "../components/tasks/TaskItem.vue";

const taskStore = useTaskStore();

// Group tasks into three lists
const groupedTasks = computed(() => ({
  "To-do": taskStore.tasks.filter((task) => task.list === "To-do"),
  Doing: taskStore.tasks.filter((task) => task.list === "Doing"),
  Done: taskStore.tasks.filter((task) => task.list === "Done"),
}));
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="(tasks, listName) in groupedTasks" :key="listName">
      <h3 class="text-xl font-semibold mb-2">{{ listName }}</h3>

      <ul
        class="space-y-3 bg-white dark:bg-sidebarDark p-4 rounded-lg shadow-md"
      >
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @remove-task="taskStore.removeTask"
          @update-task="taskStore.updateTask"
          @toggle-task="taskStore.toggleTaskCompletion"
          :class="{ 'line-through text-gray-400': task.list === 'Done' }"
        />
      </ul>
    </div>
  </div>
</template>
