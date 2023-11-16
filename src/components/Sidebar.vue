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
        </div>

        <div class="sidebar">
          <div class="logo">
            <i class="bx bx-x menu-icon"></i>
            <!-- <span class="logo-name">UNIFIED</span> -->
          </div>

          <div class="sidebar-content">
            <ul class="lists">
              <router-link to="/dashboard" class="custom-link">
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-bar-chart-square icon"></i>
                    <span class="link">CBSS</span>
                  </a>
                </li>
              </router-link>

              <router-link to="/hr" class="custom-link">
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-bar-chart-alt-2 icon"></i>
                    <span class="link">HR</span>
                  </a>
                </li>
              </router-link>

              <!-- <li class="list">  
                  <div class="dropdown">
                      <a class=" nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bx bx-bar-chart-alt-2 icon"></i>
                        <span class="link">HR</span>
                      </a>

                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <router-link to="/hr" class="custom-link"> <li><a class="dropdown-item" href="#">Main Dashboard</a></li> </router-link>
                            <li><a class="dropdown-item" href="#">Eligibility</a></li>
                          </ul>
                    </div>
            </li> 
          -->

              <router-link to="/osp" class="custom-link">
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-bar-chart icon"></i>
                    <span class="link">OSP</span>
                  </a>
                </li>
              </router-link>

              <router-link to="/swda" class="custom-link">
                <li class="list">
                  <a href="#" class="nav-link">
                    <i class="bx bx-doughnut-chart icon"></i>
                    <span class="link">SWDA</span>
                  </a>
                </li>
              </router-link>

              <!-- reference from HR  -->
              <li class="list">
                <div class="dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bx bx-line-chart icon"></i>
                    <span class="link">SLP</span>
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <router-link to="/slp" class="custom-link">
                      <li>
                        <a class="dropdown-item" href="#"
                          >General Disaggregated Data</a
                        >
                      </li>
                    </router-link>
                    <router-link to="/slp_pa" class="custom-link">
                      <li>
                        <a class="dropdown-item" href="#"
                          >Physical Accomplishments by Portfolio</a
                        >
                      </li>
                    </router-link>
                    <router-link to="/slp_snm" class="custom-link">
                      <li>
                        <a class="dropdown-item" href="#"
                          >Status of Name Matching</a
                        >
                      </li>
                    </router-link>
                    <router-link to="/slp_bmt" class="custom-link">
                      <li>
                        <a class="dropdown-item" href="#"
                          >Budget Monitoring Tracker</a
                        >
                      </li>
                    </router-link>
                    <router-link to="/slp_stat" class="custom-link">
                      <li>
                        <a class="dropdown-item" href="#"
                          >SLPA Enterprise Status 2022</a
                        >
                      </li>
                    </router-link>
                    <router-link to="/slp_cba" class="custom-link">
                      <li>
                        <a class="dropdown-item" href="#"
                          >SLP XI Capability Building Activities</a
                        >
                      </li>
                    </router-link>
                  </ul>
                </div>
              </li>

              <!-- <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-heart icon"></i>
                <span class="link">Likes</span>
              </a>
            </li>
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-folder-open icon"></i>
                <span class="link">Files</span>
              </a>
            </li> -->
            </ul>

            <div class="bottom-cotent">
              <!-- <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-cog icon"></i>
                <span class="link">Settings</span>
              </a>
            </li> -->
              <router-link to="/" class="custom-link">
                <li class="list">
                  <div @click="logout" class="nav-link" style="cursor: pointer">
                    <i class="bx bx-log-out icon"></i>
                    <span class="link"> Logout </span>
                  </div>
                </li>
              </router-link>
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
    };
  },
  props: {
    iconText: String,
    iconDetails: String,
  },
  mounted() {
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
      // Clear the user's authentication status in localStorage
      localStorage.removeItem("user");

      // Redirect the user to the login page
      this.$router.push("/"); // Change the path to match your login route
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
  z-index: 999;
}

.overlay {
  position: fixed;
  top: 3.4em;
  left: -100%;
  height: 1000vh;
  width: 200%;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50;
}

nav .sidebar {
  position: fixed;
  top: 9.4em;
  left: -100%;
  height: 90%;
  width: 303px;
  padding-top: 1%;
  padding-bottom: 4%;
  background-color: #fff;
  box-shadow: 0 5px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}
/* Styles for sticky nav */
nav.sticky .sidebar {
  position: fixed;
  top: 3.4em; /* Updated value */
  height: 95%;
  padding-bottom: 1%;
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
  margin-left: 220px;
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
  background-color: #4070f4;
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
</style>
