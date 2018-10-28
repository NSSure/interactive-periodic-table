<template>
    <div id="app">
        <a class="dismiss" @click="toggleFilterOptions" v-bind:style="[isShowingFilterOptions ? { left: '332px' } : { left: '' }]" />
        <filter-options v-if="isShowingFilterOptions" />
        <periodic-table />
    </div>
</template>

<script>
import FilterOptions from './FilterOptions.vue';
import PeriodicTable from './PeriodicTable.vue';

export default {
  name: "main",
  components: {
      FilterOptions,
      PeriodicTable
  },
  data() {
      return {
          isShowingFilterOptions: false,
      }
  },
  methods: {
      toggleFilterOptions() {
          this.isShowingFilterOptions = !this.isShowingFilterOptions;
      }
  }
};
</script>

<style scoped>
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
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #fff;
}

.dismiss:before {
  transform: rotate(45deg);
}

.dismiss:after {
  transform: rotate(-45deg);
}
</style>
