<template>
<div>
    <Sidebar />
    <br><br><br>
    <div class="container-fluid wrapper">
      <!-- INSERT CODE HERE -->
      <h1 > CBSS DASHBOARD</h1>
      <div class="col-12 col-md-6"><BarChart /></div>
      <div class="col-12 col-md-6"><BarChart /></div>
      <div class="graphs col-12 col-md-6"><LineChart /></div>
      <div class="graphs col-12 col-md-6"><LineChart /></div>
      <div class="graphs col-12 col-md-6"><PieChart /></div>
      <div class="graphs col-12 col-md-6"><PieChart /></div>
    </div>
    
</div>

</template>

<script>
import Sidebar from '@/components/Sidebar'; 
import BarChart from '@/components/Barchart';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart'

export default {
  name: 'Dashboard',
  components: {
    Sidebar, 
    BarChart,
    PieChart,
    LineChart,
  },
};
</script>


<style scoped> 
.graphs{
  margin-top: 100px;
  margin-bottom: 100px;
}

</style>