import {createRouter, createWebHashHistory} from "vue-router";
import ClubsAdd from './components/ClubsAdd'

const routes = [
    {path: '/pages/clubs', component: ClubsAdd}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;