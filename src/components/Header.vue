<template>
    <header class="headerComponent">
      <img src="@/assets/Header.png" alt="Header Image">
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  .headerComponent {
    display: none;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .headerComponent img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  @media only screen and (min-width: 414px) {
    .headerComponent {
      display: block;
      position: relative;
      z-index: 999;
      margin-top: -60px;
    }
  }
  </style>
  