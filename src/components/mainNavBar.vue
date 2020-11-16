<template>
    <div>
        <b-nav tabs align="center">
            <b-nav-item>
                <router-link to="/"><p>CRUD</p></router-link>

            </b-nav-item>
            <b-nav-item>
                <router-link to="/diario"><p>Diario</p></router-link>
            </b-nav-item>
        </b-nav>
    </div>
</template>
<script>
export default {
  name: 'mainNavBar',
  props: [],
};
</script>
<style scoped>
   p {
       font-size: x-large;
       color:black
   }
   div {
       background-color: white;
   }
</style>
