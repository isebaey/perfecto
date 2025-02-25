<script setup>
import TaskItem from "./TaskItem.vue";

defineProps({
  title: String,
  tasks: Array,
});

defineEmits(["remove-task", "update-task", "toggle-task"]);
</script>

<template>
  <div>
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <ul class="space-y-3 bg-white dark:bg-sidebarDark p-4 rounded-lg shadow-md">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @remove-task="$emit('remove-task', task.id)"
        @update-task="$emit('update-task', task)"
        @toggle-task="$emit('toggle-task', task.id)"
      />
    </ul>
  </div>
</template>
