import { RouteRecordRaw } from 'vue-router'
import RecipesIndex from '@/views/Private/Recipes/RecipesIndex.vue'
import RecipesView from '@/views/Private/Recipes/RecipesView.vue'

const recipes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'RecipesIndex',
        component: RecipesIndex,
        meta: {guest: false},
        redirect: { name: 'RecipesView' },
        children: [
            {
                path: 'recipes',
                name: 'RecipesView',
                meta: {guest: false},
                component: RecipesView,
            }
        ]
    },
]

export default recipes