<template>
    <Sidebar />

    <br><br><br><br>

    
    <div class=wrapper container-fluid>
        <div class="col-12 col-md-3">
          <div class="filters">
            test
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
          <div class="safehaven">

            <!-- FIRST COLUMN -->
            <div class="col-12 col-md-6">
              <h4>A SAFE HAVEN CHILDREN"S HOME FOUNDATION, INC</h4>
              <br>
              <hr class="horizontal-line">

                  <div class="col-4">
                    <p class="fw-bold"> <span class="status-box" id="dynamic-box"></span> Registration Status</p>
                    <br>
                        <p class="box-color fw-bold">Former Name: </p>
                    <p>Children</p>
                  </div>
                  <div class="col-4">
                    <p class="fw-bold"><span class="status-box" id="dynamic-box"> </span>Licensed Status</p>
                    <br>
                        <p class="box-color fw-bold">Cluster: </p>
                    <p>Cluster 1</p>
                  </div>
                  <div class="col-4">
                    <p class="fw-bold"> <span class="status-box" id="dynamic-box"> </span>Accreditation Status</p>
                    <br>
                        <p class="box-color fw-bold">Type: </p>
                    <p>Private</p>
                  </div>
              <br>
              <hr class="horizontal-line">
              <h4>CONTACT INFORMATION</h4>
              <br>
              <p class="box-color fw-bold">Address</p>
              <p>No data</p>
              <br>
                  <div class="col-6">
                    <p class="box-color fw-bold">Contact Number</p>
                    <p>No data</p>
                  </div>
                  <div class="col-6">
                    <p class="box-color fw-bold">Email</p>
                    <p>No data</p>
                  </div>
              <br><br><br>
              <p class="box-color fw-bold">Website</p><br>
              <p>No data</p>
            </div>




            <!-- SECOND COLUMN -->
            <div class="col-12 col-md-6">
              test
            </div>



            
          </div>
        </div>
        
        </div>
    </div>

    <!-- <Footer /> -->
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'; 
import Footer from '@/components/Footer'

export default {
    name: 'SWDA',
    components: {
        Sidebar,
        Footer,
    }
    
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
  height: 48em;
  border-radius: 20px;
  margin: 10px 10px 0px 10px;
  padding: 10px 0px 130px 0px;
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


.safehaven{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 38em;
  border-radius: 20px;
  margin: 10px 10px 10px 10px;
  padding: 10px 0px 130px 0px;

}

.horizontal-line {
    border: none; /* Remove the default line */
    background: black;
    height: 2px;  /* Set the height of the line */
    box-shadow: 0 5px 5px rgba(0, 0, 0, 1); /* Add the box shadow */
    margin-left: 20px;
    width: 16em;

    @media only screen and (min-width: 375px) {
      margin-left: 29px;
      width: 18em;
    }

    @media only screen and (min-width: 414px) {
      margin-left: 29px;
      width: 21em;
    }

    @media only screen and (min-width: 1020px) {
      margin-left: 50px;
      width: 90%;
    }
}

.status-box {
    width: 15px; /* Set the width of the box */
    height: 15px; /* Set the height of the box */
    display: inline-block; /* Make it inline with the text */
    margin-left: 10px; /* Add some spacing between the text and the box */
    margin-right: 5px; /* Add some spacing between the text and the box */
    background-color: red; /* Initial color is red */
}

.box-color{
  background: #BBDEFB;
  width: 90%;
  margin: auto;
}

</style>