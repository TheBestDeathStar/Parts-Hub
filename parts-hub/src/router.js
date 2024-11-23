import { createRouter, createWebHistory } from 'vue-router';
import PartIndex from '@/components/PartIndex.vue';
import AddPart from '@/components/AddPart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PartIndex, // The main page displaying parts
  },
  {
    path: '/add-part',
    name: 'AddPart',
    component: AddPart, // The page where users can add a new part
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;