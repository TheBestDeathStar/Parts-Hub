<template>
    <div class="part-index">
      <h1>Parts Hub</h1>
  
      <!-- Filter Component -->
      <PartFilter @filter="applyFilter" />
  
      <!-- Add Part Button -->
      <button @click="openAddPart">Add Part</button>
  
      <!-- List of Parts -->
      <div v-for="(part, index) in filteredParts" :key="index">
        <PartCard :part="part" @remove="removePart" />
      </div>
  
      <!-- Add Part Form -->
      <div v-if="isAdding">
        <div>
          <input v-model="newPart.name" placeholder="Part Name" />
          <input v-model="newPart.price" type="number" placeholder="Part Price" />
          <input v-model="newPart.imageSrc" placeholder="Image URL" />
          <button @click="addPart">Add Part</button>
          <button @click="cancelAdd">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import PartCard from './PartCard.vue';
  import PartFilter from './PartFilter.vue';
  
  // List of parts
  const parts = ref([
    { name: 'Motor Block', price: 120, imageSrc: '/images/motorblock.jpg' },
    { name: 'Car Wheel', price: 60, imageSrc: '/images/carwheel.jpg' },
  ]);
  
  // Add new part state
  const isAdding = ref(false);
  const newPart = ref({ name: '', price: '', imageSrc: '' });
  
  // Filtered parts based on user input
  const filterText = ref('');
  
  const filteredParts = computed(() => {
    if (!filterText.value) return parts.value;
    return parts.value.filter(part => part.name.toLowerCase().includes(filterText.value.toLowerCase()));
  });
  
  // Open the form to add a part
  const openAddPart = () => {
    isAdding.value = true;
  };
  
  // Add new part to the list
  const addPart = () => {
    if (newPart.value.name && newPart.value.price && newPart.value.imageSrc) {
      parts.value.push({ ...newPart.value });
      newPart.value = { name: '', price: '', imageSrc: '' };
      isAdding.value = false;
    }
  };
  
  // Cancel the form
  const cancelAdd = () => {
    newPart.value = { name: '', price: '', imageSrc: '' };
    isAdding.value = false;
  };
  
  // Remove a part from the list
  const removePart = (partToRemove) => {
    parts.value = parts.value.filter(part => part !== partToRemove);
  };
  
  // Apply the filter when it changes
  const applyFilter = (filter) => {
    filterText.value = filter;
  };
  </script>
  
  <style scoped>
  .part-index {
    text-align: center;
  }
  
  button {
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  input {
    padding: 10px;
    font-size: 16px;
    margin: 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  </style>
  