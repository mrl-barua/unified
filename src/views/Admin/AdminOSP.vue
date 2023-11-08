<template>
  <div>
    <AdminSidebar />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <h1>ADMIN OSP DASHBOARD</h1>

      <DataTable style="width: 100%" class="display">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Sector</th>
            <th>Cluster</th>
            <th>Agency</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in swda" :key="item.ID">
            <td>{{ item.ID }}</td>
            <td>{{ item.Type }}</td>
            <td>{{ item.Sector }}</td>
            <td>{{ item.Cluster }}</td>
            <td>{{ item.Agency }}</td>
            <td>{{ item.Address }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Sector</th>
            <th>Cluster</th>
            <th>Agency</th>
            <th>Address</th>
          </tr>
        </tfoot>
      </DataTable>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import BarChart from "@/components/ChartJS/Barchart";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
// import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  name: "AdminOSP",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },

  data() {
    return {
      swda: [],
    };
  },
  mounted() {
    this.getSwda();
  },
  methods: {
    getSwda() {
      axios.get("http://127.0.0.1:8000/api/swdalist").then((res) => {
        this.swda = res.data.Swda;
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
@import "datatables.net-dt";
@import "datatables.net-bs5";

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0;
}
</style>
