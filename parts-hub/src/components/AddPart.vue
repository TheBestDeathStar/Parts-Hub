<template>
    <div class="add-part">
      <h2>Add New Part</h2>
      <form @submit.prevent="addPart">
        <input v-model="partName" type="text" placeholder="Part Name" required />
        <input v-model="price" type="number" placeholder="Price" required />
        <input v-model="imageUrl" type="url" placeholder="Image URL" required />
        <button type="submit">Add Part</button>
        <button @click="cancelAdd">Cancel</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        partName: '',
        price: '',
        imageUrl: '',
      };
    },
    methods: {
      addPart() {
        // Logic for adding a new part
        console.log(this.partName, this.price, this.imageUrl);
      },
      cancelAdd() {
        // Logic for canceling part addition
        this.partName = '';
        this.price = '';
        this.imageUrl = '';
      },
    },
  };
  </script>
  
  <style>
  .add-part {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
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
  