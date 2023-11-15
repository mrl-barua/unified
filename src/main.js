import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //Import Vue-Router
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript
import { Chart } from 'vue-chartjs'

// In your JavaScript file (e.g., main.js)
import 'boxicons/css/boxicons.min.css';

// Import DataTables
import 'datatables.net-bs5/css/dataTables.bootstrap5.css'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5.js'
import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js'
import 'datatables.net-bs5/js/dataTables.bootstrap5.min.mjs'
import 'datatables.net-bs5/js/dataTables.bootstrap5.min.mjs'

import 'datatables.net/js/jquery.dataTables'
// import 'datatables.net/js/jquery.dataTables.min.js'
// import 'datatables.net/js/jquery.dataTables.min.mjs'
// import 'datatables.net/js/jquery.dataTables.mjs'



createApp(App).use(router).mount('#app')
