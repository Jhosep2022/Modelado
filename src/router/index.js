import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ejercicio1 from '../views/Ejercicio1.vue'
import Ejercicio2 from '../views/Ejercicio2.vue'
import Ejercicio3 from '../views/Ejercicio3.vue'
import Ejercicio4 from '../views/Ejercicio4.vue'
import Ejercicio5 from '../views/Ejercicio5.vue'
import Ejercicio6 from '../views/Ejercicio6.vue'
import Ejercicio7 from '../views/Ejercicio7.vue'
import Ejercicio8 from '../views/Ejercicio8.vue'
import Estudiante from '../views/Estudiante.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/ejercicio1',
    component: Ejercicio1
  },
  {
    path: '/ejercicio2',
    component: Ejercicio2
  },
  {
    path: '/ejercicio3',
    component: Ejercicio3
  },
  {
    path: '/ejercicio4',
    component: Ejercicio4
  },
  {
    path: '/ejercicio5',
    component: Ejercicio7
  },
  {
    path: '/ejercicio6',
    component: Ejercicio6
  },
  {
    path: '/ejercicio7',
    component: Ejercicio5
  },
  {
    path: '/estudiante',
    component: Estudiante
  },
  {
    path: '/ejercicio8',
    component: Ejercicio8
  
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
