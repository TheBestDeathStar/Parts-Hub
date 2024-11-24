<template>
  <div class="part-list">
    <div v-for="(part, index) in parts" :key="index" class="part-card">
      <img :src="part.imageSrc" alt="Part Image" />
      <h3>{{ part.name }}</h3>
      <p>{{part.description}}</p>
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
  justify-content: flex-start;
  gap: 20px;
  margin-top: 20px; /* Ensures some margin from the top */
}
  </style>
  