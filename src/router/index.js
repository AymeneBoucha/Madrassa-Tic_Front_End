import Vue from 'vue'
import VueRouter from 'vue-router'
import connexion from '../views/connexion.vue'
import inscription from '../views/inscription.vue'
import mdp_oublie from '../views/mdp_oublie.vue'
import reset from '../views/reset.vue'
import user from '../views/user.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'connexion',
    component: connexion
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: inscription
  },
  {
    path: '/mdp_oublie',
    name: 'mdp_oublie',
    component: mdp_oublie
  },
  {
    path: '/reset/:token',
    name: 'reset',
    component: reset
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router