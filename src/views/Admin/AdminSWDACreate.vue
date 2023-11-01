<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h4>Add Rows</h4>
                </div>
               
                <div class="card-body">

                   <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                        <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                            {{ error[0] }}
                        </li>
                    </ul>

                        <div class="mb-3 col-3">
                            <label for="type">Type</label>
                            <input type="text" v-model="model.Swda.Type" class="form-control" id="type">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="sector">Sector</label>
                            <input type="text" v-model="model.Swda.Sector" class="form-control" id="sector">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="cluster">Cluster</label>
                            <input type="text" v-model="model.Swda.Cluster" class="form-control" id="cluster">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="agency">Agency</label>
                            <input type="text" v-model="model.Swda.Agency" class="form-control" id="agency">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="address">Address</label>
                            <input type="text" v-model="model.Swda.Address" class="form-control" id="address">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="formerName">Former Name</label>
                            <input type="text" v-model="model.Swda.Former_Name" class="form-control" id="formerName">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="contactNumber">Contact Number</label>
                            <input type="text" v-model="model.Swda.Contact_Number" class="form-control" id="contactNumber">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="fax">Fax</label>
                            <input type="text" v-model="model.Swda.Fax" class="form-control" id="fax">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="email">Email</label>
                            <input type="text" v-model="model.Swda.Email" class="form-control" id="email">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="website">Website</label>
                            <input type="text" v-model="model.Swda.Website" class="form-control" id="website">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="contactPerson">Contact Person</label>
                            <input type="text" v-model="model.Swda.Contact_Person" class="form-control" id="contactPerson">
                        </div>
                        <div class="mb-3 col-4">
                            <label for="position">Position</label>
                            <input type="text" v-model="model.Swda.Position" class="form-control" id="position">
                        </div>
                        <div class="mb-3 col-4">
                            <label for="mobileNumber">Mobile Number</label>
                            <input type="text" v-model="model.Swda.Mobile_Number" class="form-control" id="mobileNumber">
                        </div>
                        <div class="mb-3 col-4">
                            <label for="registered">Registered</label>
                            <input type="text" v-model="model.Swda.Registered" class="form-control" id="registered">
                        </div>
                        <div class="mb-3 col-6">
                            <label for="licensed">Licensed</label>
                            <input type="text" v-model="model.Swda.Licensed" class="form-control" id="licensed">
                        </div>
                        <div class="mb-3 col-6">
                            <label for="accredited">Accredited</label>
                            <input type="text" v-model="model.Swda.Accredited" class="form-control" id="accredited">
                        </div>
                        <div class="mb-3 col-12">
                            <label for="servicesOffered">Services Offered</label>
                            <input type="text" v-model="model.Swda.Services_Offered" class="form-control" id="servicesOffered">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="simplifiedServices">Simplified Services</label>
                            <input type="text" v-model="model.Swda.Simplified_Services" class="form-control" id="simplifiedServices">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="areaOfOperation">Area of Operation</label>
                            <input type="text" v-model="model.Swda.Area_of_Operation" class="form-control" id="areaOfOperation">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="regionalOperation">Regional Operation</label>
                            <input type="text" v-model="model.Swda.Regional_Operation" class="form-control" id="regionalOperation">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="specifiedAreasOfOperation">Specified Areas of Operation</label>
                            <input type="text" v-model="model.Swda.Specified_Areas_of_Operation" class="form-control" id="specifiedAreasOfOperation">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="modeOfDelivery">Mode of Delivery</label>
                            <input type="text" v-model="model.Swda.Mode_of_Delivery" class="form-control" id="modeOfDelivery">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="clientele">Clientele</label>
                            <input type="text" v-model="model.Swda.Clientele" class="form-control" id="clientele">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="registrationID">Registration ID</label>
                            <input type="text" v-model="model.Swda.Registration_ID" class="form-control" id="registrationID">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="registrationDate">Registration Date</label>
                            <input type="text" v-model="model.Swda.Registration_Date" class="form-control" id="registrationDate">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="registrationExpiration">Registration Expiration</label>
                            <input type="text" v-model="model.Swda.Registration_Expiration" class="form-control" id="registrationExpiration">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="registrationStatus">Registration Status</label>
                            <input type="text" v-model="model.Swda.Registration_Status" class="form-control" id="registrationStatus">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="licenseID">License ID</label>
                            <input type="text" v-model="model.Swda.Licensed_ID" class="form-control" id="licenseID">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="licenseDateIssued">License Date Issued</label>
                            <input type="text" v-model="model.Swda.License_Date_Issued" class="form-control" id="licenseDateIssued">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="licenseExpiration">License Expiration</label>
                            <input type="text" v-model="model.Swda.License_Expiration" class="form-control" id="licenseExpiration">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="licenseStatus">License Status</label>
                            <input type="text" v-model="model.Swda.License_Status" class="form-control" id="licenseStatus">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="accreditationID">Accreditation ID</label>
                            <input type="text" v-model="model.Swda.Accreditation_ID" class="form-control" id="accreditationID">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="accreditationDateIssued">Accreditation Date Issued</label>
                            <input type="text" v-model="model.Swda.Accreditation_Date_Issued" class="form-control" id="accreditationDateIssued">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="accreditationExpiration">Accreditation Expiration</label>
                            <input type="text" v-model="model.Swda.Accreditation_Expiration" class="form-control" id="accreditationExpiration">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="accreditationStatus">Accreditation Status</label>
                            <input type="text" v-model="model.Swda.Accreditation_Status" class="form-control" id="accreditationStatus">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="remarks">Remarks</label>
                            <input type="text" v-model="model.Swda.Remarks" class="form-control" id="remarks">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="licenseDaysLeft">License Days Left</label>
                            <input type="text" v-model="model.Swda.License_Days_Left" class="form-control" id="licenseDaysLeft">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="licensureOverdue">Licensure Overdue</label>
                            <input type="text" v-model="model.Swda.Licensure_Overdue" class="form-control" id="licensureOverdue">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="accreditationDaysLeft">Accreditation Days Left</label>
                            <input type="text" v-model="model.Swda.Accreditation_Days_Left" class="form-control" id="accreditationDaysLeft">
                        </div>
                        <div class="mb-3 col-3">
                            <label for="accreditationOverdue">Accreditation Overdue</label>
                            <input type="text" v-model="model.Swda.Accreditation_Overdue" class="form-control" id="accreditationOverdue">
                        </div>
                        <div class="md-3 col-12">
                            <button @click="saveSwda" class="btn btn-primary col-12">
                            Save
                            </button>
                        </div>
                        </div>

                    
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'AdminSWDACreate',
   data() {
        return {
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