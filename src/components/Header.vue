<template>
    <div class="headerComponent">
        <img class="float-start header-image" src="@/assets/DSWDLogo.png" alt="dswdLogo">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
    .header-image{
      padding-left: 2em;
    }
    .headerComponent{
      position: sticky;
      
      height: 80px;
      background: linear-gradient(to right, white 15%, #EE1C25 85%);

      z-index: 999;
      margin-top:-60px;
      margin-bottom: 20px;
      padding: 0;
    }

    .headerComponent img{
      height: 70px;
      padding-top: 10px;
    }


  </style>
  