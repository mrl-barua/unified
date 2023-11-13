<template>
  <div>
    <AdminSidebar />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <div class="card">
        <div class="card-header">
          <router-link
            to="/adminswda/create"
            class="btn btn-primary float-start"
            style="
              background-color: #133f5c;
              font-size: 12px; /* Adjust the font size as needed */
              padding: 10px 30px 10px 30px;
            "
          >
            ADD NEW
          </router-link>

          <button
            @click="exportToExcel"
            class="btn btn-primary float-end"
            style="
              background-color: Green;
              font-size: 12px; /* Adjust the font size as needed */
              padding: 10px 30px 10px 30px;
            "
          >
            EXPORT DATA
          </button>
        </div>
        <div class="card-body">
          <DataTable
            v-if="this.swda.length > 0"
            style="width: 100%"
            class="display stripe order-column cell-border hover compact"
            id="swdaTable"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Sector</th>
                <th>Cluster</th>
                <th>Agency</th>
                <th>Address</th>
                <th>Actions</th>
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
                <td>
                  <i class="bx bx-low-vision table-icon custom-link"></i>
                  <router-link
                    :to="{ path: '/adminswda/' + item.ID + '/edit' }"
                    class="custom-link"
                  >
                    <i class="bx bx-edit icon table-icon"></i>
                  </router-link>
                  <i
                    @click="deleteSwda(item.ID)"
                    class="bx bx-archive-in icon table-icon custom-link"
                  ></i>
                </td>
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
                <th>Actions</th>
              </tr>
            </tfoot>
          </DataTable>
        </div>
      </div>

      <br /><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import BarChart from "@/components/ChartJS/Barchart";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
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

  created() {},
  methods: {
    getSwda() {
      axios.get(`${backendURL}/api/swdalist`).then((res) => {
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

.dataTables_paginate a {
  color: black !important;
}

div.dataTables_wrapper a.paginate_button {
  color: black !important;
}

* {
  text-align: justify;
}

.table-icon {
  margin: 0px 3px 0px 3px;
}

.custom-link {
  text-decoration: none !important;
  color: black;
}
</style>
