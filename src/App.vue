<template>
  <div id="app">
    <main-nav-bar/>
    <router-view/>
  </div>
</template>
<script>
import mainNavBar from './components/mainNavBar.vue';

export default {
  components: {
    mainNavBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
