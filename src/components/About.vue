<template>
    <div class="about">
        <shell-diagram 
            :shells="[ 2, 8, 18, 7 ]" 
            :shell-spacing="25" 
            :diagram-width="400" 
            :diagram-height="400" 
            :electron-radius="5" />
        <div class="acknowledgements" style="text-align: center;">
            <h2>Interactive Periodic Table</h2>
            <p style="margin-bottom: 0;">Developed by: <a href="https://github.com/NSSure" target="_blank">NSSure</a></p>
            <p style="margin-bottom: 0;">Source: <a href="https://github.com/NSSure/interactive-periodic-table" target="_blank">Github</a></p>
        </div>
        <div class="acknowledgements">
            <h4>Built Using</h4>
            <p>VueJS</p>
            <p>Backgrounds - SVGBackgrounds</p>
            <p>Periodic table - <a href="https://github.com/andrejewski/periodic-table" target="_blank">periodic-table NPM plugin</a></p>
        </div>
    </div>
</template>

<script>
import ShellDiagram from './ShellDiagram.vue';

export default {
  name: 'about',
  components: {
      ShellDiagram
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poiret+One');

.about {
  font-family: 'Poiret One', cursive;
}

.acknowledgements {
  /* background-color: rgba(0.0,0.0,0.0,0.3); */
  padding: 15px 0;
  margin: 30px 0;
}

a {
    color: #EBBFD8;
    font-size: 20px;
}

.pulse {
  animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes pulse {
  0% {transform: scale(1);}
  50% {transform: scale(1.02);}
  100% {transform: scale(1);}
}
</style>
