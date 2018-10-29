<template>
  <div class="periodic-element grow" style="cursor: pointer; border-bottom: 5px solid #f7f7f7;" :title="element.name" :class="{ 'greyed-out': isDisabled }" v-if="element" v-bind:style="{ backgroundColor: element.color }" v-on:click="selectElement()">
    <span><strong>{{element.symbol}}</strong></span>
    <div>
      {{element.number}}
    </div>
  </div>
  <div v-else class="periodic-element-empty"></div>
</template>

<script>
import elements from '../elements.json';

export default {
  name: "periodic-element",
  props: {
    xPos: Number,
    yPos: Number,
    lanthanideIndex: Number,
    actinideIndex: Number,
    type: String
  },
  data() {
    return {
      element: null,
    }
  },
  mounted () {
    switch(this.type) {
      case 'regular':
        this.element = elements.find(x => x.xpos === this.xPos && x.ypos === this.yPos)
        break;
      case 'lanthanide':
        this.element = elements.find(x => x.lanthanide_index === this.lanthanideIndex);
        break;
      case 'actinide':
        this.element = elements.find(x => x.actinide_index === this.actinideIndex);
        break;
    }
  },
  computed: {
    isDisabled() {
      if(this.$store.state.groupCoordinate > 0 && this.element.xpos !== this.$store.state.groupCoordinate) {
        return true;
      }

      if(this.$store.state.periodCoordinate > 0 && this.element.ypos !== this.$store.state.periodCoordinate) {
        return true;
      }

      if(this.$store.state.phase !== 'all' && this.$store.state.phase !== this.element.phase) {
        return true;
      }

      return false
    }
  },
  methods: {
    selectElement() {
      this.$emit('element-selected', this.element);
    }
  }
};
</script>

<style scoped>
.periodic-element {
  height: 55px;
  width: 55px;
  margin: 5px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.4);
  color: #333333;
  /* background-color: #f7f7f7; */
  /* border: 2px dashed silver; */
}
.periodic-element-empty {
  height: 55px;
  width: 55px;
  margin: 5px;
}
.greyed-out {
  background-color: #ffffff !important;
}
.grow { 
  transition: all .2s ease-in-out; 
}
.grow:hover { 
  transform: scale(1.5); 
}
</style>
