import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import appAxios from "@/adapters/appAxios";
import "@/assets/app.css";
import store from "@/store";

const app = createApp(App)

app.config.globalProperties.$appAxios = appAxios;
app.use(store)
app.use(router)
app.mount('#app')