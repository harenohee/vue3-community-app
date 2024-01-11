const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    // MainLayout안에 <router-view>가 있으면 해당경로에 맞는 children, 즉 IndexPage 렌더링
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
