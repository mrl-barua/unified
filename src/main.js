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

// this function is used to disable functions in PRODUCTION MODE
if (process.env.NODE_ENV === 'production') {
    console.log = function () { };

    // Event Listener to disable right-click mouse
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    // Event listener that prevents access to the dev tools for visitors
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey || event.key === "F12") {
            event.preventDefault();
        }
    },
        // Disable dragging: This can prevent users from easily copying text from your site.
        document.ondragstart = function () { return false; },

        // Disable text selection: This can prevent users from easily copying text from your site.
        document.onselectstart = function () { return false; },

        // Disable right-click menu: This can prevent users from easily copying text from your site.
        document.oncopy = function () { return false; }

    );
}

createApp(App).use(router).use(VueSweetalert2).mount('#app')
