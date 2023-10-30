<template>
    <Sidebar :iconText="PageTitle" />
    <br><br><br><br>
    <div class=wrapper container-fluid>
        <div class="col-12 col-md-3">
          <div class="agenciesNames" style="background-color: #292D96;">
            <input style="border-radius: 10px; width: 90%; height: 3em; text-align: center;" type="text" v-model="searchQuery" placeholder="Search for agency names">
          <div class="agencyfilter">          
              <table>
                  <tbody>
                      <tr v-for="agency in filteredAgencies" :key="agency.Agency">
                          <td class="text-white">
                            <router-link to="/swda_agency" class="custom-link text-white">
                                        <div class="hover"> {{ agency.Agency }} </div>
                                    </router-link>
                            <hr class="hr" />
                          </td>    
                      </tr>               
                  </tbody>
              </table>
          </div>
        </div>

      
          <p style="color: rgba(41, 45, 150, 1); font-weight: 800; font-size: 17px; line-height: 20.57px;">FOR RENEWAL</p>

        <div class="filters">
          <p class="sidepart">LICENCE</p> <br>
           <h3 class="sidepartValue">00</h3>
           <p>DAYS</p>
           <p>BEFORE EXPIRATION</p>
        </div>
        <div class="filters">
          <p class="sidepart" >ACCREDITATION</p><br>
          <h3 class="sidepartValue">00</h3>
           <p>DAYS</p>
           <p>BEFORE EXPIRATION</p>
        </div>

        </div>

        <div class="col-12 col-md-9">
                <div class="agencies col-12 col-md-6 col-lg-3">
                  <div class="shadow">
                    <h4>ACTIVE AGENCIES</h4>
                   <p class="col-4">
                    Registered 
                   </p>
                   <p class="col-4">
                    Licensed 
                   </p>
                   <p class="col-4">
                    Accredited
                   </p>
                   <div class="col-4">
                    <span id="active-registered" class="active-agencies">
                      {{ activeRegisteredCount }}
                    </span>
                   </div>
                   <div class="col-4">
                    <span id="active-licensed" class="active-agencies">
                      {{ activeLicensedCount }}
                    </span>
                  </div>
                  <div class="col-4">
                    <span id="active-accredited" class="active-agencies">
                      {{ activeAccreditedCount }}
                    </span>
                  </div>

                  </div> 
                </div>
            
                <div class="agencies col-12 col-md-6 col-lg-4">
                  <div class="shadow">
                    <h4>EXPIRED AGENCIES</h4>
                    <p class="col-3">
                    Registered 
                   </p>
                   <p class="col-3">
                    Licensed
                   </p>
                   <p class="col-3">
                    Accreditation     
                   </p>
                   <p class="col-3">
                    Delisted   
                   </p>

                   <div class="col-3">
                    <span id="expired-registered" class="expired-agencies">
                      {{ expiredRegisteredCount }}
                    </span>
                   </div>
                   <div class="col-3">
                    <span id="expired-licensed" class="expired-agencies">
                      {{ expiredLicensedCount }}
                    </span>
                    </div>
                    <div class="col-3">
                      <span id="expired-accreditation" class="expired-agencies">
                      {{ expiredAccreditedCount }}
                    </span>
                    </div>
                    <div class="col-3">
                      <span id="expired-accreditation" class="expired-agencies">
                      {{ expiredDelistedCount }}
                    </span>
                    </div>
                  </div>
                </div>

                <div class="agencies col-12 col-md-6 col-lg-4"> 
                  <div class="shadow">
                    <h4>MODE OF DELIVERY </h4>
                    <p class="col-3">
                    Community        
                   </p>
                   <p class="col-3">
                    Auxillary SWDA    
                   </p>
                   <p class="col-3">
                    Residential
                   </p>
                   <p class="col-3">
                    Non-Residential    
                   </p>

                   <div class="col-3">
                    <span id="community-based" class="modeDelivery">
                      {{ communityBasedCount }}
                    </span>
                   </div>
                   <div class="col-3">
                    <span id="auxillary" class="modeDelivery">
                      {{ auxillarySWDACount }}
                    </span>
                  </div>
                  <div class="col-3">
                    <span id="residential" class="modeDelivery">
                      {{ residentialCount }}
                    </span>
                  </div>
                  <div class="col-3">
                    <span id="non-residential" class="modeDelivery">
                      {{ nonResidentialCount }}
                    </span>
                  </div>
                  </div>
                </div>

                <div class="agencies col-12 col-md-6 col-lg-1">
                  <div class="shadow">
                    <h5>Number of Agencies</h5> <br>

                   <p class="col-12">
                    <span id="numberAgencies" class="numberAgencies">22</span>
                   </p>
                  </div>
                </div>
                  
                <div class="col-12">
                        <div class="Clusters"> 
                          <div class="col-12" >
                            <p style="font-family: Inter;font-size: 24px;font-weight: 700;line-height: 21px;letter-spacing: 0em;text-align: center;
                        padding: 4px 0px 0px 24px;">CLUSTERS</p>
                          </div>
                          <div class="col-12 col-md-3 clusterdiv">
                            <div class="color text-white" style="background-color: #133F5C;">
                              <p>CLUSTER 1</p>
                              <div class="hover-text" style="background-color: #133F5C;">{{ cluster1Length }}</div>
                            </div>
                          </div>
                          <div class="col-12 col-md-3 clusterdiv">
                              <div class="color text-white" style="background-color: #59508D;">
                                <p>UNCLUSTERED</p>
                                <div class="hover-text" style="background-color: #59508D;">{{ unclusteredLength }}</div>
                              </div>
                          </div>
                          <div class="col-12 col-md-2 clusterdiv">
                            <div class="color text-white" style="background-color: #BC5090;">
                                <p>CLUSTER 2</p>
                                <div class="hover-text" style="background-color: #BC5090;">{{ cluster2Length }}</div>
                              </div>
                          </div>
                          <div class="col-12 col-md-2 clusterdiv">
                            <div class="color text-white" style="background-color: #EB5F5E;">
                                <p>NORTH CLUSTER</p>
                                <div class="hover-text" style="background-color: #EB5F5E;">{{ northClusterLength }}</div>
                              </div>
                          </div>
                          <div class="col-12 col-md-2 clusterdiv2">
                              <div class="col-12 clusterdiv clusterdiv3 text-white" style="background-color: #F3A533;">
                                <p>SOUTH CLUSTER</p>
                                <div class="hover-text2" style="background-color: #F3A533;">{{ southClusterLength }}</div>
                              </div>
                              <div class="col-12 clusterdiv clusterdiv3 text-white" style="background-color: #999999;">
                                <p>SENIOR CITIZENS CLUSTER</p>
                                <div class="hover-text2" style="background-color: #999999;">{{ seniorLength }}</div>
                              </div>
                          </div>   
                        </div>
                </div>
                <div class="col-12 col-md-6">
                      <div class="Sectors">    
                        <p style="font-family: Inter;font-size: 24px;font-weight: 700;line-height: 21px;letter-spacing: 0em;text-align: left;
                        padding: 4px 0px 0px 24px;">SECTORS</p>
                        <DoughnutChart v-if="ClusterData" :data="ClusterData" :legendOptions="customLegendOptions"/>
                      
                      </div>
                </div>
                <div class="col-12 col-md-6">
                     <div class="Client">  
                      <p style="font-family: Inter;font-size: 24px;font-weight: 700;line-height: 21px;letter-spacing: 0em;text-align: left;
                          padding: 4px 0px 0px 24px;">CLIENT</p> 
                         <DoughnutChart v-if="ClusterData" :data="ClusterData" :legendOptions="customLegendOptions"/>
                     </div>
                </div>
                <div class="col-12">
                  <div class="Regional">    
                    <HBarchart v-if="RegionData" :data="RegionData" :aspectRatio="60/10"/>
                     </div>
                </div>
  
        </div>
    </div>
    <!-- <Footer /> -->
