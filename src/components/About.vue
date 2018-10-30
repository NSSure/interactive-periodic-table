<template>
    <div class="about">
        <svg xmlns="http://www.w3.org/2000/svg" class="pulse" version="1.1" viewBox="0 0 200 200" width="350" height="350">
            <g fill="none" transform="translate(0,50)">
                <g>
                    <circle cx="100" cy="50" r="40" stroke="#f7f7f7" stroke-width="2" />
                    <circle cx="100" cy="10" r="5" fill="#EBBFD8" />
                    <circle cx="100" cy="90" r="5" fill="#EBBFD8" />
                </g>
                <g>
                    <circle cx="100" cy="50" r="55" stroke="#f7f7f7" stroke-width="2" />
                    <circle cx="100" cy="-5" r="5" fill="#EBBFD8" />
                    <circle cx="100" cy="105" r="5" fill="#EBBFD8" />
                    <circle cx="60" cy="87" r="5" fill="#EBBFD8" />
                    <circle cx="45" cy="50" r="5" fill="#EBBFD8" />
                    <circle cx="60" cy="12" r="5" fill="#EBBFD8" />
                    <circle cx="140" cy="12" r="5" fill="#EBBFD8" />
                    <circle cx="155" cy="50" r="5" fill="#EBBFD8" />
                    <circle cx="140" cy="87" r="5" fill="#EBBFD8" />
                </g>
                <g class="outer-shell">
                    <circle cx="100" cy="50" r="70" stroke="#f7f7f7" stroke-width="2" />
                    <circle cx="100" cy="-20" r="5" fill="#EBBFD8" />
                </g>
            </g>
        </svg>
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
export default {
  name: "about"
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
