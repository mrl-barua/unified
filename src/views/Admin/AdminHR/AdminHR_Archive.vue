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
            <router-link to="/adminhr" style="text-decoration: none"
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
            background-color: Green;
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
          <thead style="background: #cb0e16" class="text-white">
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
              <td style="text-align: center">
                <i
                  style="cursor: pointer"
                  class="bx bxs-up-arrow-square custom-link"
                  @click="restoreHr(item.id)"
                ></i>
              </td>
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
          id="hrTable"
        >
          <thead style="background: #cb0e16" class="text-white">
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
  name: "AdminHR_Archive",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },
  data() {
    return {
      PageTitle: "ADMIN HR ARCHIVE", // The title displayed on the page, which is "ADMIN HR"

      hr: [],
    };
  },
  computed: {},
  mounted() {
    this.getHrArchive();
  },
  methods: {
    exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("HRData");

      // Add headers
      const headers = [
        "ID",
        "DIVISION",
        "SECTION/UNIT",
        "OFFICE LOCATION",
        "ITEM NUMBER",
        "DATE POSITION",
        "POSITION TITLE",
        "PARENTHETICAL TITLE",
        "POSITION_LEVEL",
        "SG",
        "SALARY STEP INCREMENT",
        "MONTHLY_RATE",
        "DESIGNATION",
        "DATE OF DESIGNATION",
        "SPECIAL_ORDER_NO.",
        "OFFICE_BUREAU_SERVICE_PROGRAM",
        "FUND_SOURCE_FOR_CONTRACTUAL",
        "EMPLOYMENT_STATUS",
        "STATUS_FILLED_UNFILLED",
        "MODE_OF_ACCESSION",
        "DATE_FILLED_UP_ASSUMPTION",
        "FULL_NAME",
        "LASTNAME",
        "FIRST_NAME",
        "MIDDLE_NAME",
        "EXT.",
        "DATE_OF_ORIGINAL_APPOINTMENT",
        "DATE_OF_LAST_PROMOTION",
        "ENTRY_DATE_IN_DSWD",
        "ELIGIBILITY_CSC_and_other_eligibilities",
        "ELIGIBILITY_License_RA_1080",
        "LICENSE",
        "HIGHEST_LVL_OF_ELIGIBILITY_1ST_AND_2ND",
        "HIGHEST_EDUCATION_COMPLETED",
        "DEGREE_AND_COURSE_1st_Course_Vocational",
        "DEGREE_AND_COURSE_2nd Course",
        "OTHER_COURSE",
        "MASTERS_OR_DOCTORAL_DEGREE",
        "GENDER",
        "DATE_OF_BIRTH",
        "AGE",
        "CIVIL_STATUS",
        "STREET_Current",
        "PUROK/SUBDIVISION_Current",
        "BARANGAY_Current",
        "CITY/MUNICIPALITY_Current",
        "PROVINCE_Current",
        "PERMANENT_ADDRESS",
        "PERMANENT_ADDRESS_Street",
        "PERMANENT_ADDRESS_Purok",
        "PERMANENT_ADDRESS_Subdivision_Community_Village",
        "PERMANENT_ADDRESS_Barangay",
        "PERMANENT_ADDRESS_Region",
        "PERMANENT_ADDRESS_City_Municipality",
        "PERMANENT_ADDRESS_Province",
        "BD",
        "INDICATE_WHETHER_SOLO_PARENT",
        "INDICATE_WHETHER_SENIOR_CITIZEN",
        "INDICATE_WHETHER_PWD",
        "TYPE_OF_DISABILITY",
        "INDICATE_IF_INDIGINOUS_GROUP",
        "ACTIVE_AND_WORKING_EMAIL_ADDRESS",
        "FORMER_INCUMBENT",
        "MODE_OF_SEPARATION",
        "DATE_VACATED",
        "REMARKS_STATUS_OF_VACANT_POSITION",
        "EMPLOYEE_ID_NO",
        "BIR_TIN.NO.",
        "PHILHEALTH_NUMBER",
        "SSS_NUMBER",
        "PAG-IBIG_NUMBER",
        "GSIS_NUMBER",
        "BLOOD_TYPE",
        "HIGHEST_LEVEL_OF_ELIGIBILITY_1ST_AND_2ND",
        "HIGHEST_LEVEL__ELIGIBILITY_1ST_AND_2ND",
        "ELIGIBILITY_CSC_and_other eligibilities",
      ];

      worksheet.addRow(headers);

      // Add data from this.hr
      this.hr.forEach((item) => {
        const rowData = [
          item.id,

          item.division,
          item.section_unit,
          item.office_location,
          item.item_number,
          item.date_position,
          item.position_title,
          item.parenthetical_title,
          item.position_level,
          item.sg,
          item.salary_step_increment,
          item.monthly_rate,
          item.designation,
          item.date_of_designation,
          item.special_order_no,
          item.office_bureau_service_program,
          item.fund_source_for_contractual,
          item.employment_status,
          item.status_filled_unfilled,
          item.mode_of_accession,
          item.date_filled_up_assumption,
          item.full_name,
          item.last_name,
          item.first_name,
          item.middle_name,
          item.ext,
          item.date_of_original_appointment,
          item.date_of_last_promotion,
          item.entry_date_in_dswd,
          item.eligibility_csc_and_other_eligibilities,
          item.eligibility_license_ra_1080,
          item.license,
          item.highest_level_of_eligibility_1st_2nd,
          item.highest_education_completed,
          item.degree_and_course_1st_course_vocational,
          item.degree_and_course_2nd_course,
          item.other_course,
          item.masters_or_doctoral_degree,
          item.gender,
          item.date_of_birth,
          item.age,
          item.civil_status,
          item.street_current,
          item.purok_subdivision_current,
          item.barangay_current,
          item.city_municipality_current,
          item.province_current,
          item.permanent_address,
          item.permanent_address_street,
          item.permanent_address_purok,
          item.permanent_address_subdivision_community_village,
          item.permanent_address_barangay,
          item.permanent_address_region,
          item.permanent_address_city_municipality,
          item.permanent_address_province,
          item.bd,
          item.indicate_whether_solo_parent,
          item.indicate_whether_senior_citizen,
          item.indicate_whether_pwd,
          item.type_of_disability,
          item.indicate_if_indigenous_group,
          item.active_and_working_email_address,
          item.former_incumbent,
          item.mode_of_separation,
          item.date_vacated,
          item.remarks_status_of_vacant_position,
          item.employee_id_no,
          item.bir_tin_number,
          item.philhealth_number,
          item.sss_number,
          item.pagibig_number,
          item.gsis_number,
          item.blood_type,
          item.highest_level_of_eligibility_1st_and_2nd,
          item.highest_level_eligibility_1st_and_2nd,
          item.eligibility_csc_and_other_eligibilities,
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
    getHrArchive() {
      axios.get(`${backendURL}/api/hrArchived`).then((res) => {
        this.hr = res.data.ArchivedHr;
        console.log(res);
      });
    },
    restoreHr(HrID) {
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
            .post(`${backendURL}/api/hrArchived/${HrID}/restore`)
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
