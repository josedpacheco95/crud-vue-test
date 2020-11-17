import axios from 'axios';

const http = axios.create({
  baseURL: 'http://dummy.restapiexample.com/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});

class EmployeeApi {
  // Tener toda la data de los empleado
  // eslint-disable-next-line no-unused-vars
  static getAll=() => http.get('/employees')

  // Tener la data de un solo empleado
  // eslint-disable-next-line no-unused-vars
  get(id) {// eslint-disable-line
    return http.get(`/employee/${id}`);// eslint-disable-line
  }

  // Crear registro de un nuevo empleado}
    // eslint-disable-next-line no-unused-vars
    createData=(data) => http.post('/create', data)

    // Actualizar registro de un empleado
    // eslint-disable-next-line no-unused-vars
   updateData = (id, data) => http.put(`/update/${this.id}`, this.data)

   // Borrar la data de los empleados
   // eslint-disable-next-line no-unused-vars
   borrar=(id) => http.delete(`/delete/${this.id}`)
}

export default new EmployeeApi();
