import Vue from 'vue';
import VueRouter from 'vue-router'
import SplashScreen from './components/SplashScreen.vue';
import Default from './components/Default.vue';
import PeriodicList from './components/PeriodicList.vue';
import FilterOptions from './components/FilterOptions.vue';
import About from './components/About.vue';
import ElementDetails from './components/ElementDetails.vue';

Vue.use(VueRouter);

const routes = [
    { name: 'home', path: '/', component: SplashScreen },
    { name: 'periodic-table', path: '/periodic-table', component: Default },
    { name: 'periodic-list', path: '/periodic-list', component: PeriodicList },
    { name: 'filter', path: '/filter', component: FilterOptions },
    { name: 'about', path: '/about', component: About },
    { name: 'element', path: '/element/:number', component: ElementDetails, props: true }
  ]

export default new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})