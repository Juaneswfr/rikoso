import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import CharacterAdd from '../views/CharacterAdd.vue'
import CharacterEdit from '../views/CharacterEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/character/:id',
    name: 'ViewC',
    component: CharacterView
  },
  {
    path: '/character/edit/:id',
    name: 'EditC',
    component: CharacterEdit
  },
  {
    path: '/character/add',
    name: 'AddC',
    component: CharacterAdd
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
