import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BaseView from '@/views/BaseView.vue'
import publicPart from '@/router/Public.ts'
import profile from '@/router/Profile.ts'
import auth from '@/router/Auth.ts'
import recipes from '@/router/Recipes.ts'
import NotFound from '@/views/NotFound.vue'
import { UserStore } from '@/stores/auth'

const routes: Array<RouteRecordRaw> = [
      ...publicPart,
      ...auth,
    {
        path: '/',
        name: 'BaseView',
        meta: { guest: false },
        component: BaseView,
        redirect: { name: 'ProfileIndex' },
        children: [
            ...profile,
            ...recipes,
        ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      meta: { guest: true },
      component: NotFound,
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
    const userStore = UserStore();

    if(to.meta.guest) {
        return true
    } else {
        if(localStorage.getItem('crm_token')) {
            if(userStore.model.id != 0)
                return true
            else {
                let result = await userStore.model.logIn()
                if(result)
                    return true
                else
                    return {name: 'AuthIndex'}
            }
        } else {
            // Нет токена, перенаправляем на страницу авторизации
            return { name: 'AuthIndex' };
        }
    }
});


export default router

