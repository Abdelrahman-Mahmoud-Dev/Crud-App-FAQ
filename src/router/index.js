import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreateFaq from "../views/CreateFaq.vue";
import EditFaq from "../views/EditFaq.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/create",
            component: CreateFaq,
        },
        {
            path: "/edit/:id",
            component: EditFaq,
            name: "edit",
        },
    ],
});

export default router;