<template>
  <router-view></router-view>
</template>

<script>
import LoginForm from "./views/LoginForm.vue";
import Dashboard from "./views/User/Dashboard.vue";

export default {
  name: "App",
  components: {
    LoginForm,
    Dashboard,
  },

  mounted() {
    // // Event Listener to disable right-click mouse
    // document.addEventListener('contextmenu', event => event.preventDefault());
    // // Event listener that prevents access to the dev tools for visitors
    // document.addEventListener("keydown", function (event) {
    //   if (event.ctrlKey) {
    //     event.preventDefault();
    //   }
    //   if (event.keyCode == 123) {
    //     event.preventDefault();
    //   }
    // });
    // // Event listener to disable screen capture
    // document.addEventListener('keyup', (e) => {
    //   if (e.key == 'PrintScreen') {
    //     navigator.clipboard.writeText('');
    //     alert('Screenshots disabled!');
    //   }
    // });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* CSS RESPONSIVE GLOBAL STYLES START */
* {
  box-sizing: border-box;
}

[class*="col-"] {
  float: left;
  /* border:1px solid red;   */
}

.row::after {
  content: "";
  clear: both;
}

/* CSS RESPONSIVE GLOBAL STYLES END */
</style>
