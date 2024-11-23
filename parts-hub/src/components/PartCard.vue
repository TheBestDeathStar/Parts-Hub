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
  }
  
  .part-image {
    width: 100px;
    height: auto;
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
  