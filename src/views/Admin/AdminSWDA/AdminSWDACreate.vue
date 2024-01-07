<template>
  <br /><br /><br /><br />
  <AdminSidebar
    v-if="admin === 'authenticated'"
    :iconText="PageTitle"
    :iconDetails="PageDetail"
  />
  <SwdaSidebar
    v-if="swdaAdmin === 'authenticated'"
    iconText="PageTitle"
    :iconDetails="PageDetail"
  />
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

      <!--  ALL INPUT FIELDS ARE IN THIS DIVIDER  -->
      <div class="input-fields">
        <section>
          <div class="mb-3 col-12">
            <div class="spaceBetween">
              <div class="form-floating">
                <input
                  type="text"
                  v-model="model.Swda.Agency"
                  class="form-control"
                  id="floatingAgency"
                  placeholder="AGENCY"
                  required
                />
                <label for="floatingAgency">AGENCY</label>
              </div>
            </div>
          </div>
          <div class="mb-3 col-3">
            <div class="spaceBetween">
              <div class="form-floating">
                <select
                  v-model="model.Swda.Type"
                  class="form-select"
                  id="floatingType"
                  aria-label="Floating label select example"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="Private">Private</option>
                  <option value="Public">Public</option>
                </select>
                <label for="floatingType">TYPE</label>
              </div>
            </div>
          </div>

          <div class="mb-3 col-3">
            <div class="spaceBetween">
              <div class="form-floating">
                <input
                  type="text"
                  v-model="model.Swda.Address"
                  class="form-control"
                  id="floatingAddress"
                  placeholder="ADDRESS"
                />
                <label for="floatingAddress">ADDRESS</label>
              </div>
            </div>
          </div>

          <div class="mb-3 col-3">
            <div class="spaceBetween">
              <div class="form-floating">
                <input
                  type="text"
                  v-model="model.Swda.Contact_Number"
                  class="form-control"
                  id="floatingContactNumber"
                  placeholder="CONTACT NUMBER"
                />
                <label for="floatingContactNumber">CONTACT NUMBER</label>
              </div>
            </div>
          </div>

          <div class="mb-3 col-3">
            <div class="spaceBetween">
              <div class="form-floating">
                <input
                  type="text"
                  v-model="model.Swda.Former_Name"
                  class="form-control"
                  id="floatingFormerName"
                  placeholder="FORMER NAME"
                />
                <label for="floatingFormerName">FORMER NAME</label>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <select
                    v-model="model.Swda.Cluster"
                    class="form-select"
                    id="floatingCluster"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="Cluster 1">Cluster 1</option>
                    <option value="Cluster 2">Cluster 2</option>
                    <option value="Unclustered">Unclustered</option>
                    <option value="South Cluster">South Cluster</option>
                    <option value="North Cluster">North Cluster</option>
                    <option value="Senior Citizens Center">
                      Senior Citizens Center
                    </option>
                  </select>
                  <label for="floatingCluster">CLUSTER</label>
                </div>
              </div>
            </div>
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Fax"
                    class="form-control"
                    id="floatingFax"
                    placeholder="FAX"
                  />
                  <label for="floatingFax">FAX</label>
                </div>
              </div>
            </div>
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Email"
                    class="form-control"
                    id="floatingEmail"
                    placeholder="EMAIL"
                  />
                  <label for="floatingEmail">EMAIL</label>
                </div>
              </div>
            </div>
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Website"
                    class="form-control"
                    id="floatingWebsite"
                    placeholder="WEBSITE"
                  />
                  <label for="floatingWebsite">WEBSITE</label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <select
                    v-model="model.Swda.Sector"
                    class="form-select"
                    id="floatingSector"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="Children">Children</option>
                    <option value="Children and Youth">
                      Children and Youth
                    </option>
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
                    <option value="Women and Children">
                      Women and Children
                    </option>
                    <option value="Indigenous Peoples">
                      Indigenous Peoples
                    </option>
                    <option value="Drug Dependents">Drug Dependents</option>
                  </select>
                  <label for="floatingSector">SECTOR</label>
                </div>
              </div>
            </div>
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Contact_Person"
                    class="form-control"
                    id="floatingContactPerson"
                    placeholder="CONTACT PERSON"
                  />
                  <label for="floatingContactPerson">CONTACT PERSON</label>
                </div>
              </div>
            </div>
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Position"
                    class="form-control"
                    id="floatingPosition"
                    placeholder="POSITION"
                  />
                  <label for="floatingPosition">POSITION</label>
                </div>
              </div>
            </div>
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Mobile_Number"
                    class="form-control"
                    id="floatingMobileNumber"
                    placeholder="MOBILE NUMBER"
                  />
                  <label for="floatingMobileNumber">MOBILE NUMBER</label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="mb-3 col-4">
              <div>
                <label class="pe-2">Registered:</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="model.Swda.Registered"
                    value="Yes"
                    id="registeredYes"
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="model.Swda.Registered"
                    value="No"
                    id="registeredNo"
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <div class="mb-3 col-4">
              <div>
                <label class="pe-2">Licensed: </label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="model.Swda.Licensed"
                    value="Yes"
                    id="licensedregisteredYes"
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="model.Swda.Licensed"
                    value="No"
                    id="licensedregisteredNo"
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
            </div>

            <div class="mb-3 col-4">
              <div>
                <label class="pe-2">Accredited: </label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="model.Swda.Accredited"
                    value="Yes"
                    id="accreditedregisteredYes"
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="model.Swda.Accredited"
                    value="No"
                    id="accreditedregisteredNo"
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr
          class="hr"
          style="margin-left: 15px; margin-right: 15px; border: 1px solid red"
        />
        <!-- HORIZONTAL LINE -->

        <section class="col-12">
          <div class="col-12">
            <div class="mb-3 col-5">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Services_Offered"
                    class="form-control"
                    id="floatingServicesOffered"
                    placeholder="SERVICES OFFERED"
                  />
                  <label for="floatingServicesOffered">SERVICES OFFERED</label>
                </div>
              </div>
            </div>
            <div class="mb-3 col-4">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Simplified_Services"
                    class="form-control"
                    id="floatingSimplifiedServices"
                    placeholder="SIMPLIFIED SERVICES"
                  />
                  <label for="floatingSimplifiedServices"
                    >SIMPLIFIED SERVICES</label
                  >
                </div>
              </div>
            </div>
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <input
                    type="text"
                    v-model="model.Swda.Clientele"
                    class="form-control"
                    id="floatingClientele"
                    placeholder="CLIENTELE"
                  />
                  <label for="floatingClientele">CLIENTELE</label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <select
                    v-model="model.Swda.Area_of_Operation"
                    class="form-select centered-placeholder"
                    id="areaOfOperation"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="Regional">Regional</option>
                    <option value="National">National</option>
                    <option value="Unspecified">Unspecified</option>
                  </select>
                  <label for="areaOfOperation">AREA OF OPERATION</label>
                </div>
              </div>
            </div>

            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <select
                    v-model="model.Swda.Regional_Operation"
                    class="form-select centered-placeholder"
                    id="regionalOperation"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="Davao City">Davao City</option>
                    <option value="Davao de Oro">Davao de Oro</option>
                    <option value="Davao del Norte">Davao del Norte</option>
                    <option value="Davao del Sur">Davao del Sur</option>
                    <option value="Davao Oriental">Davao Oriental</option>
                  </select>
                  <label for="regionalOperation">REGIONAL OPERATION</label>
                </div>
              </div>
            </div>

            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <select
                    v-model="model.Swda.Specified_Areas_of_Operation"
                    class="form-select centered-placeholder"
                    id="specifiedAreasOfOperation"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="Davao City">Davao City</option>
                    <option value="Davao de Oro">Davao de Oro</option>
                    <option value="Davao del Norte">Davao del Norte</option>
                    <option value="Davao del Sur">Davao del Sur</option>
                    <option value="Davao Oriental">Davao Oriental</option>
                  </select>
                  <label for="specifiedAreasOfOperation"
                    >SPECIFIED AREA OF OPERATION</label
                  >
                </div>
              </div>
            </div>

            <div class="mb-3 col-3">
              <div class="spaceBetween">
                <div class="form-floating">
                  <select
                    v-model="model.Swda.Mode_of_Delivery"
                    class="form-select centered-placeholder"
                    id="modeOfDelivery"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="Community-based">Community-based</option>
                    <option value="Center-based Residential">
                      Center-based Residential
                    </option>
                    <option value="Auxiliary SWDA">Auxiliary SWDA</option>
                  </select>
                  <label for="modeOfDelivery">MODE OF DELIVERY</label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-9">
            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Swda.Registration_ID"
                  class="form-control"
                  id="registrationID"
                />
                <label for="registrationID">REGISTRATION ID</label>
              </div>
            </div>

            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="date"
                  v-model="model.Swda.Registration_Date"
                  class="form-control"
                  id="registrationDate"
                />
                <label for="registrationDate">REGISTRATION DATE</label>
              </div>
            </div>

            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="date"
                  v-model="model.Swda.Registration_Expiration"
                  class="form-control"
                  id="registrationExpiration"
                />
                <label for="registrationExpiration"
                  >REGISTRATION EXPIRATION</label
                >
              </div>
            </div>

            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Swda.Licensed_ID"
                  class="form-control"
                  id="licenseID"
                />
                <label for="licenseID">LICENSE ID</label>
              </div>
            </div>

            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="date"
                  v-model="model.Swda.License_Date_Issued"
                  class="form-control"
                  id="licenseDateIssued"
                />
                <label for="licenseDateIssued">LICENSE DATA ISSUED</label>
              </div>
            </div>

            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="date"
                  v-model="model.Swda.License_Expiration"
                  class="form-control"
                  id="licenseExpiration"
                />
                <label for="licenseExpiration">LICENSE EXPIRATION</label>
              </div>
            </div>

            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Swda.Accreditation_ID"
                  class="form-control"
                  id="accreditationID"
                />
                <label for="accreditationID">ACCREDITATION ID</label>
              </div>
            </div>

            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="date"
                  v-model="model.Swda.Accreditation_Date_Issued"
                  class="form-control"
                  id="accreditationDateIssued"
                />
                <label for="accreditationDateIssued"
                  >ACCREDITATION DATE ISSUED</label
                >
              </div>
            </div>

            <div class="mb-3 col-4">
              <div class="form-floating spaceBetween">
                <input
                  type="date"
                  v-model="model.Swda.Accreditation_Expiration"
                  class="form-control"
                  id="accreditationExpiration"
                />
                <label for="accreditationExpiration"
                  >ACCREDITATION EXPIRATION</label
                >
              </div>
            </div>

            <div class="col-9">
              <div class="mb-3 col-12">
                <div class="form-floating spaceBetween">
                  <textarea
                    style="height: 135px"
                    type="text"
                    v-model="model.Swda.Remarks"
                    class="form-control custom-input"
                    id="remarks"
                  />
                  <label for="remarks">REMARKS</label>
                </div>
              </div>
            </div>

            <div class="col-3">
              <!-- <div class="mb-3 col-12">
                <div class="form-floating spaceBetween">
                  <input
                    type="number"
                    v-model="model.Swda.License_Days_Left"
                    class="form-control"
                    id="licenseDaysLeft"
                    required
                  />
                  <label for="licenseDaysLeft">LICENSE DAYS LEFT</label>
                </div>
              </div> -->

              <!-- <div class="mb-3 col-12">
                <div class="form-floating spaceBetween">
                  <input
                    type="number"
                    v-model="model.Swda.Accreditation_Days_Left"
                    class="form-control"
                    id="accreditationDaysLeft"
                    required
                  />
                  <label for="accreditationDaysLeft"
                    >ACCREDITATION DAYS LEFT</label
                  >
                </div>
              </div> -->
            </div>
          </div>

          <div class="col-3">
            <div class="mb-3 col-12">
              <div class="form-floating spaceBetween">
                <select
                  v-model="model.Swda.Registration_Status"
                  class="form-select centered-placeholder"
                  id="registrationtype"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="Active/Valid">Active/Valid</option>
                  <option value="Expired">Expired</option>
                </select>
                <label for="registrationtype">REGISTRATION STATUS</label>
              </div>
            </div>

            <div class="mb-3 col-12">
              <div class="form-floating spaceBetween">
                <select
                  v-model="model.Swda.License_Status"
                  class="form-select centered-placeholder"
                  id="licensetype"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="Active/Valid">Active/Valid</option>
                  <option value="Expired">Expired</option>
                </select>
                <label for="licensetype">LICENSE STATUS</label>
              </div>
            </div>

            <div class="mb-3 col-12">
              <div class="form-floating spaceBetween">
                <select
                  v-model="model.Swda.Accreditation_Status"
                  class="form-select centered-placeholder"
                  id="accreditationtype"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="Active/Valid">Active/Valid</option>
                  <option value="Expired">Expired</option>
                </select>
                <label for="accreditationtype">ACCREDITATION STATUS</label>
              </div>
            </div>

            <!-- <div class="mb-3 col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="number"
                  v-model="model.Swda.Licensure_Overdue"
                  class="form-control"
                  id="licensureOverdue"
                  required
                />
                <label for="licensureOverdue">LICENSURE OVERDUE</label>
              </div>
            </div> -->

            <!-- <div class="mb-3 col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="number"
                  v-model="model.Swda.Accreditation_Overdue"
                  class="form-control"
                  id="accreditationOverdue"
                  required
                />
                <label for="accreditationOverdue">ACCREDITATION OVERDUE</label>
              </div>
            </div> -->
          </div>
        </section>
      </div>

      <div class="md-3 col-12 buttons d-flex justify-content-end">
        <router-link to="/adminswda">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>
        <button type="submit" @click="saveSwda" class="btn btn-primary">
          SAVE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";
