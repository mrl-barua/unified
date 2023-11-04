<template>
  <div>
    <AdminSidebar />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <h1>ADMIN OSP DASHBOARD</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import BarChart from "@/components/ChartJS/Barchart";

export default {
  name: "AdminOSP",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
  },
};
</script>

<style scoped></style>
