import {createRouter, createWebHistory} from "vue-router";
import ToDo from './components/ToDo'
import CalendarContent from './components/CalendarContent'
import MarkDown from './components/MarkDown'

const routes = [
    {path: '/pages/todo', component: ToDo},
    {path: '/pages/calendar', component: CalendarContent},
    {path: '/pages/markdown', component: MarkDown}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;