<template>
<!-- <Header /> -->
<div class="parent clearfix">

    <div class="headerComponent">
        <img class="float-start header-image" src="@/assets/DSWDLogo.png" alt="dswdLogo">
    </div>


    <div class="bg-illustration">

        <!-- <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo"> -->
      <!-- <img class="DSWDLogo" src="@/assets/DSWDLogo.png" alt="logo" /> -->

      <!-- <img class="BagongPilipinas" src="@/assets/BagongPilipinas.png" alt="logo" /> -->

      <!-- <div class="burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div> -->


        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/dswd_carousel1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/dswd_carousel1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/dswd_carousel1.png" class="d-block w-100" alt="...">
            </div>
          </div>
          <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> -->
        </div>

        <p class="lead text-start text-white text-bold text-wrap">
          DSWD envisions an empowered and resilient society where Filipinos enjoy an improved quality of life, are free from hunger, poverty, abuse, and exploitation, have equitable access to development opportunities, enabled by a fair, just, and peaceful governance. DSWD is committed to fostering this vision through its comprehensive social welfare and development programs.
         </p>


  </div>

  <div class="login">
    <div class="container">
      <h1>Login</h1>
      <div class="login-form">
        <form @submit.prevent="login">
          <input v-model="username" type="Username" placeholder="Username">
          <input v-model="password" type="password" placeholder="Password">
          <br><br>
          <div v-if="error" class="error-message">User not found, Please enter correct credentials</div>
          <button type="submit" :disabled="loading">
            <span v-if="!loading">LOG-IN</span>
            <span v-else>Loading...</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
<Footer />
</template>

<script>
import Footer from '@/components/Footer'; 


export default {
  name: 'LoginForm',
  components: { Footer},
  data() {
  return {
    username: '',
    password: '',
    error: false,
    loading: false, 
  };
},



methods: {
  login() {
  // Set loading state to true
  this.loading = true;

  // Simulate a delay to mimic a server response (remove this in a real scenario)
  setTimeout(() => {
    // Perform authentication logic here (e.g., check username and password)
    if (this.username === 'Admin' && this.password === 'admin') {
      // Authentication successful, set user as authenticated in localStorage
      localStorage.setItem('user', 'authenticated');

      // Navigate to the dashboard
      this.$router.push('/dashboard');
    } else {
      // Authentication failed, display error message
      this.error = true;
    }

    // Reset loading state to false after authentication logic
    this.loading = false;
  }, 1000); // Simulated delay of 1 second
},
created() {
    // Clear the user's authentication status in localStorage when the login page is visited
    localStorage.removeItem('user');
  },

},

};
</script>




<style scoped>

.lead {
  padding: 0px 60px 0px 60px;
}


.carousel {
  position: relative;
  top: 0; /* Reset the top position */
  margin: 0 auto; /* Center the element horizontally */
  border-radius: 20px;
  /* padding-top: 10px;  */
  padding-bottom: 10px;
  width: 100%; /* Set a default width */
  visibility: hidden;

  @media only screen and (min-width: 400px) {
    width: 60%;
  }

  @media only screen and (min-width: 504px) {
    width: 50%;
  }

  @media only screen and (min-width: 524px) {
    width: 50%;
  }

  @media only screen and (min-width: 590px) {
    width: 50%;
    margin-left: 10px; /* Adjust margin if necessary */
  }

  @media only screen and (min-width: 720px) {
    width: 38%;
    margin-left: 10px; /* Adjust margin if necessary */
  }

  @media only screen and (min-width: 1024px) {
    visibility: visible;
    padding-top: 40px;
    margin-left: 20px; /* Adjust margin if necessary */
    width: 90%;
  }

  @media only screen and (min-width: 1244px) {

  }
}




* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}


    .header-image{
      padding-left: 50px;
    }
    .headerComponent{
      position: relative;

      height: 5em;
      background: linear-gradient(to right, white 15%, #EE1C25 85%);
      z-index: 999;
      margin-top:-60px;
      margin-bottom: 20px;
      padding: 0;
    }

    .headerComponent img{
      height: 70px;
      padding-top: 10px;
    }




body {
  background-color: #fff;
  font-family: Montserrat;
  overflow-x: hidden;
}

.error-message{
  color: red;
  text-align: left;
  margin-bottom: 20px;
  margin-top: -50px;
}

article,
aside,
details,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  text-decoration: none;
}

img {
  border: none;
}

*:focus {
  outline: none;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}


.bg-illustration {
  margin-top: -3.73em;
  position: relative;
  height: 100vh;
  width: 1194px;
  /* background: url("https://i.ibb.co/RhMZprS/jony-Image2-1.png") no-repeat center center scroll; */
  background: #294D9C;
  background-size: cover;
  float: left;
  -webkit-animation: bgslide 2.3s forwards;
          animation: bgslide 2.3s forwards;


 @media only screen and (min-width: 1280px) {
    height: 95vh; 
  }

  @media only screen and (min-width: 2160px) {
    height: 100vh; 
  }
}
.bg-illustration img {
  width: 248px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  height: auto;
  margin: 19px 0 0 25px;
}

.DSWDLogo img{
    margin-top: 3em;
}

.BagongPilipinas img{
  max-width: 3em;
}

@-webkit-keyframes bgslide {
  from {
    left: -100%;
    width: 0;
    opacity: 0;
  }
  to {
    left: 0;
    width: 1194px;
    opacity: 1;
  }
}

@keyframes bgslide {
  from {
    left: -100%;
    width: 0;
    opacity: 0;
  }
  to {
    left: 0;
    width: 1194px;
    opacity: 1;
  }
}


