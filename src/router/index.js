import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "popular-shows",
    component: () => import("../components/pages/PopularShows.vue")
  },
  {
    path: "/allshows",
    name: "all-shows",
    component: () => import("../components/pages/allShows.vue")
  },
  {
    path: "/showDetails/:id",
    name: "show-details",
    props: true,
    component: () => import("../components/pages/ShowDetails.vue")
  },
  {
    path: "/searchDetails/:searchText",
    name: "search-details",
    props: true,
    component: () => import("../components/pages/SearchDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
