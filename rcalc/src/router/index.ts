import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rcalc',
      name: 'Rcalc',
      component: () => import(/* webpackChunkName: "rcalc" */"../views/RCalc.vue"),
    },
  ],
});

export default router;
