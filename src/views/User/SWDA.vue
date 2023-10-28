<template>
    <Sidebar />
    <br><br><br><br>
    <div class=wrapper container-fluid>
        <div class="col-12 col-md-3">
          <div class="filters">
            test
          </div>

          <p>FOR RENEWAL</p>
      
        <div class="filters">
          <p>LICENCE</p>
        </div>
        <div class="filters">
          <p>ACCREDITATION</p>
        </div>

        </div>

        <div class="col-12 col-md-9">
                <div class="agencies col-12 col-md-6 col-lg-3">
                  <div class="shadow">
                    <h4>ACTIVE AGENCIES</h4>
                   <p class="col-4">
                    Registered <br>
                    <span id="active-registered" class="active-agencies">24</span>
                   </p>
                   <p class="col-4">
                    Licensed <br>
                    <span id="active-licensed" class="active-agencies">23</span>
                   </p>
                   <p class="col-4">
                    Accredited <br>
                    <span id="active-accredited" class="active-agencies">22</span>
                   </p>
                  </div> 
                </div>


                <div class="agencies col-12 col-md-6 col-lg-4">
                  <div class="shadow">
                    <h4>EXPIRED AGENCIES</h4>
                    <p class="col-3">
                    Registered <br>
                    <span id="expired-registered" class="expired-agencies">24</span>
                   </p>
                   <p class="col-3">
                    Licensed <br>
                    <span id="expired-licensed" class="expired-agencies">23</span>
                   </p>
                   <p class="col-3">
                    Accreditation <br>
                    <span id="expired-accreditation" class="expired-agencies">22</span>
                   </p>
                   <p class="col-3">
                    Delisted <br>
                    <span id="expired-accreditation" class="expired-agencies">22</span>
                   </p>
                  </div>
                </div>


                <div class="agencies col-12 col-md-6 col-lg-4"> 
                  <div class="shadow">
                    <h4>MODE OF DELIVERY </h4>
                    <p class="col-3">
                    Community <br>
                    <span id="community-based" class="modeDelivery">24</span>
                   </p>
                   <p class="col-3">
                    Auxillary SWDA <br>
                    <span id="auxillary" class="modeDelivery">23</span>
                   </p>
                   <p class="col-3">
                    Residential <br>
                    <span id="residential" class="modeDelivery">22</span>
                   </p>
                   <p class="col-3">
                    Non-Residential <br>
                    <span id="non-residential" class="modeDelivery">22</span>
                   </p>
                  </div>
                </div>


                <div class="agencies col-12 col-md-6 col-lg-1">
                  <div class="shadow">
                    <h5>Number of Agencies</h5> 
                   <p class="col-12">
                    <span id="numberAgencies" class="numberAgencies">22</span>
                   </p>
                  </div>
                </div>
                  
                <div class="col-12">
                        <div class="Clusters"> 
                          <div class="col-12" >
                            <h4>CLUSTER</h4>
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
                        <DoughnutChart v-if="RegionData" :data="RegionData" />
                      
                      </div>
                </div>
                <div class="col-12 col-md-6">
                     <div class="Client">    
                         <DoughnutChart v-if="ClusterData" :data="ClusterData" />
                     </div>
                </div>
                <div class="col-12">
                  <div class="Regional">    
                    <HBarchart v-if="RegionData" :data="RegionData" />
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
      ClusterData: null, // Initialize barChartData as null
      RegionData: null,
    };
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
            const regionName = item.RegionalOperation;

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
                'rgba(255, 0, 0, 0.6)',  
                'rgba(0, 255, 0, 0.6)',     
                'rgba(0, 0, 255, 0.6)',   
                'rgba(255, 255, 0, 0.6)',  
                'rgba(128, 0, 128, 0.6)',   
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
                'rgba(255, 0, 0, 0.6)',  
                'rgba(0, 255, 0, 0.6)',     
                'rgba(0, 0, 255, 0.6)',   
                'rgba(255, 255, 0, 0.6)',  
                'rgba(128, 0, 128, 0.6)',   
              ],
          };
          // Set catcc error barChartData to the computed data
          this.RegionData = regiondata;
        });
    }, 
  },
  mounted() {
    // Automatically fetch data when the component is mounted
    this.ClusterFetchData();
    this.RegionFetchData();
  },
    
}
</script>

<style scoped>
.wrapper{
  margin: 0;
  padding: 0;
  height: 70vh;
}
.filters{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 18em;
  border-radius: 20px;
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;
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
  padding: 0px 5px 0px 5px;
}

.clusterdiv3{
  height: 40%;
  margin: 8px 5px 8px 0px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}
.shadow{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 120px;
  border-radius: 20px;
  margin: 10px 10px 0px 10px;
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


.Clusters, .Sectors, .Client, .Regional{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 15em;
  border-radius: 20px;
  margin: 5px 10px 5px 10px;
  padding: 10px 0px 10px 0px;
}

.Sectors, .Client{
  height: 15em;
}
.Regional{
  height: 17em;
}
.clusterdiv {
  position: relative; /* Necessary for positioning the text */
}
.hover-text {
  position: absolute;
  top: 45%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the text within its parent */
  
  color: white;
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
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the text within its parent */
  background-color: rgba(0, 0, 0, 1);
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  visibility: visible;
  opacity: 0; /* Initially transparent */
  transition: visibility 0s, opacity 0.3s ease; /* Transition effect */
  font-size: 20px; 
  width: 100%;
}

.clusterdiv:hover .hover-text2 {
  visibility: visible; /* Show the text on hover */
  opacity: 1; /* Fully visible on hover */
}
</style>