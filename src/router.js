import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/components/Home";
import Calendar from "@/components/Calendar";
const routes = [
  {path: '/', component: Home},
  {path: '/list-app', component: Home},
  {path: '/calendar-app', component: Calendar}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
