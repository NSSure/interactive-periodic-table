<template>
    <div id="app">
        <!-- <a class="dismiss" @click="toggleFilterOptions" v-bind:style="[isShowingFilterOptions ? { left: '332px' } : { left: '' }]" /> -->
        <a class="dismiss" @click="toggleFilterOptions" v-bind:style="[isShowingFilterOptions ? { left: '332px' } : { left: '' }]">
            <span v-if="isShowingFilterOptions">Collapse</span>
            <span v-else>Expand</span>
        </a>
        <filter-options v-if="isShowingFilterOptions" />
        <periodic-table />
        <div style="position: absolute; left: 30px; bottom: 30px; bottom: 30px;">
            <router-link :to="{ name: 'home' }" style="text-decoration: none; color: silver; margin: 0 15px;">Home</router-link>
            <router-link :to="{ name: 'periodic-list' }" style="text-decoration: none; color: silver; margin: 0 15px;">Periodic List</router-link>
        </div>
    </div>
</template>

<script>
import FilterOptions from './FilterOptions.vue';
import PeriodicTable from './PeriodicTable.vue';

export default {
  name: "default",
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
  /* content: ' '; */
  height: 33px;
  width: 2px;
  background-color: #fff;
}

/* .dismiss:before {
  transform: rotate(45deg);
}

.dismiss:after {
  transform: rotate(-45deg);
} */
</style>
