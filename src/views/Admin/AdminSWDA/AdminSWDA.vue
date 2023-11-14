<template>
  <div>
    <AdminSidebar :iconText="PageTitle" />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper"></div>
    <div class="card">
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
            <router-link to="/adminswda/archive" style="text-decoration: none">
              <li>
                <a class="dropdown-item" href="#">Inactive</a>
              </li></router-link
            >
          </ul>
        </div>

        <router-link to="/adminswda/create">
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
            background-color: green;
            font-size: 12px; /* Adjust the font size as needed */
            padding: 10px 30px 10px 30px;
            margin-left: auto;
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
            <tr v-for="item in swda" :key="item.ID">
              <td>{{ item.ID }}</td>
              <td>{{ item.Type }}</td>
              <td>{{ item.Sector }}</td>
              <td>{{ item.Cluster }}</td>
              <td>{{ item.Agency }}</td>
              <td>{{ item.Address }}</td>
              <td>
                <router-link
                  :to="{ path: '/adminswda/' + item.ID + '/view' }"
                  class="custom-link"
                >
                  <i class="bx bx-low-vision table-icon custom-link"></i
                ></router-link>

                <router-link
                  :to="{ path: '/adminswda/' + item.ID + '/edit' }"
                  class="custom-link"
                >
                  <i class="bx bx-edit icon table-icon"></i>
                </router-link>

                <i
                  @click="deleteSwda(item.ID)"
                  class="bx bx-archive-in icon table-icon custom-link"
                  style="cursor: pointer"
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
  name: "AdminSWDA",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },
  data() {
    return {
      PageTitle: "ADMIN SWDA", // The title displayed on the page, which is "ADMIN SWDA"

      swda: [],
    };
  },
  computed: {},
  mounted() {
    this.getSwda();
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
    getSwda() {
      axios.get(`${backendURL}/api/swdalist`).then((res) => {
        this.swda = res.data.Swda;
        console.log(res);
      });
    },

    deleteSwda(SwdaID) {
      // console.log(SwdaID);
      if (confirm("Are you sure, you want to archive this data?")) {
        axios
          .delete(`${backendURL}/api/swdalist/${SwdaID}/delete`)
          .then((res) => {
            alert(res.data.message);
            // Reload the page after a successful deletion
            window.location.reload();
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status === 422) {
                mythis.errorList = error.response.data.errors;
              }
              if (error.response.status === 404) {
                alert(error.response.data.message);
              }
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("error", error.message);
            }
          });
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
</style>