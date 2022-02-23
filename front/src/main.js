import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'


const app = createApp(App).use(router);
app.mount('#app');
app.use(VueAxios, axios);

app.config.globalProperties.$backendUrl = process.env.VUE_APP_BACKEND_URL;
app.config.globalProperties.$appName = process.env.VUE_APP_NAME;