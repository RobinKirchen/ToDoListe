import { createWebHistory, createRouter } from 'vue-router'

import ToDoList from '../views/ToDoList.vue'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/todolist', component: ToDoList },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;