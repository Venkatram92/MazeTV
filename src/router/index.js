import Vue from "vue";
import VueRouter from "vue-router";
import errorPage from "../pages/Error";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import ShowDetails from "../pages/ShowDetails";
import ShowEpisodes from "../pages/ShowEpisodes";
import SearchDetails from "../pages/SearchDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Dashboard,
    meta: { title: "MazeTV-Dashbord" }
  },
  {
    path: "/showDetails/:id",
    name: "show-details",
    props: true,
    component: ShowDetails,
    meta: { title: "MazeTV-Showdetails" }
  },
  {
    path: "/show/:id/season/:seasonNumber",
    name: "episodes",
    props: true,
    component: ShowEpisodes,
    meta: { title: "MazeTV-Episodes" }
  },
  {
    path: "/searchDetails/:searchText",
    name: "search-details",
    props: true,
    component: SearchDetails,
    meta: { title: "MazeTV-Searchdetails" }
  },
  {
    path: "/error",
    component: errorPage
  },
  {
    path: "*",
    component: NotFound,
    meta: { title: "MazeTV-Not Found" }
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
