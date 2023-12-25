<template>
  <div id="app">
    <!-- <loading v-if="isLoading" /> -->
    <!-- <transition name="fade"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
import LoginForm from "./views/LoginForm.vue";
// import Dashboard from "./views/User/CBSS/CBSS.vue";

export default {
  name: "App",
  components: {
    LoginForm,
    // Dashboard,
  },

  mounted() {
    // // Event Listener to disable right-click mouse
    // document.addEventListener("contextmenu", (event) => event.preventDefault());
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
    // document.addEventListener("keyup", (e) => {
    //   if (e.key == "PrintScreen") {
    //     navigator.clipboard.writeText("");
    //     alert("Screenshots disabled!");
    //   }
    // });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
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
  /* border: 1px solid red; */
}

.row::after {
  content: "";
  clear: both;
}
body {
  overflow-x: hidden;
}

body {
  --sb-track-color: #f11b25;
  --sb-thumb-color: #292d96;
  --sb-size: 3px;

  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
}

body::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 18px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 18px;
}

.card-margin {
  margin: 20px;
}

/* CSS RESPONSIVE GLOBAL STYLES END */
</style>
