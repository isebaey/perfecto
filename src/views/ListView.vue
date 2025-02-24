<script setup>
import { useTaskStore } from "@/stores/tasks";
import TaskItem from "@/components/tasks/TaskItem.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold mb-4 text-sidebarDark dark:text-white">
      Today's Tasks
    </h2>

    <ul class="mt-6 space-y-3">
      <TaskItem
        v-for="task in taskStore.tasks"
        :key="task.id"
        :task="task"
        @remove-task="taskStore.removeTask"
        @update-task="taskStore.updateTask"
      />
    </ul>
  </div>
</template>
