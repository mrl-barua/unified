<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" />
  <div>
    <div class="container-fluid">
      <div class="Header"></div>

      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- <ul
        class="alert alert-warning"
        v-if="Object.keys(this.errorList).length > 0"
      >
        <li
          class="mb-0 ms-3"
          v-for="(error, index) in this.errorList"
          :key="index"
        >
          {{ error[0] }}
        </li>
      </ul> -->
      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- ! SHOW ERROR DIALOGUE -->

      <div class="container-fluid wrapper">
        <!-- //! FIRST ROW START -->
        <!-- //! FIRST ROW START -->
        <!-- //! FIRST ROW START -->
        <div class="col-12 first-row">
          <div class="col-12">
            <div class="col-12 mb-3">
              <div class="spaceBetween">
                <label for="officeLocation">DIVISION</label>
                <input
                  type="text"
                  v-model="model.HR.division"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="col-4 mb-3">
              <div class="spaceBetween">
                <label for="officeLocation">SECTION</label>
                <input
                  type="text"
                  v-model="model.HR.section_unit"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-8 mb-3">
              <div class="col-4">
                <div class="spaceBetween">
                  <label for="officeLocation">OFFICE LOCATION</label>
                  <input
                    type="text"
                    v-model="model.HR.office_location"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="spaceBetween">
                  <label for="officeLocation">ITEM NUMBER</label>
                  <input
                    type="text"
                    v-model="model.HR.item_number"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="spaceBetween">
                  <!-- ! NEED CLARIFICATIONS TO THIS INPUT DATA -->
                  <label for="officeLocation">AMOUNT</label>
                  <input
                    type="text"
                    v-model="model.HR.amount"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">DATE POSITION</label>
                  <input
                    type="text"
                    v-model="model.HR.date_position"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">POSITION TITLE</label>
                  <input
                    type="text"
                    v-model="model.HR.position_title"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">PARENTHETICAL TITLE</label>
                  <input
                    type="text"
                    v-model="model.HR.parenthetical_title"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">MONTHLY RATE</label>
                  <input
                    type="text"
                    v-model="model.HR.monthly_rate"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">POSITION LEVEL</label>
                  <input
                    type="text"
                    v-model="model.HR.position_level"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">SALARY GRADE</label>
                  <input
                    type="text"
                    v-model="model.HR.sg"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">SALARY STEP INCREMENT</label>
                  <input
                    type="text"
                    v-model="model.HR.salary_step_increment"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <!-- ! NEEDS CLARIFICATION FROM MARA -->
                  <label for="officeLocation">STATUS</label>
                  <input
                    type="text"
                    v-model="model.HR.status_filled_unfilled"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">DESIGNATION</label>
                  <input
                    type="text"
                    v-model="model.HR.designation"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">DATE OF DESIGNATION</label>
                  <input
                    type="text"
                    v-model="model.HR.date_of_designation"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">SPECIAL ORDER NO.</label>
                  <input
                    type="text"
                    v-model="model.HR.special_order_no"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="spaceBetween">
                  <label for="officeLocation">DATE FILLED UP ASSUMPTION</label>
                  <input
                    type="text"
                    v-model="model.HR.date_filled_up_assumption"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation"
                    >OFFICE BUREAU SERVICE PROGRAM</label
                  >
                  <input
                    type="text"
                    v-model="model.HR.office_bureau_service_program"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation">EMPLOYMENT STATUS</label>
                  <input
                    type="text"
                    v-model="model.HR.employment_status"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation"
                    >FUND SOURCE FOR CONTRACTUAL</label
                  >
                  <input
                    type="text"
                    v-model="model.HR.fund_source_for_contractual"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="col-6">
                  <div class="spaceBetween">
                    <label for="officeLocation">MODE OF ACCESSION</label>
                    <input
                      type="text"
                      v-model="model.HR.mode_of_accession"
                      class="form-control"
                      id="officeLocation"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="spaceBetween">
                    <label for="officeLocation">MODE OF SEPARATION</label>
                    <input
                      type="text"
                      v-model="model.HR.mode_of_separation"
                      class="form-control"
                      id="officeLocation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //! FIRST ROW END -->
        <!-- //! FIRST ROW END -->
        <!-- //! FIRST ROW END -->
        <hr
          class="hr"
          style="margin-left: 15px; margin-right: 15px; border: 1px solid red"
        />
        <!-- //* SECOND ROW START -->
        <!-- //* SECOND ROW START -->
        <!-- //* SECOND ROW START -->
        <div class="col-12 second-row">
          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">FULL NAME</label>
                <input
                  type="text"
                  v-model="model.HR.full_name"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">LAST NAME</label>
                <input
                  type="text"
                  v-model="model.HR.last_name"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-2">
              <div class="spaceBetween">
                <label for="officeLocation">FIRST NAME</label>
                <input
                  type="text"
                  v-model="model.HR.first_name"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-2">
              <div class="spaceBetween">
                <label for="officeLocation">MIDDLE NAME</label>
                <input
                  type="text"
                  v-model="model.HR.middle_name"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <!-- ! SHOULD I INCLUDE THE FIRST NAME HERE??? -->
            <div class="col-2">
              <div class="spaceBetween">
                <label for="officeLocation">EXT.</label>
                <input
                  type="text"
                  v-model="model.HR.ext"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation">AGE</label>
                  <input
                    type="text"
                    v-model="model.HR.age"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation">GENDER</label>
                  <input
                    type="text"
                    v-model="model.HR.gender"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">CIVIL STATUS</label>
                <input
                  type="text"
                  v-model="model.HR.civil_status"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">DATE OF BIRTH</label>
                <input
                  type="text"
                  v-model="model.HR.date_of_birth"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">STREET (Current)</label>
                <input
                  type="text"
                  v-model="model.HR.street_current"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">PUROK/SUBDIVISION (Current)</label>
                <input
                  type="text"
                  v-model="model.HR.purok_subdivision_current"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">BARANGAY (Current)</label>
                <input
                  type="text"
                  v-model="model.HR.barangay_current"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">CITY/MUNICIPALITY (Current)</label>
                <input
                  type="text"
                  v-model="model.HR.city_municipality_current"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <!-- ! NEED FIXINGS FOR THIS "region current" -->
                <!-- ! NEED FIXINGS FOR THIS "region current" -->
                <!-- ! NEED FIXINGS FOR THIS "region current" -->
                <label for="officeLocation">REGION (Current)</label>
                <input
                  type="text"
                  v-model="model.HR.region_current"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">EMAIL ADDRESS</label>
                <input
                  type="text"
                  v-model="model.HR.active_and_working_email_address"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation"
                  >INDICATE WHETHER SENIOR CITIZEN</label
                >
                <input
                  type="text"
                  v-model="model.HR.indicate_whether_senior_citizen"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">TYPE OF DISABILITY</label>
                <input
                  type="text"
                  v-model="model.HR.type_of_disability"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">INDICATE IF INDIGENOUS_GROUP</label>
                <input
                  type="text"
                  v-model="model.HR.indicate_if_indigenous_group"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- //* SECOND ROW END -->
        <!-- //* SECOND ROW END -->
        <!-- //* SECOND ROW END -->
        <hr
          class="hr"
          style="margin-left: 15px; margin-right: 15px; border: 1px solid red"
        />

        <!-- //TODO THIRD ROW START -->
        <!-- //TODO THIRD ROW START -->
        <!-- //TODO THIRD ROW START -->
        <div class="col-12 third-row">
          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">EMPLOYEE_ID_NO</label>
                <input
                  type="text"
                  v-model="model.HR.employee_id_no"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">ENTRY_DATE_IN_DSWD</label>
                <input
                  type="text"
                  v-model="model.HR.entry_date_in_dswd"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">DATE_OF_ORIGINAL_APPOINTMENT</label>
                <input
                  type="text"
                  v-model="model.HR.date_of_original_appointment"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">DATE OF LAST PROMOTION</label>
                <input
                  type="text"
                  v-model="model.HR.date_of_last_promotion"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">GSIS_NUMBER</label>
                <input
                  type="text"
                  v-model="model.HR.gsis_number"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">BIR_TIN.NO.</label>
                <input
                  type="text"
                  v-model="model.HR.bir_tin_number"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">SSS_NUMBER</label>
                <input
                  type="text"
                  v-model="model.HR.sss_number"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">PHILHEALTH_NUMBER</label>
                <input
                  type="text"
                  v-model="model.HR.philhealth_number"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">HIGHEST_LVL_OF_ELIGIBILITY</label>
                <input
                  type="text"
                  v-model="model.HR.highest_level_of_eligibility_1st_2nd"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">ELIGIBILITY CSC and Others</label>
                <input
                  type="text"
                  v-model="model.HR.eligibility_csc_and_other_eligibilities"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation"> ELIGIBILITY_License_RA_1080</label>
                <input
                  type="text"
                  v-model="model.HR.eligibility_license_ra_1080"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">LICENSE</label>
                <input
                  type="text"
                  v-model="model.HR.license"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">HIGHEST_EDUCATION_COMPLETED</label>
                <input
                  type="text"
                  v-model="model.HR.highest_education_completed"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation"
                  >DEGREE_AND_COURSE <br />(1st Course Vocational)</label
                >
                <input
                  type="text"
                  v-model="model.HR.degree_and_course_1st_course_vocational"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation"
                  >DEGREE_AND_COURSE <br />
                  (2nd Course)</label
                >
                <input
                  type="text"
                  v-model="model.HR.degree_and_course_2nd_course"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="spaceBetween">
                <label for="officeLocation">OTHER_COURSE</label>
                <input
                  type="text"
                  v-model="model.HR.other_course"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-6">
              <div class="spaceBetween">
                <label for="officeLocation"
                  >REMARKS_STATUS_OF_VACANT_POSITION</label
                >
                <input
                  type="text"
                  v-model="model.HR.remarks_status_of_vacant_position"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation">FORMER_INCUMBENT</label>
                  <input
                    type="text"
                    v-model="model.HR.former_incumbent"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation">DATE_VACATED</label>
                  <input
                    type="text"
                    v-model="model.HR.date_vacated"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="spaceBetween">
                  <label for="officeLocation">MASTERS_OR_DOCTORAL_DEGREE</label>
                  <input
                    type="text"
                    v-model="model.HR.masters_or_doctoral_degree"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //TODO THIRD ROW END -->
        <!-- //TODO THIRD ROW END -->
        <!-- //TODO THIRD ROW END -->
      </div>

      <div class="md-3 col-12 buttons d-flex justify-content-end">
        <router-link to="/adminhr">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>
        <router-link to="/adminhr">
          <button
            @click="updateHR($route.params.ID)"
            class="btn btn-primary col-12"
          >
            Save
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";

