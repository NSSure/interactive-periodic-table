<template>
    <div class="shell-diagram" v-if="shells">
        <svg xmlns="http://www.w3.org/2000/svg" class="pulse" version="1.1" viewBox="0 0 200 200">
            <g fill="none" transform="translate(0,50)">
                <g v-for="(count, index) in shells" :key="index">
                    <circle :cx="shellX" :cy="shellY" :r="shellR" stroke="#f7f7f7" stroke-width="2" />
                    <circle :cx="100" cy="10" r="5" fill="#EBBFD8" v-for="(point, index) in count" :key="index" />
                </g>
            </g>
        </svg> 
        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="pulse" version="1.1" viewBox="0 0 200 200">
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
        </svg>  -->
    </div>
</template>

<script>
export default {
  name: 'shell-diagram',
  props: {
      shells: null
  },
  data() {
      return {
          shellX: 100,
          shellY: 50,
          shellR: 40
      }
  }
};
</script>

<style scoped>
svg {
  width: 100vmin;
  height: 100vmin;  
  max-width: 200px;
  max-height: 200px;
}
</style>
