<template>
  <div class="home">
    <main-nav-bar/>
    <employee-nav/>
  </div>
</template>

<script>

import mainNavBar from '../components/mainNavBar.vue';
import EmployeeNav from '../components/EmployeeNav.vue';

export default {

  name: 'Home',

  components: {
    mainNavBar,
    EmployeeNav,

  },

  data() {

  },
  created() {

  },
};
</script>
