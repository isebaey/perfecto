<script setup>
import { IconChecklist } from "@tabler/icons-vue";
import { useTaskStore } from "@/stores/tasks";
import AddTask from "./AddTask.vue";
import TaskItem from "./TaskItem.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h2
      class="text-3xl font-bold mb-4 text-sidebarDark dark:text-white flex align-middle"
    >
      <IconChecklist
        stroke="2"
        height="40px"
        width="40px"
        class="inline-block text-primary hover:text-accent transition ease-in delay-75"
      />
      Today's Tasks
    </h2>

    <!-- Add Task Component -->
    <AddTask />

    <!-- Task List -->
    <ul class="mt-6 space-y-3">
      <TaskItem
        v-for="task in taskStore.tasks"
        :key="task.id"
        :task="task"
        @remove-task="taskStore.removeTask"
      />
    </ul>
  </div>
</template>
