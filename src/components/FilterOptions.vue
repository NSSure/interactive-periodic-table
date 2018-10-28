<template>
  <div class="filter-overlay">
    <div class="filter">
      <div class="options">
        <div class="form-group">
          <label>Group</label>
          <select class="form-control" @change="setHighlight('group')" v-model="groupCoordinate">
            <option value="-1">All</option>
            <option v-for="(group, index) in 18" :key="index" :value="group">{{group}}</option>
          </select>
        </div>
        <div class="form-group">
          <label>Period</label>
          <select class="form-control" @change="setHighlight('period')" v-model="periodCoordinate">
            <option value="-1" selected>All</option>
            <option v-for="(period, index) in 7" :key="index" :value="period">{{period}}</option>
          </select>
        </div>
        <div class="form-group">
          <label>Phase</label>
          <select class="form-control" v-model="$store.state.phase">
            <option value="all">All</option>
            <option value="Gas">Gas</option>
            <option value="Solid">Solid</option>
            <option value="Liquid">Liquid</option>
          </select>
        </div>
      </div>
      <button class="btn btn-danger" @click="clearFilters">CLEAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-options",
  data() {
    return {
      groupCoordinate: -1,
      periodCoordinate: -1
    };
  },
  methods: {
    setHighlight(type) {
      if (type === "group") {
        this.$store.commit('setGroupCoordinate', this.groupCoordinate);
      } else {
        this.$store.commit('setPeriodCoordinate', this.periodCoordinate);
      }
    },
    clearFilters() {
      this.groupCoordinate = -1;
      this.periodCoordinate = -1;

      this.$store.commit('setGroupCoordinate', -1);
      this.$store.commit('setPeriodCoordinate', -1);
      this.$store.state.phase = 'all';
    }
  }
};
</script>

<style scoped>
.filter {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 300px;
  left: 0;
  top: 0;
  bottom: 0;
  /* background: linear-gradient(to bottom, #323232 0%, #3F3F3F 0%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply; */
  background-color: rgba(0.0, 0.0, 0.0, 0.25);
  padding: 30px;
  z-index: 9999;
}
.options {
  flex-grow: 1;
}
button {
  align-items: flex-end;
  margin: 0 auto;
}
</style>
