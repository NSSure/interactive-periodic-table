import Vue from 'vue';
import VueRouter from 'vue-router'
import SplashScreen from './components/SplashScreen.vue';
import Main from './components/Main.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: SplashScreen },
    { name: 'periodic-table', path: '/periodic-table', component: Main }
  ]

export default new VueRouter({
    routes // short for `routes: routes`
})