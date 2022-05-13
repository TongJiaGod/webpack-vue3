import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/layout/index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: { name: 'test' },
      children: [
        {
          path: 'test',
          name: 'test',
          component: () => import('@/modules/test/Test.vue'),
        },
      ],
    },
  ],
});

export default router;
