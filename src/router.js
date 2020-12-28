import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/components/Home";
import Calendar from "@/components/Calendar";
import Markdown from "@/components/Markdown";
const routes = [
  {path: '/', component: Home},
  {path: '/list-app', component: Home},
  {path: '/calendar-app', component: Calendar},
  {path: '/markdown-app', component: Markdown},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
