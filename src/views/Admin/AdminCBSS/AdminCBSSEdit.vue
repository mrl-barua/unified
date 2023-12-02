<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" />
  <div>
    <div class="container-fluid">
      <div class="Header"></div>

      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- ! SHOW ERROR DIALOGUE -->
      <ul
        class="alert alert-warning"
        v-if="Object.keys(this.errorList).length > 0"
      >
        <li
          class="mb-0 ms-3"
          v-for="(error, index) in this.errorList"
          :key="index"
        >
          {{ error[0] }}
        </li>
      </ul>
      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- ! SHOW ERROR DIALOGUE -->
      <!-- ! SHOW ERROR DIALOGUE -->
      <div class="container-fluid wrapper">
        <div class="col-12">
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">DATE</label>
              <input
                type="text"
                v-model="model.Cbss.DATE"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">NAME</label>
              <input
                type="text"
                v-model="model.Cbss.NAME"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">AGE</label>
              <input
                type="text"
                v-model="model.Cbss.AGE"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">SEX</label>
              <input
                type="text"
                v-model="model.Cbss.SEX"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">CASE CATEGORY</label>
              <input
                type="text"
                v-model="model.Cbss.CASE_CATEGORY"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">SUB CATEGORY</label>
              <input
                type="text"
                v-model="model.Cbss.SUB_CATEGORY"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">MODE OF ADMISSION</label>
              <input
                type="text"
                v-model="model.Cbss.MODE_OF_ADMISSION"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">ADDRESS</label>
              <input
                type="text"
                v-model="model.Cbss.ADDRESS"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">NON MONETARY SERVICES</label>
              <input
                type="text"
                v-model="model.Cbss.NON_MONETARY_SERVICES"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">PURPOSE</label>
              <input
                type="text"
                v-model="model.Cbss.Purpose"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">AMOUNT</label>
              <input
                type="text"
                v-model="model.Cbss.AMOUNT"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="spaceBetween">
              <label for="officeLocation">REMARKS</label>
              <input
                type="text"
                v-model="model.Cbss.REMARKS"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-6">
            <div class="spaceBetween">
              <label for="officeLocation">RESPONSIBLE PERSON</label>
              <input
                type="text"
                v-model="model.Cbss.REPONSIBLE_PERSON"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="spaceBetween">
              <label for="officeLocation">NUMBER OF SERVICES AVAILED</label>
              <input
                type="text"
                v-model="model.Cbss.NUMBER_OF_SERVICES_AVAILED"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="md-3 col-12 buttons d-flex justify-content-end">
        <router-link to="/admincbss">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>
        <router-link to="/admincbss">
          <button
            @click="updateCbss($route.params.ID)"
            class="btn btn-primary col-12"
          >
            Save
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";

export default {
  name: "AdminCBSSEdit",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN CBSS > EDIT", // The title displayed on the page, which is "ADMIN HR"
      CbssID: "",
      errorList: "",
      // The model for the form inputs  (the data that will be sent to the backend) is defined here as an empty object with the following properties: Hr
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
    //the CbssID is passed as a parameter to the CbssData() function  (which is defined below) to get the data of the HR with the given ID
    this.CbssData(this.$route.params.ID);
  },
  methods: {
    // The CbssData() function is used to get the data of the HR with the given ID
    CbssData(CbssID) {
      axios
        .get(`http://127.0.0.1:8000/api/cbsslist/${CbssID}/edit`)
        .then((res) => {
          const cbssData = res.data.Cbss;
          console.log(res.data);

          // Check if hrData is null or empty
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
        // If the CBSS with the given ID is not found, an error message will be displayed
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
    // The updateCbss() function is used to update the data of the HR with the given ID in the database using the backend API endpoint for updating HR data
    updateCbss(CbssID) {
      var mythis = this;
      axios
        .put(
          `http://127.0.0.1:8000/api/cbsslist/${CbssID}/edit`,
          // The data to be updated is passed as a parameter to the axios.put() function
          // as the second parameter (the first parameter is the API endpoint) in the form of
          // an object with the following properties: Hr (which contains the data to be updated)
          // and _method (which is set to "PUT" to indicate that the data will be updated)
          this.model.Cbss
        )
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);

          this.errorList = "";

          window.location.reload(); // reload the page after updating the data
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              mythis.errorList = error.response.data.errors;
            }
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("error", error.message);
          }
        });
    },
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 100px;
}

.centered-placeholder::placeholder {
  text-align: center;
}

.spaceBetween {
  margin: 0px 10px 0px 10px;
  /* font-family: Inter; */
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
}

.spaceBetween label {
  padding-left: 10px;
  font-weight: bold;
}

.custom-input {
  height: 113px; /* Adjust the height value as needed */
}

.btn {
  margin-right: 20px;
  width: 180px;
  margin-bottom: 20px;
}
</style>
