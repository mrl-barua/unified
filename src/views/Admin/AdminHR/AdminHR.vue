<template>
  <div>
    <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper"></div>
    <div class="card card-margin">
      <div class="card-header" style="display: flex">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Active
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <router-link to="/adminhr/archive" style="text-decoration: none">
              <li>
                <a class="dropdown-item" href="#">Inactive</a>
              </li></router-link
            >
          </ul>
        </div>

        <router-link to="/adminhr/create">
          <button
            class="btn btn-primary float-start"
            style="
              background-color: #133f5c;
              font-size: 12px; /* Adjust the font size as needed */
              padding: 10px 30px 10px 30px;
              margin-left: 20px;
            "
          >
            ADD NEW
          </button>
        </router-link>

        <button
          @click="exportToExcel"
          class="btn btn-primary float-end"
          style="
            background-color: #0229bf;
            font-size: 12px; /* Adjust the font size as needed */
            padding: 10px 30px 10px 30px;
            margin-left: auto;
          "
        >
          EXPORT TO EXCEL
        </button>
      </div>

      <div class="card-body">
        <DataTable
          v-if="this.hr.length > 0"
          style="width: 100%"
          class="display stripe order-column cell-border hover compact"
          id="hrTable"
          :options="{
            stateSave: true,
            pageLength: 5,
            lengthMenu: [
              [5, 10, 25, 50],
              [5, 10, 25, 50],
            ],
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>ID</th>
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
              <td>{{ item.request_date }}</td>
              <td>{{ item.requesting_employee_name }}</td>
              <td>{{ item.employee_position }}</td>
              <td>{{ item.employment_status }}</td>
              <td>{{ item.office_unit }}</td>
              <td class="actions">
                <router-link
                  :to="{ path: '/adminhr/' + item.id + '/view' }"
                  class="custom-link"
                >
                  <i class="bx bx-low-vision table-icon custom-link"></i
                ></router-link>

                <router-link
                  :to="{ path: '/adminhr/' + item.id + '/edit' }"
                  class="custom-link"
                >
                  <i class="bx bx-edit icon table-icon"></i>
                </router-link>

                <i
                  @click="deleteHr(item.id)"
                  class="bx bx-archive-in icon table-icon custom-link"
                  style="cursor: pointer"
                ></i>

                <router-link
                  :to="{ path: '/adminhr/' + item.id + '/editHistory' }"
                  class="custom-link"
                >
                  <i class="bx bx-history icon table-icon"></i>
                </router-link>
              </td>
              <!-- <td>
                <router-link
                  :to="{ path: '/adminhr/' + item.id + '/view' }"
                  class="custom-link"
                >
                  <i class="bx bx-low-vision table-icon custom-link"></i
                ></router-link>

                <router-link
                  :to="{ path: '/adminhr/' + item.id + '/edit' }"
                  class="custom-link"
                >
                  <i class="bx bx-edit icon table-icon"></i>
                </router-link>

                <i
                  @click="deleteHr(item.id)"
                  class="bx bx-archive-in icon table-icon custom-link"
                  style="cursor: pointer"
                ></i>
              </td> -->
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
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
          v-else
          style="width: 100%"
          class="display stripe order-column cell-border hover compact"
          :options="{
            stateSave: true,
            pageLength: 5,
            lengthMenu: [
              [5, 10, 25, 50],
              [5, 10, 25, 50],
            ],
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>ID</th>
              <th>REQUEST DATE</th>
              <th>NAME OF REQUESTING</th>
              <th>EMPLOYEE POSITION</th>
              <th>EMPLOYEE STATUS</th>
              <th>OFFICE/UNIT</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tfoot>
            <tr>
              <th>ID</th>
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

    <br /><br />
  </div>
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";

import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import BarChart from "@/components/ChartJS/Barchart";
import ExcelJS from "exceljs";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);
export default {
  name: "AdminHR",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },
  data() {
    return {
      PageTitle: "EMPLOYEE WELFARE AND RELATIONS",
      PageDetail: "Active Main Dashboard",
      hr: [],
    };
  },
  computed: {},
  mounted() {
    this.getHr();
  },
  methods: {
    exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("HRData");

      // Add headers
      const headers = [
        "NO.",
        "REQUEST DATE",
        "NAME OF REQUESTING",
        "EMPLOYEE	POSITION",
        "EMPLOYMENT STATUS",
        "OFFICE/UNIT",
        "CATEGORY OF REQUEST",
        "BRIEF INTERVIEW",
        "REMARKS",
        "Assistance Provided Kind/Type",
        "Quantity/ Unit",
        "Date Received",
      ];

      worksheet.addRow(headers);

      // Add data from this.hr
      this.hr.forEach((item) => {
        const rowData = [
          item.id,

          item.request_date,
          item.requesting_employee_name,
          item.employee_position,
          item.employment_status,
          item.office_unit,
          item.request_category,
          item.brief_interview,
          item.remarks,
          item.assistance_provided,
        ];

        worksheet.addRow(rowData);
      });

      // Create a blob and initiate the download
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "hr_data.xlsx";
        a.click();
      });
    },
    async getHr() {
      try {
        const res = await axios.get(`${backendURL}/api/hrlist`);
        this.hr = res.data.Hr;
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteHr(HrID) {
      const result = await this.$swal({
        title: "Are you sure?",
        text: "You want to archive this data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, archive it!",
        cancelButtonText: "No, keep it",
      });

      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `${backendURL}/api/hrlist/${HrID}/delete`
          );

          await this.$swal({
            icon: "success",
            title: "Success!",
            text: res.data.message,
          });

          window.location.reload();
        } catch (error) {
          if (error.response) {
            if (error.response.status === 422) {
              this.errorList = error.response.data.errors;
            }
            if (error.response.status === 404) {
              await this.$swal({
                icon: "error",
                title: "Error!",
                text: error.response.data.message,
              });
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("error", error.message);
          }
        }
      }
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
}
</style>
