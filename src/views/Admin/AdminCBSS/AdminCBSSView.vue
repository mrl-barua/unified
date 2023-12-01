<template>
  <div>
    <AdminSidebar :iconText="PageTitle" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <div class="col-12">
        <p class="headerText text-center">NAME</p>
        <p class="headerContent text-center">{{ model.Cbss.NAME }}</p>
        <hr class="hr pb-4" />

        <!-- FIRST ROW -->
        <div class="col-6 first-row">
          <div class="col-12">
            <div class="col-12">
              <p class="headerText">ADDRESS</p>
              <p v-if="model.Cbss.ADDRESS" class="headerContent">
                {{ model.Cbss.ADDRESS }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">AGE</p>
              <p v-if="model.Cbss.AGE" class="headerContent">
                {{ model.Cbss.AGE }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">AMOUNT</p>
              <p v-if="model.Cbss.AMOUNT" class="headerContent">
                {{ model.Cbss.AMOUNT }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">CASE CATEGORY</p>
              <p v-if="model.Cbss.CASE_CATEGORY" class="headerContent">
                {{ model.Cbss.CASE_CATEGORY }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">DATE</p>
              <p v-if="model.Cbss.DATE" class="headerContent">
                {{ model.Cbss.DATE }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
        </div>

        <!-- SECOND ROW -->
        <div class="col-6 second-row">
          <div class="col-12">
            <div class="col-12">
              <p class="headerText">MODE OF ADMISSION</p>
              <p v-if="model.Cbss.MODE_OF_ADMISSION" class="headerContent">
                {{ model.Cbss.MODE_OF_ADMISSION }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">NON MONETARY SERVICES</p>
              <p v-if="model.Cbss.NON_MONETARY_SERVICES" class="headerContent">
                {{ model.Cbss.NON_MONETARY_SERVICES }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">NUMBER OF SERVICES AVAILED</p>
              <p
                v-if="model.Cbss.NUMBER_OF_SERVICES_AVAILED"
                class="headerContent"
              >
                {{ model.Cbss.NUMBER_OF_SERVICES_AVAILED }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">PURPOSE</p>
              <p v-if="model.Cbss.Purpose" class="headerContent">
                {{ model.Cbss.Purpose }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">REMARKS</p>
              <p v-if="model.Cbss.REMARKS" class="headerContent">
                {{ model.Cbss.REMARKS }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";

export default {
  name: "AdminCBSSView",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN CBSS > VIEW", // The title displayed on the page, which is "ADMIN HR"
      CbssID: "",
      errorList: "",
      // The model for the form inputs  (the data that will be sent to the backend) is defined here as an empty object with the following properties: Osd
      model: {
        Cbss: {
          ID: "",
          DATE: "",
          NAME: "",
          AGE: "",
          SEX: "",
          CASE_CATEGORY: "",
          SUB_CATEGORY: "",
          MODE_OF_ADMISSION: "",
          ADDRESS: "",
          NON_MONETARY_SERVICES: "",
          Purpose: "",
          AMOUNT: "",
          REMARKS: "",
          REPONSIBLE_PERSON: "",
          NUMBER_OF_SERVICES_AVAILED: "",
        },
      },
    };
  },
  mounted() {
    //console.log(this.$route.params.ID);
    this.CbssID = this.$route.params.ID;
    //the OsdID is passed as a parameter to the OsdData() function  (which is defined below) to get the data of the HR with the given ID
    this.CbssData(this.$route.params.ID);
  },
  methods: {
    // The OsdData() function is used to get the data of the HR with the given ID
    CbssData(CbssID) {
      axios
        .get(`http://127.0.0.1:8000/api/cbsslist/${CbssID}/edit`)
        .then((res) => {
          const cbssData = res.data.Cbss;
          console.log(res.data.Cbss);

          this.model.Cbss.ID = cbssData.ID;
          this.model.Cbss.DATE = cbssData.DATE;
          this.model.Cbss.NAME = cbssData.NAME;
          this.model.Cbss.AGE = cbssData.AGE;
          this.model.Cbss.SEX = cbssData.SEX;
          this.model.Cbss.CASE_CATEGORY = cbssData.CASE_CATEGORY;
          this.model.Cbss.SUB_CATEGORY = cbssData.SUB_CATEGORY;
          this.model.Cbss.MODE_OF_ADMISSION = cbssData.MODE_OF_ADMISSION;
          this.model.Cbss.ADDRESS = cbssData.ADDRESS;
          this.model.Cbss.NON_MONETARY_SERVICES =
            cbssData.NON_MONETARY_SERVICES;
          this.model.Cbss.Purpose = cbssData.Purpose;
          this.model.Cbss.AMOUNT = cbssData.AMOUNT;
          this.model.Cbss.REMARKS = cbssData.REMARKS;
          this.model.Cbss.REPONSIBLE_PERSON = cbssData.REPONSIBLE_PERSON;
          this.model.Cbss.NUMBER_OF_SERVICES_AVAILED =
            cbssData.NUMBER_OF_SERVICES_AVAILED;
        })
        // If the HR with the given ID is not found, an error message will be displayed
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
  },
};
</script>

<style scoped>
.columns {
  padding: 0px 20px 0px 20px;
}
.AgencyTitle {
  font-family: Inter;
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
}

.agencyHeader {
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyHead {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyContent {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}
.error {
  color: red;
}

.headerText {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.headerContent {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.second-row {
  border-left: 1px solid gray;
  margin-bottom: 20px;
}

.second-row {
  padding-left: 10px;
}

.error {
  color: red;
}
</style>
