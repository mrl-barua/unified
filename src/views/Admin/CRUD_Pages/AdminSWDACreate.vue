<template>
<br><br><br><br>
 <AdminSidebar :iconText="PageTitle" />
    <div>
        <div class="container-fluid">
                <div class="Header">
                </div>
            
                   <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                        <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                            {{ error[0] }}
                        </li>
                    </ul>

                 <div class="mb-3 col-12">
                     <div class="spaceBetween">
                        <label for="agency" >AGENCY</label>
                        <input type="text" v-model="model.Swda.Agency" class="form-control centered-placeholder" id="agency" required>
                    </div>
                </div>
                <div class="mb-3 col-3">
                    <div class="spaceBetween">
                    <label  for="type">TYPE</label>
                    <select v-model="model.Swda.Type" class="form-control centered-placeholder" id="type">
                        <option value="" disabled selected>
                         Select an option ⮟
                        </option>
                        <option value="Private">Private</option>
                        <option value="Public">Public</option>
                    </select>
                    </div>

                </div>

                <div class="mb-3 col-3">
                    <div class="spaceBetween">
                        <label for="address">ADDRESS</label>
                         <input type="text" v-model="model.Swda.Address"  class="form-control centered-placeholder" id="address">
                    </div>
                   
                </div>

                <div class="mb-3 col-3">
                    <div class="spaceBetween">
                        <label for="contactNumber">CONTACT NUMBER</label>
                        <input type="text" v-model="model.Swda.Contact_Number"  class="form-control centered-placeholder" id="contactNumber">
                    </div>
                            
                </div>

                <div class="mb-3 col-3">
                    <div class="spaceBetween">
                        <label for="formerName">FORMER NAME</label>
                        <input type="text" v-model="model.Swda.Former_Name" class="form-control centered-placeholder" id="formerName">
                    </div>
                            
                 </div>
                      
                <div class="col-12">
                    <div class="mb-3 col-3">
                        <div class="spaceBetween">
                             <label for="cluster">CLUSTER</label>
                            <select v-model="model.Swda.Cluster" class="form-control centered-placeholder" id="cluster">
                                <option value="" disabled selected>
                                Select an option ⮟
                                </option>
                                <option value="Cluster 1">Cluster 1</option>
                                <option value="Cluster 2">Cluster 2</option>
                                <option value="Unclustered 3">Unclustered</option>
                                <option value="South Cluster">South Cluster</option>
                                <option value="North Cluster">North Cluster</option>
                                <option value="Senior Citizens Center">Senior Citizens Center</option>
                            </select>
                        </div>         
                    </div>
                    <div class="mb-3 col-3">
                        <div class="spaceBetween">
                            <label for="fax">FAX</label>
                             <input type="text" v-model="model.Swda.Fax"  class="form-control centered-placeholder" id="fax">
                        </div>
                               
                    </div>
                    <div class="mb-3 col-3">
                        <div class="spaceBetween">
                            <label for="email">EMAIL</label>
                              <input type="text" v-model="model.Swda.Email"   class="form-control centered-placeholder" id="email">
                        </div>
                              
                    </div>
                    <div class="mb-3 col-3">
                        <div class="spaceBetween">
                            <label for="website">WEBSITE</label>
                            <input type="text" v-model="model.Swda.Website"   class="form-control centered-placeholder" id="website">
                        </div>                        
                    </div>                
                </div>

                <div class="col-12">
                    <div class="mb-3 col-3">
                        <div class="spaceBetween">
                            <label for="sector">SECTOR</label>
                            <select v-model="model.Swda.Sector" class="form-control centered-placeholder" id="type">
                            <option value="" disabled selected>
                            Select an option ⮟
                            </option>
                            <option value="Children">Children</option>
                            <option value="Children and Youth">Children and Youth</option>
                            <option value="Families and Communities">Families and Communities</option>
                            <option value="Youth">Youth</option>
                            <option value="Elderly">Elderly</option>
                            <option value="Persons with Disability">Persons with Disability</option>
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
                             <input type="text" v-model="model.Swda.Contact_Person" class="form-control centered-placeholder" id="contactPerson">
                        </div>
                               
                    </div>

                    <div class="mb-3 col-3">
                        <div class="spaceBetween">
                              <label for="position">POSITION</label>
                            <input type="text" v-model="model.Swda.Position" class="form-control centered-placeholder" id="position ">
                        </div>  
                    </div>

                    <div class="mb-3 col-3">
                        <div class="spaceBetween">
                            <label for="mobileNumber">MOBILE NUMBER</label>
                            <input type="text" v-model="model.Swda.Mobile_Number" class="form-control centered-placeholder" id="mobileNumber">
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
                    

                <hr class="hr" style="margin-left: 15px; margin-right: 15px; border: 1px solid red;"/><!-- HORIZONTAL LINE -->

                <div class="col-12"> 
                        <div class="mb-3 col-5">
                             <div class="spaceBetween">
                                <label for="servicesOffered">SERVICES OFFERED</label>
                                <input type="text" v-model="model.Swda.Services_Offered"  class="form-control" id="servicesOffered">
                             </div>            
                        </div>
                        <div class="mb-3 col-4">
                             <div class="spaceBetween">
                                 <label for="simplifiedServices">SIMPLIFIED SERVICES</label>
                                 <input type="text" v-model="model.Swda.Simplified_Services" class="form-control" id="simplifiedServices">
                             </div>  
                        </div>
                        <div class="mb-3 col-3">
                             <div class="spaceBetween">
                                  <label for="clientele">CLIENTELE</label>
                                <input type="text" v-model="model.Swda.Clientele"  class="form-control" id="clientele">
                             </div>  
                        </div>
                </div>
               
                <div class="col-12">
                     <div class="mb-3 col-3">
                        <div class="spaceBetween">
                             <label for="areaOfOperation">AREA OF OPERATION</label>
                            <select v-model="model.Swda.Area_of_Operation" class="form-control centered-placeholder" id="areaOfOperation">
                                <option value="" disabled selected>
                                Select an option ⮟
                                </option>
                                <option value="Regional">Regional</option>
                                <option value="National">National</option>
                                <option value="Unspecified">Unspecified</option>
                            </select>
                        </div>
                </div>

                 <div class="mb-3 col-3">
                        <div class="spaceBetween">
                             <label for="regionalOperation">REGIONAL OPERATION</label>
                             <select v-model="model.Swda.Regional_Operation" class="form-control centered-placeholder" id="regionalOperation">
                                <option value="" disabled selected>
                                Select an option ⮟
                                </option>
                                <option value="Davao City">Davao City</option>
                                <option value="Davao del Oro">Davao del Oro</option>
                                <option value="Davao del Norte">Davao del Norte</option>
                                <option value="Davao del Sur">Davao del Sur</option>
                                <option value="Davao Oriental">Davao Oriental</option>
                            </select>
                        </div>
                </div>

                <div class="mb-3 col-3">
                        <div class="spaceBetween">
                            <label for="specifiedAreasOfOperation">SPECIFIED AREA OF OPERATION</label>
                             <select v-model="model.Swda.Specified_Areas_of_Operation" class="form-control centered-placeholder" id="specifiedAreasOfOperation">
                                    <option value="" disabled selected>
                                Select an option ⮟
                                    </option>
                                    <option value="Davao City">Davao City</option>
                                    <option value="Davao del Oro">Davao del Oro</option>
                                    <option value="Davao del Norte">Davao del Norte</option>
                                    <option value="Davao del Sur">Davao del Sur</option>
                                    <option value="Davao Oriental">Davao Oriental</option>
                             </select>
                        </div>
                   
                </div>


                <div class="mb-3 col-3">
                        <div class="spaceBetween">
                            <label for="modeOfDelivery">MODE OF DELIVERY</label>
                            <select v-model="model.Swda.Mode_of_Delivery" class="form-control centered-placeholder" id="modeOfDelivery">
                                <option value="" disabled selected>
                            Select an option ⮟
                                </option>
                                <option value="Community-based">Community-based</option>
                                <option value="Center-based Residential">Center-based Residential</option>
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
                                <input type="text" v-model="model.Swda.Registration_ID"  class="form-control" id="registrationID">
                            </div>                 
                     </div>
                    
                    <div class="mb-3 col-4">
                        <div class="spaceBetween">
                            <label for="registrationDateIssued">REGISTRATION DATE</label>
                            <input type="date" v-model="model.Swda.Registration_Date"    class="form-control" id="registrationDate">
                        </div>                         
                    </div>

                    <div class="mb-3 col-4">
                        <div class="spaceBetween">
                            <label for="registrationDateIssued">REGISTRATION EXPIRATION</label>
                            <input type="date" v-model="model.Swda.Registration_Expiration"  class="form-control" id="registrationExpiration">
                        </div> 
                    </div>


                    <div class="mb-3 col-4">
                        <div class="spaceBetween">
                            <label for="licenseID">LICENSE ID</label>
                            <input type="text" v-model="model.Swda.Licensed_ID" class="form-control" id="licenseID">
                        </div>
                    </div>

                    <div class="mb-3 col-4">
                        <div class="spaceBetween">
                             <label for="licenseDateIssued">LICENSE DATA ISSUED</label>
                            <input type="date" v-model="model.Swda.License_Date_Issued" class="form-control" id="licenseDateIssued">
                        </div>                           
                    </div>

                    <div class="mb-3 col-4">
                        <div class="spaceBetween">
                            <label for="licenseExpiration">LICENSE EXPIRATION</label>
                            <input type="date" v-model="model.Swda.License_Expiration" class="form-control" id="licenseExpiration">
                        </div>
                    </div>      

                    <div class="mb-3 col-4">
                        <div class="spaceBetween">
                            <label for="accreditationID">ACCREDITATION ID</label>
                            <input type="text" v-model="model.Swda.Accreditation_ID" class="form-control" id="accreditationID">
                        </div>
                    </div>

                    <div class="mb-3 col-4">
                        <div class="spaceBetween">
                            <label for="accreditationDateIssued">ACCREDITATION DATE ISSUED</label>
                            <input type="date" v-model="model.Swda.Accreditation_Date_Issued" class="form-control" id="accreditationDateIssued">
                        </div>
                     </div>

                    <div class="mb-3 col-4">
                        <div class="spaceBetween">
                            <label for="accreditationExpiration">ACCREDITATION EXPIRATION</label>
                            <input type="date" v-model="model.Swda.Accreditation_Expiration" class="form-control" id="accreditationExpiration">
                        </div>
                     </div>      



                                <div class="col-9">
                                      <div class="mb-3 col-12">
                                             <div class="spaceBetween">
                                                 <label for="remarks">REMARKS</label>
                                                 <input type="text" v-model="model.Swda.Remarks" class="form-control custom-input" id="remarks">
                                             </div>
                                            
                                      </div>
                                </div>   

                                <div class="col-3">
                                        <div class="mb-3 col-12">
                                            <div class="spaceBetween"> 
                                                    <label for="licenseDaysLeft">LICENSE DAYS LEFT</label>
                                                    <input type="number" v-model="model.Swda.License_Days_Left" class="form-control" id="licenseDaysLeft" required>
                                             </div>
                                        </div>


                                        <div class="mb-3 col-12">
                                            <div class="spaceBetween">
                                                 <label for="accreditationDaysLeft">ACCREDITATION  DAYS LEFT</label>
                                                  <input type="number" v-model="model.Swda.Accreditation_Days_Left"  class="form-control" id="accreditationDaysLeft" required>
                                            </div>
                                                               
                                        </div>
                                </div>             
                </div>

                <div class="col-3">
                            <div class="mb-3 col-12">
                                <div class="spaceBetween">
                                    <label for="registrationStatus">REGISTRATION STATUS</label>
                                    <input type="text" v-model="model.Swda.Registration_Status" class="form-control" id="registrationStatus">
                                </div>
                        </div>

                        <div class="mb-3 col-12">
                                <div class="spaceBetween">
                                    <label for="licenseStatus">LICENSE STATUS</label>
                                    <input type="text" v-model="model.Swda.License_Status" class="form-control" id="licenseStatus">
                                </div>
                        </div>

                        <div class="mb-3 col-12">
                            <div class="spaceBetween">     
                                    <label for="accreditationStatus">ACCREDITATION STATUS</label>
                                    <input type="text" v-model="model.Swda.Accreditation_Status" class="form-control" id="accreditationStatus">
                            </div>
                        </div>

                        <div class="mb-3 col-12">
                                <div class="spaceBetween">
                                    <label for="licensureOverdue">LICENSURE OVERDUE</label>
                                    <input type="text" v-model="model.Swda.Licensure_Overdue" class="form-control" id="licensureOverdue" required>
                                </div>
                        </div>

                        <div class="mb-3 col-12">
                                <div class="spaceBetween">
                                    <label for="accreditationOverdue">ACCREDITATION OVERDUE</label>
                                    <input type="text" v-model="model.Swda.Accreditation_Overdue" class="form-control" id="accreditationOverdue" required>
                                </div>
                        </div>
                </div>

                </div>

                      <div class="md-3 col-12 buttons d-flex justify-content-end">
                        <router-link to="/adminswda">
                            <button class="btn btn-secondary">
                                CANCEL
                            </button>
                        </router-link>
                        <button type="submit" @click="saveSwda" class="btn btn-primary">
                            SAVE
                        </button>
                    </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import AdminSidebar from '@/components/AdminSidebar';

