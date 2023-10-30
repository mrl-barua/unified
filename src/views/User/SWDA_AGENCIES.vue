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
                                    <router-link to="/swda_agencies" class="custom-link text-white">
                                        <div class="hover"> {{ agency.Agency }} </div>
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
            <div class="content">
                <div class="col-12 agencyHeader">
                    <p>NAME OF THE AGENCY</p>
                    <hr class="hr" style="border: 2px solid black;"/>
                </div>
                
                <div class="col-12 col-md-6">
                    <hr class="hr" style="margin-left: 15px; margin-right: 15px; border: 2px solid black;"/>
                
                <div class="status col-4">
                    <p>Registration Status</p>
                    <p>Registration Data</p>
                </div>

                <div class="status col-4">
                    <p>Licensed Status</p>
                    <p>Licensed Data</p>      
                </div>

                <div class="status col-4">
                    <p>Accredication Status</p>
                    <p>Accredication Data</p>
                </div>

                <div class="agencySectorClusterType">
                        <div class="agencySCTContent col-4 text-start">
                            <div class="box"> <p>Sector</p>  </div>
                            <p  class="data">SectorData</p>
                        </div>

                        <div class="agencySCTContent col-4 text-start" >
                            <div class="box"> <p>Cluster</p> </div>
                            <p  class="data">ClusterData</p>
                        </div>

                        <div class="agencySCTContent col-4 text-start">
                            <div class="box"> <p>Type</p> </div>
                            <p class="data">TypeData</p>
                        </div>

                             <hr class="hr" style="margin-left: 15px; margin-right: 15px; border: 2px solid black;"/>

                        <div class="col-12">
                            <p>CONTACT INFORMATION</p>
                            <div class="box"><p>Address</p></div>
                            <p class="data">no data</p>
                        </div>

                        <div class="col-5">
                            <div class="box"><p>Contact Number</p></div>
                            <p class="data">no data</p>
                        </div>

                        <div class="col-7">
                            <div class="box"><p>Email</p></div>
                            <p class="data">no data</p>
                        </div>

                        <div class="col-12">
                            <div class="box"><p>Website</p></div>
                            <p class="data">no data</p>
                        </div>
                   
                            <hr class="hr" style="margin-left: 15px; margin-right: 15px; border: 2px solid black;"/>

                    <div class="col-12" style="margin-top: 50px;">
                        <p>CONTACT INFORMATION</p>
                    </div>

                        <div class="col-6">
                            <div class="box"><p>Name</p></div>
                            <p class="data">no data</p>
                        </div>

                        <div class="col-6">
                            <div class="box"><p>Position</p></div>
                            <p class="data">no data</p>
                        </div>

                        <div class="col-6">
                            <div class="box"><p>Contact Number</p></div>
                            <p class="data">no data</p>
                        </div>

                     </div> 
                </div>

                <div class="col-12 col-md-6">
                    <hr class="hr" style="margin-left: 15px; margin-right: 15px; border: 2px solid black;"/>
                     <div class="programsServices">
                        <div class="col-12">
                        <p>PROGRAMS AND SERVICES</p>
                        </div>

                        <div class="col-12">
                            <div class="box"><p>Services Offered</p></div>
                            <p class="data">no data</p>
                        </div>

                        <div class="col-6">
                            <div class="box"><p>Clientele</p></div>
                            <p class="data">no data</p>
                        </div>

                        <div class="col-6">
                            <div class="box"><p>Mode of Delivery</p></div>
                            <p class="data">no data</p>
                        </div>

                        <div class="col-12" style="margin-bottom: 50px;">
                            <div class="box"><p>Specified Areas of Operation</p></div>
                            <p class="data">no data</p>
                        </div>

                <hr class="hr" style="margin-left: 15px; margin-right: 15px; border: 2px solid black;"/>

                            <div class="col-12" style="margin-top: 50px;">
                                    <div class="box">
                                        <span class="col-3"><p>Registration ID</p></span>
                                        <span class="col-3"><p>Date Issued</p></span>
                                        <span class="col-3"><p>Expiration Date</p></span>
                                        <span class="col-3"><p>Remarks</p></span>
                                    </div>
                                    <span class="col-3" style="padding-left: 15px;"><p>No Data</p></span>
                                        <span class="col-3" style="padding-left: 5px;"><p>No Data</p></span>
                                        <span class="col-3"><p>No Data</p></span>
                                        <span class="col-3"><p>No Data</p></span>
                            </div> 

                            <div class="col-12">
                                    <div class="box">
                                        <span class="col-3"><p>Licensed ID</p></span>
                                        <span class="col-3"><p>Date Issued</p></span>
                                        <span class="col-3"><p>Expiration Date</p></span>
                                        <span class="col-3"><p>Day Overdue</p></span>
                                    </div>
                                    <span class="col-3" style="padding-left: 15px;"><p>No Data</p></span>
                                        <span class="col-3" style="padding-left: 5px;"><p>No Data</p></span>
                                        <span class="col-3"><p>No Data</p></span>
                                        <span class="col-3"><p>No Data</p></span>
                            </div> 

                            <div class="col-12">
                                    <div class="box">
                                        <span class="col-3"><p>Accredication ID</p></span>
                                        <span class="col-3"><p>Date Issued</p></span>
                                        <span class="col-3"><p>Expiration Date</p></span>
                                        <span class="col-3"><p>Day Overdue</p></span>
                                    </div>
                                    <span class="col-3" style="padding-left: 15px;"><p>No Data</p></span>
                                        <span class="col-3" style="padding-left: 5px;"><p>No Data</p></span>
                                        <span class="col-3"><p>No Data</p></span>
                                        <span class="col-3"><p>No Data</p></span>
                            </div> 
                     </div> 
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
    name: 'SWDA_AGENCIES',
    components: {
        Sidebar,
        Footer,
        BarChart,
        DoughnutChart,
        HBarchart
    },
    data() {
    return {
      PageTitle: "SWDA - AGENCIES", // The title displayed on the page, which is "SWDA"
      customLegendOptions: {
        position: 'right', // Set the legend position as needed
      },

      agencies: [], // An array to store agency data fetched from the API
      searchQuery: '', // A variable to hold the search query entered by the user for filtering agencies
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


    
}
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    height: 80vh;
    border-radius: 20px;
    margin: 0 10px 10px 10px;
    padding: 10px 0 130px 0;

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
    background-color: #E70F0F;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 0 10px 10px;
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
      height: 86vh;
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

  .content {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    height: 170vh;
    border-radius: 20px;
    margin: 0 10px;

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

  .agencyHeader {
    height: 5em;
    margin-top: 20px;
  }

  .box {
    background: #319ACB;
    width: 95%;
    height: 20px;
    margin: auto;
    margin-bottom: 10px;
  }

  .agencySectorClusterType,
  .status,
  .programsServices {
    font-family: Inter;
    font-size: 13px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0;
    text-align: left;
  }

  .data,
  .status {
    padding-left: 10px;
  }
</style>
