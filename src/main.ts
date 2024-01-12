import { createApp } from 'vue';
import { createPinia } from 'pinia'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import './style.css';
import App from './App.vue';
import { modalPlugin } from "@kouts/vue-modal";

const app = createApp(App);
app.use(createPinia());
app.use(ElementPlus);
app.use(modalPlugin);
app.mount("#app");
