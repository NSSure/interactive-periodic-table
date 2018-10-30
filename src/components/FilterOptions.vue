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
      <div style="display: flex; flex-direction: row;">
        <button class="btn btn-secondary" @click="$router.push({ name: 'periodic-table' })" style="flex-grow: 1; margin-right: 5px;">View</button>
        <button class="btn btn-danger" @click="clearFilters" style="flex-grow: 1; margin-left: 5px;">CLEAR</button>
      </div>
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
.filter-overlay {
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.filter {
  width: 20%;
  align-self: center;
}
</style>
