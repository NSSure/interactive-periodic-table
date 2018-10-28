<template>
  
</template>

<script>
export default {
  name: "dismiss",
  props: {
    isHidden: false
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
