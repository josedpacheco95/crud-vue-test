const url = 'http://dummy.restapiexample.com/api/v1/employees';

/* Pude hacer una clase pero es practicamente lo mismo que
exportar un objectos con funcionesqueria probar algo distinto */

function getAllEmployees() {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((error) => console.log('error', error));
}

function getEmployee(id) {
  return fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((error) => console.log('error', error));
}

export default {
  getAllEmployees,
  getEmployee,
};
