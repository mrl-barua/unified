<template>
  <br /><br /><br /><br />
  <AdminSidebar
    v-if="admin === 'authenticated'"
    :iconText="PageTitle"
    :iconDetails="PageDetail"
  />
  <OsdSidebar
    v-if="osdAdmin === 'authenticated'"
    iconText="PageTitle"
    :iconDetails="PageDetail"
  />
  <div>
    <div class="container-fluid">
      <div class="Header"></div>

      <!-- ! SHOW ERROR DIALOGUE -->

      <ul
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
      </ul>

      <div class="container-fluid wrapper">
        <!-- //* FIRST ROW START -->

        <section class="col-12 first-row">
          <div class="col-12">
            <div class="col-12">
              <div class="form-floating spaceBetween mb-3">
                <input
                  type="text"
                  v-model="model.Osd.division"
                  class="form-control"
                  id="division"
                  placeholder="Division"
                />
                <label for="division">DIVISION</label>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="col-4 mb-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.section_unit"
                  class="form-control"
                  id="section"
                  placeholder="Section"
                />
                <label for="section">SECTION</label>
              </div>
            </div>
            <div class="col-8 mb-3">
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.office_location_official_station"
                    class="form-control"
                    id="officeLocation"
                    placeholder="Office Location"
                  />
                  <label for="officeLocation">OFFICE LOCATION</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.item_number"
                    class="form-control"
                    id="itemNumber"
                    placeholder="Item Number"
                  />
                  <label for="itemNumber">ITEM NUMBER</label>
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.date_position_created"
                    class="form-control"
                    id="datePosition"
                    placeholder="Date Position"
                  />
                  <label for="datePosition">DATE POSITION</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.position_title"
                    class="form-control"
                    id="positionTitle"
                    placeholder="Position Title"
                  />
                  <label for="positionTitle">POSITION TITLE</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.parenthetical_title"
                    class="form-control"
                    id="parentheticalTitle"
                    placeholder="Parenthetical Title"
                  />
                  <label for="parentheticalTitle">PARENTHETICAL TITLE</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.monthly_rate"
                    class="form-control"
                    id="monthlyRate"
                    placeholder="Monthly Rate"
                  />
                  <label for="monthlyRate">MONTHLY RATE</label>
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="number"
                    v-model="model.Osd.position_level"
                    class="form-control"
                    id="positionlevel"
                    placeholder="Position Level"
                  />
                  <label for="positionlevel">POSITION LEVEL</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="number"
                    v-model="model.Osd.sg"
                    class="form-control"
                    id="salarygrade"
                    placeholder="Salary Grade"
                  />
                  <label for="salarygrade">SALARY GRADE</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="number"
                    v-model="model.Osd.salary_step_increment"
                    class="form-control"
                    id="salarystepincrement"
                    placeholder="Salary Step Increment"
                  />
                  <label for="salarystepincrement">SALARY STEP INCREMENT</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <select
                    v-model="model.Osd.status_filled_unfilled"
                    class="form-select centered-placeholder"
                    id="statusfilledunfilled"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="FILLED">FILLED</option>
                    <option value="UNFILLED">UNFILLED</option>
                  </select>
                  <label for="statusfilledunfilled">STATUS</label>
                </div>
              </div>
            </div>
            <!--  -->

            <div class="col-12 mb-3">
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.designation_as_appropriate_based_on_so"
                    class="form-control"
                    id="designationasappropriatebasedonso"
                    placeholder="Designation"
                  />
                  <label for="designationasappropriatebasedonso"
                    >DESIGNATION</label
                  >
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.date_of_designation"
                    class="form-control"
                    id="dateofdesignation"
                    placeholder="Date of Designation"
                  />
                  <label for="dateofdesignation">DATE OF DESIGNATION</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.special_order_no"
                    class="form-control"
                    id="specialorderno"
                    placeholder="Special Order No."
                  />
                  <label for="specialorderno">SPECIAL ORDER NO.</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.date_filled_up_assumption"
                    class="form-control"
                    id="datefilledupassumption"
                    placeholder="Date Filled Up Assumption"
                  />
                  <label for="datefilledupassumption"
                    >DATE FILLED UP ASSUMPTION</label
                  >
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.office_bureau_service_program"
                    class="form-control"
                    id="officebureauserviceprogram"
                    placeholder="Office Bureau Service Program"
                  />
                  <label for="officebureauserviceprogram"
                    >OFFICE BUREAU SERVICE PROGRAM</label
                  >
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <select
                    v-model="model.Osd.employment_status"
                    class="form-control"
                    id="employmentStatus"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="MOA">MOA</option>
                    <option value="PERMANENT">PERMANENT</option>
                    <option value="CASUAL">CASUAL</option>
                    <option value="CONTRACTUAL">CONTRACTUAL</option>
                    <option value="COTERMINOUS">COTERMINOUS</option>
                  </select>
                  <label for="employmentStatus">EMPLOYMENT STATUS</label>
                </div>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.fund_source_for_contractual"
                    class="form-control"
                    id="fundsourceforcontractual"
                    placeholder="Fund Source for Contractual"
                  />
                  <label for="fundsourceforcontractual"
                    >FUND SOURCE FOR CONTRACTUAL</label
                  >
                </div>
              </div>
              <div class="col-6">
                <div class="col-6">
                  <div class="form-floating spaceBetween">
                    <input
                      type="text"
                      v-model="
                        model.Osd
                          .mode_of_accession_for_appointment_based_positions
                      "
                      class="form-control"
                      id="modeofaccessionforappointmentbasedpositions"
                      placeholder="Mode of Accession"
                    />
                    <label for="modeofaccessionforappointmentbasedpositions"
                      >MODE OF ACCESSION</label
                    >
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating spaceBetween">
                    <input
                      type="text"
                      v-model="model.Osd.mode_of_separation"
                      class="form-control"
                      id="modeofseparation"
                      placeholder="Mode of Separation"
                    />
                    <label for="modeofseparation">MODE OF SEPARATION</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr
          class="hr"
          style="margin-left: 15px; margin-right: 15px; border: 1px solid red"
        />

        <!-- //* SECOND ROW START -->
        <section class="col-12 second-row">
          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.fullname"
                  class="form-control"
                  id="fullname"
                  placeholder="Full Name"
                />
                <label for="fullname">FULL NAME</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.lastname"
                  class="form-control"
                  id="lastname"
                  placeholder="Last Name"
                />
                <label for="lastname">LAST NAME</label>
              </div>
            </div>
            <div class="col-2">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.firstname"
                  class="form-control"
                  id="firstname"
                  placeholder="First Name"
                />
                <label for="firstname">FIRST NAME</label>
              </div>
            </div>
            <div class="col-2">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.middlename"
                  class="form-control"
                  id="middlename"
                  placeholder="Middle Name"
                />
                <label for="middlename">MIDDLE NAME</label>
              </div>
            </div>
            <div class="col-2">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.ext"
                  class="form-control"
                  id="ext"
                  placeholder="Ext."
                />
                <label for="ext">EXT.</label>
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <input
                    type="number"
                    v-model="model.Osd.age"
                    class="form-control"
                    id="age"
                    placeholder="Age"
                  />
                  <label for="age">AGE</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <!-- <input
                    type="text"
                    v-model="model.Osd.gender"
                    class="form-control"
                    id="gender"
                    placeholder="Gender"
                  /> -->
                  <select
                    v-model="model.Osd.gender"
                    class="form-select"
                    id="employmentStatus"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="">None</option>
                  </select>
                  <label for="gender">GENDER</label>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.civil_status"
                  class="form-control"
                  id="civilstatus"
                  placeholder="Civil Status"
                />
                <label for="civilstatus">CIVIL STATUS</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.date_of_birth"
                  class="form-control"
                  id="dateofbirth"
                  placeholder="Date of Birth"
                />
                <label for="dateofbirth">DATE OF BIRTH</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.active_and_working_email_address"
                  class="form-control"
                  id="emailaddress"
                  placeholder="Email Address"
                />
                <label for="emailaddress">EMAIL ADDRESS</label>
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="col-4">
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <select
                    v-model="model.Osd.indicate_whether_pwd"
                    class="form-select"
                    id="pwdStatus"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="PWD">PWD</option>
                    <option value="">None</option>
                  </select>
                  <label for="pwdStatus">INDICATE WHETHER PWD</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.type_of_disability"
                    class="form-control"
                    id="typeofdisability"
                    placeholder="Type of Disability"
                  />
                  <label for="typeofdisability">TYPE OF DISABILITY</label>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="col-4">
                <div class="form-floating spaceBetween">
                  <select
                    v-model="model.Osd.indicate_whether_senior_citizen"
                    class="form-select"
                    id="seniorCitizenStatus"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="SENIOR CITIZEN">SENIOR CITIZEN</option>
                    <option value="">None</option>
                  </select>
                  <label for="seniorCitizenStatus"
                    >INDICATE WHETHER SENIOR CITIZEN</label
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-floating spaceBetween">
                  <select
                    v-model="model.Osd.indicate_whether_solo_parent"
                    class="form-select"
                    id="soloParentStatus"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="SOLO PARENT">SOLO PARENT</option>
                    <option value="">None</option>
                  </select>
                  <label for="soloParentStatus"
                    >INDICATE WHETHER SOLO PARENT</label
                  >
                </div>
              </div>
              <div class="col-4">
                <div class="form-floating spaceBetween">
                  <select
                    v-model="
                      model.Osd.indicate_whether_member_of_indigenous_group
                    "
                    class="form-select"
                    id="indigenousGroup"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="INDIGENOUS GROUP">INDIGENOUS GROUP</option>
                    <option value="">None</option>
                  </select>
                  <label for="indigenousGroup"
                    >INDICATE IF INDIGENOUS_GROUP</label
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr
          class="hr"
          style="margin-left: 15px; margin-right: 15px; border: 1px solid red"
        />

        <!-- //* THIRD ROW START -->
        <section class="col-12 third-row">
          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.employee_id_number"
                  class="form-control"
                  id="employeeidno"
                  placeholder="Employee ID No"
                />
                <label for="employeeidno">EMPLOYEE ID NO</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.entry_date_in_dswd"
                  class="form-control"
                  id="entrydateindswd"
                  placeholder="Entry Date in DSWD"
                />
                <label for="entrydateindswd">ENTRY DATE IN DSWD</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.date_of_original_appointment"
                  class="form-control"
                  id="dateoforiginalappointment"
                  placeholder="Date of Original Appointment"
                />
                <label for="dateoforiginalappointment"
                  >DATE OF ORIGINAL APPOINTMENT</label
                >
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.date_of_last_promotion"
                  class="form-control"
                  id="dateoflastpromotion"
                  placeholder="Date of Last Promotion"
                />
                <label for="dateoflastpromotion">DATE OF LAST PROMOTION</label>
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.gsis_number"
                  class="form-control"
                  id="gsisnumber"
                  placeholder="GSIS Number"
                />
                <label for="gsisnumber">GSIS NUMBER</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.bir_tin_number"
                  class="form-control"
                  id="birtinno"
                  placeholder="BIR TIN No."
                />
                <label for="birtinno">BIR TIN.NO.</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.sss_number"
                  class="form-control"
                  id="sssnumber"
                  placeholder="SSS Number"
                />
                <label for="sssnumber">SSS NUMBER</label>
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.philhealth_number"
                  class="form-control"
                  id="philhealthnumber"
                  placeholder="PhilHealth Number"
                />
                <label for="philhealthnumber">PHILHEALTH NUMBER</label>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.highest_level_of_eligibility"
                  class="form-control"
                  id="highestlvlofeligibility"
                  placeholder="Highest Level of Eligibility"
                />
                <label for="highestlvlofeligibility"
                  >HIGHEST LVL OF ELIGIBILITY</label
                >
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.eligibility_csc_and_other_eligibilities"
                  class="form-control"
                  id="eligibilitycscandothers"
                  placeholder="Eligibility CSC and Others"
                />
                <label for="eligibilitycscandothers"
                  >ELIGIBILITY CSC and Others</label
                >
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.eligibility_license_ra_1080"
                  class="form-control"
                  id="eligibilitylicense1080"
                  placeholder="Eligibility License RA 1080"
                />
                <label for="eligibilitylicense1080"
                  >ELIGIBILITY License RA 1080</label
                >
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.license_ra_1080_let_rn_rs_etc"
                  class="form-control"
                  id="license1080letrnrs"
                  placeholder="License RA 1080 LET RN RS etc."
                />
                <label for="license1080letrnrs">LICENSE</label>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.highest_education_completed"
                  class="form-control"
                  id="highesteducationcompleted"
                  placeholder="Highest Education Completed"
                />
                <label for="highesteducationcompleted"
                  >HIGHEST EDUCATION COMPLETED</label
                >
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.degree_and_course_1st_vocational"
                  class="form-control"
                  id="degreeandcourse1stvocational"
                  placeholder="Degree and Course (1st Course Vocational)"
                />
                <label for="degreeandcourse1stvocational"
                  >DEGREE AND COURSE (1st Course Vocational)</label
                >
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.degree_and_course_2nd_course"
                  class="form-control"
                  id="degreeandcourse2ndcourse"
                  placeholder="Degree and Course (2nd Course)"
                />
                <label for="degreeandcourse2ndcourse"
                  >DEGREE AND COURSE (2nd Course)</label
                >
              </div>
            </div>
            <div class="col-3">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Osd.other_courses"
                  class="form-control"
                  id="othercourse"
                  placeholder="Other Course"
                />
                <label for="othercourse">OTHER_COURSE</label>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="col-6">
              <div class="form-floating spaceBetween">
                <textarea
                  style="height: 135px"
                  type="text"
                  v-model="model.Osd.remarks_status_of_vacant_position"
                  class="form-control"
                  id="remarksstatusofvacantposition"
                  placeholder="Remarks Status of Vacant Position"
                />
                <label for="remarksstatusofvacantposition"
                  >REMARKS STATUS OF VACANT POSITION</label
                >
              </div>
            </div>
            <div class="col-6">
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.former_incumbent"
                    class="form-control"
                    id="formerincumbent"
                    placeholder="Former Incumbent"
                  />
                  <label for="formerincumbent">FORMER INCUMBENT</label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-floating spaceBetween">
                  <input
                    type="text"
                    v-model="model.Osd.date_vacated"
                    class="form-control"
                    id="datevacated"
                    placeholder="Date Vacated"
                  />
                  <label for="datevacated">DATE VACATED</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating spaceBetween mt-3">
                  <input
                    type="text"
                    v-model="model.Osd.masters_or_doctoral_degree_specify"
                    class="form-control"
                    id="mastersordoctoraldegree"
                    placeholder="Masters or Doctoral Degree Specify"
                  />
                  <label for="mastersordoctoraldegree"
                    >MASTERS OR DOCTORAL DEGREE</label
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- BUTTON SECTION -->
      <section class="md-3 col-12 buttons d-flex justify-content-end">
        <router-link to="/adminosp">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>
        <router-link to="/adminosp">
          <button type="submit" @click="saveOsd" class="btn btn-primary">
            SAVE
          </button>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";
