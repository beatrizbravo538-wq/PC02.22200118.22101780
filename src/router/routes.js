const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Login (Ruta raíz)
      { path: '', component: () => import('pages/LoginPage.vue') },

      // Digimons (Tu ruta)
      { path: 'digimon', component: () => import('pages/DigimonPage.vue') }
    ]
  },

  // Error 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
