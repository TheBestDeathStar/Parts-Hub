<!-- src/components/AddPart.vue -->
<template>
  <div class="add-part">
    <h2>List a part.</h2>
    <form @submit.prevent="addPart">
      <input v-model="partName" type="text" placeholder="Part Name" required />
      <input v-model="price" type="number" placeholder="Price" required />
      <input v-model="imageUrl" type="url" placeholder="Image URL" required />
      <textarea v-model="description" placeholder="Description" required></textarea>
      <button type="submit">Add Part</button>
      <button @click="cancelAdd">Cancel</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter(); 

const partName = ref('');
const price = ref('');
const imageUrl = ref('');
const description = ref('');

const addPart = () => {
  if (partName.value && price.value && imageUrl.value && description.value) {
    const newPart = { 
      name: partName.value, 
      price: price.value, 
      imageSrc: imageUrl.value ,
      description: description.value
    };
    // Emit the 'add' event to the parent component (App.vue or PartIndex.vue)
    window.dispatchEvent(new CustomEvent('add', { detail: newPart }));
    router.push('/'); // Navigate back to home after adding part
  }
};

const cancelAdd = () => {
  router.push('/'); // Navigate back to home on cancel
};
</script>

<style scoped>
.h2{
  color: black;
}
.add-part {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the element both vertically and horizontally */
}

form {
  display: flex;
  flex-direction: column;
}

input, textarea {
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #e63946;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #d62828;
}
</style>
