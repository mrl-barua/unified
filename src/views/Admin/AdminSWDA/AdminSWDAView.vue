<template>
  <div>
    <AdminSidebar :iconText="PageTitle" />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <p class="agencyHeader">Agency</p>
      <p class="agencyText" v-if="model.Swda && model.Swda.Agency">
        {{ model.Swda.Agency }}
      </p>
      <p v-else class="agencyText error">No Data</p>

      <div class="col-6">
        <p class="agencyHeader">Former Name</p>
        <p class="agencyText" v-if="model.Swda && model.Swda.Former_Name">
          {{ model.Swda.Former_Name }}
        </p>
        <p v-else class="agencyText error">No Data</p>

        <p class="agencyHeader">Address</p>
        <p class="agencyText">{{ model.Swda.Address }}</p>

        <p class="agencyHeader">Contact Person</p>
        <p class="agencyText">{{ model.Swda.Contact_Person }}</p>

        <p class="agencyHeader">Position</p>
        <p class="agencyText">{{ model.Swda.Position }}</p>

        <p class="agencyHeader">Mobile Number</p>
        <p class="agencyText">{{ model.Swda.Mobile_Number }}</p>
      </div>
      <div class="col-6">
        <p class="agencyHeader">Type</p>
        <p class="agencyText" v-if="model.Swda && model.Swda.Type">
          {{ model.Swda.Type }}
        </p>
        <p v-else class="agencyText error">No Data</p>

        <p class="agencyHeader">Cluster</p>
        <p class="agencyText" v-if="model.Swda && model.Swda.Cluster">
          {{ model.Swda.Cluster }}
        </p>
        <p v-else class="agencyText error">No Data</p>

        <p class="agencyHeader">Contact Number</p>
        <p class="agencyText" v-if="model.Swda && model.Swda.Contact_Number">
          {{ model.Swda.Contact_Number }}
        </p>
        <p v-else class="agencyText error">No Data</p>

        <!-- //TODO REFERENCE FOR V-IF and V-ELSE -->
        <p class="agencyHeader">FAX</p>
        <p v-if="model.Swda && model.Swda.Fax" class="agencyText">
          {{ model.Swda.Fax }}
        </p>
        <p v-else class="agencyText error">No Data</p>

        <p class="agencyHeader">Email Address</p>
        <p class="agencyText" v-if="model.Swda && model.Swda.Email">
          {{ model.Swda.Email }}
        </p>
        <p v-else class="agencyText error">No Data</p>

        <p class="agencyHeader">Website</p>
        <p class="agencyText" v-if="model.Swda && model.Swda.Website">
          {{ model.Swda.Website }}
        </p>
        <p v-else class="agencyText error">No Data</p>
      </div>

      <div class="col-12">
        <hr class="hr" />
        <div class="col-4">
          <p class="agencyHeader">Registration Status</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Registration_Status"
          >
            {{ model.Swda.Registration_Status }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Registration ID</p>
          <p class="agencyText" v-if="model.Swda && model.Swda.Registration_ID">
            {{ model.Swda.Registration_ID }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Registration Date</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Registration_Date"
          >
            {{ model.Swda.Registration_Date }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Registration Expiration</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Registration_Expiration"
          >
            {{ model.Swda.Registration_Expiration }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Registered</p>
          <p class="agencyText" v-if="model.Swda && model.Swda.Registered">
            {{ model.Swda.Registered }}
          </p>
          <p v-else class="agencyText error">No Data</p>
        </div>

        <div class="col-4">
          <p class="agencyHeader">Licensed</p>
          <p class="agencyText" v-if="model.Swda && model.Swda.Licensed">
            {{ model.Swda.Licensed }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Licensed ID</p>
          <p class="agencyText" v-if="model.Swda && model.Swda.Licensed_ID">
            {{ model.Swda.Licensed_ID }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">License Date Issued</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.License_Date_Issued"
          >
            {{ model.Swda.License_Date_Issued }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">License Expiration</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.License_Expiration"
          >
            {{ model.Swda.License_Expiration }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">License Status</p>
          <p class="agencyText" v-if="model.Swda && model.Swda.License_Status">
            {{ model.Swda.License_Status }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">License Days Left</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.License_Days_Left"
          >
            {{ model.Swda.License_Days_Left }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Licensure Overdue</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Licensure_Overdue"
          >
            {{ model.Swda.Licensure_Overdue }}
          </p>
          <p v-else class="agencyText error">No Data</p>
        </div>

        <div class="col-4">
          <p class="agencyHeader">Accredited</p>
          <p class="agencyText" v-if="model.Swda && model.Swda.Accredited">
            {{ model.Swda.Accredited }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Accreditation ID</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Accreditation_ID"
          >
            {{ model.Swda.Accreditation_ID }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Accreditation Date Issued</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Accreditation_Date_Issued"
          >
            {{ model.Swda.Accreditation_Date_Issued }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Accreditation Expiration</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Accreditation_Expiration"
          >
            {{ model.Swda.Accreditation_Expiration }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Accreditation Status</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Accreditation_Status"
          >
            {{ model.Swda.Accreditation_Status }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Accreditation Days Left</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Accreditation_Days_Left"
          >
            {{ model.Swda.Accreditation_Days_Left }}
          </p>
          <p v-else class="agencyText error">No Data</p>

          <p class="agencyHeader">Accreditation Overdue</p>
          <p
            class="agencyText"
            v-if="model.Swda && model.Swda.Accreditation_Overdue"
          >
            {{ model.Swda.Accreditation_Overdue }}
          </p>
          <p v-else class="agencyText error">No Data</p>
        </div>

        <div class="col-12">
          <hr class="hr" />
          <div class="col-6">
            <p class="agencyHeader">Specified Area of Operations</p>
            <p
              class="agencyText"
              v-if="model.Swda && model.Swda.Specified_Areas_of_Operation"
            >
              {{ model.Swda.Specified_Areas_of_Operation }}
            </p>
            <p v-else class="agencyText error">No Data</p>

            <p class="agencyHeader">Area of Operation</p>
            <p
              class="agencyText"
              v-if="model.Swda && model.Swda.Area_of_Operation"
            >
              {{ model.Swda.Area_of_Operation }}
            </p>
            <p v-else class="agencyText error">No Data</p>

            <p class="agencyHeader">Regional Operation</p>
            <p class="agencyText" v-if="model.Swda.Regional_Operation">
              {{ model.Swda.Regional_Operation }}
            </p>
            <p v-else class="agencyText error">No Data</p>

            <p class="agencyHeader">Mode of Delivery</p>
            <p
              class="agencyText"
              v-if="model.Swda && model.Swda.Mode_of_Delivery"
            >
              {{ model.Swda.Mode_of_Delivery }}
            </p>
            <p v-else class="agencyText error">No Data</p>
          </div>
          <div class="col-6">
            <p class="agencyHeader">Services Offered</p>
            <p
              class="agencyText"
              v-if="model.Swda && model.Swda.Services_Offered"
            >
              {{ model.Swda.Services_Offered }}
            </p>
            <p v-else class="agencyText error">No Data</p>

            <p class="agencyHeader">Simplified Services</p>
            <p
              class="agencyText"
              v-if="model.Swda && model.Swda.Simplified_Services"
            >
              {{ model.Swda.Simplified_Services }}
            </p>
            <p v-else class="agencyText error">No Data</p>

            <p class="agencyHeader">Clientele</p>
            <p class="agencyText" v-if="model.Swda && model.Swda.Clientele">
              {{ model.Swda.Clientele }}
            </p>
            <p v-else class="agencyText error">No Data</p>

            <p class="agencyHeader">Remarks</p>
            <p class="agencyText" v-if="model.Swda && model.Swda.Remarks">
              {{ model.Swda.Remarks }}
            </p>
            <p v-else class="agencyText error">No Data</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar";
import axios from "axios"; // Import Axios

export default {
  name: "AdminSWDAView",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN SWDA VIEW",

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
    this.SwdaID = this.$route.params.ID;
    this.SwdaData(this.SwdaID);
  },
  methods: {
    // SwdaData(SwdaID) {
    //   axios
    //     .get(`http://127.0.0.1:8000/api/swdalist/${SwdaID}/edit`)

    //     .then((res) => {
    //       const swdaData = res.data.Swda;
    //       console.log(res.data.Swda);

    //       this.model.Swda.Type = swdaData.Type;
    //       this.model.Swda.Sector = swdaData.Sector;
    //       this.model.Swda.Cluster = swdaData.Cluster;
    //       this.model.Swda.Agency = swdaData.Agency;
    //       this.model.Swda.Address = swdaData.Address;
    //       this.model.Swda.Former_Name = swdaData.Former_Name;
    //       this.model.Swda.Contact_Number = swdaData.Contact_Number;
    //       this.model.Swda.Fax = swdaData.Fax;
    //       this.model.Swda.Email = swdaData.Email;
    //       this.model.Swda.Website = swdaData.Website;
    //       this.model.Swda.Contact_Person = swdaData.Contact_Person;
    //       this.model.Swda.Position = swdaData.Position;
    //       this.model.Swda.Mobile_Number = swdaData.Mobile_Number;
    //       this.model.Swda.Registered = swdaData.Registered;
    //       this.model.Swda.Licensed = swdaData.Licensed;
    //       this.model.Swda.Accredited = swdaData.Accredited;
    //       this.model.Swda.Services_Offered = swdaData.Services_Offered;
    //       this.model.Swda.Simplified_Services = swdaData.Simplified_Services;
    //       this.model.Swda.Area_of_Operation = swdaData.Area_of_Operation;
    //       this.model.Swda.Regional_Operation = swdaData.Regional_Operation;
    //       this.model.Swda.Specified_Areas_of_Operation =
    //         swdaData.Specified_Areas_of_Operation;
    //       this.model.Swda.Mode_of_Delivery = swdaData.Mode_of_Delivery;
    //       this.model.Swda.Clientele = swdaData.Clientele;
    //       this.model.Swda.Registration_ID = swdaData.Registration_ID;
    //       this.model.Swda.Registration_Date = swdaData.Registration_Date;
    //       this.model.Swda.Registration_Expiration =
    //         swdaData.Registration_Expiration;
    //       this.model.Swda.Registration_Status = swdaData.Registration_Status;
    //       this.model.Swda.Licensed_ID = swdaData.Licensed_ID;
    //       this.model.Swda.License_Date_Issued = swdaData.License_Date_Issued;
    //       this.model.Swda.License_Expiration = swdaData.License_Expiration;
    //       this.model.Swda.License_Status = swdaData.License_Status;
    //       this.model.Swda.Accreditation_ID = swdaData.Accreditation_ID;
    //       this.model.Swda.Accreditation_Date_Issued =
    //         swdaData.Accreditation_Date_Issued;
    //       this.model.Swda.Accreditation_Expiration =
    //         swdaData.Accreditation_Expiration;
    //       this.model.Swda.Accreditation_Status = swdaData.Accreditation_Status;
    //       this.model.Swda.Remarks = swdaData.Remarks;
    //       this.model.Swda.License_Days_Left = swdaData.License_Days_Left;
    //       this.model.Swda.Licensure_Overdue = swdaData.Licensure_Overdue;
    //       this.model.Swda.Accreditation_Days_Left =
    //         swdaData.Accreditation_Days_Left;
    //       this.model.Swda.Accreditation_Overdue =
    //         swdaData.Accreditation_Overdue;
    //     })
    //     .catch(function (error) {
    //       if (error.response) {
    //         if (error.response.status === 404) {
    //           alert(error.response.data.message);
    //         }
    //       }
    //     });
    // },

    SwdaData(SwdaID) {
      axios
        .get(`http://127.0.0.1:8000/api/swdalist/${SwdaID}/edit`)
        .then((res) => {
          const swdaData = res.data.Swda;
          console.log(res.data.Swda);

          // Check if swdaData is null or empty
          if (!swdaData || Object.keys(swdaData).length === 0) {
            for (const key in this.model.Swda) {
              this.model.Swda[key] = "No Data";
            }
          } else {
            // Assign values from swdaData to this.model.Swda
            for (const key in swdaData) {
              this.model.Swda[key] = swdaData[key];
            }
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            alert(error.response.data.message);
          }
        });
    },
  },
};
</script>

<style scoped>
.agencyHeader {
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyText {
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}

.error {
  color: red;
}
</style>
