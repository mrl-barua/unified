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
            <router-link to="/adminosp/archive" style="text-decoration: none">
              <li>
                <a class="dropdown-item" osdef="#">Inactive</a>
              </li></router-link
            >
          </ul>
        </div>

        <router-link to="/adminosp/create">
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
          v-if="this.osd.length > 0"
          style="width: 100%"
          class="display stripe order-column cell-border hover compact"
          id="osdTable"
          :options="{
            stateSave: true,
            //* pageLength: 5,
            //* lengthMenu: [
            //* [5, 10, 25, 50],
            //*  [5, 10, 25, 50],
            //*  ],
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Division</th>
              <th>Section/Unit</th>
              <th>Office/Location</th>
              <th>Position Title</th>
              <th>Position Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in osd" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.fullname }}</td>
              <td>{{ item.division }}</td>
              <td>{{ item.section_unit }}</td>
              <td>{{ item.office_location_official_station }}</td>
              <td>{{ item.position_title }}</td>
              <td>{{ item.position_level }}</td>
              <td>
                <router-link
                  :to="{ path: '/adminosp/' + item.id + '/view' }"
                  class="custom-link"
                >
                  <i class="bx bx-low-vision table-icon custom-link"></i
                ></router-link>

                <router-link
                  :to="{ path: '/adminosp/' + item.id + '/edit' }"
                  class="custom-link"
                >
                  <i class="bx bx-edit icon table-icon"></i>
                </router-link>

                <i
                  @click="deleteOsd(item.id)"
                  class="bx bx-archive-in icon table-icon custom-link"
                  style="cursor: pointer"
                ></i>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Division</th>
              <th>Section/Unit</th>
              <th>Office/Location</th>
              <th>Position Title</th>
              <th>Position Level</th>
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
  name: "AdminOSP",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },
  data() {
    return {
      PageTitle: "ADMIN OSP", // The title displayed on the page, which is "ADMIN OSD"

      osd: [],
    };
  },
  computed: {},
  mounted() {
    this.getOsd();
  },
  methods: {
    exportToExcel() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("OSDData");

      // Add headers
      const headers = [
        "ID",
        "DIVISION",
        "SECTION_UNIT",
        "OFFICE LOCATION/ OFFICIAL STATION (RPMO, Field or Centers and Institution)",
        "ITEM NUMBER",
        "DATE POSITION WAS CREATED (If not able to indicate past creations just include since 2013 or 2014 up-to-date)",
        "POSITION TITLE",
        "PARENTHETICAL TITLE",
        "POSITION LEVEL",
        "SG",
        "SALARY STEP INCREMENT",
        "MONTHLY RATE",
        "DESIGNATION (AS APPROPRIATE) BASED ON SO",
        "DATE OF DESIGNATION",
        "SPECIAL ORDER NO.",
        "OFFICE/BUREAU/SERVICE/ PROGRAM (Plantilla Assignment based on PSIPOP)",
        "FUND SOURCE FOR CONTRACTUAL, CONTRACT OF SERVICE AND JOB ORDER (BASED ON CREATION)",
        "EMPLOYMENT STATUS",
        "STATUS (FILLED/UNFILLED)",
        "MODE OF ACCESSION (FOR APPOINTMENT-BASED POSITIONS ONLY)",
        "DATE FILLED UP/ASSUMPTION (DD-MMM-YYYY)",
        "FULL NAME (LAST NAME, FIRST NAME, MIDDLE NAME)",
        "LASTNAME (CRUZ)",
        "FIRST NAME (JUAN)",
        "MIDDLE NAME (PEREZ)",
        "EXT.",
        "DATE OF ORIGINAL APPOINTMENT (DD-MMM-YYYY)",
        "DATE OF LAST PROMOTION (DD-MMM-YYYY)",
        "ENTRY DATE IN DSWD (First day in service) (DD-MMM-YYYY)",
        "ELIGIBILITY (CSC and other eligibilities)",
        "ELIGIBILITY (License - RA 1080)",
        "LICENSE (RA 1080-LET, RN,RS,ETC)",
        "HIGHEST LEVEL OF ELIGIBILITY (1ST AND 2ND LEVEL ONLY)",
        "HIGHEST EDUCATION COMPLETED",
        "DEGREE AND COURSE (1st Course/Vocational)",
        "DEGREE AND COURSE (2nd Course)",
        "OTHER COURSE/S MASTERS OR DOCTORAL DEGREE (Specify)",
        "GENDER",
        "DATE OF BIRTH (DD-MMM-YYYY)",
        "AGE",
        "CIVIL STATUS",
        "RESIDENTIAL ADDRESS",
        "PERMANENT ADDRESS",
        "INDICATE WHETHER SOLO PARENT",
        "INDICATE WHETHER SENIOR CITIZEN",
        "INDICATE WHETHER PWD",
        "TYPE OF DISABILITY",
        "INDICATE WHETHER MEMBER OF INDIGINOUS GROUP",
        "INDIGENOUS GROUP",
        "CITIZENSHIP",
        "ACTIVE CONTACT NOS.",
        "ACTIVE AND WORKING EMAIL ADDRESS",
        "FORMER INCUMBENT",
        "MODE OF SEPARATION",
        "DATE VACATED (DD-MMM-YYYY)",
        "REMARKS / STATUS OF VACANT POSITION",
        "EMPLOYEE ID NO",
        "BIR TIN. NO.",
        "PHILHEALTH NUMBER",
        "SSS NUMBER",
        "PAG-IBIG NUMBER",
        "GSIS NUMBER",
        "BLOOD TYPE",
      ];

      worksheet.addRow(headers);

      // Add data from this.osd
      this.osd.forEach((item) => {
        const rowData = [
          item.id,
          item.division,
          item.section_unit,
          item.office_location_official_station,
          item.item_number,
          item.date_position_created,
          item.position_title,
          item.parenthetical_title,
          item.position_level,
          item.sg,
          item.salary_step_increment,
          item.monthly_rate,
          item.designation_as_appropriate_based_on_so,
          item.date_of_designation,
          item.special_order_no,
          item.office_bureau_service_program,
          item.fund_source_for_contractual,
          item.employment_status,
          item.status_filled_unfilled,
          item.mode_of_accession_for_appointment_based_positions,
          item.date_filled_up_assumption,
          item.fullname,
          item.lastname,
          item.firstname,
          item.middlename,
          item.ext,
          item.date_of_original_appointment,
          item.date_of_last_promotion,
          item.entry_date_in_dswd,
          item.eligibility_csc_and_other_eligibilities,
          item.eligibility_license_ra_1080,
          item.license_ra_1080_let_rn_rs_etc,
          item.highest_level_of_eligibility,
          item.highest_education_completed,
          item.degree_and_course_1st_vocational,
          item.degree_and_course_2nd_course,
          item.other_courses,
          item.masters_or_doctoral_degree_specify,
          item.gender,
          item.date_of_birth,
          item.age,
          item.civil_status,
          item.residential_address,
          item.permanent_address,
          item.indicate_whether_solo_parent,
          item.indicate_whether_senior_citizen,
          item.indicate_whether_pwd,
          item.type_of_disability,
          item.indicate_whether_member_of_indigenous_group,
          item.indigenous_group,
          item.citizenship,
          item.active_contact_numbers,
          item.active_and_working_email_address,
          item.former_incumbent,
          item.mode_of_separation,
          item.date_vacated,
          item.remarks_status_of_vacant_position,
          item.employee_id_number,
          item.bir_tin_number,
          item.philhealth_number,
          item.sss_number,
          item.pagibig_number,
          item.gsis_number,
          item.blood_type,
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
        a.download = "osd_data.xlsx";
        a.click();
      });
    },
    getOsd() {
      axios.get(`${backendURL}/api/osdlist`).then((res) => {
        this.osd = res.data.Osd;
        console.log(res);
      });
    },

    deleteOsd(OsdID) {
      // console.log(OsdID);
      if (confirm("Are you sure, you want to archive this data?")) {
        axios
          .delete(`${backendURL}/api/osdlist/${OsdID}/delete`)
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
