import Vue from 'vue';
import VueRouter from 'vue-router'
import SplashScreen from './components/SplashScreen.vue';
import Default from './components/Default.vue';
import PeriodicList from './components/PeriodicList.vue';

Vue.use(VueRouter);

const routes = [
    { name: 'home', path: '/', component: SplashScreen },
    { name: 'periodic-table', path: '/periodic-table', component: Default },
    { name: 'periodic-list', path: '/periodic-list', component: PeriodicList }
  ]

export default new VueRouter({
    routes // short for `routes: routes`
})