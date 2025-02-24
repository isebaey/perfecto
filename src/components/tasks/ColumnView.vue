<script setup>
import TaskItem from "./TaskItem.vue";

const columnTasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

const removeTask = (id) => {
  console.log("Removing task with ID:", id);
};
</script>

<template>
  <div>
    <h2 class="text-xl font-bold">Tasks in Columns</h2>
    <ul class="mt-6 space-y-3">
      <TaskItem
        v-for="task in columnTasks"
        :key="task.id"
        :task="task"
        @remove-task="removeTask"
      />
    </ul>
  </div>
</template>
