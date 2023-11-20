<template>
  <header class="d-flex flex-wrap justify-content-start">
    <!-- <router-link to="/dashboard" class="custom-link"> -->
    <img src="../assets/DSWDLogo.png" alt="" />
    <!-- </router-link> -->
  </header>
</template>

<script>
export default {
  name: "Header",
};
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

header {
  background: linear-gradient(to right, white 20%, #BAC2FF 80%);
  /* background: linear-gradient(-45deg, #ee1c25 10%, yellow 75%, white 20%); */
  


  /* background: white;  */
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
}

header img {
  width: 280px;

  margin: 20px 0px 10px 20px;
}
</style>
