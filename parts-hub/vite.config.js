import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Import the Vue plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // Add the Vue plugin here
  server: {
    port: 5173, // Adjust the port if needed
  },
  resolve: {
    alias: {
      '@': '/src', // Resolve to src folder
    },
  },
});
