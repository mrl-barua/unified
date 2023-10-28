<template>
  
    <header class="d-flex flex-wrap justify-content-start  ">
      <img src="../assets/DSWDLogo.png" alt="">
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
    /* .header-image{
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
    } */


    header{
      background: linear-gradient(to right, white 20%, #EE1C25 80%);
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 100;
    }

    header img{
      width: 280px;
      
      margin: 20px 0px 10px 20px;
      
    }

  </style>
  