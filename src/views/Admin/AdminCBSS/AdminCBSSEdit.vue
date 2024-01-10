<template>
  <br /><br /><br /><br />
  <AdminSidebar
    v-if="admin === 'authenticated'"
    :iconText="PageTitle"
    :iconDetails="PageDetail"
  />
  <CbssSidebar
    v-if="cbssAdmin === 'authenticated'"
    iconText="PageTitle"
    :iconDetails="PageDetail"
  />
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
          <div class="col-12">
            <div class="spaceBetween">
              <div class="form-floating">
                <input
                  type="text"
                  v-model="model.Cbss.NAME"
                  class="form-control"
                  id="officeLocation"
                  placeholder="Responsible Person"
                  required
                />
                <label for="officeLocation">Full Name</label>
              </div>
            </div>
          </div>
          <!-- 1ST SECTION -->
          <div class="col-6">
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Cbss.REPONSIBLE_PERSON"
                  class="form-control"
                  id="responsiblePerson"
                  placeholder="Responsible Person"
                />
                <label for="responsiblePerson">Responsible Person</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Cbss.ADDRESS"
                  class="form-control"
                  id="address"
                  placeholder="Address"
                />
                <label for="address">Address</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="number"
                  v-model="model.Cbss.AGE"
                  class="form-control"
                  id="age"
                  placeholder="Age"
                />
                <label for="age">Age</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <select
                  v-model="model.Cbss.SEX"
                  class="form-select centered-placeholder"
                  id="sex"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                </select>
                <label for="sex">Sex</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="number"
                  v-model="model.Cbss.AMOUNT"
                  class="form-control"
                  id="amount"
                  placeholder="Amount"
                />
                <label for="amount">Amount</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <select
                  v-model="model.Cbss.CASE_CATEGORY"
                  class="form-select centered-placeholder"
                  id="caseCategory"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="WEDC">WEDC</option>
                  <option value="FHONA">FHONA</option>
                  <option value="OFW">OFW</option>
                  <option value="OLDER PERSONS">OLDER PERSONS</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
                <label for="caseCategory">Case Category</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="date"
                  v-model="model.Cbss.DATE"
                  class="form-control"
                  id="date"
                  placeholder="Date"
                />
                <label for="date">Date</label>
              </div>
            </div>
          </div>

          <!-- 2ND SECTION -->
          <div class="col-6">
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <select
                  v-model="model.Cbss.MODE_OF_ADMISSION"
                  class="form-select centered-placeholder"
                  id="modeOfAdmission"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="WALK-IN">WALK-IN</option>
                  <option value="DSWD XI CONCERNS">DSWD XI CONCERNS</option>
                  <option value="REFERRAL">REFERRAL</option>
                </select>
                <label for="modeOfAdmission">Mode of Admission</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <select
                  v-model="model.Cbss.NON_MONETARY_SERVICES"
                  class="form-select centered-placeholder"
                  id="nonMonetaryServices"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="Counseling/Advice">Counseling/Advice</option>
                  <option value="Travel Clearance">Travel Clearance</option>
                  <option value="Referral">Referral</option>
                </select>
                <label for="nonMonetaryServices">Non Monetary Services</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="number"
                  v-model="model.Cbss.NUMBER_OF_SERVICES_AVAILED"
                  class="form-control"
                  id="numberOfServicesAvailed"
                  placeholder="Number of Services Availed"
                />
                <label for="numberOfServicesAvailed"
                  >Number of Services Availed</label
                >
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <select
                  v-model="model.Cbss.SUB_CATEGORY"
                  class="form-select centered-placeholder"
                  id="subCategory"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="CNSP">CNSP</option>
                  <option value="EMOTIONALLY/PSYCHO DISTRESSED">
                    EMOTIONALLY/PSYCHO DISTRESSED
                  </option>
                  <option value="OFW">OFW</option>
                </select>
                <label for="subCategory">Sub Category</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <input
                  type="text"
                  v-model="model.Cbss.Purpose"
                  class="form-control"
                  id="purpose"
                  placeholder="Purpose"
                />
                <label for="purpose">Purpose</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating spaceBetween">
                <textarea
                  style="height: 120px"
                  v-model="model.Cbss.REMARKS"
                  class="form-control"
                  id="remarks"
                  placeholder="Remarks"
                ></textarea>
                <label for="remarks">Remarks</label>
              </div>
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
import CbssSidebar from "@/components/CbssSidebar";
import { backendURL } from "@/config.js";
export default {
  name: "AdminCBSSEdit",
  components: {
    AdminSidebar,
    CbssSidebar,
  },
  data() {
    return {
      PageTitle: "Community Based Services Section",
      PageDetail: "Edit Current Record",
      admin: null,
      cbssAdmin: null,
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
  computed: {
    // formattedDate: {
    //   get() {
    //     // Convert date from 'yyyy-mm-dd' to 'dd/mm/yyyy'
    //     const [year, month, day] = this.model.Cbss.DATE.split("-");
    //     return `${day}/${month}/${year}`;
    //   },
    //   set(value) {
    //     // Convert date from 'dd/mm/yyyy' to 'yyyy-mm-dd'
    //     const [day, month, year] = value.split("/");
    //     this.model.Cbss.DATE = `${year}-${month}-${day}`;
    //   },
    // },
  },
  mounted() {
    //console.log(this.$route.params.ID);
    this.CbssID = this.$route.params.ID;
    //the CbssID is passed as a parameter to the CbssData() function  (which is defined below) to get the data of the CBSS with the given ID
    this.CbssData(this.$route.params.ID);
    this.admin = sessionStorage.getItem("admin");
    this.cbssAdmin = sessionStorage.getItem("cbssAdmin");
  },
  methods: {
    async CbssData(CbssID) {
      try {
        const res = await axios.get(
          `${backendURL}/api/cbsslist/${CbssID}/edit`
        );
        const cbssData = res.data.Cbss;
        console.log(res.data);

        // Assign values from cbssData to this.model.Cbss
        Object.assign(this.model.Cbss, cbssData);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      }
    },

    async updateCbss(CbssID) {
      try {
        // Get the name from localStorage
        this.name = localStorage.getItem("name");

        // Set RESPONSIBLE_ADMIN to the current value of this.name
        this.model.Cbss.RESPONSIBLE_ADMIN = this.name;

        const res = await axios.put(
          `${backendURL}/api/cbsslist/${CbssID}/edit`,
          this.model.Cbss
        );
        console.log(res.data);

        await this.$swal({
          icon: "success",
          title: "Success!",
          text: res.data.message,
        });

        await this.$router.push("/admincbss");
        window.location.reload(); // reload the page after updating the data

        this.errorList = "";
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            this.errorList = error.response.data.errors;
          }
          if (error.response.status === 404) {
            alert(error.response.data.message);
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("error", error.message);
        }
      }
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

.col-12 {
  margin-bottom: 5px;
}
</style>