import SwdaSidebar from "@/components/SwdaSidebar";
import { backendURL } from "@/config.js";
import { format, parse } from "date-fns";
export default {
  name: "AdminSWDACreate",
  components: {
    AdminSidebar,
    SwdaSidebar,
  },
  data() {
    return {
      PageTitle:
        "List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies",
      PageDetail: "Add New Record",
      swdaAdmin: null,
      admin: null,
      errorList: "",
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
    this.swdaAdmin = sessionStorage.getItem("swdaAdmin");
    this.admin = sessionStorage.getItem("admin");
    console.log(this.swdaAdmin); // Logs the name to the console
    console.log(this.admin); // Logs the name to the console
  },

  methods: {
    formatDate(dateString) {
      const parsedDate = parse(dateString, "yyyy-MM-dd", new Date());
      if (isNaN(parsedDate)) {
        throw new Error(`Invalid date: ${dateString}`);
      }
      return format(parsedDate, "MMMM dd, yyyy");
    },
    async saveSwda() {
      try {
        // Get the name from localStorage
        this.name = localStorage.getItem("name");
        // Set RESPONSIBLE_ADMIN to the current value of this.name
        this.model.Swda.responsible_admin = this.name;

        const dateFields = [
          "Registration_Date",
          "License_Date_Issued",
          "Accreditation_Date_Issued",
          "Registration_Expiration",
          "License_Expiration",
          "Accreditation_Expiration",
        ];

        let swdaCopy = { ...this.model.Swda };

        dateFields.forEach((field) => {
          swdaCopy[field] = this.model.Swda[field]
            ? this.formatDate(this.model.Swda[field])
            : "";
        });

        const res = await axios.post(`${backendURL}/api/swdalist`, swdaCopy);
        console.log(res.data);

        await this.$swal({
          icon: "success",
          title: "Success!",
          text: res.data.message,
        });

        this.$router.push("/adminswda");

        this.model.Swda = {
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
          responsible_admin: "",
        };
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.errorList = error.response.data.errors;
        }
        console.log(error);
      }
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

.btn {
  margin-right: 20px;
  width: 180px;
  margin-bottom: 20px;
}
</style>
