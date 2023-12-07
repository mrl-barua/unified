<template>
  <Sidebar :iconText="PageTitle" :iconDetails="PageDetail" />
  <br /><br /><br /><br />
  <div class="wrapper" container-fluid>
    <div class="col-12 col-md-3">
      <div class="agenciesNames" style="background-color: white">
        <p
          style="
            font-family: Arial;
            font-size: 25px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: center;
          "
        >
          AGENCY
        </p>
        <input
          style="
            border-radius: 10px;
            width: 90%;
            height: 3em;
            text-align: center;
          "
          type="text"
          v-model="searchQuery"
          placeholder="Search for agency names"
        />
        <div class="agencyfilter">
          <table>
            <tbody>
              <tr v-for="agency in filteredAgencies" :key="agency.Agency">
                <td class="agency-color">
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
                    class="custom-link text-color"
                  >
                    <div class="hover agency-color">{{ agency.Agency }}</div>
                  </router-link>

                  <hr class="hr" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-9 pt-3">
      <div class="col-12">
        <p class="AgencyTitle">{{ cleanQueryParam("agencyName") }}</p>
        <hr class="hr" />
      </div>

      <!-- 1ST COLUMN -->
      <div class="col-4 columns">
        <div class="col-12">
          <p class="agencyHeader">Former Name</p>
          <p
            v-if="
              cleanQueryParam('formerName') &&
              cleanQueryParam('formerName') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("formerName") }}
          </p>
          <p v-else class="agencyContent">No Data</p>
        </div>
        <div class="col-12">
          <div class="col-4">
            <p class="agencyHeader">Sector</p>
            <p
              v-if="
                cleanQueryParam('sector') &&
                cleanQueryParam('sector') !== 'null'
              "
              class="agencyContent"
            >
              {{ cleanQueryParam("sector") }}
            </p>
            <p v-else class="agencyContent">No Data</p>
          </div>
          <div class="col-4">
            <p class="agencyHeader">Cluster</p>
            <p
              v-if="
                cleanQueryParam('cluster') &&
                cleanQueryParam('cluster') !== 'null'
              "
              class="agencyContent"
            >
              {{ cleanQueryParam("cluster") }}
            </p>
            <p v-else class="agencyContent">No Data</p>
          </div>
          <div class="col-4">
            <p class="agencyHeader">Type</p>
            <p
              v-if="
                cleanQueryParam('type') && cleanQueryParam('type') !== 'null'
              "
              class="agencyContent"
            >
              {{ cleanQueryParam("type") }}
            </p>
            <p v-else class="agencyContent">No Data</p>
          </div>
        </div>

        <div class="col-12">
          <hr class="hr" />
          <p class="agencyHead">CONTACT INFORMATION</p>

          <p class="agencyHeader">Address</p>
          <p
            v-if="
              cleanQueryParam('address') &&
              cleanQueryParam('address') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("address") }}
          </p>
          <p v-else class="agencyContent">No Data</p>

          <p class="agencyHeader">Contact Number</p>
          <p
            v-if="
              cleanQueryParam('contactNumber') &&
              cleanQueryParam('contactNumber') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("contactNumber") }}
          </p>
          <p v-else class="agencyContent">No Data</p>

          <p class="agencyHeader">Email</p>
          <p
            v-if="
              cleanQueryParam('email') && cleanQueryParam('email') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("email") }}
          </p>
          <p v-else class="agencyContent">No Data</p>

          <p class="agencyHeader">Website</p>
          <p
            v-if="
              cleanQueryParam('website') &&
              cleanQueryParam('website') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("website") }}
          </p>
          <p v-else class="agencyContent">No Data</p>

          <hr class="hr" />

          <p class="agencyHead">CONTACT PERSON</p>

          <p class="agencyHeader">Name</p>
          <p
            v-if="
              cleanQueryParam('contactPerson') &&
              cleanQueryParam('contactPerson') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("contactPerson") }}
          </p>
          <p v-else class="agencyContent">No Data</p>

          <p class="agencyHeader">Position</p>
          <p
            v-if="
              cleanQueryParam('position') &&
              cleanQueryParam('position') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("position") }}
          </p>
          <p v-else class="agencyContent">No Data</p>

          <p class="agencyHeader">Contact Number</p>
          <p
            v-if="
              cleanQueryParam('mobileNumber') &&
              cleanQueryParam('mobileNumber') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("mobileNumber") }}
          </p>
          <p v-else class="agencyContent">No Data</p>
        </div>
      </div>
      <!-- 2ND COLUMN -->
      <div class="col-8 columns">
        <div class="col-12">
          <div class="col-6">
            <p class="agencyHeader">Registration Status</p>
            <p
              style="color: red"
              v-if="cleanQueryParam('registrationStatus') === 'Expired'"
              class="agencyContent"
            >
              {{ cleanQueryParam("registrationStatus") }}
            </p>
            <p
              style="color: green"
              v-else-if="
                cleanQueryParam('registrationStatus') === 'Active/Valid'
              "
              class="agencyContent"
            >
              {{ cleanQueryParam("registrationStatus") }}
            </p>
            <p v-else class="agencyContent">No Data</p>

            <p class="agencyHeader">Accreditation Status</p>

            <p
              style="color: red"
              v-if="cleanQueryParam('accreditationStatus') === 'Expired'"
              class="agencyContent"
            >
              {{ cleanQueryParam("accreditationStatus") }}
            </p>
            <p
              style="color: green"
              v-else-if="
                cleanQueryParam('accreditationStatus') === 'Active/Valid'
              "
              class="agencyContent"
            >
              {{ cleanQueryParam("accreditationStatus") }}
            </p>
            <p v-else class="agencyContent">No Data</p>
          </div>
          <div class="col-6">
            <p class="agencyHeader">License Status</p>

            <p
              style="color: red"
              v-if="cleanQueryParam('licenseStatus') === 'Expired'"
              class="agencyContent"
            >
              {{ cleanQueryParam("licenseStatus") }}
            </p>
            <p
              style="color: green"
              v-else-if="cleanQueryParam('licenseStatus') === 'Active/Valid'"
              class="agencyContent"
            >
              {{ cleanQueryParam("licenseStatus") }}
            </p>
            <p v-else class="agencyContent">No Data</p>
          </div>
        </div>
        <div class="col-12">
          <hr class="hr" />
          <p class="agencyHead">PROGRAMS AND SERVICES</p>
          <p class="agencyHeader">Services Offered</p>
          <p
            v-if="
              cleanQueryParam('servicesOffered') &&
              cleanQueryParam('servicesOffered') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("servicesOffered") }}
          </p>
          <p v-else class="agencyContent">No Data</p>
        </div>
        <div class="col-12">
          <div class="col-6">
            <p class="agencyHeader">Clientele</p>
            <p
              v-if="
                cleanQueryParam('clientele') &&
                cleanQueryParam('clientele') !== 'null'
              "
              class="agencyContent"
            >
              {{ cleanQueryParam("clientele") }}
            </p>
            <p v-else class="agencyContent">No Data</p>
          </div>
          <div class="col-6">
            <p class="agencyHeader">Mode of Delivery</p>
            <p
              v-if="
                cleanQueryParam('modeOfDelivery') &&
                cleanQueryParam('modeOfDelivery') !== 'null'
              "
              class="agencyContent"
            >
              {{ cleanQueryParam("modeOfDelivery") }}
            </p>
            <p v-else class="agencyContent">No Data</p>
          </div>
        </div>
        <div class="col-12">
          <p class="agencyHeader">Specified Areas of Operation</p>
          <p
            v-if="
              cleanQueryParam('specifiedAreasOfOperation') &&
              cleanQueryParam('specifiedAreasOfOperation') !== 'null'
            "
            class="agencyContent"
          >
            {{ cleanQueryParam("specifiedAreasOfOperation") }}
          </p>
          <p v-else class="agencyContent">No Data</p>
        </div>
        <div class="col-12">
          <hr class="hr" />
          <p class="agencyHead">STATUS</p>
          <div class="col-12">
            <div class="col-3">
              <p class="agencyHeader">Registration ID</p>
              <p
                v-if="
                  cleanQueryParam('registrationID') &&
                  cleanQueryParam('registrationID') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("registrationID") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Date Issued</p>
              <p
                v-if="
                  cleanQueryParam('registrationDate') &&
                  cleanQueryParam('registrationDate') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("registrationDate") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Expiration Date</p>
              <p
                v-if="
                  cleanQueryParam('registrationExpiration') &&
                  cleanQueryParam('registrationExpiration') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("registrationExpiration") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Remarks</p>
              <p
                v-if="
                  cleanQueryParam('remarks') &&
                  cleanQueryParam('remarks') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("remarks") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <div class="col-3">
              <p class="agencyHeader">License ID</p>
              <p
                v-if="
                  cleanQueryParam('licensedID') &&
                  cleanQueryParam('licensedID') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("licensedID") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Date Issued</p>
              <p
                v-if="
                  cleanQueryParam('licenseDateIssued') &&
                  cleanQueryParam('licenseDateIssued') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("licenseDateIssued") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Expiration Date</p>
              <p
                v-if="
                  cleanQueryParam('licenseExpiration') &&
                  cleanQueryParam('licenseExpiration') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("licenseExpiration") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Overdue</p>
              <p
                v-if="
                  cleanQueryParam('licensureOverdue') &&
                  cleanQueryParam('licensureOverdue') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("licensureOverdue") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
          </div>
          <div class="col-12">
            <div class="col-3">
              <p class="agencyHeader">Accreditation ID</p>
              <p
                v-if="
                  cleanQueryParam('accreditationID') &&
                  cleanQueryParam('accreditationID') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("accreditationID") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Date Issued</p>
              <p
                v-if="
                  cleanQueryParam('accreditationDateIssued') &&
                  cleanQueryParam('accreditationDateIssued') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("accreditationDateIssued") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Expiration Date</p>
              <p
                v-if="
                  cleanQueryParam('accreditationExpiration') &&
                  cleanQueryParam('accreditationExpiration') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("accreditationExpiration") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
            <div class="col-3">
              <p class="agencyHeader">Overdue</p>
              <p
                v-if="
                  cleanQueryParam('accreditationOverdue') &&
                  cleanQueryParam('accreditationOverdue') !== 'null'
                "
                class="agencyContent"
              >
                {{ cleanQueryParam("accreditationOverdue") }}
              </p>
              <p v-else class="agencyContent">No Data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer";
