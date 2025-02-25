<script setup>
import {
  IconChecklist,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-vue";
import { useTaskStore } from "@/stores/tasks";
import { ref, computed } from "vue";
import AddTask from "./AddTask.vue";
import TaskItem from "./TaskItem.vue";

const taskStore = useTaskStore();
const showCompleted = ref(true); // Toggle for completed tasks

// Separate active and completed tasks
const activeTasks = computed(() =>
  taskStore.tasks.filter((task) => !task.completed)
);
const completedTasks = computed(() =>
  taskStore.tasks.filter((task) => task.completed)
);

const toggleCompletedSection = () => {
  showCompleted.value = !showCompleted.value;
};
</script>

<template>
  <div class="md:p-6 max-w-2xl mx-auto">
    <!-- Heading -->
    <h2
      class="text-3xl font-bold mb-4 text-sidebarDark dark:text-white flex items-center"
    >
      <IconChecklist
        stroke="2"
        height="40px"
        width="40px"
        class="inline-block text-primary hover:text-accent transition"
      />
      <span class="ml-2">Today's Tasks</span>
    </h2>

    <!-- Add Task Component -->
    <AddTask />

    <!-- Active Task List -->
    <ul v-if="activeTasks.length" class="mt-6 space-y-3">
      <TaskItem
        v-for="task in activeTasks"
        :key="task.id"
        :task="task"
        @remove-task="taskStore.removeTask"
        @update-task="taskStore.updateTask"
      />
    </ul>
    <p v-else class="text-gray-500 dark:text-gray-400 text-center mt-4">
      No active tasks 🎉
    </p>

    <!-- Completed Task List -->
    <div v-if="completedTasks.length" class="mt-8">
      <button
        @click="toggleCompletedSection"
        class="flex items-center text-gray-600 dark:text-gray-300 text-lg font-semibold w-full justify-between hover:text-primary"
      >
        Completed Tasks ({{ completedTasks.length }})
        <component :is="showCompleted ? IconChevronUp : IconChevronDown" />
      </button>

      <ul v-show="showCompleted" class="mt-4 space-y-3">
        <TaskItem
          v-for="task in completedTasks"
          :key="task.id"
          :task="task"
          @remove-task="taskStore.removeTask"
          @update-task="taskStore.updateTask"
        />
      </ul>
    </div>
  </div>
</template>
