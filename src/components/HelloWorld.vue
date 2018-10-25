<template>
  <div class="content">
    <div class="periodic-table-wrapper mh-100">
      <div class="periodic-table">
        <div v-if="element">
          <h1>{{element.name}}</h1>
          {{element.summary}}
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div class="periodic-table-group" v-for="(period, index) in 7" :key="index">
            <div class="periodic-table-period" v-for="(group, index) in 18" :key="index">
              <periodic-element v-bind:x-pos="group" v-bind:y-pos="period" v-on:element-selected="element = $event"></periodic-element>
            </div>
          </div>
        </div>
        <div class="legend">
          <div class="row">
            <div class="">
              <div class="col-3 legend-item">
                <div class="swatch alkali-metals"></div>
                <span>Alkali metals</span>
              </div>
              <div class="col-3 legend-item">
                <div class="swatch alkaline-earth-metals"></div>
                <span>Alkaline earth metals</span>
              </div>
              <div class="col-3 legend-item">
                <div class="swatch transition-metals"></div>
                <span>Transition metals</span>
              </div>
              <div class="col-3 legend-item">
                <div class="swatch post-transition-metals"></div>
                <span>Post transition metals</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="legend-item">
                <div class="swatch metalloid"></div>
                <span>Metalloid</span>
              </div>
              <div class="legend-item">
                <div class="swatch polyatomic-nonmetal"></div>
                <span>Polyatomic metal</span>
              </div>
              <div class="legend-item">
                <div class="swatch diatomic-nonmetal"></div>
                <span>Diatomic nonmetal</span>
              </div>
              <div class="legend-item">
                <div class="swatch noble-gas"></div>
                <span>Noble gas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="periodic-side-panel" v-if="element">
        <div class="side-panel-header" v-bind:style="{ backgroundColor: element.color }">
          <strong>ELEMENT BREAKDOWN</strong>
        </div>
        <div class="element-detail" v-for="(value, property, index) in element" :key="index">
          <span><strong>{{property.toUpperCase()}}</strong></span>
          <div>{{value}}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Group</label>
            <select class="form-control" @change="setHighlight('group')" v-model="groupCoordinate">
              <option v-for="(group, index) in 18" :key="index" :value="group">{{group}}</option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label>Period</label>
            <select class="form-control" @change="setHighlight('period')" v-model="periodCoordinate">
              <option v-for="(period, index) in 7" :key="index" :value="period">{{period}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeriodicElement from "./PeriodicElement.vue";

export default {
  name: "HelloWorld",
  components: {
    PeriodicElement
  },
  data() {
    return {
      element: null,
      groupCoordinate: -1,
      periodCoordinate: -1
    };
  },
  methods: {
    setHighlight(type) {
      if (type === "group") {
        this.$store.commit("setGroupCoordinate", this.groupCoordinate);
      } else {
        this.$store.commit("setPeriodCoordinate", this.periodCoordinate);
      }
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
  flex-grow: 1;
  flex-basis: 70%;
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
  height: 100%;
  overflow-y: scroll;
  align-self: flex-end;
  flex-basis: 30%;
}
.side-panel-header {
  padding: 15px;
  background-color: #383838;
  color: #333333;
}
.element-detail {
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  color: #333333;
}
.footer {
  background-color: #383838;
  padding: 15px;
}
.legend-item {
  float: left;
}
.swatch {
  width: 25px;
  height: 25px;
  float: left;
}

/* Classification colors */
.alkali-metals {
  background-color: #EBBFD8;
}
.alkaline-earth-metals {
  background-color: #F7E2F7;
}
.transition-metals {
  background-color: #5BC2E7;
}
.post-transition-metals {
  background-color: #90A4AE
}
.metalloid {
  background-color: #D2B7D6;
}
.polyatomic-nonmetal {
  background-color: #8BC34A;
}
.diatomic-nonmetal {
  background-color: #EAB37F;
}
.noble-gas {
  background-color: #EADA24;
}
/* #8BC34A, #EAB37F, #EADA24 */
</style>
