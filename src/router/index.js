import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TestComponent from "@/components/Test/TestComponent.vue";

const routes = [
  {
    path: "/test",
    name: "test",
    component: TestComponent,
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/:role",
    component: HomePage,
  },
  {
    path: "/video",
    name: "video",
    component: () => import("../views/VideoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
