import { createRouter, createWebHistory } from 'vue-router';
import PageIndex from '../views/PageIndex';
import PageLogin from '../views/PageLogin';
import PageRegister from '../views/PageRegister';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      name: 'index',
      path: '',
      component: PageIndex,
    },
    {
      name: 'log',
      path: '/login',
      component: PageLogin,
    },
    {
      name: 'reg',
      path: '/register',
      component: PageRegister,
    },
  ],
});
