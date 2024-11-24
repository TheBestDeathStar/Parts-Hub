<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view></router-view> <!-- This is where the routed components will be injected -->
  </div>
</template>

<script>
import { ref } from 'vue';
import PartIndex from './components/PartIndex.vue';

export default {
  name: 'App',
  components: {
    PartIndex,
  },
};
</script>

<style>
html{
  background-color: #333;
}
#app {
  color: rgb(0, 0, 0);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: flex-start;
  width: 100%;
  height: 100%;
padding-left: 20px;
padding-right: 20px;
}

h1 {
  text-align: center;
  font-size: 3em;
  color: #e63946;
  margin-top: 0%;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #e63946;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
