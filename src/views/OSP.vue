<template>
  <div>
    <Sidebar />

    <br><br><br>

    <h1>OPERATIONAL STAFF DASHBOARD</h1>

    <div class="dashboard-box">
      <EmploymentForm />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import EmploymentForm from '@/components/EmploymentForm.vue';
import PieChart from '@/components/ChartJS/PieChart';

export default {
  name: 'OSP',
  components: {
    Sidebar,
    EmploymentForm,
  }
}
</script>

<style>
.dashboard-box {
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
