<template>
  <div>
    <AdminSidebar :iconText="PageTitle" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <p class="Header">Recent Edit</p>
      <p class="Header2">{{ model.Cbss.NAME }}</p>
      <DataTable
        v-if="this.cbss.length > 0"
        style="width: 100%"
        class="display stripe order-column cell-border hover compact"
        id="cbssTable"
        :options="{
          order: [[0, 'desc']],
          stateSave: true,
        }"
      >
        <thead style="background: #133f5c" class="text-white">
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Case Category</th>
            <th>Mode of Admission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cbss" :key="item.ID">
            <td>{{ item.ID }}</td>
            <td>{{ formatDate(item.created_at) }}</td>
            <td>{{ item.NAME }}</td>
            <td>{{ item.AGE }}</td>
            <td>{{ item.SEX }}</td>
            <td>{{ item.CASE_CATEGORY }}</td>
            <td>{{ item.MODE_OF_ADMISSION }}</td>
            <td class="actions">
              <router-link
                :to="{ path: '/admincbss/' + item.ID + '/editHistory/view' }"
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
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Case Category</th>
            <th>Mode of Admission</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </DataTable>

      <DataTable
        v-else-if="this.cbss.length <= 0"
        style="width: 100%"
        class="display stripe order-column cell-border hover compact"
        id="cbssTable"
      >
        <thead style="background: #133f5c" class="text-white">
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Case Category</th>
            <th>Mode of Admission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cbss" :key="item.ID">
            <td>no data</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Case Category</th>
            <th>Mode of Admission</th>
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
      PageTitle: "ADMIN EDIT HISTORY ",
      cbss: [],

      model: {
        Cbss: { NAME: "" },
      },
    };
  },
  mounted() {
    this.CbssID = this.$route.params.ID;
    this.getCbssEditHistory(this.CbssID);
    this.CbssData(this.CbssID);
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

    getCbssEditHistory(CbssID) {
      axios.get(`${backendURL}/api/cbssVersion/${CbssID}`).then((res) => {
        this.cbss = res.data.CbssEditHistory;

        // console.log(res.data.CbssEditHistory);
      });
    },

    CbssData(CbssID) {
      axios
        .get(`http://127.0.0.1:8000/api/cbsslist/${CbssID}/edit`)
        .then((res) => {
          const cbssData = res.data.Cbss;
          console.log(res.data.Cbss);

          // Check if cbssData is null or empty
          if (!cbssData || Object.keys(cbssData).length === 0) {
            for (const key in this.model.Cbss) {
              this.model.Cbss[key] = "No Data";
            }
          } else {
            // Assign values from cbssData to this.model.Cbss
            for (const key in cbssData) {
              this.model.Cbss[key] = cbssData[key];
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
