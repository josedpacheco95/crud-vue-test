<template>
  <div class="about">
  <main-nav-bar/>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import mainNavBar from '../components/mainNavBar.vue';

export default {
  name: 'Diario',
  components: {
    mainNavBar,
  },
};
</script>
