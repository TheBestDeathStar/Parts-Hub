<template>
    <div class="part-index">
      <h1>Parts Hub</h1>
  
      <!-- Filter Component -->
      <PartFilter @filter="applyFilter" />
  
      <!-- Add Part Button (Redirect to Add Part page) -->
    <button @click="goToAddPartPage">Add Part</button>

      <!-- List of Parts -->
      <div v-for="(part, index) in filteredParts" :key="index">
        <PartCard :part="part" @remove="removePart" />
      </div>
  </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter
import PartCard from './PartCard.vue';
import PartFilter from './PartFilter.vue';

const router = useRouter(); // Initialize router
  // List of parts
  const parts = ref([
  { name: 'Motor Block', price: 120, imageSrc: '/src/images/motorblock.jpg' },
  { name: 'Car Wheel', price: 60, imageSrc: '/src/images/carwheel.jpg' },
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
  
  // Go to the Add Part page when the button is clicked
const goToAddPartPage = () => {
  router.push('/add-part'); // Redirect to the add part page
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
  