</template>

<script>
import axios from 'axios';
import Sidebar from '@/components/Sidebar.vue'; 
import Footer from '@/components/Footer'
import BarChart from '@/components/ChartJS/Barchart';
import DoughnutChart from '@/components/ChartJS/DoughnutChart';
import HBarchart from '@/components/ChartJS/HBarchart';

export default {
    name: 'SWDA',
    components: {
        Sidebar,
        Footer,
        BarChart,
        DoughnutChart,
        HBarchart
    },
    data() {
    return {
      PageTitle: "SWDA", // The title displayed on the page, which is "SWDA"

      customLegendOptions: {
        position: 'right', // Set the legend position as needed
      },

      agencies: [], // An array to store agency data fetched from the API
      searchQuery: '', // A variable to hold the search query entered by the user for filtering agencies



      ClusterData: null, // Initialize Chart Data as null
      RegionData: null, // Initialize Chart Data as null
      ClienteleData: null,

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
                // Fetch data and populate the agencies array
                axios.get('http://127.0.0.1:8000/api/agenciesName')
                    .then(response => {
                        this.agencies = response.data;
                    })
                    .catch(error => {
                        console.error("Error fetching data:", error);
                    });
            },

  computed: {
                filteredAgencies() {
                    // Filter the agencies based on the searchQuery
                    return this.agencies.filter(agency => {
                        return agency.Agency.toLowerCase().includes(this.searchQuery.toLowerCase());
                    });
                }
            },

  methods: {
    ClusterFetchData() {
      return axios
        .get('http://127.0.0.1:8000/api/cluster')
        .then(response => {
          // Initialize data arrays
          const southCluster = [];
          const cluster1 = [];
          const northCluster = [];
          const unclustered = [];
          const cluster2 = [];
          const senior = [];

          response.data.forEach(item => {
            const clusterName = item.Cluster;

            switch (clusterName) {
              case 'South Cluster':
                southCluster.push(item);
                break;
              case 'Cluster 1':
                cluster1.push(item);
                break;
              case 'North Cluster':
                northCluster.push(item);
                break;
              case 'Unclustered':
                unclustered.push(item);
                break;
              case 'Cluster 2':
                cluster2.push(item);
                break;
              case 'Senior Citizens Center':
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
            labels: ['Unclustered', 'Cluster 1', 'North Cluster', 'South Cluster', 'Senior Citizen', 'Cluster 2'],
            label: ['Cluster'],
            values: [unclusteredLength, cluster1Length, northClusterLength, southClusterLength, seniorLength, cluster2Length],
            backgroundColor: ['rgba(25, 82, 105, 0.6)',
                              'rgba(0, 255, 0, 0.6)',
                              'rgba(0, 0, 255, 0.6)',
                              'rgba(0, 0, 255, 0.6)',
                              'rgba(128, 0, 128, 0.6',
          ],
          };
          // Set barChartData to the computed data
          this.ClusterData = clusterdata;
        })
        .catch(error => {
          console.error('Error fetching data:', error);

         // Prepare and return data if in case there is an api catch error
            const clusterdata = {
            labels: ['Unclustered', 'Cluster 1', 'North Cluster', 'South Cluster', 'Senior Citizen', 'Cluster 2'],
            label: ['Cluster'],
            values: [1, 1, 1, 1, 1, 1 ],
            backgroundColor: ['rgba(25, 82, 105, 0.6)',
                              'rgba(0, 255, 0, 0.6)',
                              'rgba(0, 0, 255, 0.6)',
                              'rgba(0, 0, 255, 0.6)',
                              'rgba(128, 0, 128, 0.6',
          ],
          };
          // Set catcc error barChartData to the computed data
          this.ClusterData = clusterdata;
        });
    },
    RegionFetchData() {
      return axios
        .get('http://127.0.0.1:8000/api/regionaloperation')
        .then(response => {
          // Initialize data arrays
          const davaoCity = [];
          const davaodelSur = [];
          const davaodelNorte = [];
          const davaodeOro = [];
          const davaoOriental = [];
          const others = [];
          const regionXI = [];
         

          response.data.forEach(item => {
            const regionName = item.Regional_Operation;

            switch (regionName) {
              case 'Davao City':
                  davaoCity.push(item);
                break;
              case 'Davao del Sur':
                  davaodelSur.push(item);
                break;
              case 'Davao del Norte':
                  davaodelNorte.push(item);
                break;
              case null:
                   others.push(item);
                break;
              case 'Region XI':
                  regionXI.push(item);
                break;
              case 'Davao Oriental':
                davaoOriental.push(item);
                break;
              case 'Davao de Oro':
                davaodeOro.push(item);
                break;
              default:
                // Handle other cases if necessary
                break;
            }
          });

          // Calculate data lengths
          const  davaoCityLength = davaoCity.length;
          const davaodelSurLength = davaodelSur.length;
          const davaodelNorteLength = davaodelNorte.length;
          const othersLength = others.length;
          const regionXILength = regionXI.length;
          const davaoOrientalLength = davaoOriental.length;
          const davaodeOroLength = davaodeOro.length;
        
          // Prepare and return data
          const regiondata = {
            labels: ['Davao City', 'Davao del Sur', 'Davao del Norte', 'Others', 'Region XI', 'Davao Oriental', 'Davao de Oro'],
            label: ['Regional Operation'],
            values: [davaoCityLength, davaodelSurLength, davaodelNorteLength, othersLength, regionXILength, davaoOrientalLength, davaodeOroLength],
            backgroundColor: [
                'rgba(19, 63, 92, 1)',   
              ],
          };
          // Set barChartData to the computed data
          this.RegionData = regiondata;
        })
        .catch(error => {
          console.error('Error fetching data:', error);

         // Prepare and return data if in case there is an api catch error
         const regiondata = {
            labels: ['Davao City', 'Davao del Sur', 'Davao del Norte', 'Others', 'Region XI', 'Davao Oriental', 'Davao de Oro'],
            label: ['Regional Operation'],
            values: [1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
                'rgba(19, 63, 92, 1)',  
              ],
          };
          // Set catcc error barChartData to the computed data
          this.RegionData = regiondata;
        });
    }, 
    AgencyFetchData() {
  return axios
    .get('http://127.0.0.1:8000/api/agencies')
    .then(response => {
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

      response.data.forEach(item => {
        // Categorize by Registration Status
        if (item.Registration_Status === 'Active/Valid') {
          if (item.Registered === 'Yes') activeRegistered.push(item);
          if (item.Licensed === 'Yes') activeLicensed.push(item);
          if (item.Accredited === 'Yes') activeAccredited.push(item);
        } else if (item.Registration_Status === 'Expired') {
          expiredRegistered.push(item);
          expiredLicensed.push(item);
          expiredAccredited.push(item);
          if (item.Delisted === 'Yes') expiredDelisted.push(item);
        }

        // Check if Mode_of_Delivery is a string before splitting
        if (typeof item.Mode_of_Delivery === 'string') {
          const modes = item.Mode_of_Delivery.split(', ');
          modes.forEach(mode => {
            if (mode === 'Community-based') communityBased.push(item);
            if (mode === 'Auxiliary SWDA') auxillarySWDA.push(item);
            if (mode === 'Center-based Residential') residential.push(item);
            if (mode === 'Center-based Non-Residential') nonResidential.push(item);
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
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    },

    // NEED FIXINGS
    ClienteleFetchData() {
  return axios
    .get('http://127.0.0.1:8000/api/clientele')
    .then(response => {
      // Initialize data arrays
      const children = [];
      const youth = [];
      const familiesCommunities = [];
      const nA = [];

      response.data.forEach(item => {
        const clienteleName = item.Clientele;

        switch (clienteleName) {
          case 'Children':
            children.push(item);
            break;
          case 'Children and Youth':
            youth.push(item);
            break;
          case 'Families and Communities':
            familiesCommunities.push(item);
            break;
          case 'N/A':
            nA.push(item);
            break;
          default:
            // Handle other cases if necessary
            break;
        }
      });

      // Calculate data lengths
      const childrenLength = children.length;
      const youthLength = youth.length;
      const familiesCommunitiesLength = familiesCommunities.length;
      const nALength = nA.length;

      console.log(childrenLength);
      console.log(youthLength);
      console.log(familiesCommunitiesLength);
      console.log(nALength);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}


  },
  mounted() {
    // Automatically fetch data when the component is mounted
    this.ClusterFetchData();
    this.RegionFetchData();
    this.AgencyFetchData();
    this.ClienteleFetchData();
  },
    
}
</script>

<style scoped>

.wrapper{
  margin: 0;
  padding: 0;
  height: 70vh;
}

.custom-link {
  text-decoration: none; 
}
.filters{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 18em;
  border-radius: 20px;
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
}

.agenciesNames{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 25em;
  border-radius: 20px;
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
}

.agencyfilter table tbody tr td .hover:hover {
  background-color: #E70F0F;
  color: white; /* Change text color to white on hover */
  cursor: pointer; /* Change cursor to a pointer on hover (optional) */
  border-radius: 10px;
  padding: 10px 0px 10px 10px;
}
.agencyfilter{
  font-size: 14px;
  height: 22em;
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
  border-radius: 4px; /* Adjust the border-radius to make it smaller or larger */
}

.agencyfilter::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Color of the scrollbar track */
}


.clusterdiv{
  height: 80%;
}
.color{
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  margin: auto ;
}
.clusterdiv2{
  height: 80%;
  padding: 0px 10px 0px 10px;
}
.clusterdiv3{
  height: 48%;
  margin: 0px 5px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;}
.shadow{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 170px;
  border-radius: 20px;
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;}
.active-agencies {
  font-weight: bold; 
  font-size: 34px; }
.expired-agencies {
  font-weight: bold; 
  font-size: 34px; }
.modeDelivery {
  font-weight: bold; 
  font-size: 34px; }
.numberAgencies {
  font-weight: bold; 
  font-size: 34px; }
.Clusters, .Sectors, .Client, .Regional{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 15em;
  border-radius: 20px;
  margin: 5px 10px 5px 10px;
  padding: 10px 0px 10px 0px;}
.Sectors, .Client{
  height: 20em;
  padding-bottom: 50px;}
.Regional{
  height: 17em;}
.clusterdiv {
  position: relative; /* Necessary for positioning the text */}
.hover-text {
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the text within its parent */
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  visibility: visible;
  opacity: 0; /* Initially transparent */
  transition: visibility 0s, opacity 0.3s ease; /* Transition effect */
  font-size: 80px;
  width: 90%;}
.clusterdiv:hover .hover-text {
  visibility: visible; /* Show the text on hover */
  opacity: 1; /* Fully visible on hover */}
.hover-text2 {
  position: absolute;
  top: 55%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the text within its parent */
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  visibility: visible;
  opacity: 0; /* Initially transparent */
  transition: visibility 0s, opacity 0.3s ease; /* Transition effect */
  font-size: 20px; 
  width: 95%;
  height:80%;}
.clusterdiv:hover .hover-text2 {
  visibility: visible; /* Show the text on hover */
  opacity: 1; /* Fully visible on hover */}

.sidepart{
  font-family: Inter;
  font-weight: 600;
  line-height: 20.57px;
  font-size: 27px;
  padding-top: 20px;
}

.sidepartValue{
font-family: Inter;
font-size: 50px;
font-weight: 600;
line-height: 30px;
letter-spacing: 0em;
text-align: center;
margin: 20px 0px 20px 0px;
}
</style>