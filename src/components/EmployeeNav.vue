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
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <!-- Elementos alineados a la derecha del nav-bar!-->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form right>
                            <b-button variant="success" to="/add">
                                Añadir Empleado
                            </b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
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
    }
    span {
        font-size: x-large;
        padding-top: 5%;
        align-content: center;
        align-items: center;
        font-weight: bold;
    }
</style>
