<template>
  <Sidebar :iconText="PageTitle" :iconDetails="PageDetail" />
  <br /><br /><br /><br />
  <div class="wrapper container-fluid">
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
      <!-- ACTIVE AGENCIES -->
      <div class="agencies col-12 col-lg-6 col-xl-3">
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

      <!-- EXPIRED AGENCIES -->
      <div class="agencies col-12 col-lg-6 col-xl-4">
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

      <!-- MODE OF DELIVERY -->
      <div class="agencies col-12 col-lg-12 col-xl-5">
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

      <!-- NUMBER OF AGENCIES -->
      <div class="agencies col-12 col-md-12">
        <div class="agencyNumbers">
          <h4 class="headerAgencies">NUMBER OF AGENCIES</h4>
          <br />

          <p class="col-12">
            <span id="numberAgencies" class="numberAgencies"
              >{{ agencies.length }}
            </span>
          </p>
        </div>
      </div>

      <div class="col-12">
        <div class="Clusters">
          <div class="col-12">
            <p
              style="
                font-family: Arial;
                font-size: 24px;
                font-weight: 700;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: center;
                padding: 10px 0px 15px 0px;
              "
            >
              CLUSTERS
            </p>
          </div>
          <div class="col-12 col-md-2 clusterdiv">
            <div class="color text-white" style="background-color: #ff6961">
              <p class="clusterText">Cluster 1</p>
              <div class="hover-text" style="background-color: #ff6961">
                {{ cluster1Length }}
              </div>
            </div>
          </div>
          <div class="col-12 col-md-2 clusterdiv">
            <div class="color text-white" style="background-color: #ff9688">
              <p class="clusterText">Unclustered</p>
              <div class="hover-text" style="background-color: #ff9688">
                {{ unclusteredLength }}
              </div>
            </div>
          </div>
          <div class="col-12 col-md-2 clusterdiv">
            <div class="color text-white" style="background-color: #eeca06">
              <p class="clusterText">Cluster 2</p>
              <div class="hover-text" style="background-color: #eeca06">
                {{ cluster2Length }}
              </div>
            </div>
          </div>
          <div class="col-12 col-md-2 clusterdiv">
            <div class="color text-white" style="background-color: #fae860">
              <p class="clusterText">North Cluster</p>
              <div class="hover-text" style="background-color: #fae860">
                {{ northClusterLength }}
              </div>
            </div>
          </div>

          <div class="col-12 col-md-2 clusterdiv">
            <div class="color text-white" style="background-color: #6a9eda">
              <p class="clusterText">South Cluster</p>
              <div class="hover-text" style="background-color: #6a9eda">
                {{ southClusterLength }}
              </div>
            </div>
          </div>

          <div class="col-12 col-md-2 clusterdiv">
            <div class="color text-white" style="background-color: #b2dafa">
              <p class="clusterText">Senior Citizens Cluster</p>
              <div class="hover-text" style="background-color: #b2dafa">
                {{ seniorLength }}
              </div>
            </div>
          </div>

          <!-- <div class="col-12 col-md-2 clusterdiv2">
            <div
              class="col-12 clusterdiv clusterdiv3 text-white"
              style="background-color: #6A9EDA"
            >
              <p class="clusterText">South Cluster</p>
              <div class="hover-text2" style="background-color: #6A9EDA">
                {{ southClusterLength }}
              </div>
            </div>
            <div
              class="col-12 clusterdiv clusterdiv3 text-white"
              style="background-color: #B2DAFA"
            >
              <p class="clusterText">Senior Citizens Cluster</p>
              <div class="hover-text2" style="background-color: #B2DAFA">
                {{ seniorLength }}
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="Sectors">
          <p
            style="
              font-family: Arial;
              font-size: 24px;
              font-weight: 700;
              line-height: 21px;
              letter-spacing: 0em;
              text-align: center;
              padding: 10px 0px 0px 0px;
            "
          >
            SECTORS
          </p>
          <DoughnutChart
            v-if="SectorData"
            :data="SectorData"
            :legendOptions="customLegendOptions"
          />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="Client">
          <p
            style="
              font-family: Arial;
              font-size: 24px;
              font-weight: 700;
              line-height: 21px;
              letter-spacing: 0em;
              text-align: center;
              padding: 10px 0px 0px 0px;
            "
          >
            CLIENT
          </p>
          <DoughnutChart
            v-if="ClientData"
            :data="ClientData"
            :legendOptions="customLegendOptions"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="Regional">
          <p
            style="
              font-family: Arial;
              font-size: 24px;
              font-weight: 700;
              line-height: 21px;
              letter-spacing: 0em;
              text-align: center;
              padding: 10px 0px 0px 0px;
            "
          >
            REGIONAL OPERATION
          </p>

          <div class="regionalBarChart">
            <HBarchart
              v-if="RegionData"
              :data="RegionData"
              :aspectRatio="60 / 10"
            />
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
  name: "SWDA",
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
        "List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies (SWDA)      ", // The title displayed on the page, which is "SWDA"
      PageDetail: "Main Dashboard", // The subtitle displayed on the page, which is "SWDA"

      customLegendOptions: {
        position: "right", // Set the legend position as needed
      },

      agencies: [], // An array to store agency data fetched from the API
      searchQuery: "", // A variable to hold the search query entered by the user for filtering agencies

      ClusterData: null, // Initialize Chart Data as null
      RegionData: null, // Initialize Chart Data as null
      ClienteleData: null,
      SectorData: null,
      ClientData: null,

      // Cluster Lengths
      southClusterLength: 0, // Number of agencies in the South Cluster
      cluster1Length: 0, // Number of agencies in Cluster 1
      northClusterLength: 0, // Number of agencies in the North Cluster
      unclusteredLength: 0, // Number of unclustered agencies
      cluster2Length: 0, // Number of agencies in Cluster 2
      seniorLength: 0, // Number of agencies in the Senior Citizens Cluster

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
    ClusterFetchData() {
      return axios
        .get(`${backendURL}/api/cluster`)
        .then((response) => {
          // Initialize data arrays
          const southCluster = [];
          const cluster1 = [];
          const northCluster = [];
          const unclustered = [];
          const cluster2 = [];
          const senior = [];

          response.data.forEach((item) => {
            const clusterName = item.Cluster;

            switch (clusterName) {
              case "South Cluster":
                southCluster.push(item);
                break;
              case "Cluster 1":
                cluster1.push(item);
                break;
              case "North Cluster":
                northCluster.push(item);
                break;
              case "Unclustered":
                unclustered.push(item);
                break;
              case "Cluster 2":
                cluster2.push(item);
                break;
              case "Senior Citizens Center":
                senior.push(item);
                break;
              default:
                // Handle other cases if necessary
                break;
            }
          });

          // Calculate data lengths
          const southClusterLength = southCluster.length;
          const cluster1Length = cluster1.length;
          const northClusterLength = northCluster.length;
          const unclusteredLength = unclustered.length;
          const cluster2Length = cluster2.length;
          const seniorLength = senior.length;

          // Create and set component properties to make them accessible in template literals
          this.southClusterLength = southClusterLength;
          this.cluster1Length = cluster1Length;
          this.northClusterLength = northClusterLength;
          this.unclusteredLength = unclusteredLength;
          this.cluster2Length = cluster2Length;
          this.seniorLength = seniorLength;

          // Prepare and return data
          const clusterdata = {
            labels: [
              "Unclustered",
              "Cluster 1",
              "North Cluster",
              "South Cluster",
              "Senior Citizen",
              "Cluster 2",
            ],
            label: ["Cluster"],
            values: [
              unclusteredLength,
              cluster1Length,
              northClusterLength,
              southClusterLength,
              seniorLength,
              cluster2Length,
            ],
            backgroundColor: [
              "rgba(255, 150, 136, 1)",
              "rgba(255, 105, 97, 1)",
              "rgba(248, 228, 75, 1)",
              "rgba(106, 158, 218, 1)",
              "rgba(178, 218, 250, 1)",
              "rgba(238, 202, 6, 1)",
            ],
          };
          // Set barChartData to the computed data
          this.ClusterData = clusterdata;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);

          // Prepare and return data if in case there is an api catch error
          const clusterdata = {
            labels: [
              "Unclustered",
              "Cluster 1",
              "North Cluster",
              "South Cluster",
              "Senior Citizen",
              "Cluster 2",
            ],
            label: ["Cluster"],
            values: [1, 1, 1, 1, 1, 1],
            backgroundColor: [
              "rgba(255, 150, 136, 1)",
              "rgba(255, 105, 97, 1)",
              "rgba(248, 228, 75, 1)",
              "rgba(106, 158, 218, 1)",
              "rgba(178, 218, 250, 1)",
              "rgba(238, 202, 6, 1)",
            ],
          };
          // Set catcc error barChartData to the computed data
          this.ClusterData = clusterdata;
        });
    },
    // *ALREADY FUNCTIONAL
    RegionFetchData() {
      return axios
        .get(`${backendURL}/api/regionaloperation`)
        .then((response) => {
          // Initialize data dictionary
          const dataDict = {};

          response.data.forEach((item) => {
            const regionName = item.Regional_Operation || "Others";

            // If the region name is not in the dictionary, add it with a count of 1
            // Otherwise, increment the count
            if (!(regionName in dataDict)) {
              dataDict[regionName] = 1;
            } else {
              dataDict[regionName]++;
            }
          });

          // Prepare and return data
          const regiondata = {
            labels: Object.keys(dataDict),
            label: ["Regional Operation"],
            values: Object.values(dataDict),
            backgroundColor: ["rgba(19, 63, 92, 1)"],
          };

          // Set barChartData to the computed data
          this.RegionData = regiondata;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);

          // Prepare and return data if in case there is an api catch error
          const regiondata = {
            labels: [
              "Davao City",
              "Davao del Sur",
              "Davao del Norte",
              "Others",
              "Region XI",
              "Davao Oriental",
              "Davao de Oro",
            ],
            label: ["Regional Operation"],
            values: [1, 1, 1, 1, 1, 1, 1],
            backgroundColor: ["rgba(19, 63, 92, 1)"],
          };

          // Set catch error barChartData to the computed data
          this.RegionData = regiondata;
        });
    },
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
    // *ALREADY FUNCTIONAL
    SectorFetchData() {
      return axios
        .get(`${backendURL}/api/sector`)
        .then((response) => {
          // Initialize dictionary for sectors
          const sectors = {};

          response.data.forEach((item) => {
            const sector = item.Sector;
            if (!(sector in sectors)) {
              sectors[sector] = 0;
            }
            sectors[sector]++;
          });

          // Prepare and return data
          const sectordata = {
            labels: Object.keys(sectors),
            label: ["Regional Operation"],
            values: Object.values(sectors),
            backgroundColor: [
              "rgba(178, 218, 250, 1)",
              "rgba(132, 182, 244, 1)",
              "rgba(106, 158, 218, 1)",
              "rgba(80, 134, 193, 1)",
              "rgba(255, 150, 136, 1)",
              "rgba(255, 105, 97, 1)",
              "rgba(226, 80, 76, 1)",
              "rgba(248, 228, 75, 1)",
              "rgba(238, 202, 6, 1)",
              "rgba(210, 178, 2, 1)",
              "rgba(183, 154, 0, 1)",
            ],
          };
          // Set barChartData to the computed data
          this.SectorData = sectordata;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);

          // Prepare and return data
          const sectordata = {
            labels: [
              "Children",
              "Children and Youth",
              "Families and Communities",
              "Youth",
              "Elderly",
              "Persons with Disability",
              "Women",
              "Special Group",
              "Women and Children",
              "Indigenous Peoples",
              "Drug Dependents",
            ],
            label: ["Regional Operation"],
            values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
              "rgba(19, 63, 92, 1)",
              "rgba(255, 0, 0, 1)", // Red
              "rgba(0, 255, 0, 1)", // Green
              "rgba(0, 0, 255, 1)", // Blue
              "rgba(255, 255, 0, 1)", // Yellow
              "rgba(255, 0, 255, 1)", // Magenta
              "rgba(0, 255, 255, 1)", // Cyan
              "rgba(128, 128, 128, 1)", // Gray
              "rgba(255, 165, 0, 1)", // Orange
              "rgba(0, 128, 0, 1)", // Dark Green],
            ],
          };
          // Set barChartData to the computed data
          this.SectorData = sectordata;
        });
    },

    // ! NEED FIXING BEFORE DEPLOYING
    ClienteleFetchData() {
      return axios
        .get(`${backendURL}/api/clientele`)
        .then((response) => {
          // Initialize arrays for active and expired agencies
          const childrenclientele = [];
          const familiesAndCommunitiesclientele = [];
          const childrenAndYouthclientele = [];
          const childrenYouthFamiliesCommunities = [];
          const SeniorCitizensclientele = [];
          const personsWithDisabilityclientele = [];
          const indigenousPeoplesclientele = [];
          const womenclientele = [];
          const others = [];

          response.data.forEach((item) => {
            const client = item.Clientele;

            switch (client) {
              case "Children":
                childrenclientele.push(item);
                break;
              case "Children (0-6 years old Abandoned, orphaned, surrendered or temporary sheltered)":
                childrenclientele.push(item);
                break;
              case "Children and Youth":
              case "Children (3-7 years old abandoned, neglected, orphaned) Youth":
              case "Children (Male abandoned and neglected)":
              case "Children (0-12 years old abandoned, neglected, foundling)":
              case "Children (Children In Need of Special Protection/ CNSP)":
              case "Children (Abandoned, neglected, dependent, orphaned)":
              case "Children (Critical and Chronically-ill patients both cancer and non-cancer)":
              case "Children (Abandoned, Indigent, In-difficult situation)":
              case "Children (0-5 years old dependent, neglected, foundling, abandoned, orphaned)":
              case "Children (Street, Girls), Parents, Families, Communities":
              case "Children diagnosed with cancer (0-18 y/old)":
              case "Children (0-8 years old abandoned, orphaned, neglected)":
              case "Children and Youth (Poor, Indigent, Neglected)":
                childrenAndYouthclientele.push(item);
                break;
              case "Children (Disadvantaged) Youth (Out-of-School/OSY) Families and Communities":
              case "Children (With Special Needs)":
              case "Children (Street, Neglected)":
              case "Children (4-13 years old) Families and Communities":
              case "Children and Youth (Children In Need of Special Protection/CNSP)":
              case "Children and Youth (Disadvantaged) (Out-of-School-Youth/OSY) Communities":
                childrenYouthFamiliesCommunities.push(item);
                break;
              case "Families and Communities":
              case "Families (Disadvantaged/displaced)":
              case "Poor, vulnerable, marginalized, disadvantaged Children, Individuals, Families, and Communities":
              case "Disadvantaged and marginalized Children, Youth, Indigenous Peoples, Families, and Communities":
              case "Marginalized, Disadvantaged Individuals, Families and communities, Children, Youth Women, Victims-survivors of natural and human-induced calamities/disasters":
                familiesAndCommunitiesclientele.push(item);
                break;
              case "Senior Citizens":
                SeniorCitizensclientele.push(item);
                break;
              case "Persons with Disability":
                personsWithDisabilityclientele.push(item);
                break;
              case "Indigenous Peoples":
                indigenousPeoplesclientele.push(item);
                break;
              case "Women":
              case "Women and Children":
                womenclientele.push(item);
                break;
              case "Day Care Workers":
              case "Drug Dependents":
              case "Filipino seafarers, disadvantaged children, youth, families and communities":
              case "N/A":
                others.push(item);
                break;
              default:
                others.push(item);
                break;
            }
          });

          // Calculate data lengths
          const childrenclienteleLength = childrenclientele.length;
          const familiesAndCommunitiesclienteleLength =
            familiesAndCommunitiesclientele.length;
          const childrenAndYouthclienteleLength =
            childrenAndYouthclientele.length;
          const childrenYouthFamiliesCommunitiesLength =
            childrenYouthFamiliesCommunities.length;
          const SeniorCitizensclienteleLength = SeniorCitizensclientele.length;
          const personsWithDisabilityclienteleLength =
            personsWithDisabilityclientele.length;
          const indigenousPeoplesclienteleGroupLength =
            indigenousPeoplesclientele.length;
          const womenclienteleLength = womenclientele.length;
          const othersLength = others.length;

          console.log("TEST START");
          console.log(childrenclienteleLength);
          console.log(familiesAndCommunitiesclienteleLength);
          console.log(childrenAndYouthclienteleLength);
          console.log(childrenYouthFamiliesCommunitiesLength);
          console.log(SeniorCitizensclienteleLength);
          console.log(personsWithDisabilityclienteleLength);
          console.log(indigenousPeoplesclienteleGroupLength);
          console.log(womenclienteleLength);
          console.log(othersLength);
          console.log("TEST END");

          // Prepare and return data
          const clientdata = {
            labels: [
              "Children",
              "Families and Communities",
              "Children and Youth",
              "Children Youth and Families",
              "Senior Citizens",
              "Persons With Disability",
              "Indigenous Peoples",
              "Women",
              "Others",
            ],
            label: ["Clientele"],
            values: [
              childrenclienteleLength,
              familiesAndCommunitiesclienteleLength,
              childrenAndYouthclienteleLength,
              childrenYouthFamiliesCommunitiesLength,
              SeniorCitizensclienteleLength,
              personsWithDisabilityclienteleLength,
              indigenousPeoplesclienteleGroupLength,
              womenclienteleLength,
              othersLength,
            ],
            backgroundColor: [
              "rgba(210, 178, 2, 1)",
              "rgba(238, 202, 6, 1)",
              "rgba(248, 228, 75, 1)",
              "rgba(226, 80, 76, 1)",
              "rgba(255, 105, 97, 1)",
              "rgba(255, 150, 136, 1)",
              "rgba(106, 158, 218, 1)",
              "rgba(132, 182, 244, 1)",
              "rgba(178, 218, 250, 1)",
              "rgba(221, 255, 255, 1)",
            ],
          };
          // Set barChartData to the computed data
          this.ClientData = clientdata;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);

          // Prepare and return data
          const clientdata = {
            labels: [
              "Children",
              "Families and Communities",
              "Children and Youth",
              "Children Youth and Families",
              "Senior Citizens",
              "Persons With Disability",
              "Indigenous Peoples",
              "Women",
              "Others",
            ],
            label: ["Clientele"],
            values: [1, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
              "rgba(210, 178, 2, 1)",
              "rgba(238, 202, 6, 1)",
              "rgba(248, 228, 75, 1)",
              "rgba(226, 80, 76, 1)",
              "rgba(255, 105, 97, 1)",
              "rgba(255, 150, 136, 1)",
              "rgba(106, 158, 218, 1)",
              "rgba(132, 182, 244, 1)",
              "rgba(178, 218, 250, 1)",
              "rgba(221, 255, 255, 1)",
            ],
          };
          // Set barChartData to the computed data
          this.ClientData = clientdata;
        });
    },
  },
  mounted() {
    // Automatically fetch data when the component is mounted
    this.ClusterFetchData();
    this.RegionFetchData();
    this.AgencyFetchData();
    this.SectorFetchData();

    // ! NEED FIXINGS BEFORE DEPLOYING
    this.ClienteleFetchData();
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
  color: black;
}
.filters {
  box-shadow: 0px 0px 8px 1px #00000026;

  height: 18em;
  /* border-radius: 20px; */
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
}

