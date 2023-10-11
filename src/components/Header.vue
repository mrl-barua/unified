<template>
    <div class="headerComponent">
        <img src="@/assets/DSWDLogo.png" alt="dswdLogo">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>

    .headerComponent{
      position: sticky;
      
      height: 80px;
      background: linear-gradient(to right, #EE1C25, white, #294D9C);

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
  