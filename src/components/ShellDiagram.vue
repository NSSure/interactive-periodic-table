<template>
    <div class="shell-diagram" v-if="shells">
        <svg class="diagram" xmlns="http://www.w3.org/2000/svg" version="1.1" :viewBox="viewBox" v-bind:style="[{ width: this.diagramWidth }, { height: this.diagramHeight}]">
            <g v-for="(count, shellIndex) in shells" :key="shellIndex" fill="none">
                <text 
                    class="diagram-text"
                    :x="originX" 
                    :y="originY" 
                    :fill="shellColor"
                    alignment-baseline="middle" 
                    text-anchor="middle">
                    {{elementName}}
                </text>
                <circle
                    :cx="originX" 
                    :cy="originY" 
                    :r="shellRadius(shellIndex)" 
                    :stroke="shellColor" 
                    stroke-width="2" />
                <circle
                    :class="{ spin: shellIndex === 0 }"
                    style="transform-origin: 50% 50%;"
                    :cx="originX" 
                    :cy="originY" 
                    :r="shellRadius(shellIndex)" 
                    stroke="#f7f7f7" 
                    stroke-width="2" />
                <circle 
                    v-for="(electron, index) in count" 
                    :key="index" 
                    :cx="electronX(index, count, shellIndex)" 
                    :cy="electronY(index, count, shellIndex)" 
                    :r="electronRadius" fill="#EBBFD8" />
            </g>
        </svg>
    </div>
</template>

<script>
export default {
  name: 'shell-diagram',
  props: {
    elementName: {
        default: 'Element',
        type: String
    },
    shells: Array,
    shellSpacing: Number,
    electronRadius: Number,
    diagramWidth: Number,
    diagramHeight: Number,
    shellColor: {
        default: "#ffffff",
        type: String
    },
    electronColor: {
        default: "#f7f7f7",
        type: String
    }
  },
  data() {
    return {
        originX: this.diagramWidth / 2,
        originY: this.diagramHeight / 2,
        viewBox: `0 0 ${this.diagramWidth} ${this.diagramHeight}`,
        initialShellRadius: 0
    }
  },
  created() {
      this.initialShellRadius = this.originX / 2
  },
  methods: {
    shellRadius(index) {
        if (index === 0) {
            return this.initialShellRadius
        }
        
        return (this.initialShellRadius + (this.shellSpacing * index))
    },
    electronX(index, electronCount, shellIndex) {
        return this.originX + this.shellRadius(shellIndex) * Math.cos(2 * Math.PI * index / electronCount)
    },
    electronY(index, electronCount, shellIndex) {
        return this.originY + this.shellRadius(shellIndex) * Math.sin(2 * Math.PI * index / electronCount)
    }
  }
};
</script>

<style scoped>
.spin {
    animation-name: rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}

.diagram-text {
    font-size: 18px;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>