export default {
  name: "AdminHREdit",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN HR > EDIT", // The title displayed on the page, which is "ADMIN HR"
      HrID: "",
      errorList: "",
      // The model for the form inputs  (the data that will be sent to the backend) is defined here as an empty object with the following properties: Hr
      model: {
        HR: {
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
    updateHR(HrID) {
      var mythis = this;
      axios
        .put(
          `http://127.0.0.1:8000/api/hrlist/${HrID}/edit`,
          // The data to be updated is passed as a parameter to the axios.put() function
          // as the second parameter (the first parameter is the API endpoint) in the form of
          // an object with the following properties: Hr (which contains the data to be updated)
          // and _method (which is set to "PUT" to indicate that the data will be updated)
          this.model.HR
        )
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);

          this.errorList = "";

          window.location.reload(); // reload the page after updating the data
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
    },
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 100px;
}

.centered-placeholder::placeholder {
  text-align: center;
}

.spaceBetween {
  margin: 0px 10px 0px 10px;
  /* font-family: Inter; */
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
}

.spaceBetween label {
  padding-left: 10px;
  font-weight: bold;
}

.custom-input {
  height: 113px; /* Adjust the height value as needed */
}

.btn {
  margin-right: 20px;
  width: 180px;
  margin-bottom: 20px;
}
</style>
