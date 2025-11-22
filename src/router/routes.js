const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Ruta raíz: Muestra el Login
      { path: '', component: () => import('pages/LoginPage.vue') },

      // Ruta protegida: Muestra los Digimons (TU PARTE)
      { path: 'digimon', component: () => import('pages/DigimonPage.vue') },
    ],
  },

  {
    path: '/:catchAll(.)',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
