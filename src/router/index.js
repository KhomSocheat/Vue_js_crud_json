import AddUser from '@/pages/AddUser.vue'
import EditUser from '@/pages/EditUser.vue'
import Home from '@/pages/Home.vue'
import UserDetail from '@/pages/UserDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/adduser',
        name: 'adduser',
        component: AddUser
      },
      {
        path: '/user/:id',
        name: 'edituser',
        component: EditUser
      },
      {
        path: '/users/:id',
        name: 'userdetail',
        component: UserDetail
      }
  ],
})

export default router
