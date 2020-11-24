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
              <b-button
                variant="secondary"
                v-b-modal="'modal-update'">
                Editar
              </b-button>
              <b-modal
                id="modal-update"
                hide-footer
              hide-header
              title="Actualizar empleado">
                <b-form @submit="onSubmit">
                  <b-form-group
                    id="input-group-1"
                    label="Nombre y Apellido:"
                    label-for="input-1"
                  >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="text"
                    required
                    placeholder="Introduzca nombre y apellido"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    label="Salario"
                    label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      type="number"
                      required
                      placeholder="Introduzca salario..."
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="Edad:"
                    label-for="input-3">
                    <b-form-input
                      id="input-3"
                      v-model="form.name"
                      type="number"
                      required
                      placeholder="Introduzca edad..."
                    ></b-form-input>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Enviar</b-button>
                </b-form>
                <b-button
                  variant="light"
                  block
                  @click="$bvModal.hide('modal-update')">
                    Salir
                </b-button>
              </b-modal>

              <!--modal para eliminar empleado de la base de datos !-->
              <b-button
                variant="danger"
                v-b-modal="'my-modal'"
              >
              <!--Por consola se puede verificar que consumio correctamente la API de borrar!-->
                Eliminar</b-button>
               <b-modal
                  id="my-modal"
                  hide-footer
                  hide-header>
                 <h4>¿Quieres eliminar el empleado?</h4>
                  <b-button  variant="light" block @click="isEmployeeDeleted" href="/">Si</b-button>
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
      form: {
        id: '',
        employee_name: '',
        employee_salary: 0,
        employee_age: 0,
        profile_image: '',
      },
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
          })
          .then((res) => res.json())
          .then((res) => console.log(res))
          .then(() => { this.employeeDeleted = false; })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  mounted() {
    this.getDetailData();
  },
};
</script>
