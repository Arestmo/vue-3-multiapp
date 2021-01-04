import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/components/Home";
import Calendar from "@/components/Calendar";
import Markdown from "@/components/Markdown";
import Slider from "@/components/Slider";
import Calculator from "@/components/Calculator";
const routes = [
  {path: '/', component: Home},
  {path: '/list-app', component: Home},
  {path: '/calendar-app', component: Calendar},
  {path: '/markdown-app', component: Markdown},
  {path: '/slider-app', component: Slider},
  {path: '/calculator-app', component: Calculator},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
