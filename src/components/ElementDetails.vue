<template>
  <div>
    
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
  data() {
    return {
      element: elements[10]
    }
  }
};
</script>

<style scoped>

</style>
