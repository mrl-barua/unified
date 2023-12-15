<template>
  <div>
    <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
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

          <div class="col-12">
            <div class="col-12">
              <p class="headerText">SEX</p>
              <p v-if="model.Cbss.SEX" class="headerContent">
                {{ model.Cbss.SEX }}
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
import { backendURL } from "@/config.js";
export default {
  name: "AdminCBSSView",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "Community Based Services Section",
      PageDetail: "View Edit Details",
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
    //the CbssID is passed as a parameter to the CbssData() function  (which is defined below) to get the data of the CBSS with the given ID
    this.CbssEditHistoryData(this.$route.params.ID);
  },
  methods: {
    async CbssEditHistoryData(CbssID) {
      try {
        const res = await axios.get(
          `${backendURL}/api/cbssVersion/${CbssID}/view`
        );
        const cbssData = res.data.Cbss;
        console.log(res.data.Cbss);

        // Check if cbssData is null or empty
        if (!cbssData || Object.keys(cbssData).length === 0) {
          this.model.Cbss = this.model.Cbss.map(() => "No Data");
        } else {
          // Assign values from cbssData to this.model.Cbss
          Object.assign(this.model.Cbss, cbssData);
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      }
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
