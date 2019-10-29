import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: '/drinks',
    name: 'drinks',
    component: () => import(/* webpackChunkName: "Drinks"*/ '../views/modules/Drinks')
  },
  {
    path: '/information',
    name: 'information',
    component: () => import(/* webpackChunkName: "Information"*/ '../views/modules/Information')
  },
  {
    path: '/prospectus',
    name: 'prospectus',
    component: () => import(/* webpackChunkName: "Prospectus"*/ '../views/modules/Prospectus')
  }
];

const router = new VueRouter({
  routes
});

export default router;
