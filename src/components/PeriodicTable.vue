<template>
  <span class="content">
    <div class="main">
      <div class="periodic-table" v-bind:style="[element ? { width: '80%' } : { width: '100%;' }]">
        <div class="element-grouping">
          <div class="periodic-table-group" v-for="(period, index) in 7" :key="index">
            <div class="periodic-table-period" v-for="(group, index) in 18" :key="index">
              <periodic-element :x-pos="group" :y-pos="period" :type="'regular'" @element-selected="element = $event"></periodic-element>
            </div>
          </div>
        </div>
        <div class="inner-transition-metals">
          <div class="element-grouping">
            <div class="periodic-table-group">
              <div class="periodic-table-period" v-for="(lanthanide, index) in 14" :key="index">
                <periodic-element :lanthanide-index="index" :type="'lanthanide'" @element-selected="element = $event"></periodic-element>
              </div>
            </div>
          </div>
          <div class="element-grouping">
            <div class="periodic-table-group">
              <div class="periodic-table-period" v-for="(actinide, index) in 14" :key="index">
                <periodic-element :actinide-index="index" :type="'actinide'" @element-selected="element = $event"></periodic-element>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="side-panel" v-if="element">
        <div class="side-panel-content">
          <router-link :to="{ name: 'element' }">Details</router-link>
          <div class="element-detail">
            <div class="badge-panel">
              <div class="badge">
                NAME
              </div>
              <div class="badge-content">
                {{element.name}}
              </div>
            </div>
          </div>
          <div class="element-detail">
            <div class="badge-panel">
              <div class="badge">
                DESCRIPTION
              </div>
              <div class="badge-content">
                {{element.summary}}
              </div>
            </div>
          </div>
          <div class="element-detail" v-for="(value, property, index) in element" :key="index" v-if="isDisplayProperty(property)">
            <div class="badge-panel">
              <div class="badge">
                {{property.toUpperCase().split('_').join(' ')}}
              </div>
              <div class="badge-content">
                {{value}}
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="side-panel-footer">
        </div> -->
      </div>
    </div>
    <div style="background-color: #222; padding: 15px;">
      <category-legend />
    </div>
  </span>
</template>

<script>
import CategoryLegend from "./CategoryLegend.vue";
import PeriodicElement from "./PeriodicElement.vue";
import ShellDiagram from "./ShellDiagram.vue";

export default {
  name: "periodic-table",
  components: {
    CategoryLegend,
    PeriodicElement,
    ShellDiagram
  },
  data() {
    return {
      element: null,
      isShowingFilterOptions: false,
      ignoreKeys: ["xpos", "ypos", "spectral_img", "source", "name", "summary"]
    };
  },
  methods: {
    isDisplayProperty(property) {
      return this.ignoreKeys.indexOf(property) === -1;
    },
    toggleFilterOptions() {
      this.isShowingFilterOptions = !this.isShowingFilterOptions;
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.periodic-table {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
}

.element-grouping {
   display: flex; 
   flex-direction: column; 
   align-items: center;
}

.periodic-table-group {
  display: flex;
  flex-direction: row;
}

.periodic-table-period {
  display: flex;
  flex-direction: column;
}

.side-panel {
  background-color: rgba(.44,.43,.51,.10);
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  width: 20%;
}

.side-panel-content {
  height: 100%;
  overflow-y: scroll;
}

/* .side-panel-footer {
  padding: 15px;
  background-color: #666666;
} */

.element-detail {
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  color: sivler;
}

.footer {
  background-color: #383838;
  padding: 15px;
}

.dismiss {
  position: absolute;
  left: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.5;
  cursor: pointer;
}

.dismiss:hover {
  opacity: 1;
}

.dismiss:before, .dismiss:after {
  position: absolute;
  left: 15px;
  height: 33px;
  width: 2px;
  background-color: #fff;
}
</style>
