<template>
  <Sidebar :iconText="PageTitle" :iconDetails="PageDetail" />
  <br /><br /><br /><br />
  <div class="wrapper container-fluid">
    <div class="col-12 col-md-3">
      <div class="agenciesNames" style="background-color: #292d96">
        <input
          style="width: 90%; height: 3em; text-align: center"
          type="text"
          v-model="searchQuery"
          placeholder="Search for agency names"
        />
        <div class="agencyfilter">
          <table>
            <tbody>
              <tr v-for="agency in filteredAgencies" :key="agency.Agency">
                <td class="text-white">
                  <router-link
                    :to="{
                      name: 'swda_agency',
                      query: {
                        agencyName: JSON.stringify(agency.Agency),
                        registrationStatus: JSON.stringify(
                          agency.Registration_Status
                        ),
                        licenseStatus: JSON.stringify(agency.License_Status),
                        accreditationStatus: JSON.stringify(
                          agency.Accreditation_Status
                        ),
                        sector: JSON.stringify(agency.Sector),
                        cluster: JSON.stringify(agency.Cluster),
                        type: JSON.stringify(agency.Type),
                        address: JSON.stringify(agency.Address),
                        contactNumber: JSON.stringify(agency.Contact_Number),
                        email: JSON.stringify(agency.Email),
                        website: JSON.stringify(agency.Website),
                        contactPerson: JSON.stringify(agency.Contact_Person),
                        position: JSON.stringify(agency.Position),
                        mobileNumber: JSON.stringify(agency.Mobile_Number),
                        servicesOffered: JSON.stringify(
                          agency.Services_Offered
                        ),
                        clientele: JSON.stringify(agency.Clientele),
                        modeOfDelivery: JSON.stringify(agency.Mode_of_Delivery),
                        specifiedAreasOfOperation: JSON.stringify(
                          agency.Specified_Areas_of_Operation
                        ),
                        registrationID: JSON.stringify(agency.Registration_ID),
                        registrationDate: JSON.stringify(
                          agency.Registration_Date
                        ),
                        registrationExpiration: JSON.stringify(
                          agency.Registration_Expiration
                        ),
                        remarks: JSON.stringify(agency.Remarks),
                        licensedID: JSON.stringify(agency.Licensed_ID),
                        licenseDateIssued: JSON.stringify(
                          agency.License_Date_Issued
                        ),
                        licenseExpiration: JSON.stringify(
                          agency.License_Expiration
                        ),
                        licensureOverdue: JSON.stringify(
                          agency.Licensure_Overdue
                        ),
                        accreditationID: JSON.stringify(
                          agency.Accreditation_ID
                        ),
                        accreditationDateIssued: JSON.stringify(
                          agency.Accreditation_Date_Issued
                        ),
                        accreditationExpiration: JSON.stringify(
                          agency.Accreditation_Expiration
                        ),
                        accreditationOverdue: JSON.stringify(
                          agency.Accreditation_Overdue
                        ),
                      },
                    }"
                    class="custom-link text-white"
                  >
                    <div class="hover">{{ agency.Agency }}</div>
                  </router-link>

                  <hr class="hr" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-9">
      <div class="agencies col-12 col-md-6 col-lg-3">
        <div class="shadow-agencies">
          <h4 class="headerAgencies">ACTIVE AGENCIES</h4>
          <p class="col-4 textAgencies">Registered</p>
          <p class="col-4 textAgencies">Licensed</p>
          <p class="col-4 textAgencies">Accredited</p>
          <div class="col-4">
            <router-link to="/swda/activeRegistered" class="custom-link">
              <span id="active-registered" class="active-agencies">
                {{ activeRegisteredCount }}
              </span>
            </router-link>
          </div>
          <div class="col-4">
            <router-link to="/swda/activeLicensed" class="custom-link">
              <span id="active-licensed" class="active-agencies">
                {{ activeLicensedCount }}
              </span>
            </router-link>
          </div>
          <div class="col-4">
            <router-link to="/swda/activeAccredited" class="custom-link">
              <span id="active-accredited" class="active-agencies">
                {{ activeAccreditedCount }}
              </span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="agencies col-12 col-md-6 col-lg-4">
        <div class="shadow-agencies">
          <h4 class="headerAgencies">EXPIRED AGENCIES</h4>
          <p class="col-3 textAgencies">Registered</p>
          <p class="col-3 textAgencies">Licensed</p>
          <p class="col-3 textAgencies">Accreditation</p>
          <p class="col-3 textAgencies">Delisted</p>

          <div class="col-3">
            <router-link to="/swda/expiredRegistered" class="custom-link">
              <span id="expired-registered" class="expired-agencies">
                {{ expiredRegisteredCount }}
              </span>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/swda/expiredLicensed" class="custom-link">
              <span id="expired-licensed" class="expired-agencies">
                {{ expiredLicensedCount }}
              </span>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/swda/expiredAccredited" class="custom-link">
              <span id="expired-accreditation" class="expired-agencies">
                {{ expiredAccreditedCount }}
              </span>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/swda/expiredDelisted" class="custom-link">
              <span id="expired-delisted" class="expired-agencies">
                {{ expiredDelistedCount }}
              </span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="agencies col-12 col-md-12 col-lg-5">
        <div class="shadow-agencies">
          <h4 class="headerAgencies">MODE OF DELIVERY</h4>
          <p class="col-3 textAgencies">Community</p>
          <p class="col-3 textAgencies">Auxillary SWDA</p>
          <p class="col-3 textAgencies">Residential</p>
          <p class="col-3 textAgencies">Non-Residential</p>

          <div class="col-3">
            <router-link to="/swda/modCombased" class="custom-link">
              <span id="community-based" class="modeDelivery">
                {{ communityBasedCount }}
              </span>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/swda/modAuxillary" class="custom-link">
              <span id="auxillary" class="modeDelivery">
                {{ auxillarySWDACount }}
              </span>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/swda/modResidential" class="custom-link">
              <span id="residential" class="modeDelivery">
                {{ residentialCount }}
              </span>
            </router-link>
          </div>
          <div class="col-3">
            <router-link to="/swda/modNResidential" class="custom-link">
              <span id="non-residential" class="modeDelivery">
                {{ nonResidentialCount }}
              </span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="tableOutside col-12">
        <div class="tableHeading">
          <p>REGISTERED EXPIRED AGENCIES</p>
        </div>
        <div class="tableInside">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";
