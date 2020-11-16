<template>
    <div>
        <b-navbar variant="faded" type="light" toggleable="md">
            <b-navbar-brand>
            <img
                src="../assets/logo.png"
                class="d-inline-block align-top"
                alt="Kitten"
                width="50em"
                height="50em">
            <span>Empleados</span>
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'EmployeeNav',
  props: [],
};
</script>

<style scoped>
    div {
        background-color: lightgray;
        display:flex;
        align-items: center;
    }
    span {
        font-size: x-large;
        text-align:center;
        padding-top: 3%;
    }

</style>
