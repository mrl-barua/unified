<template>
  <div>
    <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <p class="Header">Recent Edit</p>
      <p class="Header2">{{ model.Swda.Agency }}</p>
      <DataTable
        v-if="this.swda.length > 0"
        style="width: 100%"
        class="display stripe order-column cell-border hover compact"
        id="swdaTable"
        :options="{
          order: [[0, 'desc']],
          stateSave: true,
        }"
      >
        <thead style="background: #133f5c" class="text-white">
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>Type</th>
            <th>Sector</th>
            <th>Cluster</th>
            <th>Agency</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in swda" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ formatDate(item.created_at) }}</td>
            <td>{{ item.Type }}</td>
            <td>{{ item.Sector }}</td>
            <td>{{ item.Cluster }}</td>
            <td>{{ item.Agency }}</td>
            <td>{{ item.Address }}</td>
            <td class="actions">
              <router-link
                :to="{ path: '/adminswda/' + item.id + '/editHistory/view' }"
                class="custom-link"
              >
                <i class="bx bx-low-vision table-icon custom-link"></i
              ></router-link>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Date Edited</th>

            <th>Type</th>
            <th>Sector</th>
            <th>Cluster</th>
            <th>Agency</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </DataTable>

      <DataTable
        v-else-if="this.swda.length <= 0"
        style="width: 100%"
        class="display stripe order-column cell-border hover compact"
        id="swdaTable"
      >
        <thead style="background: #133f5c" class="text-white">
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
          <tr v-for="item in swda" :key="item.id">
            <td>no data</td>
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
</template>

<script>
import axios from "axios"; // Import Axios
import { backendURL } from "@/config.js";
import AdminSidebar from "@/components/AdminSidebar";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  name: "AdminEditHistory",
  components: {
    AdminSidebar,
    DataTable,
  },
  data() {
    return {
      PageTitle:
        "List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies (SWDA)",
      PageDetail: "Edit History Log",
      swda: [],

      model: {
        Swda: { Agency: "" },
      },
    };
  },
  mounted() {
    this.SwdaID = this.$route.params.ID;
    this.getSwdaEditHistory(this.SwdaID);
    this.SwdaData(this.SwdaID);
  },
  methods: {
    formatDate(dateString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },

    getSwdaEditHistory(SwdaID) {
      axios.get(`${backendURL}/api/swdaVersion/${SwdaID}`).then((res) => {
        this.swda = res.data.SwdaEditHistory;
        console.log(res);
      });
    },

    SwdaData(SwdaID) {
      axios
        .get(`http://127.0.0.1:8000/api/swdalist/${SwdaID}/edit`)
        .then((res) => {
          const swdaData = res.data.Swda;
          console.log(res.data.Swda);

          // Check if swdaData is null or empty
          if (!swdaData || Object.keys(swdaData).length === 0) {
            for (const key in this.model.Swda) {
              this.model.Swda[key] = "No Data";
            }
          } else {
            // Assign values from swdaData to this.model.Swda
            for (const key in swdaData) {
              this.model.Swda[key] = swdaData[key];
            }
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            alert(error.response.data.message);
          }
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
  margin: 0px 4px 0px 4px;
}

.custom-link {
  text-decoration: none !important;
  color: black;
}

.actions {
  justify-content: space-evenly;
  align-items: center;
  width: 100px !important;
  margin: auto;
  text-align: center;
}

.Header {
  font-family: Inter;
  font-size: 35px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
}

.Header2 {
  font-family: Inter;
  font-size: 22px;
  font-weight: bolder;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: red;
}
</style>
