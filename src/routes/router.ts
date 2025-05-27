import { createRouter,createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Registration from "../pages/Registration.vue";
import Auth from "../pages/Auth.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/auth", name: "Auth", component: Auth },
  { path: "/registration", name: "Registration", component: Registration },
];

const router = createRouter({
  history: createWebHistory("/Todo_list-practice/"),
  routes,
});

export default router;
