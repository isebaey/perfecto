import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  // Reactive state (Tasks)
  const tasks = ref(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        title: "Complete Vue Project",
        description: "Work on the sidebar navigation and routing",
        completed: false,
        dueDate: "2025-02-25",
        tag: "high",
        list: "To-do",
      },
      {
        id: 2,
        title: "Play Football ⚽",
        description: "Go to club and play football with boys",
        completed: false,
        dueDate: "2025-02-24",
        tag: "low",
        list: "Doing",
      },
      {
        id: 3,
        title: "Workout Session 💪",
        description: "Go to the gym and complete leg day",
        completed: false,
        dueDate: "2025-02-26",
        tag: "low",
        list: "Doning",
      },
      {
        id: 4,
        title: "Grocery Shopping",
        description: "Buy vegetables, fruits, and dairy products",
        completed: false,
        dueDate: "2025-02-25",
        tag: "medium",
        list: "Done",
      },
      {
        id: 5,
        title: "Read a Book 📖",
        description: "Read 30 pages of 'Atomic Habits'",
        completed: false,
        dueDate: "2025-02-28",
        tag: "low",
        list: "To-do",
      },
      {
        id: 6,
        title: "Call Mom ❤️",
        description: "Catch up and check how she's doing",
        completed: false,
        dueDate: "2025-02-24",
        tag: "high",
        list: "To-do",
      },
    ]
  );

  // Automatically update local storage when tasks change
  watch(
    tasks,
    () => {
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
    },
    { deep: true }
  );

  // Actions to modify tasks
  const addTask = (task) =>
    tasks.value.push({ id: Date.now(), list: "To-do", ...task });

  const removeTask = (taskId) => {
    tasks.value = tasks.value.filter((task) => task.id !== taskId);
  };

  const toggleTaskCompletion = (taskId) => {
    const task = tasks.value.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
      task.list = task.completed ? "Done" : "To-do";
    }
  };

  const updateTask = (updatedTask) => {
    const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) tasks.value[index] = updatedTask;
  };

  return { tasks, addTask, removeTask, toggleTaskCompletion, updateTask };
});