.login {
  max-height: 70vh;
  overflow-Y: auto;
  float: left;
  margin: 0 auto;
  width: calc(100% - 1194px);

@media only screen and (min-width: 1024px) {
  max-height: 100vh;
}

}
.login .container {
  width: 505px;
  margin: 0 auto;
  position: relative;
}
.login .container h1 {
  margin-top: 60px;
  font-size: 45px;
  font-weight: bolder;
}
.login .container .login-form {
  margin-top: 112px;
}
.login .container .login-form form {
  display: -ms-grid;
  display: grid;
}
.login .container .login-form form input {
  font-size: 16px;
  font-weight: normal;
  background: rgba(57, 57, 57, 0.07);
  margin: 12.5px 0;
  height: 68px;
  border: none;
  padding: 0 30px;
  border-radius: 10px;
}
.login .container .login-form form button[type=submit] {
  background: -webkit-linear-gradient(110deg, #f794a4 0%, #fdd6bd 100%);
  background: -o-linear-gradient(110deg, #f794a4 0%, #fdd6bd 100%);
  background: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);
  border: none;
  margin-top: -20px;
  margin-bottom: 20px;
  width: 241px;
  height: 58px;
  text-transform: uppercase;
  color: white;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  font-weight: bold;
  font-size: 20px;
}

@media only screen and (min-width: 375px) {
  .login .container .login-form form button[type=submit] {
    width: 300px;
  }
  
}

@media only screen and (min-width: 1024px) {
  .login .container .login-form form button[type=submit] {
    width: 481px;
  }
  
}

.login .container .login-form form button[type=submit]:hover::after {
  opacity: 1;
}
.login .container .login-form form button[type=submit]::after {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 10px;
  opacity: 0;
  top: 0;
  left: 0;
  -webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  right: 0;
  bottom: 0;
  background: -webkit-gradient(linear, left bottom, left top, from(#09203f), to(#537895));
  background: -webkit-linear-gradient(bottom, #09203f 0%, #537895 100%);
  background: -o-linear-gradient(bottom, #09203f 0%, #537895 100%);
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
}
.login .container .remember-form {
  position: relative;
  margin-top: -30px;
}
.login .container .remember-form input[type=checkbox] {
  margin-top: 9px;
}
.login .container .remember-form span {
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  top: 32px;
  color: #3B3B3B;
  margin-left: 15px;
}
.login .container .forget-pass {
  position: absolute;
  right: 0;
  margin-top: 189px;
}
.login .container .forget-pass a {
  font-size: 16px;
  position: relative;
  font-weight: normal;
  color: #918F8F;
}
.login .container .forget-pass a::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  border-radius: 100px;
  background: -webkit-linear-gradient(110deg, #f794a4 0%, #fdd6bd 100%);
  background: -o-linear-gradient(110deg, #f794a4 0%, #fdd6bd 100%);
  background: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);
  bottom: -4px;
  left: 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  opacity: 0;
  right: 0;
}
.login .container .forget-pass a:hover::after {
  opacity: 1;
}

@media only screen and (min-width: 1024px) and (max-width: 1680px) {
  .bg-illustration {
    width: 50%;
    -webkit-animation: none;
            animation: none;
  }

  .login {
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .bg-illustration {
    margin-left:-10px;
    margin-bottom: -30px;
  }

}



/* Display 12", iPad PRO Portrait, iPad landscape */
@media only screen and (max-width: 1024px) {
  body {
    overflow-x: hidden;
  }

  @-webkit-keyframes slideIn {
    from {
      left: -100%;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      left: -100%;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }
  .bg-illustration {
    /* margin-left: -10px; */

    float: none;
    /* background: url("https://i.ibb.co/rwncw7s/bg-mobile.png") center center; */
    background: #294D9C;
    background-size: cover;
    -webkit-animation: slideIn 0.8s ease-in-out forwards;
            animation: slideIn 0.8s ease-in-out forwards;
    width: 100%;
    height: 190px;
    text-align: center;
  }
  .bg-illustration img {
    width: 100px;
    height: auto;
    margin: 20px auto !important;
    text-align: center;
  }
  .bg-illustration .burger-btn {
    left: 33px;
    top: 29px;
    display: block;
    position: absolute;
  }
  .bg-illustration .burger-btn span {
    display: block;
    height: 4px;
    margin: 6px;
    background-color: #fff;
  }
  .bg-illustration .burger-btn span:nth-child(1) {
    width: 37px;
  }
  .bg-illustration .burger-btn span:nth-child(2) {
    width: 28px;
  }
  .bg-illustration .burger-btn span:nth-child(3) {
    width: 20px;
  }

  .login {
    float: none;
    margin: 0 auto;
    width: 100%;
  }
  .login .container {
    -webkit-animation: slideIn 0.8s ease-in-out forwards;
            animation: slideIn 0.8s ease-in-out forwards;
    width: 85%;
    float: none;
  }
  .login .container h1 {
    font-size: 25px;
    margin-top: 40px;
  }
  .login .container .login-form {
    margin-top: 90px;
  }
  .login .container .login-form form input {
    height: 45px;
  }
  .login .container .login-form form button[type=submit] {
    height: 45px;
    margin-top: 10px;
  }
  .login .container .login-form .remember-form {
    position: relative;
    margin-top: -14px;
  }
  .login .container .login-form .remember-form span {
    font-size: 16px;
    margin-top: 22px;
    top: inherit;
  }

  .forget-pass {
    position: absolute;
    right: inherit;
    left: 0;
    bottom: -40px;
    margin: 0 !important;
  }
  .forget-pass a {
    font-size: 16px;
    position: relative;
    font-weight: normal;
    color: #918F8F;
  }
  .forget-pass a::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    border-radius: 100px;
    background: -webkit-linear-gradient(110deg, #f794a4 0%, #fdd6bd 100%);
    background: -o-linear-gradient(110deg, #f794a4 0%, #fdd6bd 100%);
    background: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);
    bottom: -4px;
    left: 0;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    opacity: 0;
    right: 0;
  }
  .forget-pass a:hover::after {
    opacity: 1;
  }
}

  </style>