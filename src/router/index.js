import ListView from "@/components/tasks/ListView.vue";
import ColumnView from "@/views/ColumnView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/list" },
    { path: "/list", component: ListView },
    { path: "/columns", component: ColumnView },
  ],
});

export default router;
