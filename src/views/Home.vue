<template>
  <div class="home">
    <employee-nav/>
    <employee-tab
      :employees="employees"
    />
  </div>
</template>

<script>
import EmployeeTab from '@/components/EmployeeTab.vue';
import EmployeeNav from '../components/EmployeeNav.vue';
import api from '../employeeApi'; // eslint-disable-line

export default {

  name: 'Home',

  components: {
    EmployeeNav,
    EmployeeTab,
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
