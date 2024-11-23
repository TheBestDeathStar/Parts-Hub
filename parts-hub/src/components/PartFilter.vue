<template>
    <div class="filter-container">
      <input
        type="text"
        v-model="filterText"
        placeholder="Filter by part name..."
        @input="onFilterChange"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  // Define the reactive filter text
  const filterText = ref('');
  const emit = defineEmits(['filter']);
  
  // Emit the filter text whenever it changes
  const onFilterChange = () => {
    emit('filter', filterText.value);
  };
  </script>
  
  <style scoped>
  .filter-container {
    margin-bottom: 20px;
  }
  
  input {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 100%;
    max-width: 300px;
  }
  </style>
  