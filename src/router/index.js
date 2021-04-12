import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DetailResto from '../views/DetailResto.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: DetailResto,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
