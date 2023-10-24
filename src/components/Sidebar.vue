<template>
    
<div>
  <Header />
    <nav>
      <div class="blue-header">
      <div class="logo">
        <i class="bx bx-menu menu-icon"></i>
        <!-- <span class="logo-name">UNIFIED</span> -->
        <!-- <img class="float-start header-image" src="@/assets/DSWDLogo.png" alt="dswdLogo"> -->
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
                <i class="bx bx-home-alt icon"></i>
                <span class="link">CBSS</span>
              </a>
            </li>
            </router-link>

           
            <!-- <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-bar-chart-alt-2 icon"></i>
                <span class="link">HR</span>
              </a>
            </li>
             -->

            
            <li class="list">  
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
         

            <router-link to="/osp" class="custom-link">
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-bell icon"></i>
                <span class="link">OSP</span>
              </a>
            </li>
            </router-link>

            <router-link to="/swda" class="custom-link">
            <li class="list">
              <a href="#" class="nav-link">
                <i class="bx bx-message-rounded icon"></i>
                <span class="link">SWDA</span>
              </a>
            </li>
            </router-link>
          
          <!-- reference from HR  -->
           <li class="list">  
                  <div class="dropdown">
                      <a class=" nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bx bx-bar-chart-alt-2 icon"></i>
                        <span class="link">SLP</span>
                      </a>

                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <router-link to="/slp" class="custom-link">
                            <li><a class="dropdown-item" href="#">General Disaggregated Data</a></li> </router-link>
                            <li><a class="dropdown-item" href="#">Physical Accomplishments by Portfolio</a></li>
                            <li><a class="dropdown-item" href="#">Status of Name Matching</a></li>
                            <li><a class="dropdown-item" href="#">Budget Monitoring Tracker</a></li>
                            <li><a class="dropdown-item" href="#">SLPA Enterprise Status 2022</a></li>
                            <li><a class="dropdown-item" href="#">SLP XI Capability Building Activities</a></li>
                            
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
              <div @click="logout" class="nav-link">
                <i class="bx bx-log-out icon"></i>
                <span class="link">
                    Logout 
                </span>
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
import Header from '@/components/Header'

export default {
  name: 'sidebar',
  components :{
    Header,

  },
  mounted() {
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
  methods: {
    logout() {
      // Clear the user's authentication status in localStorage
      localStorage.removeItem('user');

      // Redirect the user to the login page
      this.$router.push('/'); // Change the path to match your login route
    }
  }

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


nav {
  position: fixed;
  top: 6em;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  /* background: linear-gradient(to right, white 20%, #EE1C25 80%); */
  background: #294D9C;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 100;
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


.logo .menu-icon {
  color: white;
  font-size: 32px;
  margin-right: 14px;
  cursor: pointer;
}

.logo .bx-x{
  color: #333;
  font-size: 42px;
  margin-right: 14px;
  cursor: pointer;
}


.bx-x{
  margin-left: 220px;
}

.logo .logo-name {
  color: #333;
  font-size: 22px;
  font-weight: 500;
}
nav .sidebar {
  position: fixed;
  top: 6em;
  left: -100%;
  height: 90%;
  
  width: 303px;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 5px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}
nav.open .sidebar {
  left: 0;
}
.sidebar .sidebar-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 16px;
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
.overlay {
  position: fixed;
  top: 6em;
  left: -100%;
  height: 1000vh;
  width: 200%;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease;
  background: rgba(0, 0, 0, 0.3);
}
nav.open ~ .overlay {
  opacity: 1;
  left: 260px;
  pointer-events: auto;
}

</style>