.agencyNumbers {
  box-shadow: 0px 0px 8px 1px #00000026;

  height: 1em;
  border-radius: 5px;
  margin: 5px 5px 5px 5px;
  padding: 30px 0px 130px 0px;
}

.agenciesNames {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);

  height: 77em;
  border-radius: 5px;
  margin: 5px 5px 5px 5px;
  padding: 10px 0px 10px 0px;
}

.agencyfilter table tbody tr td .hover:hover {
  background-color: #294d9c;
  color: white; /* Change text color to white on hover */
  cursor: pointer; /* Change cursor to a pointer on hover (optional) */
  /* border-radius: 5px; */
  padding: 0px 0px 0px 10px;
}
.agencyfilter {
  font-size: 14px;
  height: 77em;
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
  margin-left: 20px;
  /* border-radius: 4px;  */
}

.agencyfilter::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Color of the scrollbar track */
}

.clusterdiv {
  height: 70%;
}
.color {
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  margin: auto;
  border-radius: 3px;
}
.clusterdiv2 {
  height: 70%;
  padding: 0px 10px 0px 5px;
}
.clusterdiv3 {
  height: 48%;
  margin: 0px 5px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shadow-agencies {
  box-shadow: 0px 0px 8px 1px #00000026;

  height: 150px;
  border-radius: 5px;
  margin: 5px 5px 5px 5px;
  padding: 30px 0px 130px 0px;
}

.shadow {
  box-shadow: 0px 0px 8px 1px #00000026;

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
.Clusters,
.Sectors,
.Client,
.Regional {
  box-shadow: 0px 0px 8px 1px #00000026;

  height: 15em;
  border-radius: 5px;
  margin: 5px 5px 5px 5px;
  padding: 10px 10px 10px 10px;
}

.Sectors,
.Client {
  height: 22em;
  padding-bottom: 62px;
}
.Regional {
  height: 17em;
}
.clusterdiv {
  position: relative; /* Necessary for positioning the text */
}
.hover-text {
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the text within its parent */
  color: black;
  padding: 10px 15px;
  border-radius: 5px;
  visibility: visible;
  opacity: 0; /* Initially transparent */
  transition: visibility 0s, opacity 0.3s ease; /* Transition effect */
  font-size: 80px;
  width: 90%;
}
.clusterdiv:hover .hover-text {
  visibility: visible; /* Show the text on hover */
  opacity: 1; /* Fully visible on hover */
}
.hover-text2 {
  position: absolute;
  top: 55%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the text within its parent */
  color: black;
  padding: 10px 15px;
  /* border-radius: 5px; */
  visibility: visible;
  opacity: 0; /* Initially transparent */
  transition: visibility 0s, opacity 0.3s ease; /* Transition effect */
  font-size: 20px;
  width: 95%;
  height: 80%;
}
.clusterdiv:hover .hover-text2 {
  visibility: visible; /* Show the text on hover */
  opacity: 1; /* Fully visible on hover */
}

.sidepart {
  font-family: Arial;
  font-weight: 600;
  line-height: 20.57px;
  font-size: 27px;
  padding-top: 20px;
}

.sidepartValue {
  font-family: Arial;
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
  font-family: Arial;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
}

.clusterText {
  font-family: Arial;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: black;
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

.regionalBarChart {
  padding-bottom: 40px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 50px;
}
</style>
