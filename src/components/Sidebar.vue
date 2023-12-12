<template>
  <div>
    <Header />
    <nav :class="{ sticky: isSticky }">
      <div class="blue-header">
        <div class="logo">
          <i class="bx bx-menu menu-icon"></i>
          <div class="text-start">
            <h4 class="text-white iconText">{{ iconText }}</h4>
            <p class="text-white iconDetails">
              {{ iconDetails }}
            </p>
          </div>

          <div class="admin">
            <p class="text-white admin">{{ name }}</p>
            <i class="bx bx-user-circle admin-icon"></i>
          </div>
        </div>

        <div class="sidebar">
          <div class="logo">
            <i class="bx bx-x menu-icon"></i>
            <!-- <span class="logo-name">UNIFIED</span> -->
          </div>

          <div class="sidebar-content">
            <ul class="lists">
              <router-link to="/swda" class="custom-link" active-class="active">
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-message-rounded icon"></i>
                    <span class="link">SWDA</span>
                  </a>
                </li>
              </router-link>

              <router-link to="/cbss" class="custom-link" active-class="active">
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-home-alt icon"></i>
                    <span class="link">CBSS</span>
                  </a>
                </li>
              </router-link>

              <router-link to="/hr" class="custom-link" active-class="active">
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-bar-chart-alt-2 icon"></i>
                    <span class="link">HR</span>
                  </a>
                </li>
              </router-link>
              <router-link to="/osp" class="custom-link" active-class="active">
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-bell icon"></i>
                    <span class="link">OSD</span>
                  </a>
                </li>
              </router-link>

              <router-link
                to="/slp"
                class="custom-link visually-hidden"
                active-class="active"
              >
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-pie-chart-alt-2 icon"></i>
                    <span class="link">SLP</span>
                  </a>
                </li>
              </router-link>
            </ul>
            <div class="bottom-cotent">
              <li class="list">
                <div @click="logout" class="nav-link" style="cursor: pointer">
                  <i class="bx bx-log-out icon"></i>
                  <span class="link"> Logout </span>
                </div>
                <br />
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="overlay"></section>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "sidebar",
  components: {
    Header,
  },
  data() {
    return {
      isSticky: false,
      name: null,
    };
  },
  props: {
    iconText: String,
    iconDetails: String,
  },
  mounted() {
    this.name = localStorage.getItem("name");
    console.log(this.name); // Logs the name to the console
    window.addEventListener("scroll", this.handleScroll);
    const navBar = document.querySelector("nav");
    const menuBtns = document.querySelectorAll(".menu-icon");
    const overlay = document.querySelector(".overlay");

    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
      });
    });

    overlay.addEventListener("click", () => {
      navBar.classList.remove("open");
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      // Check if the user has scrolled down beyond a certain point
      const scrollThreshold = 6 * 16; // Assuming 1em = 16px
      this.isSticky = window.scrollY > scrollThreshold;

      // Check if this.$refs.nav is defined before accessing its properties
      if (this.$refs.nav) {
        // Adjust the top value dynamically based on the scroll position
        this.$refs.nav.style.top = this.isSticky
          ? "0"
          : `calc(6em - ${window.scrollY}px)`;
      }
    },

    logout() {
      this.$swal({
        title: "Are you sure?",
        text: "You will be logged out of your account",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Clear the user's authentication status in localStorage
          // sessionStorage.removeItem("admin");

          // Redirect the user to the login page
          this.$router.push("/"); // Change the path to match your login route
        }
      });
    },
  },
};
</script>

<style scoped>
/* Google Fonts - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  min-height: 100%;
  background: #e3f2fd;
}

/* Styles for non-sticky nav */
nav {
  position: absolute;
  top: 6em;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #294d9c;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 99;
  margin-top: -2px;
}

.overlay {
  position: fixed;
  margin-top: -2px;
  top: 3.4em;
  left: -100%;
  height: 1000vh;
  z-index: 3;
  width: 200%;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease;
  background: rgba(0, 0, 0, 0.3);
}

nav .sidebar {
  position: fixed;
  padding-top: 100px;
  top: 0em;
  left: -100%;
  height: 100%;
  width: 265px;
  padding-bottom: -10%;
  background-color: #fff;
  box-shadow: 0 5px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  z-index: 10;
}
/* Styles for sticky nav */
nav.sticky .sidebar {
  position: fixed;
  top: 3.4em; /* Updated value */
  height: 95%;
  padding-bottom: 1%;
  margin-top: -2px;
  padding-top: 1%;
  z-index: 10;
}

nav.open ~ .overlay {
  opacity: 1;
  left: 260px;
  pointer-events: auto;
}

.sticky {
  position: fixed;
  top: 0;
  /* animation: fadeInDown 0.3s ease-in-out;  */
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-link {
  text-decoration: none;
}

nav .logo {
  display: flex;
  align-items: center;
  margin: 0 24px;
}

.admin {
  display: flex;
  align-items: center;
  margin: 0 5px;
  position: absolute;
  right: 0px;
}

.admin-icon {
  color: white;
  font-size: 32px;
  margin-right: 14px;
  cursor: pointer;
}

.admin p {
  color: white;
  margin-right: 52px;
}

nav .logo img {
  height: 50px;

  @media screen and (min-width: 1024px) {
    height: 70px;
  }
}

nav .logo .iconText {
  color: #333;
  font-size: 20px;
  font-weight: 500;
  padding-top: 70px;

  @media screen and (min-width: 1024px) {
    padding-top: 0;
  }
}

.iconDetails {
  visibility: hidden;

  @media screen and (min-width: 1024px) {
    visibility: visible;
  }
}

.logo .menu-icon {
  color: white;
  font-size: 32px;
  margin-right: 14px;
  cursor: pointer;
}

.logo .bx-x {
  color: #333;
  font-size: 42px;
  margin-right: 14px;
  cursor: pointer;
}

.bx-x {
  margin-left: 185px;
}

.logo .logo-name {
  color: #333;
  font-size: 22px;
  font-weight: 500;
}

nav.open .sidebar {
  left: 0;
}
.sidebar .sidebar-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 16px 60px 16px;
}
.sidebar-content .list {
  list-style: none;
}
.list .nav-link {
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 14px 1px;
  border-radius: 8px;
  text-decoration: none;
}
.lists .nav-link:hover {
  padding-left: 20px;
  padding-right: 20px;
  background-color: #294d9c;
}

.nav-link .icon {
  margin-right: 14px;
  font-size: 20px;
  color: #707070;
}
.nav-link .link {
  font-size: 16px;
  color: #707070;
  font-weight: 600;
  line-height: 14.52px;
}
.lists .nav-link:hover .icon,
.lists .nav-link:hover .link {
  color: #fff;
}

.active li {
  background-color: #294d9c;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 50;
}

.active li span {
  color: white !important;
}

.active .nav-link .icon {
  color: #fff !important;
}

.active .nav-link:hover {
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-color: #294d9c;
}
</style>
