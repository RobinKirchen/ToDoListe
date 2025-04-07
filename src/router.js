import { createMemoryHistory, createRouter } from 'vue-router'

import ToDoList from './components/ToDoList.vue'

const routes = [
  { path: '/about', component: ToDoList },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;