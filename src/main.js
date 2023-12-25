import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //Import Vue-Router
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript
import { Chart } from 'vue-chartjs'

// In your JavaScript file (e.g., main.js)
import 'boxicons/css/boxicons.min.css';


// Import DataTables
import 'datatables.net';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// this function is used to disable console.log in production
if (process.env.NODE_ENV === 'production') {
    console.log = function () { };
}

createApp(App).use(router).use(VueSweetalert2).mount('#app')
