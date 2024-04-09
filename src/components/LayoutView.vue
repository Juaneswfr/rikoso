<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div class="content">
    <slot name="content"></slot>
  </div>
  <div class="nav">
    <slot name="nav"></slot>
  </div>
</template>

<style scoped>
.content{
  margin: 70px 0;
}

.nav,
.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 5px #bababa94; 
}
.nav{
  bottom: 0;
  background-color: white;
  z-index: 2;
}
.header{
  top: 0;
}
.movements {
  z-index: 1;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  width: 100vw;
  background-color: white;
  box-shadow: 0 -8px 16px #e5e5e5;
  border-radius: 24px;
}

.movements .head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
}

.movements .body {
  height: 75vh;
  width: 100%;
}

.movements .head .grip {
  width: 120px;
  height: 8px;
  background-color: #e5e5e5;
  border-radius: 4px;
}
</style>

<script setup>
import { ref } from "vue";
const showMovements = ref(false);
</script>
