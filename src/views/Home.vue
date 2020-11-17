<template>
  <div class="home">
    <employee-nav/>
    <employee-tab
      :employees="employees"
    />
    <main-nav-bar/>
    <employee-nav/>
  </div>
</template>

<script>
import EmployeeTab from '@/components/EmployeeTab.vue';
import EmployeeNav from '../components/EmployeeNav.vue';
import api from '../employeeApi'; // eslint-disable-line

import mainNavBar from '../components/mainNavBar.vue';
import EmployeeNav from '../components/EmployeeNav.vue';

export default {

  name: 'Home',

  components: {
    EmployeeNav,
    EmployeeTab,
    mainNavBar,
    EmployeeNav,

  },
  data() {
    return {
      employees: [],
      currentEmployee: {},
      currentIndex: 0,
    };
  },
  created() {
    api.getAllEmployees().then(employees => (this.employees = employees)); // eslint-disable-line
  },
};
</script>
