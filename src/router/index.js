import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("../views/Login/index.vue");
const Home = () => import("../views/Home/index.vue");

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  }, {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Login" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
