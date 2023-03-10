import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('../views/Pokedex.vue')
    },
    {
      path: '/pokemon/:id',
      name: 'pokedetails',
      component: () => import('../components/PokeDetails.vue')
    }
  ]
})

export default router
