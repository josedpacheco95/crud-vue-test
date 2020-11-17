<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre del Empleado</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
    <tr
      v-for="empleado in employees"
      :key="empleado.id"
    >
      <th scope="row">{{empleado.id}}</th>
      <td>{{empleado.employee_name}}</td>
      <td>
          <b-button-group>
              <b-button variant="info">Detalle</b-button>
              <!--Modal para detalle de cada empleado!-->
              <b-modal id="modal-1" title="BootstrapVue">
                  <p class="my-4">Info empleados</p>
              </b-modal>
              <!--Modal para editar informacion del empleado !-->
              <b-button variant="secondary">Editar</b-button>
              <!--modal para eliminar empleado de la base de datos !-->
              <b-button variant="danger">Eliminar</b-button>
          </b-button-group>
        </td>
    </tr>
  </tbody>
</table>
</template>

<script>

export default {
  name: 'employeeTab',
  props: {
    employees: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
