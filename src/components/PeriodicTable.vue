<template>
  <span class="content">
    <div class="periodic-table-wrapper mh-100">
      <div class="periodic-table container">
        <div v-if="element" style="margin: 50px 0;">
          <!-- <shell-diagram :shells="element.shells" /> -->
          <h4>{{element.name}}</h4>
          {{element.summary}}
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div class="periodic-table-group" v-for="(period, index) in 7" :key="index">
            <div class="periodic-table-period" v-for="(group, index) in 18" :key="index">
              <periodic-element v-bind:x-pos="group" v-bind:y-pos="period" v-on:element-selected="element = $event"></periodic-element>
            </div>
          </div>
        </div>
        <category-legend />
      </div>
      <div class="periodic-side-panel" v-if="element">
        <div class="side-panel-content">
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
  </span>
</template>

<script>
import CategoryLegend from './CategoryLegend.vue';
import PeriodicElement from './PeriodicElement.vue';
import ShellDiagram from './ShellDiagram.vue';

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
      ignoreKeys: ['xpos', 'ypos', 'spectral_img', 'source', 'name', 'summary']
    };
  },
  methods: {
    isDisplayProperty(property) {
      return this.ignoreKeys.indexOf(property) === -1;
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

.periodic-table-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.periodic-table {
  padding: 15px;
  align-self: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 80%;
}

.periodic-table-group {
  display: flex;
  flex-direction: row;
}

.periodic-table-period {
  display: flex;
  flex-direction: column;
}

.periodic-side-panel {
  background-color: #333333;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  width: 20%;
}

.side-panel-content {
  height: 100%;
  overflow-y: scroll
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
</style>
