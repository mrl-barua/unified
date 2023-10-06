<template>
<div>
    <Sidebar />
    <br><br><br>
    <div class="container-fluid wrapper">
      <!-- INSERT CODE HERE -->
      <h1 > CBSS DASHBOARD</h1>
      <Barchart />
    </div>
    
</div>

</template>

<script>
import Sidebar from '@/components/Sidebar'; 
import Barchart from '@/components/Barchart';

export default {
  name: 'Dashboard',
  components: {
    Sidebar, 
    Barchart,
  },
};
</script>


<style scoped> 


</style>