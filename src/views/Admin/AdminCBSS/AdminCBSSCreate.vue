<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
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
                  class="form-control centered-placeholder"
                  id="sex"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
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
                  class="form-control centered-placeholder"
                  id="caseCategory"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
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
                  class="form-control centered-placeholder"
                  id="modeOfAdmission"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
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
                  class="form-control centered-placeholder"
                  id="nonMonetaryServices"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
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
                  class="form-control centered-placeholder"
                  id="subCategory"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
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
          <button type="submit" @click="saveCbss" class="btn btn-primary">
            SAVE
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";
import { backendURL } from "@/config.js";
export default {
  name: "AdminCBSSCreate",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "Community Based Services Section",
      PageDetail: "Add New Record",
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
  mounted() {},
  methods: {
    saveCbss() {
      var mythis = this;
      axios
        .post(`${backendURL}/api/cbsslist`, this.model.Cbss)
        .then((res) => {
          console.log(res.data);
          // alert(res.data.message);
          this.$swal({
            icon: "success",
            title: "Success!",
            text: res.data.message,
          })
            .then(() => {
              this.$router.push("/admincbss");
              // window.location.reload();
            })
            .then(() => {
              // this.$router.push("/admincbss");
              window.location.reload();
            });
          this.model.Cbss = {
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
          };

          // window.location.reload(); // RELOAD THE PAGE TO REMOVE THE ERRORS
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              mythis.errorList = error.response.data.errors;
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
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

.col-12 {
  margin-bottom: 5px;
}
</style>
