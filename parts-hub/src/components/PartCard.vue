<template>
  <div class="part-card">
    <!-- Red X button in the top-right corner -->
    <button class="remove-button" @click="removePart">X</button>
    
    <!-- Part Image -->
    <img :src="part.imageSrc" :alt="part.name" class="part-image" />
    
    <!-- Part Details -->
    <h3>{{ part.name }}</h3>
    <p>{{ part.description }}</p>
    <p>{{ part.price }}$</p>
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
  position: relative; /* Necessary for positioning the X button */
  margin: 0;
}

.part-image {
  width: 100%; /* Make image fill the width of the card */
  height: 100px; /* Make image fill the full height of the card */
  object-fit: contain; /* Ensure the entire image is shown without cropping */
  margin-bottom: 10px;
}

/* New style for the red X button */
.remove-button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%; /* Makes it a circular button */
  width: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 0px;
  right: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 2px; /* Aligns the X vertically */
  padding: 0;
}

.remove-button:hover {
  background-color: darkred; /* Darker shade on hover */
}
</style>
