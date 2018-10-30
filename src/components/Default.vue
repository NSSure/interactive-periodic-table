<template>
    <div id="app">
        <periodic-table />
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
  }
};
</script>

<style scoped>

</style>
