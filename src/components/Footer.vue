<template>
    <div class="footerWrapper">
      <div class="footerComponent text-white text-center">
        © Department of Social Welfare and Development. 2023 All rights reserved.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'footerComponent'
  }
  </script>
  
  <style scoped>
  .footerWrapper {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  
  .footerComponent {
    height: 50px;
    background: red;
    padding: 5px 0;
  }
  
  @media only screen and (min-width: 414px) {
    .footerComponent {
      height: 60px;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    .footerComponent {
      height: 30px;
    }
  }
  </style>
  