import Sidebar from "@/components/Sidebar.vue";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  name: "SWDA_ACTIVE_LICENSED",
  components: {
    Sidebar,
    DataTable,
  },
  data() {
    return {
      PageTitle: "POLICY AND PLANS DIVISION",
      PageDetail: "Registered Expired Agencies",

      swda: [],
      agencies: [], // An array to store agency data fetched from the API
      searchQuery: "", // A variable to hold the search query entered by the user for filtering agencies

      // Active and Expired Agency Counts
      activeRegisteredCount: 0, // Number of actively registered agencies
      activeLicensedCount: 0, // Number of actively licensed agencies
      activeAccreditedCount: 0, // Number of actively accredited agencies
      expiredRegisteredCount: 0, // Number of expired registered agencies
      expiredLicensedCount: 0, // Number of expired licensed agencies
      expiredAccreditedCount: 0, // Number of expired accredited agencies
      expiredDelistedCount: 0, // Number of expired and delisted agencies

      // Mode of Delivery Counts
      communityBasedCount: 0, // Number of agencies with a community-based mode of delivery
      auxillarySWDACount: 0, // Number of agencies with an auxiliary SWDA mode of delivery
      residentialCount: 0, // Number of agencies with a center-based residential mode of delivery
      nonResidentialCount: 0, // Number of agencies with a center-based non-residential mode of delivery
    };
  },
  created() {
    // Fetch data and populate the agencies array (NEW)
    axios
      .get(`${backendURL}/api/agenciesName`)
      .then((response) => {
        this.agencies = response.data["Swda Agencies"]; // Access data within the 'Swda Agencies' property
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  computed: {
    filteredAgencies() {
      // Filter the agencies based on the searchQuery, and exclude agencies with null data
      return this.agencies.filter((agency) => {
        // Check if agency and agency.Agency are not null or undefined
        if (agency && agency.Agency) {
          return agency.Agency.toLowerCase().includes(
            this.searchQuery.toLowerCase()
          );
        } else {
          // If agency or agency.Agency is null or undefined, exclude it
          return false;
        }
      });
    },
  },
  methods: {
    // *ALREADY FUNCTIONAL
    AgencyFetchData() {
      return axios
        .get(`${backendURL}/api/agencies`)
        .then((response) => {
          // Initialize arrays for active and expired agencies
          const activeRegistered = [];
          const activeLicensed = [];
          const activeAccredited = [];
          const expiredRegistered = [];
          const expiredLicensed = [];
          const expiredAccredited = [];
          const expiredDelisted = [];
          const communityBased = [];
          const auxillarySWDA = [];
          const residential = [];
          const nonResidential = [];

          response.data.forEach((item) => {
            // Categorize by Registration Status
            if (item.Registration_Status === "Active/Valid") {
              if (item.Registered === "Yes") activeRegistered.push(item);
              if (item.Licensed === "Yes") activeLicensed.push(item);
              if (item.Accredited === "Yes") activeAccredited.push(item);
            } else if (item.Registration_Status === "Expired") {
              if (item.Registered === "No") expiredRegistered.push(item);
              if (item.Licensed === "No") expiredLicensed.push(item);
              if (item.Accredited === "No") expiredAccredited.push(item);
              if (item.Delisted === "No") expiredDelisted.push(item);
            }

            // Check if Mode_of_Delivery is a string before splitting
            if (typeof item.Mode_of_Delivery === "string") {
              const modes = item.Mode_of_Delivery.split(", ");
              modes.forEach((mode) => {
                if (mode === "Community-based") communityBased.push(item);
                if (mode === "Auxiliary SWDA") auxillarySWDA.push(item);
                if (mode === "Center-based Residential") residential.push(item);
                if (mode === "Center-based Non-Residential")
                  nonResidential.push(item);
              });
            }
          });

          // Calculate data lengths
          const activeRegisteredCount = activeRegistered.length;
          const activeLicensedCount = activeLicensed.length;
          const activeAccreditedCount = activeAccredited.length;
          const expiredRegisteredCount = expiredRegistered.length;
          const expiredLicensedCount = expiredLicensed.length;
          const expiredAccreditedCount = expiredAccredited.length;
          const expiredDelistedCount = expiredDelisted.length;
          const communityBasedCount = communityBased.length;
          const auxillarySWDACount = auxillarySWDA.length;
          const residentialCount = residential.length;
          const nonResidentialCount = nonResidential.length;

          //FOR TEMPLATE LITERAL
          this.activeRegisteredCount = activeRegisteredCount;
          this.activeLicensedCount = activeLicensedCount;
          this.activeAccreditedCount = activeAccreditedCount;
          this.expiredRegisteredCount = expiredRegisteredCount;
          this.expiredLicensedCount = expiredLicensedCount;
          this.expiredAccreditedCount = expiredAccreditedCount;
          this.expiredDelistedCount = expiredDelistedCount;
          this.communityBasedCount = communityBasedCount;
          this.auxillarySWDACount = auxillarySWDACount;
          this.residentialCount = residentialCount;
          this.nonResidentialCount = nonResidentialCount;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    getSwda() {
      axios.get(`${backendURL}/api/swdalist`).then((res) => {
        this.swda = res.data.Swda.filter(
          (item) =>
            item.Registration_Status === "Expired" && item.Registered === "No"
        );
        console.log(res);
      });
    },
  },
  mounted() {
    this.AgencyFetchData();
    this.getSwda();
  },
};
</script>

<style scoped>
@import "datatables.net-dt";
@import "datatables.net-bs5";
.wrapper {
  margin: 0;
  padding: 0;
  height: 70vh;
}

.custom-link {
  text-decoration: none;
  color: black;
}
.filters {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 18em;
  /* border-radius: 20px; */
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
}

.agencyNumbers {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 1em;
  /* border-radius: 20px; */
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
}

.tableOutside {
  margin: 20px 0px 20px 0px;
  border: 2px solid #e0e0e0;
  /* border-radius: 20px; */
}

.tableInside {
  margin: 20px 30px 20px 30px;
}

.tableHeading {
  margin-top: 20px;
  font-family: Inter;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
}

.agenciesNames {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 67em;
  /* border-radius: 20px; */
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
}

.agencyfilter table tbody tr td .hover:hover {
  background-color: #e70f0f;
  color: white; /* Change text color to white on hover */
  cursor: pointer; /* Change cursor to a pointer on hover (optional) */
  /* border-radius: 5px; */
  padding: 0px 0px 0px 10px;
}
.agencyfilter {
  font-size: 14px;
  height: 69em;
  width: 90%;
  overflow: auto;
  margin: 20px 20px 20px 20px;
  text-align: start;
}
/* Styling the scrollbar in WebKit (Chrome, Safari) */
.agencyfilter::-webkit-scrollbar {
  width: 4px; /* Adjust the width as desired */
}

.agencyfilter::-webkit-scrollbar-thumb {
  background-color: #555; /* Color of the scrollbar thumb */
  /* border-radius: 4px;  */
}

.agencyfilter::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Color of the scrollbar track */
}

.shadow-agencies {
  box-shadow: 0px 0px 8px 1px #00000026;

  height: 150px;
  /* border-radius: 20px; */
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
}

.shadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 170px;
  /* border-radius: 20px; */
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
}
.active-agencies {
  font-weight: bold;
  font-size: 34px;
}
.expired-agencies {
  font-weight: bold;
  font-size: 34px;
}
.modeDelivery {
  font-weight: bold;
  font-size: 34px;
}
.numberAgencies {
  font-weight: bold;
  font-size: 34px;
}

.sidepart {
  font-family: Inter;
  font-weight: 600;
  line-height: 20.57px;
  font-size: 27px;
  padding-top: 20px;
}

.sidepartValue {
  font-family: Inter;
  font-size: 50px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  margin: 20px 0px 20px 0px;
}

.textAgencies {
  font-size: 15px;
}

.headerAgencies {
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
}
</style>
