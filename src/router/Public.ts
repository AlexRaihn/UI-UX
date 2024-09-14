import { RouteRecordRaw } from 'vue-router'
import PublicView from '@/views/Public/PublicView.vue'
import HomeView from '@/views/Public/HomeView.vue'
import AboutView from '@/views/Public/AboutView.vue'

const publicPart: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'PublicView',
        component: PublicView,
        meta: { guest: true },
        redirect: { name: 'HomeView' },
        children: [
            {
                path: 'home',
                name: 'HomeView',
                component: HomeView,
                meta: { guest: true },
            },
            {
                path: 'about',
                name: 'AboutView',
                component: AboutView,
                meta: { guest: true }
            }
        ],
    },
]

export default publicPart