<template>
  <div>
    <AdminSidebar :iconText="PageTitle" />
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
            Inactive
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <router-link to="/admincbss" style="text-decoration: none"
              ><li>
                <a class="dropdown-item" href="#">Active</a>
              </li></router-link
            >
          </ul>
        </div>
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
            pageLength: 5,
            lengthMenu: [
              [5, 10, 25, 50],
              [5, 10, 25, 50],
            ],
          }"
        >
          <thead style="background: #cb0e16" class="text-white">
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
              <td style="text-align: center">
                <i
                  style="cursor: pointer"
                  class="bx bxs-up-arrow-square custom-link"
                  @click="restoreCbss(item.ID)"
                ></i>
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
          id="hrTable"
        >
          <thead style="background: #cb0e16" class="text-white">
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
import BarChart from "@/components/ChartJS/Barchart";
import ExcelJS from "exceljs";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  name: "AdminCBSS_Archive",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },
  data() {
    return {
      PageTitle: "ADMIN CBSS ARCHIVE", // The title displayed on the page, which is "ADMIN HR"

      cbss: [],
    };
  },
  computed: {},
  mounted() {
    this.getCbss();
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
    getCbss() {
      axios.get(`${backendURL}/api/cbssArchived`).then((res) => {
        this.cbss = res.data.ArchivedCbss;
        console.log(res);
      });
    },

    restoreCbss(CbssID) {
      this.$swal({
        title: "Are you sure?",
        text: "You want to restore this data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, restore it!",
        cancelButtonText: "No, keep it",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`${backendURL}/api/cbssArchived/${CbssID}/restore`)
            .then((res) => {
              return this.$swal({
                icon: "success",
                title: "Success!",
                text: res.data.message,
              });
            })
            .then(() => {
              window.location.reload();
            })
            .catch((error) => {
              if (error.response) {
                if (error.response.status === 404) {
                  this.$swal({
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
            });
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
</style>
