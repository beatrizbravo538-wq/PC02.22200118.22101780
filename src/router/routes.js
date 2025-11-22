const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Ponemos tu página en la raíz ('') para probar
      { path: '', component: () => import('pages/DigimonPage.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
