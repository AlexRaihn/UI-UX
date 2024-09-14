import AuthIndex from '@/views/Auth/AuthIndex.vue'
import AuthInput from '@/views/Auth/AuthInput.vue'
import { RouteRecordRaw } from 'vue-router'

const auth: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'AuthIndex',
        component: AuthIndex,
        meta: { guest: true },
        redirect: { name: 'Auth.Input' },
        children: [
            {
                path: 'login',
                name: 'Auth.Input',
                component: AuthInput,
                meta: { guest: true },
            },
        ],
    },
]

export default auth
