<template>
  <br /><br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
  <div>
    <div class="container-fluid">
      <div class="container-fluid wrapper text-start">
        <div class="col-12">
          <div class="col-12">
            <div class="col-12">
              <div class="form-floating mb-1">
                <input
                  type="text"
                  v-model="model.Admin.name"
                  class="form-control"
                  id="floatingName"
                  placeholder="Name"
                />
                <label for="floatingName">Name</label>
                <p class="text-danger">
                  {{ newErrors.name ? newErrors.name[0] : "" }}
                </p>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating mb-1">
                <select
                  v-model="model.Admin.role"
                  class="form-select"
                  id="floatingRole"
                  aria-label="Floating label select example"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="swdaAdmin">Swda Admin</option>
                  <option value="cbssAdmin">Cbss Admin</option>
                  <option value="hrAdmin">Hr Admin</option>
                  <option value="osdAdmin">Osd Admin</option>
                </select>
                <label for="floatingRole">Roles</label>
                <p class="text-danger">
                  {{ newErrors.role ? newErrors.role[0] : "" }}
                </p>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating mb-1">
                <input
                  type="email"
                  v-model="model.Admin.email"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                />
                <label for="floatingEmail">Email address</label>
                <p class="text-danger">
                  {{ newErrors.email ? newErrors.email[0] : "" }}
                </p>
              </div>
            </div>

            <div class="col-12">
              <div class="form-floating mb-1">
                <input
                  v-if="showPassword"
                  type="text"
                  v-model="model.Admin.password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />

                <input
                  v-else
                  type="password"
                  v-model="model.Admin.password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
                <p class="text-danger">
                  {{ newErrors.password ? newErrors.password[0] : "" }}
                </p>
                <button @click="togglePassword" class="toggle-password-btn">
                  {{ showPassword ? "Hide" : "Show" }} Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-3 col-12 buttons d-flex justify-content-end">
        <router-link to="/adminSettings">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>

        <button type="submit" @click="saveAdmin" class="btn btn-primary">
          SAVE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";
import { backendURL } from "@/config.js";
export default {
  name: "AddUserAccess",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "Settings",
      PageDetail: "Add New User",
      showPassword: false,
      newErrors: [],
      AdminID: "",
      errorList: "",
      errors: {
        email: "",
        name: "",
        role: "",
      },
      // The model for the form inputs  (the data that will be sent to the backend) is defined here as an empty object with the following properties: Osd
      model: {
        Admin: {
          id: "",
          name: "",
          role: "",
          email: "",
          password: "",
        },
      },
    };
  },
  mounted() {},
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    saveAdmin() {
      axios
        .post(`${backendURL}/api/storeAdmin`, this.model.Admin)
        .then((res) => {
          console.log(res.data);
          this.$swal({
            icon: "success",
            title: "Success!",
            text: res.data.message,
          })
            .then(() => {
              this.$router.push("/adminSettings");
            })
            .then(() => {});

          // window.location.reload();
          this.model.Admin = {
            id: "",
            name: "",
            role: "",
            email: "",
            password: "",
          };
        })

        .catch((error) => {
          if (error.response) {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            }
            console.log(error.response.data.errors);
            // console.log(error.response.status);
            // console.log(error.response.headers);

            this.newErrors = error.response.data.errors;
            console.log(this.newErrors);
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

.toggle-password-btn {
  margin-top: 10px;
  margin-left: 0px;
  padding: 5px 10px;
  border: none;
  background-color: gray;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.toggle-password-btn:hover {
  background-color: #0056b3;
}

.error-list {
  list-style-type: none;
  padding: 10px;
  margin: 10px 0;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}

.error-item {
  margin-bottom: 5px;
  padding-left: 15px;
}
</style>
