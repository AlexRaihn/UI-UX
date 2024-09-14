import { RouteRecordRaw } from 'vue-router'
import ProfileIndex from "@/views/Private/Profile/ProfileIndex.vue";
import ProfileUser from '@/views/Private/Profile/ProfileView.vue'

const profile: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'ProfileIndex',
        component: ProfileIndex,
        meta: {guest: false},
        redirect: { name: 'ProfileUser' },
        children: [
            {
                path: 'profile',
                name: 'ProfileUser',
                meta: {guest: false},
                component: ProfileUser,
            }
        ]
    },
]

export default profile
