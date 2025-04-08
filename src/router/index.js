import { createMemoryHistory, createRouter } from 'vue-router'

import ToDoList from '../views/ToDoList.vue'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/toDoList', component: ToDoList },
  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;