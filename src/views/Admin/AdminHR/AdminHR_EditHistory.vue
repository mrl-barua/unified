<template>
  <div>
    <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <p class="Header">Recent Edit</p>
      <p class="Header2">{{ model.Hr.Agency }}</p>
      <DataTable
        v-if="this.hr.length > 0"
        style="width: 100%"
        class="display stripe order-column cell-border hover compact"
        id="hrTable"
        :options="{
          order: [[0, 'desc']],
          stateSave: true,
        }"
      >
        <thead style="background: #133f5c" class="text-white">
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>REQUEST DATE</th>
            <th>NAME OF REQUESTING</th>
            <th>EMPLOYEE POSITION</th>
            <th>EMPLOYEE STATUS</th>
            <th>OFFICE/UNIT</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in hr" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ formatDate(item.created_at) }}</td>
            <td>{{ item.request_date }}</td>
            <td>{{ item.requesting_employee_name }}</td>
            <td>{{ item.employee_position }}</td>
            <td>{{ item.employment_status }}</td>
            <td>{{ item.office_unit }}</td>
            <td class="actions">
              <router-link
                :to="{ path: '/adminhr/' + item.id + '/editHistory/view' }"
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
            <th>REQUEST DATE</th>
            <th>NAME OF REQUESTING</th>
            <th>EMPLOYEE POSITION</th>
            <th>EMPLOYEE STATUS</th>
            <th>OFFICE/UNIT</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </DataTable>

      <DataTable
        v-else-if="this.hr.length <= 0"
        style="width: 100%"
        class="display stripe order-column cell-border hover compact"
        id="hrTable"
      >
        <thead style="background: #133f5c" class="text-white">
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>REQUEST DATE</th>
            <th>NAME OF REQUESTING</th>
            <th>EMPLOYEE POSITION</th>
            <th>EMPLOYEE STATUS</th>
            <th>OFFICE/UNIT</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in hr" :key="item.id">
            <td>no data</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>REQUEST DATE</th>
            <th>NAME OF REQUESTING</th>
            <th>EMPLOYEE POSITION</th>
            <th>EMPLOYEE STATUS</th>
            <th>OFFICE/UNIT</th>
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
      PageTitle: "EMPLOYEE WELFARE AND RELATIONS",
      PageDetail: "Edit History Logs",
      hr: [],

      model: {
        Hr: {},
      },
    };
  },
  mounted() {
    this.HrID = this.$route.params.ID;
    this.getHrEditHistory(this.HrID);
    this.HrData(this.HrID);
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

    getHrEditHistory(HrID) {
      axios.get(`${backendURL}/api/hrVersion/${HrID}`).then((res) => {
        this.hr = res.data.HrEditHistory;
        console.log(res);
      });
    },

    HrData(HrID) {
      axios
        .get(`http://127.0.0.1:8000/api/hrlist/${HrID}/edit`)
        .then((res) => {
          const hrData = res.data.Hr;
          console.log(res.data.Hr);

          // Check if hrData is null or empty
          if (!hrData || Object.keys(hrData).length === 0) {
            for (const key in this.model.Hr) {
              this.model.Hr[key] = "No Data";
            }
          } else {
            // Assign values from hrData to this.model.Hr
            for (const key in hrData) {
              this.model.Hr[key] = hrData[key];
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