import BarChart from "@/components/ChartJS/Barchart";
import DoughnutChart from "@/components/ChartJS/DoughnutChart";
import HBarchart from "@/components/ChartJS/HBarchart";

export default {
  name: "SWDA_AGENCIES",
  components: {
    Sidebar,
    Footer,
    BarChart,
    DoughnutChart,
    HBarchart,
  },
  data() {
    return {
      PageTitle:
        "List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies (SWDA)", // The title displayed on the page, which is "SWDA"
      PageDetail: "Agency Details", // The subtitle displayed on the page, which is "SWDA"

      customLegendOptions: {
        position: "right", // Set the legend position as needed
      },

      agencies: [], // An array to store agency data fetched from the API
      searchQuery: "", // A variable to hold the search query entered by the user for filtering agencies
    };
  },
  methods: {
    debugRegistrationStatus() {
      console.log(this.$route.query.registrationStatus);
    },
    cleanQueryParam(paramName) {
      if (this.$route.query[paramName]) {
        return this.$route.query[paramName].replace(/\"/g, "");
      }
      return null;
    },
  },
  created() {
    this.debugRegistrationStatus();
    console.log(this.$route.query);
    // Fetch data and populate the agencies array
    axios

      .get(`${backendURL}/api/agenciesName`)
      .then((response) => {
        this.agencies = response.data["Swda Agencies"];
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
    cleanedRegistrationStatus() {
      return this.$route.query.registrationStatus.replace(/\"/g, "");
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  height: 70vh;
}

.custom-link {
  text-decoration: none;
}

.agenciesNames {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 67em;
  /* border-radius: 20px; */
  margin: 5px 5px 5px 5px;
  padding: 10px 0px 130px 0px;

  /* Media queries for different screen widths */
  @media only screen and (min-width: 500px) {
    height: 120vh;
  }

  @media only screen and (min-width: 1240px) {
    height: 100vh;
  }

  @media only screen and (min-width: 1540px) {
    height: 80vh;
  }
}

.agencyfilter table tbody tr td .hover:hover {
  background-color: #294d9c;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  padding: 0px 0 0px 10px;
}

.agencyfilter {
  font-size: 14px;
  height: 68vh;
  width: 90%;
  overflow: auto;
  margin: 20px;
  text-align: start;

  /* Media queries for different screen widths */
  @media only screen and (min-width: 1240px) {
    height: 80vh;
  }

  @media only screen and (min-width: 1540px) {
    height: 68vh;
  }
}

/* Styling the scrollbar in WebKit (Chrome, Safari) */
.agencyfilter::-webkit-scrollbar {
  width: 0px;
}

.agencyfilter::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 2px;
}

.agencyfilter::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.agency-color {
  color: black;
  font-family: Arial;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}

.columns {
  padding: 0px 20px 0px 20px;
}

.AgencyTitle {
  font-family: Arial;
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
}

.agencyHeader {
  font-family: Arial;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

/* Multiple email */

.agencyHead {
  font-family: Arial;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyContent {
  font-family: Arial;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  clip-path: content-box;
}
</style>
