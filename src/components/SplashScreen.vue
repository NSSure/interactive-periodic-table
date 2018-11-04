<template>
    <div class="splash-screen">
        <span class="title">INTERACTIVE PERIODIC TABLE</span>
        
        <shell-diagram
            class="pulse"
            :element-name="'Welcome'"
            :shells="[2,8,1]" 
            :shell-spacing="25" 
            :diagram-width="300" 
            :diagram-height="300" 
            :electron-radius="5" />

        <router-link class="enter" :to="{ name: 'periodic-table' }">Enter Periodic Table</router-link>

        <div class="footer">
            <div class="attribution">
                <label>Built using <a href="https://vuejs.org/" target="_blank">VueJS</a>, <a href="https://www.svgbackgrounds.com" target="_blank">SVGBackgrounds</a></label>
            </div>
            <ul class="links">
                <a href="https://github.com/NSSure/interactive-periodic-table" target="_blank">Source</a>
            </ul>
        </div>
    </div>
</template>

<script>
import ShellDiagram from './ShellDiagram.vue'

export default {
  name: "splash-screen",
  components: {
    ShellDiagram
  },
  props: {
    isHidden: false
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poiret+One');

.splash-diagram {
  width: 100vmin;
  height: 100vmin;  
  max-width: 200px;
  max-height: 200px;
}

a {
    color: #EBBFD8;
    font-size: 20px;
}

.footer {
    position: absolute; 
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
}

.splash-screen {
    font-family: 'Poiret One', cursive;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2c2b33;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23444444' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23555555'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}

.title {
    font-size: 65px;
}

.enter {
    text-decoration: none;
    font-size: 32px;
}

.enter:hover {
    cursor: pointer;
    border-bottom: 1px solid silver;
}

.pulse {
  animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes pulse {
  0% {transform: scale(1);}
  50% {transform: scale(1.1);}
  100% {transform: scale(1);}
}
</style>