export default {
    name: 'AdminSWDACreate',
    components: {
        AdminSidebar
    },
   data() {
        return {
            PageTitle: "ADMIN SWDA > ADD",


            errorList: '',
            model: {
            Swda: {
                Type: '',
                Sector: '',
                Cluster: '',
                Agency: '',
                Address: '',
                Former_Name: '',
                Contact_Number: '',
                Fax: '',
                Email: '',
                Website: '',
                Contact_Person: '',
                Position: '',
                Mobile_Number: '',
                Registered: '',
                Licensed: '',
                Accredited: '',
                Services_Offered: '',
                Simplified_Services: '',
                Area_of_Operation: '',
                Regional_Operation: '',
                Specified_Areas_of_Operation: '',
                Mode_of_Delivery: '',
                Clientele: '',
                Registration_ID: '',
                Registration_Date: '',
                Registration_Expiration: '',
                Registration_Status: '',
                Licensed_ID: '',
                License_Date_Issued: '',
                License_Expiration: '',
                License_Status: '',
                Accreditation_ID: '',
                Accreditation_Date_Issued: '',
                Accreditation_Expiration: '',
                Accreditation_Status: '',
                Remarks: '',
                License_Days_Left: '',
                Licensure_Overdue: '',
                Accreditation_Days_Left: '',
                Accreditation_Overdue: '',
            },
    },
  };
},

methods: {
    saveSwda() {
        var mythis = this;
        axios.post('http://127.0.0.1:8000/api/swdalist', this.model.Swda)
            .then((res) => {
                console.log(res.data);
                alert(res.data.message);

                this.model.Swda = {
                    Type: '',
                    Sector: '',
                    Cluster: '',
                    Agency: '',
                    Address: '',
                    Former_Name: '',
                    Contact_Number: '',
                    Fax: '',
                    Email: '',
                    Website: '',
                    Contact_Person: '',
                    Position: '',
                    Mobile_Number: '',
                    Registered: '',
                    Licensed: '',
                    Accredited: '',
                    Services_Offered: '',
                    Simplified_Services: '',
                    Area_of_Operation: '',
                    Regional_Operation: '',
                    Specified_Areas_of_Operation: '',
                    Mode_of_Delivery: '',
                    Clientele: '',
                    Registration_ID: '',
                    Registration_Date: '',
                    Registration_Expiration: '',
                    Registration_Status: '',
                    Licensed_ID: '',
                    License_Date_Issued: '',
                    License_Expiration: '',
                    License_Status: '',
                    Accreditation_ID: '',
                    Accreditation_Date_Issued: '',
                    Accreditation_Expiration: '',
                    Accreditation_Status: '',
                    Remarks: '',
                    License_Days_Left: '',
                    Licensure_Overdue: '',
                    Accreditation_Days_Left: '',
                    Accreditation_Overdue: '',
                };
            })
            .catch(function (error) {
                if (error.response) {

                    if (error.response.status === 422){
                        mythis.errorList = error.response.data.errors;
                    }
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('error', error.message);
                }
            });
    },
},


}
</script>

<style scoped>
.container{
    padding-bottom: 100px;
}

.centered-placeholder::placeholder {
  text-align: center;
}

.spaceBetween{
    margin: 0px 10px 0px 10px;
    /* font-family: Inter; */
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
}

.spaceBetween label{
    padding-left: 10px;
    font-weight: bold;
}

.custom-input {
    height: 113px; /* Adjust the height value as needed */
}

.btn{
    margin-right: 20px;
    width: 180px;
    margin-bottom: 20px;
}
</style>