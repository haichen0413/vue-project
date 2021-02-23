import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { routes } from './routes'

console.log('routes: ', routes);

export default createRouter({
  history: createWebHashHistory(),
  routes
})