import OsdSidebar from "@/components/OsdSidebar";
import { backendURL } from "@/config.js";
export default {
  name: "AdminOSDCreate",
  components: {
    AdminSidebar,
    OsdSidebar,
  },
  data() {
    return {
      PageTitle: "OPERATIONAL STAFF DATABASE",
      PageDetail: "Add New Record",
      admin: null,
      osdAdmin: null,
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
    this.admin = sessionStorage.getItem("admin");
    this.osdAdmin = sessionStorage.getItem("osdAdmin");
  },
  methods: {
    async saveOsd() {
      // Get the name from localStorage
      this.name = localStorage.getItem("name");
      // Set RESPONSIBLE_ADMIN to the current value of this.name
      this.model.Osd.responsible_admin = this.name;

      try {
        const res = await axios.post(
          `${backendURL}/api/osdlist`,
          this.model.Osd
        );
        console.log(res.data);

        await this.$swal({
          icon: "success",
          title: "Success!",
          text: res.data.message,
        });

        this.$router.push("/adminosp");
        window.location.reload();

        this.model.Osd = {
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
        };
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            this.errorList = error.response.data.errors;
          }
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("error", error.message);
        }
      }
    },
  },
};
</script>

<style scoped>
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

.btn {
  margin-right: 20px;
  width: 180px;
  margin-bottom: 20px;
}
</style>
