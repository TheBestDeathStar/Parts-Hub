<template>
    <div class="part-index">
      <PartList :parts="parts" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import PartList from './PartList.vue';
  
  export default {
    name: 'PartIndex',
    components: {
      PartList,
    },
    setup() {
      const parts = ref([
        { name: 'Motor Block', price: 120, imageUrl: 'https://example.com/motorblock.jpg' },
        { name: 'Car Wheel', price: 60, imageUrl: 'https://example.com/carwheel.jpg' },
      ]);
  
      return { parts };
    },
  };
  </script>
  
  <style>
  .part-index {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  