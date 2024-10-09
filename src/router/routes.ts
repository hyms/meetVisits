import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '/', component: () => import('pages/IndexPage.vue')},
      {path: '/profile', component: () => import('pages/ProfilePage.vue')}
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'auth',
    component: () => import('layouts/LoginLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
