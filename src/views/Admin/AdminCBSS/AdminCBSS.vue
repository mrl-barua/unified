<template>
  <div>
    <AdminSidebar
      v-if="admin === 'authenticated'"
      :iconText="PageTitle"
      :iconDetails="PageDetail"
    />
    <CbssSidebar
      v-if="cbssAdmin === 'authenticated'"
      iconText="PageTitle"
      :iconDetails="PageDetail"
    />
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
            <router-link to="/admincbss/archive" style="text-decoration: none">
              <li>
                <a class="dropdown-item" href="#">Inactive</a>
              </li></router-link
            >
          </ul>
        </div>

        <router-link to="/admincbss/create">
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
          v-if="this.cbss.length > 0"
          style="width: 100%"
          class="display stripe order-column cell-border hover compact"
          id="cbssTable"
          :options="{
            stateSave: true,
            pageLength: 8,
            lengthMenu: [
              [5, 8, 10, 25, 50],
              [5, 8, 10, 25, 50],
            ],
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>ID</th>
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
              <td>{{ item.NAME }}</td>
              <td>{{ item.AGE }}</td>
              <td>{{ item.SEX }}</td>
              <td>{{ item.CASE_CATEGORY }}</td>
              <td>{{ item.MODE_OF_ADMISSION }}</td>
              <td class="actions">
                <router-link
                  :to="{ path: '/admincbss/' + item.ID + '/view' }"
                  class="custom-link"
                >
                  <i class="bx bx-low-vision table-icon custom-link"></i
                ></router-link>

                <router-link
                  :to="{ path: '/admincbss/' + item.ID + '/edit' }"
                  class="custom-link"
                >
                  <i class="bx bx-edit icon table-icon"></i>
                </router-link>

                <i
                  @click="deleteCbss(item.ID)"
                  class="bx bx-archive-in icon table-icon custom-link"
                  style="cursor: pointer"
                ></i>

                <router-link
                  :to="{ path: '/admincbss/' + item.ID + '/editHistory' }"
                  class="custom-link"
                >
                  <i class="bx bx-history icon table-icon"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
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
          v-else
          style="width: 100%"
          class="display stripe order-column cell-border hover compact"
          :options="{
            stateSave: true,
            pageLength: 8,
            lengthMenu: [
              [5, 8, 10, 25, 50],
              [5, 8, 10, 25, 50],
            ],
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Case Category</th>
              <th>Mode of Admission</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tfoot>
            <tr>
              <th>ID</th>
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

    <br /><br />
  </div>
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";

import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import CbssSidebar from "@/components/CbssSidebar";
import BarChart from "@/components/ChartJS/Barchart";
import ExcelJS from "exceljs";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);
export default {
  name: "AdminCBSS",
  components: {
    Footer,
    AdminSidebar,
    CbssSidebar,
    BarChart,
    DataTable,
  },
  data() {
    return {
      PageTitle: "Community Based Services Section",
      PageDetail: "Active Admin Dashboard",
      cbss: [],
      admin: null,
      cbssAdmin: null,
    };
  },
  computed: {},
  mounted() {
    this.getCbss();
    this.admin = sessionStorage.getItem("admin");
    this.cbssAdmin = sessionStorage.getItem("cbssAdmin");
    console.log(this.admin);
    console.log(this.cbssAdmin);
  },
  methods: {
    exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("HRData");

      // Add headers
      const headers = [
        "ID",
        "DATE",
        "NAME",
        "AGE",
        "SEX",
        "CASE_CATEGORY",
        "SUB_CATEGORY",
        "MODE_OF_ADMISSION",
        "ADDRESS",
        "NON_MONETARY_SERVICES",
        "Purpose",
        "AMOUNT",
        "REMARKS",
        "REPONSIBLE_PERSON",
        "NUMBER_OF_SERVICES_AVAILED.",
      ];

      worksheet.addRow(headers);

      // Add data from this.cbss
      this.cbss.forEach((item) => {
        const rowData = [
          item.ID,
          item.DATE,
          item.NAME,
          item.AGE,
          item.SEX,
          item.CASE_CATEGORY,
          item.SUB_CATEGORY,
          item.MODE_OF_ADMISSION,
          item.ADDRESS,
          item.NON_MONETARY_SERVICES,
          item.Purpose,
          item.AMOUNT,
          item.REMARKS,
          item.REPONSIBLE_PERSON,
          item.NUMBER_OF_SERVICES_AVAILED,
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
        a.download = "cbss_data.xlsx";
        a.click();
      });
    },
    async getCbss() {
      try {
        const res = await axios.get(`${backendURL}/api/cbsslist`);
        this.cbss = res.data.Cbss;
      } catch (error) {
        console.error("Error fetching CBSS list:", error);
      }
    },
    async deleteCbss(CbssID) {
      try {
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
              `${backendURL}/api/cbsslist/${CbssID}/delete`
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
      } catch (error) {
        console.error("Error with swal:", error);
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
