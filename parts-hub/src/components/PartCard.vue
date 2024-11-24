<template>
    <div class="part-card">
      <img :src="part.imageSrc" :alt="part.name" class="part-image" />
      <h3>{{ part.name }}</h3>
      <p>{{ part.price }}$</p>
      <button @click="removePart">Remove</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  // Props: Expecting a single part object as prop
  const props = defineProps({
    part: {
      type: Object,
      required: true,
    },
  });
  
  // Emit event when part is removed
  const emit = defineEmits(['remove']);
  
  const removePart = () => {
    emit('remove', props.part);
  };
  </script>
  
  <style scoped>
.part-card {
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 180px; /* Ensure all cards have the same width */
  max-width: 250px;
  height: 270px; /* Fixed height to make cards consistent */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
}

.part-image {
  width: 100%; /* Make image fill the width of the card */
  height: 100px; /* Make image fill the full height of the card */
  object-fit: contain; /* Ensure the entire image is shown without cropping */
  margin-bottom: 10px;
}

button {
  background-color: red;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>