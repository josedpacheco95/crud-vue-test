<template>
  <div class="about">
    <h1 class="mx-auto">Registro de trabajo</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col" lang="es">¿Completado?<br>(SI/NO)</th>
      <th scope="col">Comentarios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SI</td>
      <td><p>Este item no fue tan complicado al
              hacerlo con Vue-clime gusto mucho
              como es la configuracion para crear
              proyectos de Vue, es algo distinto a
              React.
              </p>></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SI</td>
      <td><p>
         Lo mas complicado de esta tarea fue
         trabajarlo distinto que en React, dentro
         de todo hay muchas semejanzas y para
         conectar con una API es el mismo codigo
         que en React, solo que la comunicacion en Vue
         entre componentes es muy distinta, tuve
        que adaptarme a la relacion de comunicacion
        entre componentes padre e hijos.
        </p></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>NO</td>
      <td>
        No lo pude terminar para que me diera
        de entregar todo a tiempo y no en la noche
        y poder subir el proyecto completo
        a github y trabajar con heroku
      </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Si</td>
      <td>Al principio no entendi bien esta API,
        una vez que la lei con calma, todo se
        facilito, para comprobar que se hizo la
        conexion correcta con la API, hay unos
        logs de consola que demuestran que se
        hizo de manera exitosa con el mismo
        objeto que provee la API
      </td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Si</td>
      <td>Ya tengo experiencia trabajando
        con git y github, fue una de las
        tareas mas sencillas.</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>¿?</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>

export default {
  name: 'Diario',
  components: {

  },
};
</script>
