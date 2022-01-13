import { createWebHistory, createRouter } from "vue-router"
import Dashboard from "@/containers/Dashboard.vue"
import NowLive from "@/containers/NowLive.vue"

const routes = [{
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/live-stream/:type",
        name: "Live Streaming",
        component: NowLive,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router