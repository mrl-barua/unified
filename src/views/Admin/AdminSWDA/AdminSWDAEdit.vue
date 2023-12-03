<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" />
  <div>
    <div class="container-fluid">
      <div class="Header"></div>

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

      <div class="mb-3 col-12">
        <div class="spaceBetween">
          <label for="agency">AGENCY</label>
          <input
            type="text"
            v-model="model.Swda.Agency"
            class="form-control centered-placeholder"
            id="agency"
            required
          />
        </div>
      </div>
      <div class="mb-3 col-3">
        <div class="spaceBetween">
          <label for="type">TYPE</label>
          <select
            v-model="model.Swda.Type"
            class="form-control centered-placeholder"
            id="type"
          >
            <option :value="model.Swda.Type" selected>
              {{ model.Swda.Type }}
            </option>
            <option value="" disabled selected>Select an option ⮟</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </div>
      </div>

      <div class="mb-3 col-3">
        <div class="spaceBetween">
          <label for="address">ADDRESS</label>
          <input
            type="text"
            v-model="model.Swda.Address"
            class="form-control centered-placeholder"
            id="address"
          />
        </div>
      </div>

      <div class="mb-3 col-3">
        <div class="spaceBetween">
          <label for="contactNumber">CONTACT NUMBER</label>
          <input
            type="text"
            v-model="model.Swda.Contact_Number"
            class="form-control centered-placeholder"
            id="contactNumber"
          />
        </div>
      </div>

      <div class="mb-3 col-3">
        <div class="spaceBetween">
          <label for="formerName">FORMER NAME</label>
          <input
            type="text"
            v-model="model.Swda.Former_Name"
            class="form-control centered-placeholder"
            id="formerName"
          />
        </div>
      </div>

      <div class="col-12">
        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="cluster">CLUSTER</label>
            <select
              v-model="model.Swda.Cluster"
              class="form-control centered-placeholder"
              id="cluster"
            >
              <option :value="model.Swda.Cluster" selected>
                {{ model.Swda.Cluster }}
              </option>
              <option value="" disabled selected>Select an option ⮟</option>
              <option value="Cluster 1">Cluster 1</option>
              <option value="Cluster 2">Cluster 2</option>
              <option value="Unclustered 3">Unclustered</option>
              <option value="South Cluster">South Cluster</option>
              <option value="North Cluster">North Cluster</option>
              <option value="Senior Citizens Center">
                Senior Citizens Center
              </option>
            </select>
          </div>
        </div>
        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="fax">FAX</label>
            <input
              type="text"
              v-model="model.Swda.Fax"
              class="form-control centered-placeholder"
              id="fax"
            />
          </div>
        </div>
        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="email">EMAIL</label>
            <input
              type="text"
              v-model="model.Swda.Email"
              class="form-control centered-placeholder"
              id="email"
            />
          </div>
        </div>
        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="website">WEBSITE</label>
            <input
              type="text"
              v-model="model.Swda.Website"
              class="form-control centered-placeholder"
              id="website"
            />
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="sector">SECTOR</label>
            <select
              v-model="model.Swda.Sector"
              class="form-control centered-placeholder"
              id="type"
            >
              <option :value="model.Swda.Sector" selected>
                {{ model.Swda.Sector }}
              </option>
              <option value="" disabled selected>Select an option ⮟</option>
              <option value="Children">Children</option>
              <option value="Children and Youth">Children and Youth</option>
              <option value="Families and Communities">
                Families and Communities
              </option>
              <option value="Youth">Youth</option>
              <option value="Elderly">Elderly</option>
              <option value="Persons with Disability">
                Persons with Disability
              </option>
              <option value="Women">Women</option>
              <option value="Special Group">Special Group</option>
              <option value="Women and Children">Women and Children</option>
              <option value="Indigenous Peoples">Indigenous Peoples</option>
              <option value="Drug Dependents">Drug Dependents</option>
            </select>
          </div>
        </div>

        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="contactNumber">CONTACT NUMBER</label>
            <input
              type="text"
              v-model="model.Swda.Contact_Person"
              class="form-control centered-placeholder"
              id="contactPerson"
            />
          </div>
        </div>

        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="position">POSITION</label>
            <input
              type="text"
              v-model="model.Swda.Position"
              class="form-control centered-placeholder"
              id="position "
            />
          </div>
        </div>

        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="mobileNumber">MOBILE NUMBER</label>
            <input
              type="text"
              v-model="model.Swda.Mobile_Number"
              class="form-control centered-placeholder"
              id="mobileNumber"
            />
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="mb-3 col-4">
          <div>
            <label for="registered">Registered:</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                v-model="model.Swda.Registered"
                value="Yes"
                id="registeredYes"
              />
              <label class="form-check-label" for="registeredYes">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                v-model="model.Swda.Registered"
                value="No"
                id="registeredNo"
              />
              <label class="form-check-label" for="registeredNo">No</label>
            </div>
          </div>
        </div>

        <div class="mb-3 col-4">
          <div>
            <label for="licensed">Licensed: </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                v-model="model.Swda.Licensed"
                value="Yes"
                id="registeredYes"
              />
              <label class="form-check-label" for="licensedNo">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                v-model="model.Swda.Licensed"
                value="No"
                id="registeredNo"
              />
              <label class="form-check-label" for="licensedNo">No</label>
            </div>
          </div>
        </div>

        <div class="mb-3 col-4">
          <div>
            <label for="accredited">Accredited: </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                v-model="model.Swda.Accredited"
                value="Yes"
                id="registeredYes"
              />
              <label class="form-check-label" for="accreditedNo">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                v-model="model.Swda.Accredited"
                value="No"
                id="registeredNo"
              />
              <label class="form-check-label" for="accreditedNo">No</label>
            </div>
          </div>
        </div>
      </div>

      <hr
        class="hr"
        style="margin-left: 15px; margin-right: 15px; border: 1px solid red"
      />
      <!-- HORIZONTAL LINE -->

      <div class="col-12">
        <div class="mb-3 col-5">
          <div class="spaceBetween">
            <label for="servicesOffered">SERVICES OFFERED</label>
            <input
              type="text"
              v-model="model.Swda.Services_Offered"
              class="form-control"
              id="servicesOffered"
            />
          </div>
        </div>
        <div class="mb-3 col-4">
          <div class="spaceBetween">
            <label for="simplifiedServices">SIMPLIFIED SERVICES</label>
            <input
              type="text"
              v-model="model.Swda.Simplified_Services"
              class="form-control"
              id="simplifiedServices"
            />
          </div>
        </div>
        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="clientele">CLIENTELE</label>
            <input
              type="text"
              v-model="model.Swda.Clientele"
              class="form-control"
              id="clientele"
            />
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="areaOfOperation">AREA OF OPERATION</label>
            <select
              v-model="model.Swda.Area_of_Operation"
              class="form-control centered-placeholder"
              id="areaOfOperation"
            >
              <option :value="model.Swda.Area_of_Operation" selected>
                {{ model.Swda.Area_of_Operation }}
              </option>
              <option value="" disabled selected>Select an option ⮟</option>
              <option value="Regional">Regional</option>
              <option value="National">National</option>
              <option value="Unspecified">Unspecified</option>
            </select>
          </div>
        </div>

        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="regionalOperation">REGIONAL OPERATION</label>
            <select
              v-model="model.Swda.Regional_Operation"
              class="form-control centered-placeholder"
              id="regionalOperation"
            >
              <option :value="model.Swda.Regional_Operation" selected>
                {{ model.Swda.Regional_Operation }}
              </option>
              <option value="" disabled selected>Select an option ⮟</option>
              <option value="Davao City">Davao City</option>
              <option value="Davao de Oro">Davao de Oro</option>
              <option value="Davao del Norte">Davao del Norte</option>
              <option value="Davao del Sur">Davao del Sur</option>
              <option value="Davao Oriental">Davao Oriental</option>
            </select>
          </div>
        </div>

        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="specifiedAreasOfOperation"
              >SPECIFIED AREA OF OPERATION</label
            >
            <select
              v-model="model.Swda.Specified_Areas_of_Operation"
              class="form-control centered-placeholder"
              id="specifiedAreasOfOperation"
            >
              <option :value="model.Swda.Specified_Areas_of_Operation" selected>
                {{ model.Swda.Specified_Areas_of_Operation }}
              </option>
              <option value="" disabled selected>Select an option ⮟</option>
              <option value="Davao City">Davao City</option>
              <option value="Davao de Oro">Davao de Oro</option>
              <option value="Davao del Norte">Davao del Norte</option>
              <option value="Davao del Sur">Davao del Sur</option>
              <option value="Davao Oriental">Davao Oriental</option>
            </select>
          </div>
        </div>

        <div class="mb-3 col-3">
          <div class="spaceBetween">
            <label for="modeOfDelivery">MODE OF DELIVERY</label>
            <select
              v-model="model.Swda.Mode_of_Delivery"
              class="form-control centered-placeholder"
              id="modeOfDelivery"
            >
              <option :value="model.Swda.Mode_of_Delivery" selected>
                {{ model.Swda.Mode_of_Delivery }}
              </option>
              <option value="" disabled selected>Select an option ⮟</option>
              <option value="Community-based">Community-based</option>
              <option value="Center-based Residential">
                Center-based Residential
              </option>
              <option value="Auxiliary SWDA">Auxiliary SWDA</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="col-9">
          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="registrationID">REGISTRATION ID</label>
              <input
                type="text"
                v-model="model.Swda.Registration_ID"
                class="form-control"
                id="registrationID"
              />
            </div>
          </div>

          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="registrationDateIssued">REGISTRATION DATE</label>
              <input
                type="text"
                v-model="model.Swda.Registration_Date"
                class="form-control"
                id="registrationDate"
              />
            </div>
          </div>

          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="registrationDateIssued"
                >REGISTRATION EXPIRATION</label
              >
              <input
                type="text"
                v-model="model.Swda.Registration_Expiration"
                class="form-control"
                id="registrationExpiration"
              />
            </div>
          </div>

          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="licenseID">LICENSE ID</label>
              <input
                type="text"
                v-model="model.Swda.Licensed_ID"
                class="form-control"
                id="licenseID"
              />
            </div>
          </div>

          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="licenseDateIssued">LICENSE DATA ISSUED</label>
              <input
                type="text"
                v-model="model.Swda.License_Date_Issued"
                class="form-control"
                id="licenseDateIssued"
              />
            </div>
          </div>

          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="licenseExpiration">LICENSE EXPIRATION</label>
              <input
                type="text"
                v-model="model.Swda.License_Expiration"
                class="form-control"
                id="licenseExpiration"
              />
            </div>
          </div>

          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="accreditationID">ACCREDITATION ID</label>
              <input
                type="text"
                v-model="model.Swda.Accreditation_ID"
                class="form-control"
                id="accreditationID"
              />
            </div>
          </div>

          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="accreditationDateIssued"
                >ACCREDITATION DATE ISSUED</label
              >
              <input
                type="text"
                v-model="model.Swda.Accreditation_Date_Issued"
                class="form-control"
                id="accreditationDateIssued"
              />
            </div>
          </div>

          <div class="mb-3 col-4">
            <div class="spaceBetween">
              <label for="accreditationExpiration"
                >ACCREDITATION EXPIRATION</label
              >
              <input
                type="text"
                v-model="model.Swda.Accreditation_Expiration"
                class="form-control"
                id="accreditationExpiration"
              />
            </div>
          </div>

          <div class="col-9">
            <div class="mb-3 col-12">
              <div class="spaceBetween">
                <label for="remarks">REMARKS</label>
                <input
                  type="text"
                  v-model="model.Swda.Remarks"
                  class="form-control custom-input"
                  id="remarks"
                />
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="mb-3 col-12">
              <div class="spaceBetween">
                <label for="licenseDaysLeft">LICENSE DAYS LEFT</label>
                <input
                  type="number"
                  v-model="model.Swda.License_Days_Left"
                  class="form-control"
                  id="licenseDaysLeft"
                  required
                />
              </div>
            </div>

            <div class="mb-3 col-12">
              <div class="spaceBetween">
                <label for="accreditationDaysLeft"
                  >ACCREDITATION DAYS LEFT</label
                >
                <input
                  type="number"
                  v-model="model.Swda.Accreditation_Days_Left"
                  class="form-control"
                  id="accreditationDaysLeft"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="mb-3 col-12">
            <div class="spaceBetween">
              <label for="registrationStatus">REGISTRATION STATUS</label>
              <select
                v-model="model.Swda.Registration_Status"
                class="form-control centered-placeholder"
                id="type"
              >
                <option :value="model.Swda.Registration_Status" selected>
                  {{ model.Swda.Registration_Status }}
                </option>
                <option value="" disabled selected>Select an option ⮟</option>
                <option value="Active/Valid">Active/Valid</option>
                <option value="Expired">Expired</option>
              </select>
            </div>
          </div>

          <div class="mb-3 col-12">
            <div class="spaceBetween">
              <label for="licenseStatus">LICENSE STATUS</label>
              <select
                v-model="model.Swda.License_Status"
                class="form-control centered-placeholder"
                id="type"
              >
                <option :value="model.Swda.License_Status" selected>
                  {{ model.Swda.License_Status }}
                </option>
                <option value="" disabled selected>Select an option ⮟</option>
                <option value="Active/Valid">Active/Valid</option>
                <option value="Expired">Expired</option>
              </select>
            </div>
          </div>

          <div class="mb-3 col-12">
            <div class="spaceBetween">
              <label for="accreditationStatus">ACCREDITATION STATUS</label>
              <select
                v-model="model.Swda.Accreditation_Status"
                class="form-control centered-placeholder"
                id="type"
              >
                <option :value="model.Swda.Accreditation_Status" selected>
                  {{ model.Swda.Accreditation_Status }}
                </option>
                <option value="" disabled selected>Select an option ⮟</option>
                <option value="Active/Valid">Active/Valid</option>
                <option value="Expired">Expired</option>
              </select>
            </div>
          </div>

          <div class="mb-3 col-12">
            <div class="spaceBetween">
              <label for="licensureOverdue">LICENSURE OVERDUE</label>
              <input
                type="number"
                v-model="model.Swda.Licensure_Overdue"
                class="form-control"
                id="licensureOverdue"
                required
              />
            </div>
          </div>

          <div class="mb-3 col-12">
            <div class="spaceBetween">
              <label for="accreditationOverdue">ACCREDITATION OVERDUE</label>
              <input
                type="number"
                v-model="model.Swda.Accreditation_Overdue"
                class="form-control"
                id="accreditationOverdue"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div class="md-3 col-12 buttons d-flex justify-content-end">
        <router-link to="/adminswda">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>
        <router-link to="/adminswda">
          <button
            @click="updateSWDA($route.params.ID)"
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
  name: "AdminSWDAEdit",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN SWDA > EDIT", // The title displayed on the page, which is "ADMIN SWDA"
      SwdaID: "",
      errorList: "",
      // The model for the form inputs  (the data that will be sent to the backend) is defined here as an empty object with the following properties: Swda
      model: {
        Swda: {
          Type: "",
          Sector: "",
          Cluster: "",
          Agency: "",
          Address: "",
          Former_Name: "",
          Contact_Number: "",
          Fax: "",
          Email: "",
          Website: "",
          Contact_Person: "",
          Position: "",
          Mobile_Number: "",
          Registered: "",
          Licensed: "",
          Accredited: "",
          Services_Offered: "",
          Simplified_Services: "",
          Area_of_Operation: "",
          Regional_Operation: "",
          Specified_Areas_of_Operation: "",
          Mode_of_Delivery: "",
          Clientele: "",
          Registration_ID: "",
          Registration_Date: "",
          Registration_Expiration: "",
          Registration_Status: "",
          Licensed_ID: "",
          License_Date_Issued: "",
          License_Expiration: "",
          License_Status: "",
          Accreditation_ID: "",
          Accreditation_Date_Issued: "",
          Accreditation_Expiration: "",
          Accreditation_Status: "",
          Remarks: "",
          License_Days_Left: "",
          Licensure_Overdue: "",
          Accreditation_Days_Left: "",
          Accreditation_Overdue: "",
        },
      },
    };
  },
  mounted() {
    //console.log(this.$route.params.ID);
    this.SwdaID = this.$route.params.ID;
    //the SwdaID is passed as a parameter to the SwdaData() function  (which is defined below) to get the data of the SWDA with the given ID
    this.SwdaData(this.$route.params.ID);
  },
  methods: {
    // The SwdaData() function is used to get the data of the SWDA with the given ID
    SwdaData(SwdaID) {
      axios
        .get(`http://127.0.0.1:8000/api/swdalist/${SwdaID}/edit`)
        .then((res) => {
          const swdaData = res.data.Swda;
          console.log(res.data.Swda);

          // Check if swdaData is null or empty
          this.model.Swda.Type = swdaData.Type;
          this.model.Swda.Sector = swdaData.Sector;
          this.model.Swda.Cluster = swdaData.Cluster;
          this.model.Swda.Agency = swdaData.Agency;
          this.model.Swda.Address = swdaData.Address;
          this.model.Swda.Former_Name = swdaData.Former_Name;
          this.model.Swda.Contact_Number = swdaData.Contact_Number;
          this.model.Swda.Fax = swdaData.Fax;
          this.model.Swda.Email = swdaData.Email;
          this.model.Swda.Website = swdaData.Website;
          this.model.Swda.Contact_Person = swdaData.Contact_Person;
          this.model.Swda.Position = swdaData.Position;
          this.model.Swda.Mobile_Number = swdaData.Mobile_Number;
          this.model.Swda.Registered = swdaData.Registered;
          this.model.Swda.Licensed = swdaData.Licensed;
          this.model.Swda.Accredited = swdaData.Accredited;
          this.model.Swda.Services_Offered = swdaData.Services_Offered;
          this.model.Swda.Simplified_Services = swdaData.Simplified_Services;
          this.model.Swda.Area_of_Operation = swdaData.Area_of_Operation;
          this.model.Swda.Regional_Operation = swdaData.Regional_Operation;
          this.model.Swda.Specified_Areas_of_Operation =
            swdaData.Specified_Areas_of_Operation;
          this.model.Swda.Mode_of_Delivery = swdaData.Mode_of_Delivery;
          this.model.Swda.Clientele = swdaData.Clientele;
          this.model.Swda.Registration_ID = swdaData.Registration_ID;
          this.model.Swda.Registration_Date = swdaData.Registration_Date;
          this.model.Swda.Registration_Expiration =
            swdaData.Registration_Expiration;
          this.model.Swda.Registration_Status = swdaData.Registration_Status;
          this.model.Swda.Licensed_ID = swdaData.Licensed_ID;
          this.model.Swda.License_Date_Issued = swdaData.License_Date_Issued;
          this.model.Swda.License_Expiration = swdaData.License_Expiration;
          this.model.Swda.License_Status = swdaData.License_Status;
          this.model.Swda.Accreditation_ID = swdaData.Accreditation_ID;
          this.model.Swda.Accreditation_Date_Issued =
            swdaData.Accreditation_Date_Issued;
          this.model.Swda.Accreditation_Expiration =
            swdaData.Accreditation_Expiration;
          this.model.Swda.Accreditation_Status = swdaData.Accreditation_Status;
          this.model.Swda.Remarks = swdaData.Remarks;
          this.model.Swda.License_Days_Left = swdaData.License_Days_Left;
          this.model.Swda.Licensure_Overdue = swdaData.Licensure_Overdue;
          this.model.Swda.Accreditation_Days_Left =
            swdaData.Accreditation_Days_Left;
          this.model.Swda.Accreditation_Overdue =
            swdaData.Accreditation_Overdue;
        })
        // If the SWDA with the given ID is not found, an error message will be displayed
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
    // The updateSWDA() function is used to update the data of the SWDA with the given ID in the database using the backend API endpoint for updating SWDA data
    updateSWDA(SwdaID) {
      var mythis = this;
      axios
        .put(
          `http://127.0.0.1:8000/api/swdalist/${SwdaID}/edit`,
          // The data to be updated is passed as a parameter to the axios.put() function
          // as the second parameter (the first parameter is the API endpoint) in the form of
          // an object with the following properties: Swda (which contains the data to be updated)
          // and _method (which is set to "PUT" to indicate that the data will be updated)
          this.model.Swda
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
              return this.$router.push("/adminswda");
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
