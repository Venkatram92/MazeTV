import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "MazeTV-Dashbord" }
  },
  {
    path: "/showDetails/:id",
    name: "show-details",
    props: true,
    component: () => import("../components/pages/ShowDetails.vue"),
    meta: { title: "MazeTV-Showdetails" }
  },
  {
    path: "/searchDetails/:searchText",
    name: "search-details",
    props: true,
    component: () => import("../components/pages/SearchDetails.vue"),
    meta: { title: "MazeTV-Searchdetails" }
  },
  {
    path: "/error",
    component: () => import("../components/pages/Error.vue")
  },
  {
    path: "*",
    name: "home",
    component: Home,
    meta: { title: "MazeTV-Dashbord" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});
export default router;
