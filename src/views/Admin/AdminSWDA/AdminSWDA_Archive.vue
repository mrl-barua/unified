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
            <router-link to="/adminswda" style="text-decoration: none"
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
          v-if="this.swda.length > 0"
          style="width: 100%"
          class="display stripe order-column cell-border hover compact"
          id="swdaTable"
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
              <td style="text-align: center">
                <i
                  style="cursor: pointer"
                  class="bx bxs-up-arrow-square custom-link"
                  @click="restoreSwda(item.ID)"
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
          <thead style="background: #cb0e16" class="text-white">
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
          <tbody></tbody>
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
  name: "AdminSWDA_Archive",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },
  data() {
    return {
      PageTitle: "ADMIN SWDA ARCHIVE", // The title displayed on the page, which is "ADMIN SWDA"

      swda: [],
    };
  },
  computed: {},
  mounted() {
    this.getSwdaArchive();
  },
  methods: {
    exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("SwdaData");

      // Add headers
      const headers = [
        "ID",
        "Type",
        "Sector",
        "Cluster",
        "Agency",
        "Address",
        "Former Name",
        "Contact Number",
        "Fax",
        "Email",
        "Website",
        "Contact Person",
        "Position",
        "Mobile Number",
        "Registered",
        "Licensed",
        "Accredited",
        "Services Offered",
        "Simplified Services",
        "Area of Operation",
        "Regional Operation",
        "Specified Areas of Operation",
        "Mode of Delivery",
        "Clientele",
        "Registration ID",
        "Registration Date",
        "Registration Expiration",
        "Registration Status",
        "License ID",
        "License Date Issued",
        "License Expiration",
        "License Status",
        "Accreditation ID",
        "Accreditation Date Issued",
        "Accreditation Expiration",
        "Accreditation Status",
        "Remarks",
        "License Days Left",
        "Licensure Overdue",
        "Accreditation Days Left",
        "Accreditation Overdue",
      ];

      worksheet.addRow(headers);

      // Add data from this.swda
      this.swda.forEach((item) => {
        const rowData = [
          item.ID,
          item.Type,
          item.Sector,
          item.Cluster,
          item.Agency,
          item.Address,
          item.Former_Name,
          item.Contact_Number,
          item.Fax,
          item.Email,
          item.Website,
          item.Contact_Person,
          item.Position,
          item.Mobile_Number,
          item.Registered,
          item.Licensed,
          item.Accredited,
          item.Services_Offered,
          item.Simplified_Services,
          item.Area_of_Operation,
          item.Regional_Operation,
          item.Specified_Areas_of_Operation,
          item.Mode_of_Delivery,
          item.Clientele,
          item.Registration_ID,
          item.Registration_Date,
          item.Registration_Expiration,
          item.Registration_Status,
          item.Licensed_ID,
          item.License_Date_Issued,
          item.License_Expiration,
          item.License_Status,
          item.Accreditation_ID,
          item.Accreditation_Date_Issued,
          item.Accreditation_Expiration,
          item.Accreditation_Status,
          item.Remarks,
          item.License_Days_Left,
          item.Licensure_Overdue,
          item.Accreditation_Days_Left,
          item.Accreditation_Overdue,
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
        a.download = "swda_data.xlsx";
        a.click();
      });
    },
    getSwdaArchive() {
      axios.get(`${backendURL}/api/swdaArchived`).then((res) => {
        this.swda = res.data.ArchivedSwda;
        console.log(res);
      });
    },

    restoreSwda(SwdaID) {
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
            .post(`${backendURL}/api/swdaArchived/${SwdaID}/restore`)
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
