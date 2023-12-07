<template>
  <div>
    <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <div class="col-12">
        <p class="head text-center">DIVISION</p>
        <p class="headContent text-center">{{ model.Osd.division }}</p>
        <p class="head text-center">FULL NAME</p>
        <p class="headContent text-center">{{ model.Osd.fullname }}</p>
        <hr class="hr pb-4" />

        <!-- FIRST ROW -->
        <div class="col-5 first-row">
          <div class="col-12">
            <div class="col-6">
              <p class="headerText">ID</p>
              <p v-if="model.Osd.id" class="headerContent">
                {{ model.Osd.id }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">Section/Unit</p>
              <p v-if="model.Osd.section_unit" class="headerContent">
                {{ model.Osd.section_unit }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <div class="col-6">
              <p class="headerText">ITEM NUMBER</p>
              <p v-if="model.Osd.item_number" class="headerContent">
                {{ model.Osd.item_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">OFFICE LOCATION</p>
              <p
                v-if="model.Osd.office_location_official_station"
                class="headerContent"
              >
                {{ model.Osd.office_location_official_station }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">DATE POSITION</p>
              <p v-if="model.Osd.date_position_created" class="headerContent">
                {{ model.Osd.date_position_created }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">POSITION LEVEL</p>
              <p v-if="model.Osd.position_level" class="headerContent">
                {{ model.Osd.position_level }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <p class="headerText">POSITION TITLE</p>
            <p v-if="model.Osd.position_title" class="headerContent">
              {{ model.Osd.position_title }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>

          <div class="col-12">
            <p class="headerText">PARENTHETICAL TITLE</p>
            <p v-if="model.Osd.parenthetical_title" class="headerContent">
              {{ model.Osd.parenthetical_title }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">SALARY STEP INCREMENT</p>
              <p v-if="model.Osd.salary_step_increment" class="headerContent">
                {{ model.Osd.salary_step_increment }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">MONTHY RATE</p>
              <p v-if="model.Osd.monthly_rate" class="headerContent">
                {{ model.Osd.monthly_rate }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <p class="headerText">DESIGNATION</p>
            <p
              v-if="model.Osd.designation_as_appropriate_based_on_so"
              class="headerContent"
            >
              {{ model.Osd.designation_as_appropriate_based_on_so }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
          <div class="col-12">
            <div class="col-6">
              <p class="headerText">DATE OF DESIGNATION</p>
              <p v-if="model.Osd.date_of_designation" class="headerContent">
                {{ model.Osd.date_of_designation }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">SPECIAL ORDER NO.</p>
              <p v-if="model.Osd.special_order_no" class="headerContent">
                {{ model.Osd.special_order_no }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <p class="headerText">DATE FILLED UP ASSUMPTION</p>
            <p v-if="model.Osd.date_filled_up_assumption" class="headerContent">
              {{ model.Osd.date_filled_up_assumption }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
          <div class="col-12">
            <p class="headerText">OFFICE/BUREAU/SERVICE/PROGRAM</p>
            <p
              v-if="model.Osd.office_bureau_service_program"
              class="headerContent"
            >
              {{ model.Osd.office_bureau_service_program }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
          <div class="col-12">
            <p class="headerText">FUND SOURCE FOR CONTRACTUAL</p>
            <p
              v-if="model.Osd.fund_source_for_contractual"
              class="headerContent"
            >
              {{ model.Osd.fund_source_for_contractual }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
          <div class="col-12">
            <div class="col-6">
              <p class="headerText">MODEL OF ACCESSION</p>
              <p
                v-if="
                  model.Osd.mode_of_accession_for_appointment_based_positions
                "
                class="headerContent"
              >
                {{
                  model.Osd.mode_of_accession_for_appointment_based_positions
                }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">MODEL OF SEPARTION</p>
              <p v-if="model.Osd.mode_of_separation" class="headerContent">
                {{ model.Osd.mode_of_separation }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
        </div>

        <!-- SECOND ROW -->
        <div class="col-7 second-row">
          <div class="col-12">
            <div class="col-3">
              <p class="headerText">LAST NAME</p>
              <p v-if="model.Osd.lastname" class="headerContent">
                {{ model.Osd.lastname }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">FIRST NAME</p>
              <p v-if="model.Osd.firstname" class="headerContent">
                {{ model.Osd.firstname }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">MIDDLE NAME</p>
              <p v-if="model.Osd.middlename" class="headerContent">
                {{ model.Osd.middlename }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">EXT.</p>
              <p v-if="model.Osd.ext" class="headerContent">
                {{ model.Osd.ext }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-3">
              <p class="headerText">AGE</p>
              <p v-if="model.Osd.age" class="headerContent">
                {{ model.Osd.age }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">GENDER</p>
              <p v-if="model.Osd.gender" class="headerContent">
                {{ model.Osd.gender }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">CIVIL STATUS</p>
              <p v-if="model.Osd.civil_status" class="headerContent">
                {{ model.Osd.civil_status }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">DATE OF BIRTH</p>
              <p v-if="model.Osd.date_of_birth" class="headerContent">
                {{ model.Osd.date_of_birth }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <!-- <div class="col-12">
            <div class="col-3">
              <p class="headerText">STREET</p>
              <p v-if="model.Osd.street_current" class="headerContent">
                {{ model.Osd.street_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">PUROK</p>
              <p
                v-if="model.Osd.purok_subdivision_current"
                class="headerContent"
              >
                {{ model.Osd.purok_subdivision_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">BARNGAY</p>
              <p v-if="model.Osd.barangay_current" class="headerContent">
                {{ model.Osd.barangay_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">CITY/MUNICIPALITY</p>
              <p
                v-if="model.Osd.city_municipality_current"
                class="headerContent"
              >
                {{ model.Osd.city_municipality_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div> -->
          <div class="col-12">
            <p class="headerText">EMAIL ADDRESS</p>
            <p
              v-if="model.Osd.active_and_working_email_address"
              class="headerContent"
            >
              {{ model.Osd.active_and_working_email_address }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
          <div class="col-12">
            <!-- <div class="col-4">
              <p class="headerText">REGION</p>
              <p v-if="model.Osd.province_current" class="headerContent">
                {{ model.Osd.province_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div> -->

            <div class="col-6">
              <p class="headerText">INDICATE WHETHER SENIOR CITIZEN</p>
              <p
                v-if="model.Osd.indicate_whether_senior_citizen"
                class="headerContent"
              >
                {{ model.Osd.indicate_whether_senior_citizen }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>

            <div class="col-6">
              <p class="headerText">TYPE OF DISABILITY</p>
              <p v-if="model.Osd.type_of_disability" class="headerContent">
                {{ model.Osd.type_of_disability }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <p class="headerText">INDICATE IF BELONG INDIGENEOUS GROUP</p>
            <p
              v-if="model.Osd.indicate_whether_member_of_indigenous_group"
              class="headerContent"
            >
              {{ model.Osd.indicate_whether_member_of_indigenous_group }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>

          <hr class="hr" />

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">EMPLOYEE ID NO.</p>
              <p v-if="model.Osd.employee_id_number" class="headerContent">
                {{ model.Osd.employee_id_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">ENTRY DATE IN DSWD</p>
              <p v-if="model.Osd.entry_date_in_dswd" class="headerContent">
                {{ model.Osd.entry_date_in_dswd }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">DATE OF ORIGINAL APPOINTMENT</p>
              <p
                v-if="model.Osd.date_of_original_appointment"
                class="headerContent"
              >
                {{ model.Osd.date_of_original_appointment }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">DATE OF LAST PROMOTION</p>
              <p v-if="model.Osd.date_of_last_promotion" class="headerContent">
                {{ model.Osd.date_of_last_promotion }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">GSIS NO.</p>
              <p v-if="model.Osd.gsis_number" class="headerContent">
                {{ model.Osd.gsis_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">BIR TIN NO.</p>
              <p v-if="model.Osd.bir_tin_number" class="headerContent">
                {{ model.Osd.bir_tin_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">SSS NO.</p>
              <p v-if="model.Osd.sss_number" class="headerContent">
                {{ model.Osd.sss_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">PHILHEALTH NO.</p>
              <p v-if="model.Osd.philhealth_number" class="headerContent">
                {{ model.Osd.philhealth_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">ELIGIBILITY CSC AND OTHERS</p>
              <p
                v-if="model.Osd.eligibility_csc_and_other_eligibilities"
                class="headerContent"
              >
                {{ model.Osd.eligibility_csc_and_other_eligibilities }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">ELIGIBILITY LICENSE RA 1080</p>
              <p
                v-if="model.Osd.eligibility_license_ra_1080"
                class="headerContent"
              >
                {{ model.Osd.eligibility_license_ra_1080 }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <p class="headerText">LICENSE</p>
            <p
              v-if="model.Osd.license_ra_1080_let_rn_rs_etc"
              class="headerContent"
            >
              {{ model.Osd.license_ra_1080_let_rn_rs_etc }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">HIGHEST EDUCATION COMPLETED</p>
              <p
                v-if="model.Osd.highest_education_completed"
                class="headerContent"
              >
                {{ model.Osd.highest_education_completed }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">
                DEGREE AND COURSE (1st Course Vocational)
              </p>
              <p
                v-if="model.Osd.degree_and_course_1st_vocational"
                class="headerContent"
              >
                {{ model.Osd.degree_and_course_1st_vocational }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">DEGREE AND COURSE (2nd Course)</p>
              <p
                v-if="model.Osd.degree_and_course_2nd_course"
                class="headerContent"
              >
                {{ model.Osd.degree_and_course_2nd_course }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">OTHER COURSE</p>
              <p v-if="model.Osd.other_courses" class="headerContent">
                {{ model.Osd.other_courses }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-6">
              <p class="headerText">REMARKS STATUS OF VACANT POSITION</p>
              <p
                v-if="model.Osd.remarks_status_of_vacant_position"
                class="headerContent"
              >
                {{ model.Osd.remarks_status_of_vacant_position }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">FORMER INCUMBENT</p>
              <p v-if="model.Osd.former_incumbent" class="headerContent">
                {{ model.Osd.former_incumbent }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <p class="headerText">DATE VACATED</p>
            <p v-if="model.Osd.date_vacated" class="headerContent">
              {{ model.Osd.date_vacated }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar";
import axios from "axios"; // Import Axios

export default {
  name: "AdminOSDEditHistoryView",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "OPERATIONAL STAFF DATABASE",
      PageDetail: "View Edit Details",

      model: {
        Osd: {
          id: "",
          division: "",
          section_unit: "",
          office_location_official_station: "",
          item_number: "",
          date_position_created: "",
          position_title: "",
          parenthetical_title: "",
          position_level: "",
          sg: "",
          salary_step_increment: "",
          monthly_rate: "",
          designation_as_appropriate_based_on_so: "",
          date_of_designation: "",
          special_order_no: "",
          office_bureau_service_program: "",
          fund_source_for_contractual: "",
          employment_status: "",
          status_filled_unfilled: "",
          mode_of_accession_for_appointment_based_positions: "",
          date_filled_up_assumption: "",
          fullname: "",
          lastname: "",
          firstname: "",
          middlename: "",
          ext: "",
          date_of_original_appointment: "",
          date_of_last_promotion: "",
          entry_date_in_dswd: "",
          eligibility_csc_and_other_eligibilities: "",
          eligibility_license_ra_1080: "",
          license_ra_1080_let_rn_rs_etc: "",
          highest_level_of_eligibility: "",
          highest_education_completed: "",
          degree_and_course_1st_vocational: "",
          degree_and_course_2nd_course: "",
          other_courses: "",
          masters_or_doctoral_degree_specify: "",
          gender: "",
          date_of_birth: "",
          age: "",
          civil_status: "",
          residential_address: "",
          permanent_address: "",
          indicate_whether_solo_parent: "",
          indicate_whether_senior_citizen: "",
          indicate_whether_pwd: "",
          type_of_disability: "",
          indicate_whether_member_of_indigenous_group: "",
          indigenous_group: "",
          citizenship: "",
          active_contact_numbers: "",
          active_and_working_email_address: "",
          former_incumbent: "",
          mode_of_separation: "",
          date_vacated: "",
          remarks_status_of_vacant_position: "",
          employee_id_number: "",
          bir_tin_number: "",
          philhealth_number: "",
          sss_number: "",
          pagibig_number: "",
          gsis_number: "",
          blood_type: "",
        },
      },
    };
  },
  mounted() {
    this.OsdID = this.$route.params.ID;
    this.OsdEditHistoryData(this.OsdID);
  },
  methods: {
    OsdEditHistoryData(OsdID) {
      axios
        .get(`http://127.0.0.1:8000/api/osdVersion/${OsdID}/view`)
        .then((res) => {
          const osdData = res.data.Osd;
          console.log(res.data.Osd);

          // Check if osdData is null or empty
          if (!osdData || Object.keys(osdData).length === 0) {
            for (const key in this.model.Osd) {
              this.model.Osd[key] = "No Data";
            }
          } else {
            // Assign values from osdData to this.model.Osd
            for (const key in osdData) {
              this.model.Osd[key] = osdData[key];
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
.columns {
  padding: 0px 20px 0px 20px;
}
.AgencyTitle {
  font-family: Inter;
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
}

.agencyHeader {
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyHead {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyContent {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}
.error {
  color: red;
}

.headerText {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.headerContent {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.first-row {
  border-right: 1px solid #000000;
}

.second-row {
  padding-left: 10px;
}

.error {
  color: red;
}

.page-border {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
}

.head {
  font-family: Inter;
  font-size: 22px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
}

.headContent {
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
}
</style>
