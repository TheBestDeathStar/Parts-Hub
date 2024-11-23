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
#app {
  text-align: center;
  background-color: #333;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 2em;
  color: #e63946;
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
