<template>
    <table class="table">
  <thead v-once>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre del Empleado</th>
      <th scope="col">Opciones(Doble click para que funcione)</th>
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
              <b-button
                variant="info"
                v-b-modal.modal-1
                @click="$bvModal.show('modal-1')">
                Detalle
              </b-button>
            <div v-show='currentEmployee==true'>
              <div v-show='empleado.profile_image===""'>
                <!--Modal para detalle de cada empleado!-->
                <b-modal
                  id="modal-1"
                  title="Detalle de Empleado"
                  no-body
                  style="max-width: 20rem;"
                  img-src="../assets/logo.png"
                  img-alt="Image"
                  img-top
                  hide-footer>
                      <b-card-body>
                        <b-avatar src="../assets/avatar.png"></b-avatar>
                          <b-card-title>{{employeeDetail.employee_name}}</b-card-title>
                          <b-card-title>
                            {{`Salario: ${employeeDetail.employee_salary} $`}}
                          </b-card-title>
                          <b-card-sub-title class="mb-2">
                            {{`Edad: ${employeeDetail.employee_age} años`}}
                            </b-card-sub-title>
                      </b-card-body>
                       <b-button
                          class="mt-3"
                          variant="success"
                          block
                          @click="$bvModal.hide('modal-1')"
                        >
                         OK
                         </b-button>
                </b-modal>
              </div>
            </div>
              <!--Modal para editar informacion del empleado !-->
              <b-button variant="secondary">Editar</b-button>
              <!--modal para eliminar empleado de la base de datos !-->
              <b-button
                variant="danger"
                v-b-modal="'my-modal'"
              >
                Eliminar</b-button>
               <b-modal
                  id="my-modal"
                  hide-footer>
                 <h4>¿Quieres eliminar el empleado?</h4>
                 <b-button  variant="light" block @click="isEmployeeDeleted">Si</b-button>
                  <b-button variant="light" block @click="$bvModal.hide('my-modal')">No</b-button>
              </b-modal>
          </b-button-group>
        </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import api from '../employeeApi';

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
      employeeDetail: {
        id: '',
        employee_name: '',
        employee_salary: 0,
        employee_age: 0,
        profile_image: '',
      },
      currentIndex: 0,
      employeeDeleted: false,
    };
  },
  methods: {
    detailEmployee(index) {
      this.currentIndex = index + 1;
      let showIndex=this.currentIndex;// eslint-disable-line
      this.currentEmployee = true;
      this.getDetailData(showIndex);
      this.isDeleted(showIndex);// eslint-disable-line
      return console.log(this.currentIndex+1);// eslint-disable-line
    },
    isEmployeeDeleted() {
      // ..
      console.log('borrando');
      this.employeeDeleted = true;
      this.isDeleted();
    },
    getDetailData(id) {
      api.getEmployee(id)
        .then((employeeDetail) => (this.employeeDetail = employeeDetail));// eslint-disable-line
    },
    hideModal() {
      this.$refs['my-modal'].hide();// eslint-disable-line
    },
    isDeleted(id) {
      if (this.employeeDeleted === true) {
        fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`,
          {
            method: 'DELETE',
          }).then(() => {
          console.log((res) => res.json())
            .then((res) => console.log(res));
        })
          .catch((e) => {
            console.log(e);
          });
        this.$refs['my-modal'].hide();
        this.employeeDeleted = false;
      }
    },
  },
  mounted() {
    this.getDetailData();
  },
};
</script>
