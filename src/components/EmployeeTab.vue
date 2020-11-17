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
      v-for="(empleado,index) in employees"
      v-bind:key="empleado.id"
      @click="detailEmployee(index)"
    >
      <th scope="row">{{empleado.id}}</th>
      <td>{{empleado.employee_name}}</td>
      <td>
          <b-button-group>
              <b-button variant="info" v-b-modal.modal-1>
                Detalle
              </b-button>
            <div v-if='currentEmployee===true'>
              <div v-if='empleado.profile_image===""'>
                <!--Modal para detalle de cada empleado!-->
                <b-modal
                  id="modal-1"
                  title="Detalle de Empleado"
                  hide-footer>
                    <b-avatar src="../assets/avatar.png"></b-avatar>
                      <template #header>
                          <h4 class="mb-0">Empleado{{index}}</h4>
                      </template>
                      <b-card-body>
                          <b-card-title>
                            Salario:$
                          </b-card-title>
                          <b-card-sub-title class="mb-2">
                            Edad:  años
                            </b-card-sub-title>
                      </b-card-body>
                </b-modal>
              </div>
              <div v-else>
                <b-modal id="modal-1" title="Detalle de Empleado">
                    <b-avatar src=""></b-avatar>
                </b-modal>
              </div>
            </div>
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
  data() {
    return {
      currentEmployee: false,
    };
  },
  methods: {
    detailEmployee(index) {
      this.currentEmployee = true;
      return console.log(index + 1);
    },
  },
};
</script>
