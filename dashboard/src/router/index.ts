import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Categories from "@/components/Categories/Categories.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
  },
  {
    path: "/randomizer",
    name: "Randomizer",
    component: () => import("@/views/Randomizer.vue"),
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "*",
    name: "404*",
    meta: { layout: "blank" },
    component: () => import("@/views/Error.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
