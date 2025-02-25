<script setup>
import { IconTrash } from "@tabler/icons-vue";
import { ref, watch } from "vue";

const props = defineProps({
  task: Object,
});

const emit = defineEmits(["remove-task", "update-task"]);

// Create a local copy of the task's completed state
const isCompleted = ref(props.task.completed);

// Watch for changes and emit an event to update the parent
watch(isCompleted, (newValue) => {
  const updatedTask = {
    ...props.task,
    completed: newValue,
    list: newValue ? "Done" : "To-do",
  };
  emit("update-task", updatedTask);
});
</script>

<template>
  <li
    class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg transition hover:shadow-lg"
  >
    <!-- Checkbox -->
    <label class="flex items-center cursor-pointer">
      <input type="checkbox" v-model="isCompleted" class="" />
    </label>

    <!-- Task Details -->
    <div class="task-details flex flex-col">
      <span
        class="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-all duration-300"
        :class="{ 'line-through text-gray-400': props.task.list === 'Done' }"
      >
        {{ props.task.title }}
      </span>
      <span
        class="text-sm text-gray-600 dark:text-gray-300 transition-all duration-300"
        :class="{ 'line-through text-gray-400': props.task.list === 'Done' }"
      >
        {{ props.task.description }}
      </span>
    </div>

    <!-- Due Date + Actions -->
    <div class="ms-auto flex items-center space-x-4">
      <span
        class="text-xs font-light text-gray-500 dark:text-gray-400 transition-all duration-300"
        :class="{ 'text-gray-400': props.task.list === 'Done' }"
      >
        Due: {{ props.task.dueDate }}
      </span>

      <!-- Delete Button -->
      <button
        @click="emit('remove-task', props.task.id)"
        class="p-2 rounded-md transition-all hover:bg-red-100 dark:hover:bg-red-900"
      >
        <IconTrash class="text-red-400 hover:text-red-600" stroke="2" />
      </button>
    </div>
  </li>
</template>
