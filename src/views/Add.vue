<template>
  <div>
    <b-nav pills>
        <b-nav-item>Regresar</b-nav-item>
    </b-nav>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Empleado Nuevo"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Nombre y Apellido:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Salario:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Edad:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

      <b-form-group
            label-cols-sm="3"
            label="Country:"
            label-align-sm="right"
            label-for="nested-country"
      >
        <b-form-input id="nested-country"></b-form-input>
      </b-form-group>

    </b-form-group>
  </b-card>
</div>
</template>

<script>

export default {
  name: 'add',
  data() {
    return {
      employee: {
        id: null,
        employee_name: '',
        employee_salary: '',
        employee_age: '',
      },
      submitted: false,
    };
  },
};
</script>

<style scoped>

</style>
