<template>
  <div id="app">
    <ul class="navigation" v-if="$route.name !== 'home'">
      <li>
        <router-link :to="{ name: 'filter' }">Filter</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'periodic-table' }">Periodic Table</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'periodic-list' }">Periodic List</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view style="height: 100%; overflow-y: auto;"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F2F2F2;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #2c2b33;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23444444' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23555555'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}

.badge {
  display: flex;
  flex-direction: row;
  background-color: #666666;
  border-radius: 20px;
  height: 35px;
  align-items: center;
  padding: 0;
  margin: 0;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.5);
}

.badge-swatch {
  align-self: stretch;
  width: 30px;
  background-color: yellow;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-right: 15px;
}

.badge-panel {
  background-color: #666666;
  border-radius: 20px;
  width: 100%;
}

.badge-panel > .badge {
  background-color: #222222;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 15px;
}

.badge-panel > .badge > .badge-swatch {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 0;
  background-color: rgba(0.0, 0.0, 0.0, 0.0) !important;
  text-align: center;
}

.badge-content {
  width: 100%;
  padding: 15px;
  text-align: left;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.cursor-pointer {
  cursor: pointer;
}

.navigation {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  color: silver;
  padding: 25px;
  background-color: rgba(0,0,0,0.5);
  margin: 0;
}

.navigation li {
  padding: 0 15px;
}

.navigation li a {
  color: silver;
}

.spin {
    animation-name: rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
