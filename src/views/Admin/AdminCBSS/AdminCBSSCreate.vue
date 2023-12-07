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

      <!-- <div class="container-fluid wrapper">
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
                type="number"
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
                type="number"
                v-model="model.Cbss.NUMBER_OF_SERVICES_AVAILED"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
        </div>
      </div> -->
      <div class="container-fluid wrapper">
        <div class="col-12">
          <div class="col-12">
            <div class="spaceBetween">
              <label for="officeLocation">Full Name</label>
              <input
                type="text"
                v-model="model.Cbss.NAME"
                class="form-control"
                id="officeLocation"
              />
            </div>
          </div>
          <!-- 1ST SECTION -->
          <div class="col-6">
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Responsible Person</label>
                <input
                  type="text"
                  v-model="model.Cbss.REPONSIBLE_PERSON"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Address</label>
                <input
                  type="text"
                  v-model="model.Cbss.ADDRESS"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Age</label>
                <input
                  type="number"
                  v-model="model.Cbss.AGE"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Sex</label>
                <select
                  v-model="model.Cbss.SEX"
                  class="form-control centered-placeholder"
                  id="cluster"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Amount</label>
                <input
                  type="number"
                  v-model="model.Cbss.AMOUNT"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Case Category</label>
                <!-- <input
                  type="text"
                  v-model="model.Cbss.CASE_CATEGORY"
                  class="form-control"
                  id="officeLocation"
                /> -->
                <select
                  v-model="model.Cbss.CASE_CATEGORY"
                  class="form-control centered-placeholder"
                  id="cluster"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
                  <option value="WEDC">WEDC</option>
                  <option value="FHONA">FHONA</option>
                  <option value="OFW">OFW</option>
                  <option value="OLDER PERSONS">OLDER PERSONS</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Date</label>
                <input
                  type="date"
                  v-model="model.Cbss.DATE"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
          </div>

          <!-- 2ND SECTION -->
          <div class="col-6">
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Mode of Admission</label>
                <!-- <input
                  type="text"
                  v-model="model.Cbss.MODE_OF_ADMISSION"
                  class="form-control"
                  id="officeLocation"
                /> -->
                <select
                  v-model="model.Cbss.MODE_OF_ADMISSION"
                  class="form-control centered-placeholder"
                  id="cluster"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
                  <option value="WALK-IN">WALK-IN</option>
                  <option value="DSWD XI CONCERNS">DSWD XI CONCERNS</option>
                  <option value="REFERRAL">REFERRAL</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Non Monetary Services</label>
                <!-- <input
                  type="text"
                  v-model="model.Cbss.NON_MONETARY_SERVICES"
                  class="form-control"
                  id="officeLocation"
                /> -->

                <select
                  v-model="model.Cbss.NON_MONETARY_SERVICES"
                  class="form-control centered-placeholder"
                  id="cluster"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
                  <option value="Counseling/Advice">Counseling/Advice</option>
                  <option value="Travel Clearance">Travel Clearance</option>
                  <option value="Referral">Referral</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Number of Services Availed</label>
                <input
                  type="number"
                  v-model="model.Cbss.NUMBER_OF_SERVICES_AVAILED"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Sub Category</label>
                <select
                  v-model="model.Cbss.SUB_CATEGORY"
                  class="form-control centered-placeholder"
                  id="cluster"
                >
                  <option value="" disabled selected>Select an option ⮟</option>
                  <option value="CNSP">CNSP</option>
                  <option value="EMOTIONALLY/PSYCHO DISTRESSED">
                    EMOTIONALLY/PSYCHO DISTRESSED
                  </option>
                  <option value="OFW">OFW</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Purpose</label>
                <input
                  type="text"
                  v-model="model.Cbss.Purpose"
                  class="form-control"
                  id="officeLocation"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="spaceBetween">
                <label for="officeLocation">Remarks</label>
                <input
                  type="text"
                  v-model="model.Cbss.REMARKS"
                  class="form-control"
                  id="officeLocation"
                />
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
        .post("http://127.0.0.1:8000/api/cbsslist", this.model.Cbss)
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
