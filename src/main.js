import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //Import Vue-Router
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript
import { Chart } from 'vue-chartjs'

createApp(App).use(router).mount('#app')
