import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
    {
    path: '/',
    name: 'home',
    component: layout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router