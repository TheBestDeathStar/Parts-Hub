<template>
    <div class="part-list">
      <div v-for="(part, index) in parts" :key="index" class="part-card">
        <img :src="part.imageUrl" alt="Part Image" />
        <h3>{{ part.name }}</h3>
        <p>{{ part.price }} $</p>
        <button @click="removePart(index)">Remove</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      parts: Array,
    },
    methods: {
      removePart(index) {
        this.parts.splice(index, 1);
      },
    },
  };
  </script>
  
  <style>
  .part-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .part-card {
    background: white;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
  }
  button {
    background-color: #e63946;
    color: white;
    padding: 5px;
    border: none;
    cursor: pointer;
  }
  </style>
  