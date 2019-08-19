import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        title: "Welcome | Insurance Dashboard",
        content: "The Dashboard page showing your insurance statistics"
      }
    },
    {
      path: "/settings",
      name: "Settings",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Settings.vue"),
      meta: {
        title: "IA | Account Settings",
        content: "Edit your personal and contact information"
      }
    }
  ]
});
