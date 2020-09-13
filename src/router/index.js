import Vue from "vue";
import VueRouter from "vue-router";
import ShowsService from "@/services/ShowsService.js";

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
    component: () => import("../components/pages/ShowDetails.vue"),
    async beforeEnter(routeTo, routeFrom, next) {
      routeTo.params.episodes = await ShowsService.getEpisodes(
        routeTo.params.id
      );
      next();
    }
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
