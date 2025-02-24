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
  emit("update-task", { ...props.task, completed: newValue });
});
</script>

<template>
  <li
    class="flex items-center gap-3 p-4 bg-white dark:bg-sidebarDark shadow-md rounded-lg transition hover:shadow-lg"
  >
    <input
      type="checkbox"
      v-model="isCompleted"
      class="w-5 h-5 accent-primary"
    />
    <span
      :class="{ 'line-through text-gray-400': isCompleted }"
      class="text-lg text-gray-700 dark:text-gray-200"
    >
      {{ props.task.title }}
    </span>
    <button
      @click="emit('remove-task', props.task.id)"
      class="text-red-400 ms-auto text-lg hover:text-red-700 transition"
    >
      <IconTrash stroke="2" />
    </button>
  </li>
</template>
