<template>
  <div class="element-details" v-if="element">
    <div class="element-card" v-bind:style="{background: 'linear-gradient(45deg, ' + element.color + ' 90%, ' + lightenColor(element.color, -20) + ' 30%)'}">
      <div class="header">
        <span>{{element.number}}</span>
        <span>{{Number((element.atomic_mass).toFixed(2))}}</span>
      </div>
      <span class="content">
        <span class="symbol">
          {{element.symbol}}
        </span>
        <span class="name">
          <strong>{{element.name.toUpperCase()}}</strong>
        </span>
      </span>
      <span class="footer">
        <span>{{element.phase.toUpperCase()}}</span>
      </span>
    </div>
    <div class="element-breakdown">
      <table class="table">
        <tbody>
          <tr v-for="(value, property, index) in element" :key="index" >
            <td class="col-6">{{property}}</td>
            <td class="col-6">{{value}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import elements from '../elements.json';
import ShellDiagram from './ShellDiagram.vue';

export default {
  name: 'element-details',
  components: {
    ShellDiagram
  },
  props: {
    number: null
  },
  data() {
    return {
      element: elements.find(x => x.number === parseInt(this.number))
    }
  },
  methods: {
    lightenColor(col, amt) {
      if (!col) {
          return;
      }

      var usePound = false;

      if (col[0] == "#") {
          col = col.slice(1);
          usePound = true;
      }
  
      var num = parseInt(col,16);
  
      var r = (num >> 16) + amt;
  
      if (r > 255) r = 255;
      else if  (r < 0) r = 0;
  
      var b = ((num >> 8) & 0x00FF) + amt;
  
      if (b > 255) b = 255;
      else if  (b < 0) b = 0;
  
      var g = (num & 0x0000FF) + amt;
  
      if (g > 255) g = 255;
      else if (g < 0) g = 0;
  
      return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    }
  }
};
</script>

<style scoped>
.element-details {
  display: flex;
  flex-direction: row;
}

.element-card {
  background-color: #424149;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  color: rgba(50, 50, 50, 1);
  margin: 15px;
}

.element-card > .header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
}

.element-card > .content {
  display: flex;
  flex-direction: column;
  align-self: center;
  flex-grow: 1;
  justify-content: center;
}

.element-card > .footer {
  align-self: flex-end;
  padding: 15px;
}

.element-card .symbol {
  font-size: 4rem;
}

.element-card .name {
  font-size: 2rem;
}

.element-breakdown {
  background-color: #201F27;
  flex-grow: 1;
}
</style>
