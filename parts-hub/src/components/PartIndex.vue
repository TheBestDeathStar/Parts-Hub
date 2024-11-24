<template>
  <div class="part-index">
    <h1>Parts Hub</h1>

    <!-- Filter and Add Part Button Container -->
    <div class="filter-and-button">
      <PartFilter @filter="applyFilter" />
      <button @click="goToAddPartPage">Add Part</button>
    </div>

    <!-- List of Parts -->
    <div class="part-list-container">
  <div v-for="(part, index) in filteredParts" :key="index">
    <PartCard :part="part" @remove="removePart" />
  </div>
    <!-- Reset Button -->
    <button class="reset-button" @click="resetParts">Reset</button>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PartCard from './PartCard.vue';
import PartFilter from './PartFilter.vue';

const router = useRouter();

// Load parts from localStorage or use defaults
const storedParts = localStorage.getItem('parts');
const defaultParts = [
  { name: 'Motor Block', price: 120, imageSrc: '/src/images/motorblock.jpg' },
  { name: 'Car Wheel', price: 60, imageSrc: '/src/images/carwheel.jpg' },
];
const parts = ref(storedParts ? JSON.parse(storedParts) : defaultParts);

// Save updated parts array to localStorage
const savePartsToLocalStorage = () => {
  localStorage.setItem('parts', JSON.stringify(parts.value));
  console.log('Saved parts to localStorage:', parts.value);
};

// Filtered parts based on user input
const filterText = ref('');
const filteredParts = computed(() => {
  if (!filterText.value) return parts.value;
  return parts.value.filter(part => 
    part.name.toLowerCase().includes(filterText.value.toLowerCase())
  );
});

// Navigate to Add Part page
const goToAddPartPage = () => {
  router.push('/add-part');
};

// Remove a part and update localStorage
const removePart = (partToRemove) => {
  parts.value = parts.value.filter(part => part !== partToRemove);
  savePartsToLocalStorage();
};

// Add a part and update localStorage
onMounted(() => {
  const addPart = (event) => {
    parts.value.push(event.detail);
    savePartsToLocalStorage();
  };
  window.addEventListener('add', addPart);

  // Log initial load
  console.log('Loaded parts from localStorage:', parts.value);
});

// Apply filter based on user input
const applyFilter = (filter) => {
  filterText.value = filter; // Update filter text when user inputs
};

// Reset parts list to default
const resetParts = () => {
  localStorage.removeItem('parts'); // Clear local storage
  location.reload(); // Reload the app to reinitialize the default parts
};
</script>

<style scoped>
.part-index {
  text-align: left;
  padding: 20px;
  height: 100%;
  width: 100%;
}
.part-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px; /* Adjust this gap if needed, or remove it for no spacing */
  margin-left: 20px; /* Shift the part-list container to the right */
  margin-top: 0; /* Optional: Make sure there's no unwanted margin at the top */
}

.filter-and-button {
  display: flex; /* Pushes button to the right */
  justify-content: center;
  margin-bottom: 20px;
  width: 100%; /* Ensures the container spans the full width */
}
.filter-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto; /* Makes the filter box take only the space it needs */
  margin-bottom: 0;
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

input {
  padding: 10px;
  font-size: 16px;
  margin: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

/* Ensure parts are laid out horizontally */

.reset-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #dc3545;
  color: white;
}

.reset-button:hover {
  background-color: #c82333;
}
</style>

