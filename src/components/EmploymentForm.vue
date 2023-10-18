<template>
  <div class="container">
    <div class="box" id="employment">
      <div class="header red-background white-text">EMPLOYMENT</div>
      <div class="content">
        <div class="options-values">
          <div class="option-value">
            <div class="option">IP GROUP</div>
            <div class="value">0</div>
          </div>
          <div class="option-value">
            <div class="option">PWD</div>
            <div class="value">0</div>
          </div>
          <div class="option-value">
            <div class="option">SOLO PARENT</div>
            <div class="value">0</div>
          </div>
        </div>
        <div class="status">
          <div class="status"><center>EMPLOYMENT STATUS</center></div>
          <label>
            <input type="radio" name="employmentStatus" value="Permanent" v-model="selectedStatus" />
            Permanent
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="MOA" v-model="selectedStatus" />
            MOA
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="Contractual" v-model="selectedStatus" />
            Contractual
          </label>
        </div>
      </div>
    </div>

    <div class="spacer"></div>

    <div class="box" id="division">
      <div class="header red-background white-text">DIVISION</div>
      <div class="content">
        <!-- Content for the Division box -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedStatus: 'Permanent',
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.box {
  flex: 1;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
}

.spacer {
  width: 20px; 
}

.header {
  background-color: red;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 25px;
}

.content {
  padding: 10px;
  background-color: white;
}

.red-background {
  background-color: red;
  color: white;
}

.options-values {
  display: flex;
  justify-content: space-between;
}

.option-value {
  text-align: center;
  margin: 10px;
  font-size: 20px;
}

.option, .value {
  margin: 10px;
}

.status {
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: left; /* Set text alignment to left */
}

/* make the "0" values bold */
.value {
  font-weight: bold;
}
</style>
