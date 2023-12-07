<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
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
                  v-model="model.Osd.division"
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
                  v-model="model.Osd.section_unit"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-8 mb-3">
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation">OFFICE LOCATION</label>
                  <input
                    type="text"
                    v-model="model.Osd.office_location_official_station"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="spaceBetween">
                  <label for="officeLocation">ITEM NUMBER</label>
                  <input
                    type="text"
                    v-model="model.Osd.item_number"
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
                    v-model="model.Osd.date_position_created"
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
                    v-model="model.Osd.position_title"
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
                    v-model="model.Osd.parenthetical_title"
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
                    v-model="model.Osd.monthly_rate"
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
                    v-model="model.Osd.position_level"
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
                    v-model="model.Osd.sg"
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
                    v-model="model.Osd.salary_step_increment"
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
                    v-model="model.Osd.status_filled_unfilled"
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
                    v-model="model.Osd.designation_as_appropriate_based_on_so"
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
                    v-model="model.Osd.date_of_designation"
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
                    v-model="model.Osd.special_order_no"
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
                    v-model="model.Osd.date_filled_up_assumption"
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
                    v-model="model.Osd.office_bureau_service_program"
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
                    v-model="model.Osd.employment_status"
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
                    v-model="model.Osd.fund_source_for_contractual"
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
                      v-model="
                        model.Osd
                          .mode_of_accession_for_appointment_based_positions
                      "
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
                      v-model="model.Osd.mode_of_separation"
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
                  v-model="model.Osd.fullname"
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
                  v-model="model.Osd.lastname"
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
                  v-model="model.Osd.firstname"
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
                  v-model="model.Osd.middlename"
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
                  v-model="model.Osd.ext"
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
                    v-model="model.Osd.age"
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
                    v-model="model.Osd.gender"
                    class="form-control"
                    id="officeLocation"
                  />
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="spaceBetween">
                <label for="officeLocation">CIVIL STATUS</label>
                <input
                  type="text"
                  v-model="model.Osd.civil_status"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-5">
              <div class="spaceBetween">
                <label for="officeLocation">DATE OF BIRTH</label>
                <input
                  type="text"
                  v-model="model.Osd.date_of_birth"
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
                  v-model="model.Osd.active_and_working_email_address"
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
                  v-model="model.Osd.indicate_whether_senior_citizen"
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
                  v-model="model.Osd.type_of_disability"
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
                  v-model="
                    model.Osd.indicate_whether_member_of_indigenous_group
                  "
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
                  v-model="model.Osd.employee_id_number"
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
                  v-model="model.Osd.entry_date_in_dswd"
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
                  v-model="model.Osd.date_of_original_appointment"
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
                  v-model="model.Osd.date_of_last_promotion"
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
                  v-model="model.Osd.gsis_number"
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
                  v-model="model.Osd.bir_tin_number"
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
                  v-model="model.Osd.sss_number"
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
                  v-model="model.Osd.philhealth_number"
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
                  v-model="model.Osd.highest_level_of_eligibility"
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
                  v-model="model.Osd.eligibility_csc_and_other_eligibilities"
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
                  v-model="model.Osd.eligibility_license_ra_1080"
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
                  v-model="model.Osd.license_ra_1080_let_rn_rs_etc"
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
                  v-model="model.Osd.highest_education_completed"
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
                  v-model="model.Osd.degree_and_course_1st_vocational"
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
                  v-model="model.Osd.degree_and_course_2nd_course"
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
                  v-model="model.Osd.other_courses"
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
                  v-model="model.Osd.remarks_status_of_vacant_position"
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
                    v-model="model.Osd.former_incumbent"
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
                    v-model="model.Osd.date_vacated"
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
                    v-model="model.Osd.masters_or_doctoral_degree_specify"
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
        <router-link to="/adminosd">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>
        <router-link to="/adminosp">
          <button
            @click="updateOsd($route.params.ID)"
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
  name: "AdminOSDEdit",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "OPERATIONAL STAFF DATABASE",
      PageDetail: "Edit Current Record",
      OsdID: "",
      errorList: "",
      // The model for the form inputs  (the data that will be sent to the backend) is defined here as an empty object with the following properties: Osd
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
    //console.log(this.$route.params.ID);
    this.OsdID = this.$route.params.ID;
    //the OsdID is passed as a parameter to the OsdData() function  (which is defined below) to get the data of the HR with the given ID
    this.OsdData(this.$route.params.ID);
  },
  methods: {
    // The OsdData() function is used to get the data of the HR with the given ID
    OsdData(OsdID) {
      axios
        .get(`http://127.0.0.1:8000/api/osdlist/${OsdID}/edit`)
        .then((res) => {
          const osdData = res.data.Osd;
          console.log(res.data.Osd);

          this.model.Osd.id = osdData.id;
          this.model.Osd.division = osdData.division;
          this.model.Osd.section_unit = osdData.section_unit;
          this.model.Osd.office_location_official_station =
            osdData.office_location_official_station;
          this.model.Osd.item_number = osdData.item_number;
          this.model.Osd.date_position_created = osdData.date_position_created;
          this.model.Osd.position_title = osdData.position_title;
          this.model.Osd.parenthetical_title = osdData.parenthetical_title;
          this.model.Osd.position_level = osdData.position_level;
          this.model.Osd.sg = osdData.sg;
          this.model.Osd.salary_step_increment = osdData.salary_step_increment;
          this.model.Osd.monthly_rate = osdData.monthly_rate;
          this.model.Osd.designation_as_appropriate_based_on_so =
            osdData.designation_as_appropriate_based_on_so;
          this.model.Osd.date_of_designation = osdData.date_of_designation;
          this.model.Osd.special_order_no = osdData.special_order_no;
          this.model.Osd.office_bureau_service_program =
            osdData.office_bureau_service_program;
          this.model.Osd.fund_source_for_contractual =
            osdData.fund_source_for_contractual;
          this.model.Osd.employment_status = osdData.employment_status;
          this.model.Osd.status_filled_unfilled =
            osdData.status_filled_unfilled;
          this.model.Osd.mode_of_accession_for_appointment_based_positions =
            osdData.mode_of_accession_for_appointment_based_positions;
          this.model.Osd.date_filled_up_assumption =
            osdData.date_filled_up_assumption;
          this.model.Osd.fullname = osdData.fullname;
          this.model.Osd.lastname = osdData.lastname;
          this.model.Osd.firstname = osdData.firstname;
          this.model.Osd.middlename = osdData.middlename;
          this.model.Osd.ext = osdData.ext;
          this.model.Osd.date_of_original_appointment =
            osdData.date_of_original_appointment;
          this.model.Osd.date_of_last_promotion =
            osdData.date_of_last_promotion;
          this.model.Osd.entry_date_in_dswd = osdData.entry_date_in_dswd;
          this.model.Osd.eligibility_csc_and_other_eligibilities =
            osdData.eligibility_csc_and_other_eligibilities;
          this.model.Osd.eligibility_license_ra_1080 =
            osdData.eligibility_license_ra_1080;
          this.model.Osd.license_ra_1080_let_rn_rs_etc =
            osdData.license_ra_1080_let_rn_rs_etc;
          this.model.Osd.highest_level_of_eligibility =
            osdData.highest_level_of_eligibility;
          this.model.Osd.highest_education_completed =
            osdData.highest_education_completed;
          this.model.Osd.degree_and_course_1st_vocational =
            osdData.degree_and_course_1st_vocational;
          this.model.Osd.degree_and_course_2nd_course =
            osdData.degree_and_course_2nd_course;
          this.model.Osd.other_courses = osdData.other_courses;
          this.model.Osd.masters_or_doctoral_degree_specify =
            osdData.masters_or_doctoral_degree_specify;
          this.model.Osd.gender = osdData.gender;
          this.model.Osd.date_of_birth = osdData.date_of_birth;
          this.model.Osd.age = osdData.age;
          this.model.Osd.civil_status = osdData.civil_status;
          this.model.Osd.residential_address = osdData.residential_address;
          this.model.Osd.permanent_address = osdData.permanent_address;
          this.model.Osd.indicate_whether_solo_parent =
            osdData.indicate_whether_solo_parent;
          this.model.Osd.indicate_whether_senior_citizen =
            osdData.indicate_whether_senior_citizen;
          this.model.Osd.indicate_whether_pwd = osdData.indicate_whether_pwd;
          this.model.Osd.type_of_disability = osdData.type_of_disability;
          this.model.Osd.indicate_whether_member_of_indigenous_group =
            osdData.indicate_whether_member_of_indigenous_group;
          this.model.Osd.indigenous_group = osdData.indigenous_group;
          this.model.Osd.citizenship = osdData.citizenship;
          this.model.Osd.active_contact_numbers =
            osdData.active_contact_numbers;
          this.model.Osd.active_and_working_email_address =
            osdData.active_and_working_email_address;
          this.model.Osd.former_incumbent = osdData.former_incumbent;
          this.model.Osd.mode_of_separation = osdData.mode_of_separation;
          this.model.Osd.date_vacated = osdData.date_vacated;
          this.model.Osd.remarks_status_of_vacant_position =
            osdData.remarks_status_of_vacant_position;
          this.model.Osd.employee_id_number = osdData.employee_id_number;
          this.model.Osd.bir_tin_number = osdData.bir_tin_number;
          this.model.Osd.philhealth_number = osdData.philhealth_number;
          this.model.Osd.sss_number = osdData.sss_number;
          this.model.Osd.pagibig_number = osdData.pagibig_number;
          this.model.Osd.gsis_number = osdData.gsis_number;
          this.model.Osd.blood_type = osdData.blood_type;
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
    updateOsd(OsdID) {
      var mythis = this;
      axios
        .put(
          `http://127.0.0.1:8000/api/osdlist/${OsdID}/edit`,
          // The data to be updated is passed as a parameter to the axios.put() function
          // as the second parameter (the first parameter is the API endpoint) in the form of
          // an object with the following properties: Hr (which contains the data to be updated)
          // and _method (which is set to "PUT" to indicate that the data will be updated)
          this.model.Osd
        )
        .then((res) => {
          console.log(res.data);
          // alert(res.data.message);
          this.$swal({
            icon: "success",
            title: "Success!",
            text: res.data.message,
          })
            .then(() => {
              return this.$router.push("/adminosp");
            })
            .then(() => {
              window.location.reload();
            });
          this.errorList = "";

          // window.location.reload(); // reload the page after updating the data
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
