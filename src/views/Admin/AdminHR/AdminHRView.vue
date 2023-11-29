<template>
  <div>
    <AdminSidebar :iconText="PageTitle" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <div class="col-12">
        <p class="headerText text-center">DIVISION</p>
        <p class="headerContent text-center">{{ model.HR.division }}</p>
        <hr class="hr pb-4" />

        <!-- FIRST ROW -->
        <div class="col-5 first-row">
          <div class="col-12">
            <div class="col-4">
              <p class="headerText">ID</p>
              <p v-if="model.HR.ID" class="headerContent">{{ model.HR.ID }}</p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">Section/Unit</p>
              <p v-if="model.HR.section_unit" class="headerContent">
                {{ model.HR.section_unit }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">ITEM NUMBER</p>
              <p v-if="model.HR.item_number" class="headerContent">
                {{ model.HR.item_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <p class="headerText">OFFICE LOCATION</p>
            <p v-if="model.HR.office_location" class="headerContent">
              {{ model.HR.office_location }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>

          <div class="col-12">
            <div class="col-4">
              <p class="headerText">DATE POSITION</p>
              <p v-if="model.HR.date_position" class="headerContent">
                {{ model.HR.date_position }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">POSITION TITLE</p>
              <p v-if="model.HR.position_title" class="headerContent">
                {{ model.HR.position_title }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">POSITION LEVEL</p>
              <p v-if="model.HR.position_level" class="headerContent">
                {{ model.HR.position_level }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <p class="headerText">PARENTHETICAL TITLE</p>
            <p v-if="model.HR.parenthetical_title" class="headerContent">
              {{ model.HR.parenthetical_title }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>

          <div class="col-12">
            <div class="col-4">
              <p class="headerText">SALARY STEP INCREMENT</p>
              <p v-if="model.HR.salary_step_increment" class="headerContent">
                {{ model.HR.salary_step_increment }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">MONTHY RATE</p>
              <p v-if="model.HR.monthly_rate" class="headerContent">
                {{ model.HR.monthly_rate }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">DESIGNATION</p>
              <p v-if="model.HR.designation" class="headerContent">
                {{ model.HR.designation }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <div class="col-4">
              <p class="headerText">DATE OF DESIGNATION</p>
              <p v-if="model.HR.date_of_designation" class="headerContent">
                {{ model.HR.date_of_designation }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">SPECIAL ORDER NO.</p>
              <p v-if="model.HR.special_order_no" class="headerContent">
                {{ model.HR.special_order_no }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">DATE FILLED UP ASSUMPTION</p>
              <p
                v-if="model.HR.date_filled_up_assumption"
                class="headerContent"
              >
                {{ model.HR.date_filled_up_assumption }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <p class="headerText">OFFICE/BUREAU/SERVICE/PROGRAM</p>
            <p
              v-if="model.HR.office_bureau_service_program"
              class="headerContent"
            >
              {{ model.HR.office_bureau_service_program }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
          <div class="col-12">
            <p class="headerText">FUND SOURCE FOR CONTRACTUAL</p>
            <p
              v-if="model.HR.fund_source_for_contractual"
              class="headerContent"
            >
              {{ model.HR.fund_source_for_contractual }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>

          <div class="col-6">
            <p class="headerText">MODEL OF ACCESSION</p>
            <p v-if="model.HR.mode_of_accession" class="headerContent">
              {{ model.HR.mode_of_accession }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
          <div class="col-6">
            <p class="headerText">MODEL OF SEPARTION</p>
            <p v-if="model.HR.mode_of_separation" class="headerContent">
              {{ model.HR.mode_of_separation }}
            </p>
            <p v-else class="error headerContent">No Data</p>
          </div>
        </div>

        <!-- SECOND ROW -->
        <div class="col-7 second-row">
          <div class="col-12">
            <div class="col-3">
              <p class="headerText">LAST NAME</p>
              <p v-if="model.HR.last_name" class="headerContent">
                {{ model.HR.last_name }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">FIRST NAME</p>
              <p v-if="model.HR.first_name" class="headerContent">
                {{ model.HR.first_name }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">MIDDLE NAME</p>
              <p v-if="model.HR.middle_name" class="headerContent">
                {{ model.HR.middle_name }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">EXT.</p>
              <p v-if="model.HR.ext" class="headerContent">
                {{ model.HR.ext }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-3">
              <p class="headerText">AGE</p>
              <p v-if="model.HR.age" class="headerContent">
                {{ model.HR.age }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">GENDER</p>
              <p v-if="model.HR.gender" class="headerContent">
                {{ model.HR.gender }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">CIVIL STATUS</p>
              <p v-if="model.HR.civil_status" class="headerContent">
                {{ model.HR.civil_status }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">DATE OF BIRTH</p>
              <p v-if="model.HR.date_of_birth" class="headerContent">
                {{ model.HR.date_of_birth }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-3">
              <p class="headerText">STREET</p>
              <p v-if="model.HR.street_current" class="headerContent">
                {{ model.HR.street_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">PUROK</p>
              <p
                v-if="model.HR.purok_subdivision_current"
                class="headerContent"
              >
                {{ model.HR.purok_subdivision_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">BARNGAY</p>
              <p v-if="model.HR.barangay_current" class="headerContent">
                {{ model.HR.barangay_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">CITY/MUNICIPALITY</p>
              <p
                v-if="model.HR.city_municipality_current"
                class="headerContent"
              >
                {{ model.HR.city_municipality_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-4">
              <p class="headerText">REGION</p>
              <p v-if="model.HR.province_current" class="headerContent">
                {{ model.HR.province_current }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">EMAIL ADDRESS</p>
              <p
                v-if="model.HR.active_and_working_email_address"
                class="headerContent"
              >
                {{ model.HR.active_and_working_email_address }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-4">
              <p class="headerText">INDICATE WHETHER SENIOR CITIZEN</p>
              <p
                v-if="model.HR.indicate_whether_senior_citizen"
                class="headerContent"
              >
                {{ model.HR.indicate_whether_senior_citizen }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>

            <div class="col-6">
              <p class="headerText">TYPE OF DISABILITY</p>
              <p v-if="model.HR.type_of_disability" class="headerContent">
                {{ model.HR.type_of_disability }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-6">
              <p class="headerText">INDICATE IF BELONG INDIGENEOUS GROUP</p>
              <p
                v-if="model.HR.indicate_if_indigenous_group"
                class="headerContent"
              >
                {{ model.HR.indicate_if_indigenous_group }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <hr class="hr" />

          <div class="col-12">
            <div class="col-3">
              <p class="headerText">EMPLOYEE ID NO.</p>
              <p v-if="model.HR.employee_id_no" class="headerContent">
                {{ model.HR.employee_id_no }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">ENTRY DATE IN DSWD</p>
              <p v-if="model.HR.entry_date_in_dswd" class="headerContent">
                {{ model.HR.entry_date_in_dswd }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">DATE OF ORIGINAL APPOINTMENT</p>
              <p
                v-if="model.HR.date_of_original_appointment"
                class="headerContent"
              >
                {{ model.HR.date_of_original_appointment }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">DATE OF LAST PROMOTION</p>
              <p v-if="model.HR.date_of_last_promotion" class="headerContent">
                {{ model.HR.date_of_last_promotion }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-3">
              <p class="headerText">GSIS NO.</p>
              <p v-if="model.HR.gsis_number" class="headerContent">
                {{ model.HR.gsis_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">BIR TIN NO.</p>
              <p v-if="model.HR.bir_tin_number" class="headerContent">
                {{ model.HR.bir_tin_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">SSS NO.</p>
              <p v-if="model.HR.sss_number" class="headerContent">
                {{ model.HR.sss_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">PHILHEALTH NO.</p>
              <p v-if="model.HR.philhealth_number" class="headerContent">
                {{ model.HR.philhealth_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-3">
              <p class="headerText">PHILHEALTH NO.</p>
              <p v-if="model.HR.philhealth_number" class="headerContent">
                {{ model.HR.philhealth_number }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">ELIGIBILITY CSC AND OTHERS</p>
              <p
                v-if="model.HR.eligibility_csc_and_other_eligibilities"
                class="headerContent"
              >
                {{ model.HR.eligibility_csc_and_other_eligibilities }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">ELIGIBILITY LICENSE RA 1080</p>
              <p
                v-if="model.HR.eligibility_license_ra_1080"
                class="headerContent"
              >
                {{ model.HR.eligibility_license_ra_1080 }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">LICENSE</p>
              <p v-if="model.HR.license" class="headerContent">
                {{ model.HR.license }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-3">
              <p class="headerText">HIGHEST EDUCATION COMPLETED</p>
              <p
                v-if="model.HR.highest_education_completed"
                class="headerContent"
              >
                {{ model.HR.highest_education_completed }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">
                DEGREE AND COURSE (1st Course Vocational)
              </p>
              <p
                v-if="model.HR.degree_and_course_1st_course_vocational"
                class="headerContent"
              >
                {{ model.HR.degree_and_course_1st_course_vocational }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">DEGREE AND COURSE (2nd Course)</p>
              <p
                v-if="model.HR.degree_and_course_2nd_course"
                class="headerContent"
              >
                {{ model.HR.degree_and_course_2nd_course }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">OTHER COURSE</p>
              <p v-if="model.HR.other_course" class="headerContent">
                {{ model.HR.other_course }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-3">
              <p class="headerText">REMARKS STATUS OF VACANT POSITION</p>
              <p
                v-if="model.HR.remarks_status_of_vacant_position"
                class="headerContent"
              >
                {{ model.HR.remarks_status_of_vacant_position }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">REMARKS STATUS OF VACANT OSITION</p>
              <p
                v-if="model.HR.remarks_status_of_vacant_position"
                class="headerContent"
              >
                {{ model.HR.remarks_status_of_vacant_position }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">FORMER INCUMBENT</p>
              <p v-if="model.HR.former_incumbent" class="headerContent">
                {{ model.HR.former_incumbent }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="headerText">DATE VACATED</p>
              <p v-if="model.HR.date_vacated" class="headerContent">
                {{ model.HR.date_vacated }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";

export default {
  name: "AdminHRView",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN HR > VIEW", // The title displayed on the page, which is "ADMIN HR"
      HrID: "",
      errorList: "",
      // The model for the form inputs  (the data that will be sent to the backend) is defined here as an empty object with the following properties: Hr
      model: {
        HR: {
          ID: "",
          division: "",
          section_unit: "",
          office_location: "",
          item_number: "",
          date_position: "",
          position_title: "",
          parenthetical_title: "",
          position_level: "",
          sg: "",
          salary_step_increment: "",
          monthly_rate: "",
          designation: "",
          date_of_designation: "",
          special_order_no: "",
          office_bureau_service_program: "",
          fund_source_for_contractual: "",
          employment_status: "",
          status_filled_unfilled: "",
          mode_of_accession: "",
          date_filled_up_assumption: "",
          full_name: "",
          last_name: "",
          first_name: "",
          middle_name: "",
          ext: "",
          date_of_original_appointment: "",
          date_of_last_promotion: "",
          entry_date_in_dswd: "",
          eligibility_csc_and_other_eligibilities: "",
          eligibility_license_ra_1080: "",
          license: "",
          highest_level_of_eligibility_1st_2nd: "",
          highest_education_completed: "",
          degree_and_course_1st_course_vocational: "",
          degree_and_course_2nd_course: "",
          other_course: "",
          masters_or_doctoral_degree: "",
          gender: "",
          date_of_birth: "",
          age: "",
          civil_status: "",
          street_current: "",
          purok_subdivision_current: "",
          barangay_current: "",
          city_municipality_current: "",
          province_current: "",
          permanent_address: "",
          permanent_address_street: "",
          permanent_address_purok: "",
          permanent_address_subdivision_community_village: "",
          permanent_address_barangay: "",
          permanent_address_region: "",
          permanent_address_city_municipality: "",
          permanent_address_province: "",
          bd: "",
          indicate_whether_solo_parent: "",
          indicate_whether_senior_citizen: "",
          indicate_whether_pwd: "",
          type_of_disability: "",
          indicate_if_indigenous_group: "",
          active_and_working_email_address: "",
          former_incumbent: "",
          mode_of_separation: "",
          date_vacated: "",
          remarks_status_of_vacant_position: "",
          employee_id_no: "",
          bir_tin_number: "",
          philhealth_number: "",
          sss_number: "",
          pagibig_number: "",
          gsis_number: "",
          blood_type: "",
          highest_level_of_eligibility_1st_and_2nd: "",
          highest_level_eligibility_1st_and_2nd: "",
          eligibility_csc_and_other_eligibilities_eligibilities: "",
        },
      },
    };
  },
  mounted() {
    //console.log(this.$route.params.ID);
    this.HrID = this.$route.params.ID;
    //the HrID is passed as a parameter to the HrData() function  (which is defined below) to get the data of the HR with the given ID
    this.HrData(this.$route.params.ID);
  },
  methods: {
    // The HrData() function is used to get the data of the HR with the given ID
    HrData(HrID) {
      axios
        .get(`http://127.0.0.1:8000/api/hrlist/${HrID}/edit`)
        .then((res) => {
          const hrData = res.data.HR;
          console.log(res.data.HR);

          // Check if hrData is null or empty
          this.model.HR.ID = hrData.ID;
          this.model.HR.division = hrData.division;
          this.model.HR.section_unit = hrData.section_unit;
          this.model.HR.office_location = hrData.office_location;
          this.model.HR.item_number = hrData.item_number;
          this.model.HR.date_position = hrData.date_position;
          this.model.HR.position_title = hrData.position_title;
          this.model.HR.parenthetical_title = hrData.parenthetical_title;
          this.model.HR.position_level = hrData.position_level;
          this.model.HR.sg = hrData.sg;
          this.model.HR.salary_step_increment = hrData.salary_step_increment;
          this.model.HR.monthly_rate = hrData.monthly_rate;
          this.model.HR.designation = hrData.designation;
          this.model.HR.date_of_designation = hrData.date_of_designation;
          this.model.HR.special_order_no = hrData.special_order_no;
          this.model.HR.office_bureau_service_program =
            hrData.office_bureau_service_program;
          this.model.HR.fund_source_for_contractual =
            hrData.fund_source_for_contractual;
          this.model.HR.employment_status = hrData.employment_status;
          this.model.HR.status_filled_unfilled = hrData.status_filled_unfilled;
          this.model.HR.mode_of_accession = hrData.mode_of_accession;
          this.model.HR.date_filled_up_assumption =
            hrData.date_filled_up_assumption;
          this.model.HR.full_name = hrData.full_name;
          this.model.HR.last_name = hrData.last_name;
          this.model.HR.first_name = hrData.first_name;
          this.model.HR.middle_name = hrData.middle_name;
          this.model.HR.ext = hrData.ext;
          this.model.HR.date_of_original_appointment =
            hrData.date_of_original_appointment;
          this.model.HR.date_of_last_promotion = hrData.date_of_last_promotion;
          this.model.HR.entry_date_in_dswd = hrData.entry_date_in_dswd;
          this.model.HR.eligibility_csc_and_other_eligibilities =
            hrData.eligibility_csc_and_other_eligibilities;
          this.model.HR.eligibility_license_ra_1080 =
            hrData.eligibility_license_ra_1080;
          this.model.HR.license = hrData.license;
          this.model.HR.highest_level_of_eligibility_1st_2nd =
            hrData.highest_level_of_eligibility_1st_2nd;
          this.model.HR.highest_education_completed =
            hrData.highest_education_completed;
          this.model.HR.degree_and_course_1st_course_vocational =
            hrData.degree_and_course_1st_course_vocational;
          this.model.HR.degree_and_course_2nd_course =
            hrData.degree_and_course_2nd_course;
          this.model.HR.other_course = hrData.other_course;
          this.model.HR.masters_or_doctoral_degree =
            hrData.masters_or_doctoral_degree;
          this.model.HR.gender = hrData.gender;
          this.model.HR.date_of_birth = hrData.date_of_birth;
          this.model.HR.age = hrData.age;
          this.model.HR.civil_status = hrData.civil_status;
          this.model.HR.street_current = hrData.street_current;
          this.model.HR.purok_subdivision_current =
            hrData.purok_subdivision_current;
          this.model.HR.barangay_current = hrData.barangay_current;
          this.model.HR.city_municipality_current =
            hrData.city_municipality_current;
          this.model.HR.province_current = hrData.province_current;
          this.model.HR.permanent_address = hrData.permanent_address;
          this.model.HR.permanent_address_street =
            hrData.permanent_address_street;
          this.model.HR.permanent_address_purok =
            hrData.permanent_address_purok;
          this.model.HR.permanent_address_subdivision_community_village =
            hrData.permanent_address_subdivision_community_village;
          this.model.HR.permanent_address_barangay =
            hrData.permanent_address_barangay;
          this.model.HR.permanent_address_region =
            hrData.permanent_address_region;
          this.model.HR.permanent_address_city_municipality =
            hrData.permanent_address_city_municipality;
          this.model.HR.permanent_address_province =
            hrData.permanent_address_province;
          this.model.HR.bd = hrData.bd;
          this.model.HR.indicate_whether_solo_parent =
            hrData.indicate_whether_solo_parent;
          this.model.HR.indicate_whether_senior_citizen =
            hrData.indicate_whether_senior_citizen;
          this.model.HR.indicate_whether_pwd = hrData.indicate_whether_pwd;
          this.model.HR.type_of_disability = hrData.type_of_disability;
          this.model.HR.indicate_if_indigenous_group =
            hrData.indicate_if_indigenous_group;
          this.model.HR.active_and_working_email_address =
            hrData.active_and_working_email_address;
          this.model.HR.former_incumbent = hrData.former_incumbent;
          this.model.HR.mode_of_separation = hrData.mode_of_separation;
          this.model.HR.date_vacated = hrData.date_vacated;
          this.model.HR.remarks_status_of_vacant_position =
            hrData.remarks_status_of_vacant_position;
          this.model.HR.employee_id_no = hrData.employee_id_no;
          this.model.HR.bir_tin_number = hrData.bir_tin_number;
          this.model.HR.philhealth_number = hrData.philhealth_number;
          this.model.HR.sss_number = hrData.sss_number;
          this.model.HR.pagibig_number = hrData.pagibig_number;
          this.model.HR.gsis_number = hrData.gsis_number;
          this.model.HR.blood_type = hrData.blood_type;
          this.model.HR.highest_level_of_eligibility_1st_and_2nd =
            hrData.highest_level_of_eligibility_1st_and_2nd;
          this.model.HR.highest_level_eligibility_1st_and_2nd =
            hrData.highest_level_eligibility_1st_and_2nd;
          this.model.HR.eligibility_csc_and_other_eligibilities_eligibilities =
            hrData.eligibility_csc_and_other_eligibilities_eligibilities;
        })
        // If the HR with the given ID is not found, an error message will be displayed
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
    // The updateHR() function is used to update the data of the HR with the given ID in the database using the backend API endpoint for updating HR data
    // updateHR(HrID) {
    //   var mythis = this;
    //   axios
    //     .put(
    //       `http://127.0.0.1:8000/api/hrlist/${HrID}/edit`,
    //       // The data to be updated is passed as a parameter to the axios.put() function
    //       // as the second parameter (the first parameter is the API endpoint) in the form of
    //       // an object with the following properties: Hr (which contains the data to be updated)
    //       // and _method (which is set to "PUT" to indicate that the data will be updated)
    //       this.model.Hr
    //     )
    //     .then((res) => {
    //       console.log(res.data);
    //       alert(res.data.message);

    //       this.errorList = "";

    //       window.location.reload(); // reload the page after updating the data
    //     })
    //     .catch(function (error) {
    //       if (error.response) {
    //         if (error.response.status === 422) {
    //           mythis.errorList = error.response.data.errors;
    //         }
    //         if (error.response.status === 404) {
    //           alert(error.response.data.message);
    //         }
    //       } else if (error.request) {
    //         console.log(error.request);
    //       } else {
    //         console.log("error", error.message);
    //       }
    //     });
    // },
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
</style>
