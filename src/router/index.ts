import { createRouter, createWebHistory } from 'vue-router'
import loginView from '../views/LoginView.vue'
import homeView from '../views/HomeView.vue'
import likeView from '../views/LikeView.vue'
import followView from '../views/FollowView.vue'
import editView from '../views/EditView.vue'
import postView from '../views/PostView.vue'
import memberView from '../views/MemberView.vue'
import myPostView from '../views/MyPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView
    },
    {
      path: '/home',
      name: 'home',
      component: homeView
    },
    {
      path: '/like',
      name: 'like',
      component: likeView
    },
    {
      path: '/follow',
      name: 'follow',
      component: followView
    },
    {
      path: '/edit',
      name: 'edit',
      component: editView
    },
    {
      path: '/post',
      name: 'post',
      component: postView
    },
    {
      path: '/member',
      name: 'member',
      component: memberView
    },
    {
      path: '/myPost',
      name: 'myPost',
      component: myPostView
    }
  ]
})

export default router

