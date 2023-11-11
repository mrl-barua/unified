<template>
  <div class="container-fluid" style="bac">
    <div class="images">
      <img src="/src/assets/DSWDLogo.png" alt="" />
    </div>

    <div
      class="form-container"
      :style="{ display: loginFormVisible ? 'block' : 'none' }"
      id="login-form"
    >
      <h4 class="text-start">Weclome</h4>
      <h1 class="text-start">Sign in to</h1>
      <h4 class="text-start">
        <span>UNIFIED</span>
        <span style="font-weight: bold; color: blue"> X</span
        ><span style="font-weight: bold; color: red">I</span>
      </h4>
      <br />
      <form @submit.prevent="login">
        <input
          v-model="username"
          type="Username"
          placeholder="Enter your Username"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Enter your Password"
        />
        <br /><br />
        <div v-if="error" class="error-message">
          User not found, Please enter correct credentials
        </div>
        <button type="submit" :disabled="loading">
          <span v-if="!loading">Login</span>
          <span v-else>Loading...</span>
        </button>
      </form>
      <p>
        Don't have an account?
        <a href="#" @click="switchToSignup" id="signup-link">Sign up</a>
      </p>
    </div>

    <div
      class="form-container"
      :style="{ display: signupFormVisible ? 'block' : 'none' }"
      id="signup-form"
    >
      <h1>Sign Up</h1>
      <form>
        <label for="new-username">Username</label>
        <input type="text" id="new-username" name="new-username" required />
        <label for="new-email">Email</label>
        <input type="email" id="new-email" name="new-email" required />
        <label for="new-password">Password</label>
        <input type="password" id="new-password" name="new-password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?
        <a href="#" @click="switchToLogin" id="login-link">Login</a>
      </p>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import axios from "axios";
import { backendURL } from "@/config.js";

export default {
  name: "LoginForm",
  components: { Footer },
  data() {
    return {
      username: "",
      password: "",
      error: false,
      loading: false,

      loginForm: null,
      signupForm: null,
      loginLink: null,
      signupLink: null,

      loginFormVisible: true, // Add this line
      signupFormVisible: false, // Add this line
    };
  },
  mounted() {
    this.loginForm = document.getElementById("login-form");
    this.signupForm = document.getElementById("signup-form");
    this.loginLink = document.getElementById("login-link");
    this.signupLink = document.getElementById("signup-link");

    this.loginLink.addEventListener("click", (event) => {
      event.preventDefault();
      this.signupForm.style.display = "none";
      this.loginForm.style.display = "block";

      setTimeout(() => {
        this.signupForm.style.opacity = 0;
        this.loginForm.style.opacity = 1;
      }, 10);
    });

    this.signupLink.addEventListener("click", (event) => {
      event.preventDefault();
      this.loginForm.style.display = "none";
      this.signupForm.style.display = "block";

      setTimeout(() => {
        this.loginForm.style.opacity = 0;
        this.signupForm.style.opacity = 1;
      }, 10);
    });
  },
  methods: {
    switchToLogin() {
      this.signupFormVisible = false;
      this.loginFormVisible = true;
    },

    switchToSignup() {
      this.loginFormVisible = false;
      this.signupFormVisible = true;
    },

    login() {
      // Set loading state to true
      this.loading = true;

      // Simulate a delay to mimic a server response (remove this in a real scenario)
      setTimeout(() => {
        // Perform authentication logic here (e.g., check username and password)
        if (this.username === "User" && this.password === "user") {
          // Authentication successful, set user as authenticated in localStorage
          sessionStorage.setItem("user", "authenticated");

          // Navigate to the dashboard
          this.$router.push("/dashboard");
        } else if (this.username === "Admin" && this.password === "admin") {
          // Authentication successful, set user as authenticated in localStorage
          sessionStorage.setItem("admin", "authenticated");

          // Navigate to the dashboard
          this.$router.push("/admindashboard");
        } else {
          // Authentication failed, display error message
          this.error = true;
        }

        // Reset loading state to false after authentication logic
        this.loading = false;
      }, 1000); // Simulated delay of 1 second
    },

    // login() {
    //   // Set loading state to true
    //   this.loading = true;

    //   // Define the API URL
    //   const apiUrl = `${backendURL}/api/loginCredentials`;

    //   // Make an Axios GET request to fetch user data
    //   axios
    //     .get(apiUrl)
    //     .then((response) => {
    //       // Find the user with matching empid and qr_code
    //       const user = response.data.find(
    //         (user) => user.empid === this.username && user.qr_code === this.password
    //       );

    //       if (user) {
    //         // Authentication successful, set user as authenticated in localStorage
    //         localStorage.setItem('user', 'authenticated');

    //         // Navigate to the dashboard
    //         this.$router.push('/dashboard');
    //       } else {
    //         // Authentication failed, display error message
    //         this.error = true;
    //       }
    //     })
    //     .catch((error) => {
    //       // Handle API request error, e.g., display an error message
    //       console.error('API request failed:', error);
    //       this.error = true;
    //     })
    //     .finally(() => {
    //       // Reset loading state to false after the request
    //       this.loading = false;
    //     });
    // },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: #222;
}

.images {
  position: absolute;
  top: 1%;
  left: 1%;
}

.images img {
  width: 200px;
  visibility: hidden;

  @media only screen and (min-width: 375px) {
    width: 200px;
    visibility: visible;
  }

  @media only screen and (min-width: 830px) {
    width: 280px;
  }

  @media only screen and (min-width: 1280px) {
    width: 280px;
  }
}

.error-message {
  color: red;
  text-align: center;
  margin-bottom: 10px;
  margin-top: -10px;

  @media only screen and (min-width: 680px) {
    margin-bottom: 20px;
    margin-top: -45px;
  }
}

.container-fluid {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -60px;
  background-image: url("../assets/dswd_background.png");
  background-size: cover; /* Optional: adjust to your needs */
  background-repeat: no-repeat; /* Optional: adjust to your needs */
}

.form-container {
  width: 450px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  color: #ffffff;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 36px;
  color: black;
  font-weight: 600;
}

p,
label {
  color: black;
}

.text-start {
  text-align: start;
  margin-bottom: 10px;
  color: black;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-size: 18px;
}

input {
  padding: 12px;
  border: 2px solid #878787;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  color: black;
  background-color: #ffffff;
}

button {
  padding: 10px;
  background-color: #292d96;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #8c5fb2;
}

a {
  text-decoration: none;
  color: #b38bff;
  font-size: 18px;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: #8c5fb2;
}

p {
  text-align: center;
  margin: 8px;
}
</style>
